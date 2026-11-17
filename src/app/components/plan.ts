import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { I18nService } from '../core/i18n.service';
import { StorageService } from '../core/storage.service';
import {
  Bi,
  EXAM_TARGET,
  PLAN_FACTS,
  PLAN_PHASES,
  PLAN_PITFALLS,
  PLAN_RESOURCES,
  PlanPhase,
} from '../core/plan';

const K_PLAN = 'ai900:plan:v1';
const DAY = 86_400_000;

/** 'YYYY-MM-DD' → nửa đêm giờ địa phương */
function parseDay(s: string): number {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d).getTime();
}

function today(): number {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
}

/** 'YYYY-MM-DD' → 'dd/MM' */
function dm(s: string): string {
  const [, m, d] = s.split('-');
  return `${d}/${m}`;
}

/** Màn hình "Lộ trình thi": kế hoạch 4 tuần cho AI-901, tích từng việc đã xong. */
@Component({
  selector: 'app-plan',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="plan">
      <div class="card">
        <div class="card-head">
          <span class="qnum">{{ i18n.t('plan.badge') }}</span>
          <span class="tag">AI-901</span>
          <span class="spacer"></span>
          <span class="count">{{ i18n.t('plan.progress', { done: doneCount(), total: totalCount() }) }}</span>
        </div>
        <div class="body">
          <h2 class="ptitle">{{ i18n.t('plan.title') }}</h2>
          <p class="note">{{ i18n.t('plan.retiredNote') }}</p>
          <div class="pbar" role="progressbar" [attr.aria-valuenow]="pct()" aria-valuemin="0" aria-valuemax="100">
            <i [style.width.%]="pct()"></i>
          </div>
          <p class="countdown">{{ countdown() }}</p>

          <dl class="facts">
            @for (f of facts(); track $index) {
              <dt>{{ f.k }}</dt>
              <dd>{{ f.v }}</dd>
            }
          </dl>
        </div>
      </div>

      @for (p of phases(); track p.id) {
        <div class="card phase" [class.now]="p.current" [class.past]="p.past && p.done === p.tasks.length">
          <div class="card-head">
            <span class="qnum">{{ p.label }}</span>
            <span class="ph-title">{{ p.title }}</span>
            @if (p.weight) {
              <span class="tag hide-sm">{{ p.weight }}</span>
            }
            @if (p.current) {
              <span class="tag now-tag">{{ i18n.t('plan.thisWeek') }}</span>
            }
            <span class="spacer"></span>
            <span class="dates">{{ p.dates }}</span>
            <span class="count" [class.full]="p.done === p.tasks.length">{{ p.done }}/{{ p.tasks.length }}</span>
          </div>
          <ul class="tasks">
            @for (t of p.tasks; track t.id) {
              <li [class.done]="isDone(t.id)">
                <label>
                  <input type="checkbox" [checked]="isDone(t.id)" (change)="toggle(t.id)" />
                  <span>{{ t.text }}</span>
                </label>
                @if (t.links.length || t.practice.length) {
                  <div class="acts">
                    @for (l of t.links; track l.url) {
                      <a class="btn sm" [href]="l.url" target="_blank" rel="noopener">{{ l.label }} ↗</a>
                    }
                    @for (c of t.practice; track c.id) {
                      <button class="btn sm prac" (click)="quiz.openSetup(c.id)">
                        {{ i18n.t('plan.practice', { name: c.name }) }}
                      </button>
                    }
                  </div>
                }
              </li>
            }
          </ul>
        </div>
      }

      <div class="card">
        <div class="card-head"><span class="qnum">{{ i18n.t('plan.pitfalls') }}</span></div>
        <ul class="plain">
          @for (x of pitfalls(); track $index) {
            <li>{{ x }}</li>
          }
        </ul>
      </div>

      <div class="card">
        <div class="card-head"><span class="qnum">{{ i18n.t('plan.resources') }}</span></div>
        <div class="body res">
          @for (r of resources(); track r.url) {
            <a class="btn sm" [href]="r.url" target="_blank" rel="noopener">{{ r.label }} ↗</a>
          }
        </div>
      </div>

      @if (doneCount()) {
        <div class="reset-row">
          <button class="btn sm" (click)="reset()">{{ i18n.t('plan.reset') }}</button>
        </div>
      }
    </div>
  `,
  styles: `
    :host { display: block; }
    .plan { display: flex; flex-direction: column; gap: 18px; }
    .body { padding: 16px 20px; font-size: calc(14.5px * var(--cs)); line-height: 1.65; color: var(--ink2); }
    .ptitle { margin: 0 0 6px; font-size: calc(19px * var(--cs)); color: var(--ink); }
    .note {
      margin: 0 0 14px; font-size: calc(13.5px * var(--cs)); color: var(--ink3);
      border-left: 3px solid var(--warn-line); padding-left: 12px;
    }
    .pbar { height: 8px; border-radius: 5px; background: var(--line); overflow: hidden; }
    .pbar i { display: block; height: 100%; background: var(--ok); transition: width .45s var(--ease); }
    .countdown { margin: 8px 0 14px; font-family: var(--f-mono); font-size: 12px; color: var(--ink3); }
    .count {
      font-family: var(--f-mono); font-size: 11.5px; color: var(--ink3);
      border: 1px solid var(--line2); border-radius: 20px; padding: 2px 9px;
    }
    .count.full { color: var(--ok); border-color: var(--ok-line); background: var(--ok-bg); }

    .facts { display: grid; grid-template-columns: max-content 1fr; gap: 6px 16px; margin: 0; }
    .facts dt { font-weight: 650; color: var(--ink); }
    .facts dd { margin: 0; }

    .ph-title { font-weight: 650; font-size: 15px; color: var(--ink); }
    .dates { font-family: var(--f-mono); font-size: 11.5px; color: var(--ink3); }
    .phase.now { border-color: var(--brand); box-shadow: 0 0 0 1px var(--brand), var(--shadow-sm); }
    .now-tag { color: var(--brand); border-color: var(--brand); background: var(--brand-soft); font-weight: 650; }
    .phase.past { opacity: .78; }

    .tasks { list-style: none; margin: 0; padding: 6px 20px 14px; }
    .tasks li { padding: 9px 0; border-top: 1px solid var(--line); }
    .tasks li:first-child { border-top: 0; }
    .tasks label {
      display: flex; gap: 11px; align-items: flex-start; cursor: pointer;
      font-size: calc(14px * var(--cs)); line-height: 1.6; color: var(--ink);
    }
    .tasks input { margin-top: .32em; width: 16px; height: 16px; flex: 0 0 auto; accent-color: var(--ok); }
    .tasks li.done label span { color: var(--ink3); text-decoration: line-through; text-decoration-color: var(--line2); }
    .acts { display: flex; flex-wrap: wrap; gap: 6px; margin: 7px 0 0 27px; }
    .acts a { text-decoration: none; }
    .prac { color: var(--brand); border-color: color-mix(in srgb, var(--brand) 40%, var(--line2)); }

    .plain { margin: 0; padding: 14px 20px 16px 38px; font-size: calc(14px * var(--cs)); line-height: 1.65; color: var(--ink2); }
    .plain li + li { margin-top: 8px; }
    .res { display: flex; flex-wrap: wrap; gap: 8px; }
    .res a { text-decoration: none; }
    .reset-row { display: flex; justify-content: flex-end; }

    @media (max-width: 600px) {
      .body { padding: 14px; }
      .tasks { padding: 4px 14px 12px; }
      .facts { grid-template-columns: 1fr; gap: 2px; }
      .facts dd { margin-bottom: 8px; }
      .dates { display: none; }
    }
  `,
})
export class PlanComponent {
  readonly quiz = inject(QuizService);
  readonly i18n = inject(I18nService);
  private readonly store = inject(StorageService);

  private readonly done = signal<Record<string, boolean>>({});

  constructor() {
    void this.store.get<Record<string, boolean>>(K_PLAN).then((v) => {
      if (v && typeof v === 'object') this.done.set(v);
    });
  }

  private pick(b: Bi): string {
    return this.i18n.pick(b[0], b[1]);
  }

  readonly totalCount = computed(() => PLAN_PHASES.reduce((n, p) => n + p.tasks.length, 0));
  readonly doneCount = computed(() => {
    const d = this.done();
    return PLAN_PHASES.reduce((n, p) => n + p.tasks.filter((t) => d[t.id]).length, 0);
  });
  readonly pct = computed(() => Math.round((this.doneCount() / this.totalCount()) * 100));

  readonly facts = computed(() => PLAN_FACTS.map((f) => ({ k: this.pick(f.k), v: this.pick(f.v) })));
  readonly pitfalls = computed(() => PLAN_PITFALLS.map((p) => this.pick(p)));
  readonly resources = computed(() => PLAN_RESOURCES.map((r) => ({ url: r.url, label: this.pick(r.label) })));

  readonly countdown = computed(() => {
    const days = Math.round((parseDay(EXAM_TARGET) - today()) / DAY);
    const date = dm(EXAM_TARGET);
    if (days > 0) return this.i18n.t('plan.daysLeft', { n: days, date });
    if (days === 0) return this.i18n.t('plan.examToday');
    return this.i18n.t('plan.examPast', { date });
  });

  readonly phases = computed(() => {
    const d = this.done();
    const now = today();
    return PLAN_PHASES.map((p: PlanPhase) => ({
      id: p.id,
      label: this.pick(p.label),
      title: this.pick(p.title),
      weight: p.weight,
      dates: `${dm(p.start)} – ${dm(p.end)}`,
      current: now >= parseDay(p.start) && now <= parseDay(p.end),
      past: now > parseDay(p.end),
      done: p.tasks.filter((t) => d[t.id]).length,
      tasks: p.tasks.map((t) => ({
        id: t.id,
        text: this.pick(t.text),
        links: (t.links ?? []).map((l) => ({ url: l.url, label: this.pick(l.label) })),
        practice: (t.practice ?? []).map((c) => ({ id: c, name: this.quiz.labelFor(c) ?? c })),
      })),
    }));
  });

  isDone(id: string): boolean {
    return !!this.done()[id];
  }

  toggle(id: string): void {
    const next = { ...this.done() };
    if (next[id]) delete next[id];
    else next[id] = true;
    this.done.set(next);
    void this.store.set(K_PLAN, next);
  }

  reset(): void {
    if (!window.confirm(this.i18n.t('plan.resetConfirm'))) return;
    this.done.set({});
    void this.store.set(K_PLAN, {});
  }
}
