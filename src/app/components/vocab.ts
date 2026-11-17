import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { VocabService, VocabWord } from '../core/vocab.service';
import { I18nService } from '../core/i18n.service';
import { ToastService } from '../core/toast.service';
import { QuizService } from '../core/quiz.service';

type Tab = 'list' | 'practice';

function shuffle<T>(a: T[]): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** Hộp thoại "Sổ từ vựng": lưu từ tiếng Anh kèm nghĩa tiếng Việt và luyện nghĩa kiểu flashcard. */
@Component({
  selector: 'app-vocab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <dialog #dlg class="vocab-dlg" (keydown)="onKey($event)" (close)="onClose()">
      <div class="dlg-h vh">
        <span>{{ i18n.t('vocab.title') }}</span>
        <span class="spacer"></span>
        <div class="vtabs" role="tablist">
          <button
            role="tab"
            [class.on]="tab() === 'list'"
            [attr.aria-selected]="tab() === 'list'"
            (click)="tab.set('list')"
          >
            {{ i18n.t('vocab.tabList', { n: vocab.count() }) }}
          </button>
          <button
            role="tab"
            [class.on]="tab() === 'practice'"
            [attr.aria-selected]="tab() === 'practice'"
            (click)="openPractice()"
          >
            {{ i18n.t('vocab.tabPractice') }}
          </button>
        </div>
      </div>

      <div class="dlg-b">
        @if (tab() === 'list') {
          <form class="addrow" (submit)="$event.preventDefault(); save()">
            <input
              #enInput
              [placeholder]="i18n.t('vocab.en')"
              [attr.aria-label]="i18n.t('vocab.en')"
              [value]="en()"
              (input)="en.set(val($event))"
              (blur)="fillSuggestion()"
              lang="en"
              autocomplete="off"
            />
            <input
              [placeholder]="i18n.t('vocab.vi')"
              [attr.aria-label]="i18n.t('vocab.vi')"
              [value]="vi()"
              (input)="vi.set(val($event))"
              lang="vi"
              autocomplete="off"
            />
            <button class="btn primary" type="submit" [disabled]="!en().trim()">
              {{ i18n.t('vocab.add') }}
            </button>
          </form>
          <p class="tip">{{ i18n.t('vocab.tip') }}</p>

          <details class="bulk" [open]="bulkOpen()" (toggle)="bulkOpen.set(isOpen($event))">
            <summary>{{ i18n.t('vocab.bulk') }}</summary>
            <p class="tip">{{ i18n.t('vocab.bulkHint') }}</p>
            <textarea
              [value]="bulk()"
              (input)="bulk.set(val($event))"
              placeholder="regression = hồi quy&#10;feature - đặc trưng&#10;inference"
            ></textarea>
            <div class="bulk-f">
              <button class="btn sm" [disabled]="!bulk().trim()" (click)="saveBulk()">
                {{ i18n.t('vocab.bulkOk') }}
              </button>
            </div>
          </details>

          @if (vocab.count()) {
            <p class="vstat">
              {{ i18n.t('vocab.stats', { known: vocab.knownCount(), total: vocab.count() }) }}
            </p>
            <ul class="wlist">
              @for (w of vocab.words(); track w.id) {
                <li [class.known]="w.known">
                  <div class="w-en" lang="en">
                    <b>{{ w.en }}</b>
                    @if (w.qid) {
                      <span class="tag">{{ i18n.t('vocab.fromQ', { id: w.qid }) }}</span>
                    }
                  </div>
                  <input
                    class="w-vi"
                    lang="vi"
                    [value]="w.vi"
                    [placeholder]="i18n.t('vocab.noMeaning')"
                    [attr.aria-label]="i18n.t('vocab.vi') + ': ' + w.en"
                    (change)="vocab.patch(w.id, { vi: val($event).trim() })"
                  />
                  <button
                    class="pill"
                    [class.ok]="w.known"
                    [title]="w.known ? i18n.t('vocab.known') : i18n.t('vocab.learning')"
                    (click)="vocab.patch(w.id, { known: !w.known })"
                  >
                    {{ w.known ? i18n.t('vocab.known') : i18n.t('vocab.learning') }}
                  </button>
                  <button
                    class="del"
                    [title]="i18n.t('vocab.delete')"
                    [attr.aria-label]="i18n.t('vocab.delete') + ': ' + w.en"
                    (click)="vocab.remove(w.id)"
                  >
                    ×
                  </button>
                </li>
              }
            </ul>
          } @else {
            <p class="empty">{{ i18n.t('vocab.empty') }}</p>
          }
        } @else {
          @if (!vocab.count()) {
            <p class="empty">{{ i18n.t('vocab.practiceEmpty') }}</p>
          } @else if (!queue().length) {
            <label class="chk">
              <input type="checkbox" [checked]="onlyNew()" (change)="onlyNew.set(checked($event))" />
              {{ i18n.t('vocab.onlyNew') }}
            </label>
            @if (finished()) {
              <p class="vdone">{{ i18n.t('vocab.done', { ok: okCount(), n: lastSize() }) }}</p>
            }
            @if (onlyNew() && vocab.knownCount() === vocab.count()) {
              <p class="empty">{{ i18n.t('vocab.allKnown') }}</p>
            } @else {
              <button class="btn primary" (click)="start()">
                {{ finished() ? i18n.t('vocab.restart') : i18n.t('vocab.start') }}
              </button>
            }
          } @else if (card(); as c) {
            <div class="fpos">{{ i18n.t('vocab.pos', { i: pos() + 1, n: queue().length }) }}</div>
            <div class="flash">
              <div class="f-en" lang="en">{{ c.en }}</div>
              @if (revealed()) {
                <div class="f-vi" lang="vi">{{ c.vi || i18n.t('vocab.noMeaning') }}</div>
              }
            </div>
            <div class="factions">
              @if (!revealed()) {
                <button class="btn primary" (click)="revealed.set(true)">
                  {{ i18n.t('vocab.reveal') }}
                </button>
              } @else {
                <button class="btn" (click)="answer(false)">{{ i18n.t('vocab.again') }}</button>
                <button class="btn primary" (click)="answer(true)">{{ i18n.t('vocab.got') }}</button>
              }
            </div>
            <p class="tip center">{{ i18n.t('vocab.keys') }}</p>
          }
        }
      </div>

      <div class="dlg-f">
        <button class="btn" (click)="dlg.close()">{{ i18n.t('common.close') }}</button>
      </div>
    </dialog>
  `,
  styles: `
    .vocab-dlg { max-width: 680px; }
    .vh { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .vtabs { display: flex; border: 1px solid var(--line2); border-radius: 8px; overflow: hidden; }
    .vtabs button {
      background: var(--panel); border: 0; padding: 5px 12px; font-size: 12.5px;
      font-weight: 550; color: var(--ink2);
    }
    .vtabs button + button { border-left: 1px solid var(--line2); }
    .vtabs button.on { background: var(--brand-soft); color: var(--brand); font-weight: 650; }

    input:not([type]), .w-vi {
      background: var(--bg); border: 1px solid var(--line2); border-radius: 8px;
      padding: 7px 10px; min-width: 0;
    }
    input:focus-visible { outline: 2px solid var(--brand); outline-offset: 1px; }

    .addrow { display: grid; grid-template-columns: 1fr 1fr auto; gap: 8px; }
    .tip { font-size: 12.5px; color: var(--ink3); margin: 8px 0 0; }
    .tip.center { text-align: center; }

    .bulk { margin-top: 12px; font-size: 13px; }
    .bulk summary { cursor: pointer; color: var(--ink2); font-weight: 550; }
    .bulk textarea { min-height: 96px; margin-top: 8px; }
    .bulk-f { display: flex; justify-content: flex-end; margin-top: 6px; }

    .vstat { margin: 16px 0 6px; font-family: var(--f-mono); font-size: 11.5px; color: var(--ink3); }
    .wlist { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
    .wlist li {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr) auto auto;
      align-items: center; gap: 8px; padding: 6px 8px; border: 1px solid var(--line);
      border-radius: 9px; background: var(--panel);
    }
    .wlist li.known { opacity: .72; }
    .w-en { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; color: var(--ink); min-width: 0; }
    .w-en b { overflow-wrap: anywhere; }
    .w-vi { width: 100%; padding: 5px 8px; font-size: 13.5px; }
    .pill {
      border: 1px solid var(--line2); background: var(--panel2); color: var(--ink3);
      border-radius: 20px; padding: 2px 9px; font-size: 11.5px; white-space: nowrap;
    }
    .pill.ok { border-color: var(--ok-line); background: var(--ok-bg); color: var(--ok); }
    .del {
      background: none; border: 0; color: var(--ink3); font-size: 18px; line-height: 1;
      padding: 2px 6px; border-radius: 6px;
    }
    .del:hover { color: var(--bad); background: var(--bad-bg); }

    .chk { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
    .vdone { color: var(--ink); font-weight: 600; }
    .fpos { font-family: var(--f-mono); font-size: 11.5px; color: var(--ink3); text-align: center; }
    .flash {
      margin: 10px 0 14px; padding: 28px 18px; border: 1px solid var(--line2); border-radius: 12px;
      background: var(--brand-soft); text-align: center; min-height: 120px;
      display: flex; flex-direction: column; justify-content: center; gap: 12px;
    }
    .f-en { font-size: 26px; font-weight: 700; color: var(--ink); overflow-wrap: anywhere; }
    .f-vi { font-size: 18px; color: var(--brand); font-weight: 600; }
    .factions { display: flex; justify-content: center; gap: 10px; }

    @media (max-width: 520px) {
      .addrow { grid-template-columns: 1fr; }
      .wlist li { grid-template-columns: minmax(0, 1fr) auto auto; }
      .w-vi { grid-column: 1 / -1; grid-row: 2; }
    }
  `,
})
export class VocabComponent {
  readonly vocab = inject(VocabService);
  readonly i18n = inject(I18nService);
  private readonly toast = inject(ToastService);
  private readonly quiz = inject(QuizService);

  private readonly dlgRef = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');
  private readonly enRef = viewChild<ElementRef<HTMLInputElement>>('enInput');

  readonly tab = signal<Tab>('list');
  readonly en = signal('');
  readonly vi = signal('');
  /** câu hỏi đang mở lúc lấy từ bôi đen — để ghi "gặp ở câu nào" */
  private qid: number | undefined;
  readonly bulk = signal('');
  readonly bulkOpen = signal(false);

  /* ---- luyện tập ---- */
  readonly onlyNew = signal(true);
  readonly queue = signal<number[]>([]);
  readonly pos = signal(0);
  readonly revealed = signal(false);
  readonly okCount = signal(0);
  readonly finished = signal(false);
  readonly lastSize = signal(0);

  readonly card = computed<VocabWord | undefined>(() => {
    const id = this.queue()[this.pos()];
    return this.vocab.words().find((w) => w.id === id);
  });

  /** mở hộp thoại; đoạn đã bôi đen (EN trong câu hỏi, VI trong hộp dịch) được điền sẵn */
  open(): void {
    const selEn = this.vocab.selEn();
    const selVi = this.vocab.selVi();
    if (selEn || selVi) {
      this.tab.set('list');
      this.en.set(selEn);
      this.vi.set(selVi || (selEn ? this.vocab.suggestVi(selEn) : ''));
      this.qid = selEn ? this.quiz.current()?.id : undefined;
      // từ đã có trong sổ mà chưa bôi đen nghĩa mới → hiện nghĩa đang lưu
      const old = selEn ? this.vocab.find(selEn) : undefined;
      if (old && !selVi && old.vi) this.vi.set(old.vi);
      this.vocab.clearSelection();
    }
    this.dlgRef().nativeElement.showModal();
    if (this.tab() === 'list') setTimeout(() => this.enRef()?.nativeElement.focus());
  }

  onClose(): void {
    this.queue.set([]);
    this.revealed.set(false);
  }

  fillSuggestion(): void {
    if (this.vi().trim() || !this.en().trim()) return;
    const s = this.vocab.suggestVi(this.en()) || this.vocab.find(this.en())?.vi || '';
    if (s) this.vi.set(s);
  }

  save(): void {
    const w = this.en().trim();
    const res = this.vocab.add(w, this.vi(), this.qid);
    if (res === 'invalid') return;
    const key =
      res === 'added' ? 'toast.vocabAdded' : res === 'updated' ? 'toast.vocabUpdated' : 'toast.vocabExists';
    this.toast.show(this.i18n.t(key, { w }));
    this.en.set('');
    this.vi.set('');
    this.qid = undefined;
    this.enRef()?.nativeElement.focus();
  }

  saveBulk(): void {
    const r = this.vocab.addMany(this.bulk());
    this.toast.show(this.i18n.t('toast.vocabBulk', { a: r.added, u: r.updated, s: r.skipped }));
    this.bulk.set('');
    this.bulkOpen.set(false);
  }

  openPractice(): void {
    this.tab.set('practice');
  }

  start(): void {
    const all = this.vocab.words();
    const pool = this.onlyNew() ? all.filter((w) => !w.known) : all;
    // từ chưa thuộc lên trước, trong mỗi nhóm thì trộn ngẫu nhiên
    const ids = [
      ...shuffle(pool.filter((w) => !w.known)),
      ...shuffle(pool.filter((w) => w.known)),
    ].map((w) => w.id);
    this.queue.set(ids);
    this.lastSize.set(ids.length);
    this.pos.set(0);
    this.okCount.set(0);
    this.revealed.set(false);
    this.finished.set(false);
  }

  answer(known: boolean): void {
    const c = this.card();
    if (c) this.vocab.mark(c.id, known);
    if (known) this.okCount.update((n) => n + 1);
    this.revealed.set(false);
    if (this.pos() + 1 >= this.queue().length) {
      this.queue.set([]);
      this.finished.set(true);
    } else {
      this.pos.update((p) => p + 1);
    }
  }

  onKey(e: KeyboardEvent): void {
    if (this.tab() !== 'practice' || !this.card()) return;
    const t = e.target as HTMLElement | null;
    if (t && t.matches('input,textarea,select')) return;
    if (e.key === ' ' || e.key === 'Enter') {
      if (!this.revealed()) {
        e.preventDefault();
        this.revealed.set(true);
      }
    } else if (this.revealed() && (e.key === '1' || e.key === '2')) {
      e.preventDefault();
      this.answer(e.key === '2');
    }
  }

  val(e: Event): string {
    return (e.target as HTMLInputElement).value;
  }

  checked(e: Event): boolean {
    return (e.target as HTMLInputElement).checked;
  }

  isOpen(e: Event): boolean {
    return (e.target as HTMLDetailsElement).open;
  }
}
