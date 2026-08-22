import { ChangeDetectionStrategy, Component, computed, effect, inject, output } from '@angular/core';
import { QuizService } from '../core/quiz.service';
import { TranslateService } from '../core/translate.service';
import { flow } from '../core/text.util';
import { ViBoxComponent } from './vi-box';

@Component({
  selector: 'app-question-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ViBoxComponent],
  template: `
    @if (quiz.current(); as q) {
      <div class="card">
        <div class="card-head">
          <span class="qnum">CÂU {{ q.id }}</span>
          <span class="tag">{{ quiz.typeLabel(q.type) }}</span>
          @if (q.part) {
            <span class="tag hide-sm">PART {{ q.part }}</span>
          }
          <span class="tag hide-sm">SLIDE {{ q.page }}</span>
          <span class="spacer"></span>
          <button
            class="star"
            [class.on]="isFav()"
            [attr.aria-pressed]="isFav()"
            title="Đánh dấu yêu thích (phím F)"
            (click)="quiz.toggleFav()"
          >
            ★
          </button>
        </div>

        <div class="qtext">
          @for (p of questionParas(); track $index) {
            <p>{{ p }}</p>
          }
          <app-vi-box [question]="q" part="q" />
        </div>

        @if (q.imgq) {
          <div class="exhibit">
            <button type="button" title="Bấm để phóng to" (click)="zoom.emit(q.imgq!)">
              <img [src]="dataUri(q.imgq)" [alt]="'Hình đính kèm câu ' + q.id" />
            </button>
            <div class="cap">Hình đính kèm của câu hỏi — bấm để phóng to.</div>
          </div>
        }

        @if (q.type === 'single' || q.type === 'multi') {
          @if (q.type === 'multi') {
            <p class="hint">Câu này có <b>{{ quiz.correctKeys(q).length }}</b> đáp án đúng.</p>
          }
          <div class="opts">
            @for (o of quiz.currentOptions(); track o.k) {
              <button
                class="opt"
                [class.right]="revealed() && o.c"
                [class.wrong]="revealed() && !o.c && quiz.isPicked(o.k)"
                [class.pick]="!revealed() && quiz.isPicked(o.k)"
                [disabled]="revealed()"
                (click)="quiz.selectOpt(o.k)"
              >
                <span class="key">{{ o.k.toUpperCase() }}</span>
                <span>{{ o.t }}</span>
                @if (revealed() && o.c) {
                  <span class="mark">{{ quiz.isPicked(o.k) ? 'Đúng · bạn chọn' : 'Đáp án đúng' }}</span>
                } @else if (revealed() && quiz.isPicked(o.k)) {
                  <span class="mark">Bạn chọn</span>
                }
              </button>
            }
          </div>
        } @else {
          @if (q.type !== 'yesno') {
            <p class="hint">Chọn đáp án cho từng dòng bên dưới.</p>
          }
          <div class="subs">
            @for (s of q.subs; track $index; let si = $index) {
              <div class="sub">
                @if (s.prompt) {
                  <div class="sub-p">{{ s.prompt }}</div>
                }
                <div class="sub-o">
                  @for (t of s.options; track $index; let oi = $index) {
                    <button
                      class="chip"
                      [class.right]="revealed() && oi === s.a"
                      [class.wrong]="revealed() && oi !== s.a && quiz.isSubPicked(si, oi)"
                      [class.pick]="!revealed() && quiz.isSubPicked(si, oi)"
                      [disabled]="revealed()"
                      (click)="quiz.selectSub(si, oi)"
                    >
                      {{ t }}
                    </button>
                  }
                </div>
              </div>
            }
          </div>
        }

        @if (revealed()) {
          <div class="verdict" [class]="'verdict ' + verdictClass()" role="status">
            {{ verdictText() }}
          </div>
          <div class="explain">
            <h4>Giải thích</h4>
            @if (explainBlocks().length) {
              @for (block of explainBlocks(); track $index) {
                <div class="eblock">
                  @for (p of block; track $index) {
                    <p>{{ p }}</p>
                  }
                </div>
              }
              <app-vi-box [question]="q" part="e" [small]="true" />
            } @else {
              <p class="noexp">Slide gốc không kèm phần giải thích cho câu này.</p>
            }
            @if (q.img) {
              <div class="exhibit" style="padding:16px 0 0">
                <button type="button" title="Bấm để phóng to" (click)="zoom.emit(q.img!)">
                  <img [src]="dataUri(q.img)" [alt]="'Slide gốc câu ' + q.id" />
                </button>
                <div class="cap">Slide gốc từ PDF (có sẵn đáp án) — bấm để phóng to.</div>
              </div>
            }
          </div>
        }

        <div class="actions">
          @if (!revealed()) {
            <button class="btn primary" (click)="quiz.grade()">Kiểm tra đáp án</button>
            <button class="btn" (click)="quiz.reveal()">Xem đáp án</button>
            <span class="keys">
              <kbd>1</kbd>–<kbd>9</kbd> chọn · <kbd>Enter</kbd> kiểm tra · <kbd>F</kbd> yêu thích
            </span>
          } @else {
            <button class="btn" (click)="quiz.retry()">Làm lại câu này</button>
            @if (quiz.canNext()) {
              <button class="btn primary" (click)="quiz.go(quiz.idx() + 1)">Câu tiếp theo →</button>
            }
            <span class="keys">
              <kbd>Enter</kbd> câu sau · <kbd>←</kbd><kbd>→</kbd> chuyển câu
            </span>
          }
        </div>
      </div>
    } @else {
      <div class="card">
        <div class="qtext">
          Không có câu hỏi nào trong chế độ <b>{{ quiz.modeName(quiz.mode()) }}</b
          >.
        </div>
        <div class="opts">
          <p class="empty">
            Chọn “Toàn bộ” ở thanh bên, hoặc đánh dấu ⭐ ở các câu bạn muốn ôn lại.
          </p>
        </div>
      </div>
    }
  `,
})
export class QuestionCardComponent {
  readonly quiz = inject(QuizService);
  private readonly tr = inject(TranslateService);

  /** phát ra base64 của ảnh cần phóng to */
  readonly zoom = output<string>();

  readonly revealed = this.quiz.isRevealed;

  readonly isFav = computed(() => {
    const q = this.quiz.current();
    return !!q && !!this.quiz.fav()[q.id];
  });

  readonly questionParas = computed(() => flow(this.quiz.current()?.question ?? []));

  readonly explainBlocks = computed(() =>
    (this.quiz.current()?.explanation ?? []).map((b) => flow(b)),
  );

  private readonly status = computed(() => {
    const q = this.quiz.current();
    return q ? this.quiz.statusOf(q.id) : null;
  });

  readonly verdictClass = computed(() => {
    const st = this.status();
    return st === 'ok' ? 'ok' : st === 'sh' ? 'sh' : 'no';
  });

  readonly verdictText = computed(() => {
    const st = this.status();
    return st === 'ok'
      ? '✓ Chính xác'
      : st === 'sh'
        ? '◆ Bạn đã xem đáp án — câu này được xếp vào nhóm cần ôn lại'
        : '✕ Chưa đúng';
  });

  constructor() {
    // yêu cầu dịch cho câu hiện tại khi bật VI — tương ứng ensureTranslations() của bản gốc
    effect(() => {
      const q = this.quiz.current();
      if (!q || !this.quiz.showVi()) return;
      this.tr.translate(q, 'q');
      if (this.quiz.revealed()[q.id] && q.explanation.length) this.tr.translate(q, 'e');
    });
  }

  dataUri(b64: string): string {
    return 'data:image/jpeg;base64,' + b64;
  }
}
