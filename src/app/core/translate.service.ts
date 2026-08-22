import { Injectable, computed, inject, signal } from '@angular/core';
import { Question, ViEntry, ViPart } from './models';
import { StorageService } from './storage.service';

const K_VI = 'ai900:vi:v1';

/**
 * Cấu hình gọi API dịch — giữ đúng như bản HTML gốc.
 * Chỉ hoạt động khi trang chạy trong giao diện Claude.ai (được proxy sẵn),
 * hoặc khi bạn trỏ `endpoint` sang proxy backend của riêng mình.
 */
export const VI_API = {
  endpoint: 'https://api.anthropic.com/v1/messages',
  model: 'claude-sonnet-4-6',
  maxTokens: 1000,
};

interface Payload {
  question?: string[];
  options?: string[];
  subs?: Array<{ prompt: string; options: string[] }>;
  explanation?: string[][];
}

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private readonly store = inject(StorageService);

  /** bản dịch đã có, khoá "<id>:<part>" */
  readonly vi = signal<Record<string, ViEntry>>({});
  /** các khoá đang dịch */
  readonly busy = signal<Record<string, boolean>>({});

  async load(): Promise<void> {
    const v = await this.store.get<Record<string, ViEntry>>(K_VI);
    if (v) this.vi.set(v);
  }

  private saveT: ReturnType<typeof setTimeout> | null = null;
  private save(): void {
    if (this.saveT) clearTimeout(this.saveT);
    this.saveT = setTimeout(() => void this.store.set(K_VI, this.vi()), 800);
  }

  key(id: number, part: ViPart): string {
    return id + ':' + part;
  }

  entry(id: number, part: ViPart): ViEntry | undefined {
    return this.vi()[this.key(id, part)];
  }

  isBusy(id: number, part: ViPart): boolean {
    return !!this.busy()[this.key(id, part)];
  }

  private payloadFor(q: Question, part: ViPart): Payload {
    if (part === 'q') {
      const o: Payload = { question: q.question };
      if (q.options && q.options.length) o.options = q.options.map((x) => x.t);
      if (q.subs && q.subs.length)
        o.subs = q.subs.map((s) => ({ prompt: s.prompt, options: s.options }));
      return o;
    }
    return { explanation: q.explanation };
  }

  translate(q: Question, part: ViPart): void {
    const key = this.key(q.id, part);
    if (this.vi()[key] || this.busy()[key]) return;
    this.busy.set({ ...this.busy(), [key]: true });

    const body = {
      model: VI_API.model,
      max_tokens: VI_API.maxTokens,
      messages: [
        {
          role: 'user',
          content:
            'Bạn là chuyên gia Azure AI. Dịch nội dung câu hỏi chứng chỉ Microsoft AI-900 sau sang tiếng Việt tự nhiên, ' +
            'chính xác về kỹ thuật. GIỮ NGUYÊN tiếng Anh cho tên dịch vụ/sản phẩm/thuật ngữ riêng ' +
            '(ví dụ: Computer Vision, Form Recognizer, feature, label, regression, clustering...).\n' +
            'Trả về DUY NHẤT một object JSON có đúng cùng cấu trúc và cùng số phần tử mảng như đầu vào. ' +
            'Không thêm markdown, không thêm giải thích.\n\nJSON đầu vào:\n' +
            JSON.stringify(this.payloadFor(q, part)),
        },
      ],
    };

    fetch(VI_API.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then((d: { content?: Array<{ type: string; text: string }> }) => {
        let txt = (d.content || [])
          .filter((b) => b.type === 'text')
          .map((b) => b.text)
          .join('\n')
          .trim();
        txt = txt.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
        this.vi.set({ ...this.vi(), [key]: JSON.parse(txt) as ViEntry });
        this.save();
      })
      .catch((e: unknown) => {
        const msg = e instanceof Error ? e.message : String(e);
        this.vi.set({ ...this.vi(), [key]: { __error: msg } });
      })
      .then(() => {
        const b = { ...this.busy() };
        delete b[key];
        this.busy.set(b);
      });
  }
}
