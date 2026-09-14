import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { ToastService } from '../core/toast.service';
import { I18nService } from '../core/i18n.service';
import { fmtDate } from '../core/text.util';

/** Phạm vi, chế độ và tuỳ chọn đã chuyển sang khung thiết lập (setup.ts). */
@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="side-head">
      <div class="brand">
        <div class="brand-mark">900</div>
        <div>
          <h1>{{ i18n.t('app.title') }}</h1>
          <p>{{ i18n.t('app.subtitle', { n: quiz.questions().length }) }}</p>
        </div>
      </div>
    </div>

    <div class="side-scroll">
      <p class="lbl">{{ i18n.t('list.title') }}</p>
      <form class="jump" (submit)="jump($event)">
        <input
          type="text"
          inputmode="numeric"
          [value]="jumpValue()"
          (input)="jumpValue.set(value($event))"
          [placeholder]="i18n.t('list.jumpPlaceholder')"
          [attr.aria-label]="i18n.t('list.jumpAria')"
        />
        <button class="btn sm" type="submit">{{ i18n.t('list.jump') }}</button>
      </form>

      <div class="grid">
        @if (quiz.order().length) {
          @for (id of quiz.order(); track id; let i = $index) {
            <button
              class="cell"
              [class.cur]="i === quiz.idx()"
              [class.ok]="quiz.statusOf(id) === 'ok'"
              [class.no]="quiz.statusOf(id) === 'no'"
              [class.sh]="quiz.statusOf(id) === 'sh'"
              [class.fav]="quiz.fav()[id]"
              [class.xtra]="isExtra(id)"
              [title]="i18n.t(isExtra(id) ? 'list.cellExtra' : 'list.cell', { id })"
              (click)="pickCell(i)"
            >
              {{ id }}
            </button>
          }
        } @else {
          <p class="empty">{{ i18n.t('common.empty') }}</p>
        }
      </div>

      <div class="legend">
        <span><i class="lg-ok"></i>{{ i18n.t('legend.ok') }}</span>
        <span><i class="lg-no"></i>{{ i18n.t('legend.no') }}</span>
        <span><i class="lg-sh"></i>{{ i18n.t('legend.sh') }}</span>
        <span><i class="lg-xtra"></i>{{ i18n.t('legend.extra') }}</span>
      </div>

      <div class="hist">
        <p class="lbl">{{ i18n.t('hist.title') }}</p>
        <div>
          @if (quiz.session(); as s) {
            <div class="hrow">
              <div class="t">
                <span>{{ i18n.t('hist.running', { mode: quiz.modeName(s.mode) }) }}</span>
                <span class="pct y">{{ i18n.t('common.questions', { n: sessionCount() }) }}</span>
              </div>
              <div class="d">{{ i18n.t('hist.startedAt', { time: fmt(s.startedAt) }) }}</div>
            </div>
          }
          @for (row of historyRows(); track row.id) {
            <div class="hrow">
              <div class="t">
                <span>{{ row.mode }}</span>
                <span class="pct {{ row.cls }}">{{ row.pct }}</span>
              </div>
              <div class="d">{{ row.detail }}</div>
            </div>
          }
          @if (!quiz.session() && !historyRows().length) {
            <p class="empty">{{ i18n.t('hist.none') }}</p>
          }
        </div>
        <button
          class="btn sm"
          style="margin-top:9px;width:100%;justify-content:center"
          (click)="quiz.endSession(false)"
        >
          {{ i18n.t('hist.end') }}
        </button>
      </div>

      <div class="hist">
        <p class="lbl">{{ i18n.t('data.title') }}</p>
        <div style="display:flex;gap:7px;flex-wrap:wrap">
          <button class="btn sm" (click)="quiz.exportData()">{{ i18n.t('data.export') }}</button>
          <button class="btn sm" (click)="openImport.emit()">{{ i18n.t('data.import') }}</button>
          <button class="btn sm" (click)="openReset.emit()">{{ i18n.t('data.reset') }}</button>
        </div>
        <p class="empty" style="margin-top:9px">
          {{ i18n.t('data.status', { mode: quiz.storeModeLabel() }) }}
        </p>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  readonly quiz = inject(QuizService);
  readonly i18n = inject(I18nService);
  private readonly toast = inject(ToastService);

  readonly jumpValue = signal('');

  private readonly extraIds = computed(
    () => new Set(this.quiz.questions().filter((q) => q.extra).map((q) => q.id)),
  );

  isExtra(id: number): boolean {
    return this.extraIds().has(id);
  }

  /** đóng thanh bên trên màn hình nhỏ */
  readonly navigated = output<void>();
  readonly openImport = output<void>();
  readonly openReset = output<void>();

  readonly fmt = fmtDate;

  readonly sessionCount = computed(() => Object.keys(this.quiz.session()?.answers ?? {}).length);

  readonly historyRows = computed(() =>
    this.quiz
      .history()
      .slice(0, 12)
      .map((s) => {
        const graded = s.total - (s.shown ? s.shown.length : 0);
        const p = graded > 0 ? Math.round((s.correct / graded) * 100) : 0;
        const extra =
          s.shown && s.shown.length ? this.i18n.t('hist.shownExtra', { n: s.shown.length }) : '';
        return {
          id: s.id,
          mode: this.quiz.modeName(s.mode),
          cls: p >= 80 ? 'g' : p >= 50 ? 'y' : 'r',
          pct: graded > 0 ? p + '%' : '–',
          detail:
            this.i18n.t('hist.detail', {
              time: this.fmt(s.startedAt),
              ok: s.correct,
              total: s.total,
            }) + extra,
        };
      }),
  );

  value(e: Event): string {
    return (e.target as HTMLInputElement).value;
  }

  pickCell(i: number): void {
    this.quiz.go(i);
    this.navigated.emit();
  }

  jump(e: Event): void {
    e.preventDefault();
    const n = parseInt(this.jumpValue(), 10);
    if (!n || !this.quiz.hasId(n)) {
      this.toast.show(
        this.i18n.t('toast.jumpRange', { id: this.jumpValue().trim() || '?', last: this.quiz.originTotal() }),
      );
      return;
    }
    if (this.quiz.gotoId(n)) {
      this.jumpValue.set('');
      this.navigated.emit();
    }
  }
}
