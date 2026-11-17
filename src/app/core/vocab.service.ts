import { Injectable, computed, effect, inject, signal, untracked } from '@angular/core';
import { StorageService } from './storage.service';
import { QuizService } from './quiz.service';
import { TranslateService } from './translate.service';

const K_VOCAB = 'ai900:vocab:v1';

export interface VocabWord {
  id: number;
  /** từ / cụm từ tiếng Anh */
  en: string;
  /** nghĩa tiếng Việt — có thể để trống rồi điền sau */
  vi: string;
  /** câu hỏi nơi gặp từ này (nếu lưu từ câu hỏi) */
  qid?: number;
  added: number;
  /** đã thuộc chưa — đặt bởi nút "Nhớ rồi / Chưa nhớ" khi luyện */
  known: boolean;
  /** số lần đã ôn */
  reviews: number;
}

/** chỉ nhận đoạn bôi đen ngắn — một từ hay một cụm từ, không phải cả đoạn văn */
const MAX_SEL = 80;

const norm = (s: string) => s.trim().replace(/\s+/g, ' ');
const keyOf = (s: string) => norm(s).toLowerCase();

/**
 * Sổ từ vựng tiếng Anh.
 *
 * Ngoài việc lưu danh sách, service theo dõi đoạn chữ người dùng bôi đen:
 *   - bôi đen trong nội dung câu hỏi (tiếng Anh)  → gợi ý cho ô "Từ tiếng Anh";
 *   - bôi đen trong hộp TIẾNG VIỆT (.vi)           → gợi ý cho ô "Nghĩa".
 * Nhờ vậy lấy nghĩa từ phần dịch VI chỉ cần bôi đen rồi bấm nút Từ vựng.
 */
@Injectable({ providedIn: 'root' })
export class VocabService {
  private readonly store = inject(StorageService);
  private readonly quiz = inject(QuizService);
  private readonly tr = inject(TranslateService);

  readonly words = signal<VocabWord[]>([]);
  readonly count = computed(() => this.words().length);
  readonly knownCount = computed(() => this.words().filter((w) => w.known).length);

  /** đoạn tiếng Anh vừa bôi đen trong câu hỏi */
  readonly selEn = signal('');
  /** đoạn tiếng Việt vừa bôi đen trong hộp dịch */
  readonly selVi = signal('');

  constructor() {
    void this.load();

    try {
      document.addEventListener('selectionchange', () => this.onSelection());
    } catch {
      /* môi trường không có document */
    }

    // đổi câu hỏi thì bỏ đoạn đã bôi đen của câu cũ
    effect(() => {
      this.quiz.current()?.id;
      untracked(() => {
        this.selEn.set('');
        this.selVi.set('');
      });
    });
  }

  private async load(): Promise<void> {
    const v = await this.store.get<VocabWord[]>(K_VOCAB);
    if (Array.isArray(v)) this.words.set(v.filter((w) => w && typeof w.en === 'string'));
  }

  private persist(): void {
    void this.store.set(K_VOCAB, this.words());
  }

  private onSelection(): void {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
    const text = norm(sel.toString());
    if (!text || text.length > MAX_SEL) return;

    const node = sel.anchorNode;
    const el = node instanceof Element ? node : node?.parentElement;
    if (!el || el.closest('dialog')) return;

    if (el.closest('.vi')) this.selVi.set(text);
    else if (el.closest('app-question-card')) this.selEn.set(text);
  }

  /**
   * Gợi ý nghĩa tiếng Việt cho một từ tiếng Anh, lấy từ bản dịch VI của câu đang mở:
   * nếu từ đó trùng nguyên văn một đáp án thì dùng đáp án tương ứng bên bản dịch.
   */
  suggestVi(en: string): string {
    const q = this.quiz.current();
    if (!q) return '';
    const vi = this.tr.entry(q.id, 'q');
    const k = keyOf(en);
    const i = q.options.findIndex((o) => keyOf(o.t) === k);
    const t = i >= 0 ? vi?.options?.[i] : undefined;
    return t && keyOf(t) !== k ? norm(t) : '';
  }

  find(en: string): VocabWord | undefined {
    const k = keyOf(en);
    return this.words().find((w) => keyOf(w.en) === k);
  }

  /**
   * Thêm một từ. Trùng từ đã có thì chỉ cập nhật nghĩa (nếu có nghĩa mới).
   * Trả về 'added' | 'updated' | 'exists' | 'invalid'.
   */
  add(en: string, vi: string, qid?: number): 'added' | 'updated' | 'exists' | 'invalid' {
    const e = norm(en);
    const v = norm(vi);
    if (!e) return 'invalid';
    const old = this.find(e);
    if (old) {
      if (!v || v === old.vi) return 'exists';
      this.patch(old.id, { vi: v });
      return 'updated';
    }
    const id = Math.max(0, ...this.words().map((w) => w.id)) + 1;
    this.words.set([
      { id, en: e, vi: v, qid, added: Date.now(), known: false, reviews: 0 },
      ...this.words(),
    ]);
    this.persist();
    return 'added';
  }

  /**
   * Nạp nhiều từ cùng lúc, mỗi dòng một từ:
   *   cloud computing
   *   regression = hồi quy
   *   label - nhãn
   *   feature<TAB>đặc trưng
 *   inference: suy luận
   */
  addMany(text: string): { added: number; updated: number; skipped: number } {
    const r = { added: 0, updated: 0, skipped: 0 };
    for (const raw of text.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;
      const m = line.match(/^(.+?)\s*(?:\t|\s=\s|=|\s-\s|\s–\s|:\s|\|)\s*(.*)$/);
      const res = m ? this.add(m[1], m[2]) : this.add(line, '');
      if (res === 'added') r.added++;
      else if (res === 'updated') r.updated++;
      else r.skipped++;
    }
    return r;
  }

  patch(id: number, p: Partial<Omit<VocabWord, 'id'>>): void {
    this.words.set(this.words().map((w) => (w.id === id ? { ...w, ...p } : w)));
    this.persist();
  }

  remove(id: number): void {
    this.words.set(this.words().filter((w) => w.id !== id));
    this.persist();
  }

  /** chấm một lượt ôn */
  mark(id: number, known: boolean): void {
    const w = this.words().find((x) => x.id === id);
    if (w) this.patch(id, { known, reviews: w.reviews + 1 });
  }

  clearSelection(): void {
    this.selEn.set('');
    this.selVi.set('');
  }
}
