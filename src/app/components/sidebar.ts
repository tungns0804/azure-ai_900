import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { Mode } from '../core/models';
import { DOMAINS } from '../core/categories';
import { QuizService } from '../core/quiz.service';
import { ToastService } from '../core/toast.service';
import { fmtDate } from '../core/text.util';

const MODES: Array<{ key: Mode; label: string }> = [
  { key: 'all', label: 'Toàn bộ' },
  { key: 'fav', label: 'Yêu thích ⭐' },
  { key: 'review', label: 'Cần ôn lại' },
  { key: 'todo', label: 'Chưa làm' },
];

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="side-head">
      <div class="brand">
        <div class="brand-mark">900</div>
        <div>
          <h1>AI-900 Practice</h1>
          <p>{{ quiz.questions().length }} câu · The Tech BlackBoard</p>
        </div>
      </div>
    </div>

    <div class="side-scroll">
      <p class="lbl">Phạm vi ôn tập</p>
      <select
        class="catsel"
        aria-label="Phạm vi ôn tập"
        [value]="quiz.category() ?? ''"
        (change)="pickCategory($event)"
      >
        <option value="">Toàn bộ đề thi ({{ quiz.questions().length }} câu)</option>
        @for (d of domains(); track d.id) {
          <optgroup [label]="d.weight + ' — ' + d.title">
            <option [value]="d.id">
              ▸ Cả phần này ({{ d.count }} câu)
            </option>
            @for (t of d.topics; track t.id) {
              <option [value]="t.id" [disabled]="!t.count">
                &nbsp;&nbsp;{{ t.title }} ({{ t.count }})
              </option>
            }
          </optgroup>
        }
      </select>
      @if (quiz.categoryLabel(); as label) {
        <div class="catnow">
          <span>{{ label }}</span>
          <button class="catclear" title="Bỏ lọc" (click)="quiz.setCategory(null)">✕</button>
        </div>
      }

      <p class="lbl">Chế độ luyện tập</p>
      <div class="modes">
        @for (m of modes; track m.key) {
          <button
            class="mode"
            [attr.aria-pressed]="quiz.mode() === m.key"
            (click)="pickMode(m.key)"
          >
            <span class="dot"></span>{{ m.label }}
            <span class="cnt">{{ quiz.modeCounts()[m.key] }}</span>
          </button>
        }
      </div>

      <p class="lbl">Tuỳ chọn</p>
      <div class="sws">
        <label class="sw">
          <input
            type="checkbox"
            [checked]="quiz.shuffleQ()"
            (change)="quiz.setShuffleQ(checked($event))"
          />
          Trộn thứ tự câu hỏi
        </label>
        <label class="sw">
          <input
            type="checkbox"
            [checked]="quiz.shuffleO()"
            (change)="quiz.setShuffleO(checked($event))"
          />
          Trộn thứ tự đáp án
        </label>
        <label class="sw">
          <input
            type="checkbox"
            [checked]="quiz.autoNext()"
            (change)="quiz.setAutoNext(checked($event))"
          />
          Tự sang câu sau khi trả lời đúng
        </label>
      </div>

      <p class="lbl">Danh sách câu hỏi</p>
      <form class="jump" (submit)="jump($event)">
        <input
          type="text"
          inputmode="numeric"
          [value]="jumpValue()"
          (input)="jumpValue.set(value($event))"
          [placeholder]="'Tới câu số… (1–' + quiz.questions().length + ')'"
          aria-label="Tới câu số"
        />
        <button class="btn sm" type="submit">Tới</button>
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
              [title]="'Câu ' + id"
              (click)="pickCell(i)"
            >
              {{ id }}
            </button>
          }
        } @else {
          <p class="empty">Danh sách trống.</p>
        }
      </div>

      <div class="legend">
        <span><i class="lg-ok"></i>Đúng</span>
        <span><i class="lg-no"></i>Sai</span>
        <span><i class="lg-sh"></i>Đã xem đáp án</span>
      </div>

      <div class="hist">
        <p class="lbl">Lịch sử luyện tập</p>
        <div>
          @if (quiz.session(); as s) {
            <div class="hrow">
              <div class="t">
                <span>Phiên đang chạy · {{ quiz.modeName(s.mode) }}</span>
                <span class="pct y">{{ sessionCount() }} câu</span>
              </div>
              <div class="d">Bắt đầu {{ fmt(s.startedAt) }}</div>
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
            <p class="empty">Chưa có lịch sử. Kết thúc một phiên để lưu lại.</p>
          }
        </div>
        <button
          class="btn sm"
          style="margin-top:9px;width:100%;justify-content:center"
          (click)="quiz.endSession(false)"
        >
          Kết thúc &amp; lưu phiên
        </button>
      </div>

      <div class="hist">
        <p class="lbl">Dữ liệu</p>
        <div style="display:flex;gap:7px;flex-wrap:wrap">
          <button class="btn sm" (click)="quiz.exportData()">Xuất JSON</button>
          <button class="btn sm" (click)="openImport.emit()">Nhập JSON</button>
          <button class="btn sm" (click)="openReset.emit()">Xoá tiến độ</button>
        </div>
        <p class="empty" style="margin-top:9px">Trạng thái: {{ quiz.storeModeLabel }}</p>
      </div>
    </div>
  `,
  styles: `
    .catsel {
      width: 100%; background: var(--panel); border: 1px solid var(--line2);
      border-radius: 8px; padding: 7px 9px; font-size: 12.5px; margin-bottom: 8px;
    }
    .catsel:hover { border-color: var(--amber); }
    .catnow {
      display: flex; align-items: center; gap: 8px; margin-bottom: 18px;
      background: color-mix(in srgb, var(--amber) 12%, var(--panel));
      border: 1px solid color-mix(in srgb, var(--amber) 45%, transparent);
      border-radius: 8px; padding: 6px 10px; font-size: 12px; color: var(--ink);
    }
    .catnow span { flex: 1; min-width: 0; }
    .catclear {
      background: none; border: 0; color: var(--ink3); font-size: 13px;
      padding: 0 2px; line-height: 1; flex: 0 0 auto;
    }
    .catclear:hover { color: var(--bad); }
  `,
})
export class SidebarComponent {
  readonly quiz = inject(QuizService);
  private readonly toast = inject(ToastService);

  readonly modes = MODES;
  readonly jumpValue = signal('');

  /** danh mục phần thi + chủ đề, kèm số câu hỏi có sẵn của từng mục */
  readonly domains = computed(() =>
    DOMAINS.map((d) => ({
      id: d.id,
      title: d.title,
      weight: d.weight,
      count: this.quiz.countFor(d.id),
      topics: d.groups.flatMap((g) =>
        g.topics.map((t) => ({ id: t.id, title: t.title, count: this.quiz.countFor(t.id) })),
      ),
    })),
  );

  pickCategory(e: Event): void {
    const v = (e.target as HTMLSelectElement).value;
    this.quiz.setCategory(v || null);
    this.navigated.emit();
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
        const extra = s.shown && s.shown.length ? ' · ' + s.shown.length + ' xem đáp án' : '';
        return {
          id: s.id,
          mode: this.quiz.modeName(s.mode),
          cls: p >= 80 ? 'g' : p >= 50 ? 'y' : 'r',
          pct: graded > 0 ? p + '%' : '–',
          detail: this.fmt(s.startedAt) + ' · ' + s.correct + '/' + s.total + ' đúng' + extra,
        };
      }),
  );

  checked(e: Event): boolean {
    return (e.target as HTMLInputElement).checked;
  }

  value(e: Event): string {
    return (e.target as HTMLInputElement).value;
  }

  pickMode(m: Mode): void {
    this.quiz.setMode(m);
    this.navigated.emit();
  }

  pickCell(i: number): void {
    this.quiz.go(i);
    this.navigated.emit();
  }

  jump(e: Event): void {
    e.preventDefault();
    const n = parseInt(this.jumpValue(), 10);
    if (!n || !this.quiz.hasId(n)) {
      this.toast.show('Nhập số câu từ 1 đến ' + this.quiz.questions().length + '.');
      return;
    }
    if (this.quiz.gotoId(n)) {
      this.jumpValue.set('');
      this.navigated.emit();
    }
  }
}
