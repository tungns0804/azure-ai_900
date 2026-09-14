import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Mode } from '../core/models';
import { DOMAINS, TOPIC_BY_ID } from '../core/categories';
import { CAT_EXTRA, CAT_ORIGIN, LIMITS, QuizService } from '../core/quiz.service';
import { I18nService } from '../core/i18n.service';
import { I18nKey } from '../core/i18n';

const MODES: Array<{ key: Mode; label: I18nKey }> = [
  { key: 'all', label: 'mode.all' },
  { key: 'fav', label: 'mode.favShort' },
  { key: 'review', label: 'mode.review' },
  { key: 'todo', label: 'mode.todo' },
];

/**
 * Khung thiết lập trước khi làm bài: phạm vi, chế độ, số câu, tuỳ chọn.
 * Lựa chọn là bản nháp trong component — chỉ ghi vào QuizService khi bấm Bắt đầu,
 * nhờ vậy "Quay lại bài đang làm" trả về đúng lượt cũ. Bố cục nằm ở base.css (.setup).
 */
@Component({
  selector: 'app-setup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card setup-card">
      <div class="card-head">
        <span class="qnum">{{ i18n.t('setup.badge') }}</span>
        <span class="setup-title">{{ i18n.t('setup.title') }}</span>
      </div>

      <div class="setup">
        <div class="field">
          <span class="label">{{ i18n.t('scope.title') }}</span>
          <div class="options">
            <button
              type="button"
              class="option"
              [class.is-active]="category() === null"
              (click)="pickCategory(null)"
            >
              {{ i18n.t('setup.scopeAll') }}
              <span class="option-count">{{ quiz.questions().length }}</span>
            </button>
            <button
              type="button"
              class="option"
              [class.is-active]="category() === catExtra"
              [disabled]="!quiz.extraTotal()"
              (click)="pickCategory(catExtra)"
            >
              {{ i18n.t('setup.scopeExtra') }}
              <span class="option-count">{{ quiz.extraTotal() }}</span>
            </button>
            <button
              type="button"
              class="option"
              [class.is-active]="category() === catOrigin"
              (click)="pickCategory(catOrigin)"
            >
              {{ i18n.t('setup.scopeOrigin') }}
              <span class="option-count">{{ quiz.originTotal() }}</span>
            </button>
          </div>
          <div class="options">
            @for (d of domains(); track d.id) {
              <button
                type="button"
                class="option option-stacked"
                [class.is-active]="category() === d.id"
                [disabled]="!d.count"
                (click)="pickCategory(d.id)"
              >
                <strong>{{ d.title }}</strong>
                <span class="option-example">
                  {{ d.weight }} · {{ i18n.t('common.questions', { n: d.count }) }}
                </span>
              </button>
            }
          </div>
          <select
            class="setup-select"
            [class.is-active]="!!topicValue()"
            [attr.aria-label]="i18n.t('setup.topic')"
            [value]="topicValue()"
            (change)="pickTopic($event)"
          >
            <option value="">{{ i18n.t('setup.topicAny') }}</option>
            @for (d of domains(); track d.id) {
              <optgroup [label]="d.weight + ' — ' + d.title">
                @for (t of d.topics; track t.id) {
                  <option [value]="t.id" [disabled]="!t.count">
                    {{ t.title }} ({{ t.count }}{{ t.extra ? ' ★' + t.extra : '' }})
                  </option>
                }
              </optgroup>
            }
          </select>
        </div>

        <div class="field">
          <span class="label">{{ i18n.t('mode.title') }}</span>
          <div class="options">
            @for (m of modes; track m.key) {
              <button
                type="button"
                class="option"
                [class.is-active]="mode() === m.key"
                [disabled]="!counts()[m.key]"
                (click)="mode.set(m.key)"
              >
                {{ i18n.t(m.label) }}
                <span class="option-count">{{ counts()[m.key] }}</span>
              </button>
            }
          </div>
          @if (!counts().fav) {
            <span class="field-hint">{{ i18n.t('setup.favHint') }}</span>
          }
        </div>

        <div class="field">
          <span class="label">{{ i18n.t('setup.count') }}</span>
          <div class="options">
            <button
              type="button"
              class="option"
              [class.is-active]="effLimit() === null"
              (click)="limit.set(null)"
            >
              {{ i18n.t('setup.countAll') }}
              <span class="option-count">{{ pool() }}</span>
            </button>
            @for (n of limitChoices(); track n) {
              <button
                type="button"
                class="option"
                [class.is-active]="effLimit() === n"
                (click)="limit.set(n)"
              >
                {{ i18n.t('common.questions', { n: n }) }}
              </button>
            }
          </div>
        </div>

        <div class="field">
          <span class="label">{{ i18n.t('opt.title') }}</span>
          <div class="options">
            <label class="switch">
              <input type="checkbox" [checked]="shuffleQ()" (change)="shuffleQ.set(checked($event))" />
              <span>
                <strong>{{ i18n.t('opt.shuffleQ') }}</strong>
                <span class="field-hint">{{ i18n.t('setup.shuffleQHint') }}</span>
              </span>
            </label>
            <label class="switch">
              <input type="checkbox" [checked]="shuffleO()" (change)="shuffleO.set(checked($event))" />
              <span>
                <strong>{{ i18n.t('opt.shuffleO') }}</strong>
                <span class="field-hint">{{ i18n.t('setup.shuffleOHint') }}</span>
              </span>
            </label>
            <label class="switch">
              <input type="checkbox" [checked]="autoNext()" (change)="autoNext.set(checked($event))" />
              <span>
                <strong>{{ i18n.t('opt.autoNext') }}</strong>
                <span class="field-hint">{{ i18n.t('setup.autoNextHint') }}</span>
              </span>
            </label>
          </div>
        </div>

        <div class="start-bar">
          <p class="start-plan">{{ plan() }}</p>
          @if (quiz.canResume()) {
            <button type="button" class="btn" (click)="quiz.resume()">
              {{ i18n.t('setup.resume') }}
            </button>
          }
          <button type="button" class="btn primary lg" [disabled]="!planned()" (click)="start()">
            {{ i18n.t('setup.start') }} →
          </button>
        </div>

        @if (!planned()) {
          <p class="setup-empty">{{ i18n.t('setup.empty') }}</p>
        }
      </div>
    </section>
  `,
})
export class SetupComponent {
  readonly quiz = inject(QuizService);
  readonly i18n = inject(I18nService);

  readonly modes = MODES;
  readonly catExtra = CAT_EXTRA;
  readonly catOrigin = CAT_ORIGIN;

  readonly category = signal<string | null>(this.initialCategory());
  readonly mode = signal<Mode>(this.quiz.mode());
  readonly limit = signal<number | null>(this.quiz.limit());
  readonly shuffleQ = signal(this.quiz.shuffleQ());
  readonly shuffleO = signal(this.quiz.shuffleO());
  readonly autoNext = signal(this.quiz.autoNext());

  /** số câu của từng chế độ trong phạm vi đang chọn */
  readonly counts = computed<Record<Mode, number>>(() => {
    const c = this.category();
    return {
      all: this.quiz.poolFor('all', c).length,
      fav: this.quiz.poolFor('fav', c).length,
      review: this.quiz.poolFor('review', c).length,
      todo: this.quiz.poolFor('todo', c).length,
    };
  });

  readonly pool = computed(() => this.counts()[this.mode()]);
  readonly limitChoices = computed(() => LIMITS.filter((n) => n < this.pool()));
  /** giới hạn không nhỏ hơn cả phạm vi thì coi như "tất cả" */
  readonly effLimit = computed(() => {
    const l = this.limit();
    return l !== null && l < this.pool() ? l : null;
  });
  readonly planned = computed(() => this.effLimit() ?? this.pool());

  readonly topicValue = computed(() => {
    const c = this.category();
    return c && TOPIC_BY_ID[c] ? c : '';
  });

  readonly domains = computed(() =>
    DOMAINS.map((d) => ({
      id: d.id,
      weight: d.weight,
      title: this.i18n.pick(d.title, d.titleEn),
      count: this.quiz.countFor(d.id),
      topics: d.groups.flatMap((g) =>
        g.topics.map((t) => ({
          id: t.id,
          title: this.i18n.pick(t.title, t.titleEn),
          count: this.quiz.countFor(t.id),
          extra: this.quiz.extraCountFor(t.id),
        })),
      ),
    })),
  );

  readonly plan = computed(() =>
    this.i18n.t('setup.plan', {
      n: this.planned(),
      mode: this.quiz.modeName(this.mode()),
      scope: this.quiz.labelFor(this.category()) ?? this.i18n.t('setup.scopeAllShort'),
    }),
  );

  constructor() {
    this.fallbackMode();
  }

  pickCategory(c: string | null): void {
    this.category.set(c);
    this.fallbackMode();
  }

  pickTopic(e: Event): void {
    this.pickCategory((e.target as HTMLSelectElement).value || null);
  }

  checked(e: Event): boolean {
    return (e.target as HTMLInputElement).checked;
  }

  start(): void {
    if (!this.planned()) return;
    this.quiz.startRound({
      category: this.category(),
      mode: this.mode(),
      limit: this.effLimit(),
      shuffleQ: this.shuffleQ(),
      shuffleO: this.shuffleO(),
      autoNext: this.autoNext(),
    });
  }

  private initialCategory(): string | null {
    const preset = this.quiz.setupCategory();
    return preset === undefined ? this.quiz.category() : preset;
  }

  /** chế độ đang chọn không còn câu nào trong phạm vi mới thì quay về "Toàn bộ" */
  private fallbackMode(): void {
    if (!this.counts()[this.mode()]) this.mode.set('all');
  }
}
