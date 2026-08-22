import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AI901_URL, DOMAINS, STUDY_GUIDE_URL } from '../core/categories';
import { QuizService } from '../core/quiz.service';

@Component({
  selector: 'app-study',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="study">
      <div class="card study-intro">
        <div class="card-head">
          <span class="qnum">LỘ TRÌNH</span>
          <span class="tag">5 PHẦN THI</span>
          <span class="tag hide-sm">{{ topicTotal() }} CHỦ ĐỀ</span>
          <span class="spacer"></span>
          <a class="btn sm" [href]="studyGuideUrl" target="_blank" rel="noopener">
            Đề cương gốc ↗
          </a>
        </div>
        <div class="study-body">
          <p>
            Danh sách dưới đây bám theo đề cương <b>Skills measured</b> chính thức của Microsoft cho
            kỳ thi AI-900 (bản hiệu lực 02/05/2025). Mỗi chủ đề có phần mô tả tổng quan và link tài
            liệu Microsoft để đọc chi tiết. Bấm <b>Thi phần này</b> để luyện đúng nhóm câu hỏi tương
            ứng.
          </p>
          <p class="study-note">
            <b>Lưu ý:</b> Microsoft đã cho AI-900 nghỉ hưu ngày 30/06/2026 và thay bằng
            <a [href]="ai901Url" target="_blank" rel="noopener">AI-901</a>; chứng chỉ nhận được vẫn
            là <i>Azure AI Fundamentals</i>. Kiến thức nền bên dưới vẫn dùng được cho AI-901.
          </p>
        </div>
      </div>

      @for (d of domains; track d.id) {
        <div class="card domain">
          <div class="card-head">
            <span class="qnum">{{ d.weight }}</span>
            <span class="dm-title">{{ d.title }}</span>
            <span class="spacer"></span>
            @if (cov().domains[d.id]; as c) {
              <span class="tag hide-sm">{{ c.total }} CÂU</span>
              @if (c.total) {
                <span class="tag hide-sm">ĐÃ LÀM {{ c.done }}/{{ c.total }}</span>
              }
            }
            <button
              class="btn sm"
              [disabled]="!cov().domains[d.id].total"
              (click)="practice(d.id)"
            >
              Thi phần này
            </button>
          </div>

          <div class="study-body">
            <p class="dm-obj">{{ d.objective }}</p>
            <p>{{ d.intro }}</p>
            @if (cov().domains[d.id].total === 0) {
              <p class="warn-box">
                Ngân hàng câu hỏi hiện tại không có câu nào cho phần này — hãy học qua các link tài
                liệu bên dưới.
              </p>
            } @else {
              <div class="cov-bar" [title]="covTitle(d.id)">
                <i class="cv-ok" [style.width.%]="pct(cov().domains[d.id].ok, cov().domains[d.id].total)"></i>
                <i class="cv-no" [style.width.%]="pct(cov().domains[d.id].no, cov().domains[d.id].total)"></i>
                <i class="cv-sh" [style.width.%]="pct(cov().domains[d.id].sh, cov().domains[d.id].total)"></i>
              </div>
            }
          </div>

          @for (g of d.groups; track g.title) {
            <div class="group">
              <h4 class="group-h">{{ g.title }}</h4>
              @for (t of g.topics; track t.id) {
                <div class="topic">
                  <button
                    class="topic-head"
                    [attr.aria-expanded]="isOpen(t.id)"
                    (click)="toggle(t.id)"
                  >
                    <span class="tw">{{ isOpen(t.id) ? '▾' : '▸' }}</span>
                    <span class="tt">{{ t.title }}</span>
                    @if (cov().topics[t.id]; as tc) {
                      @if (tc.total) {
                        <span class="tcount" [class.tdone]="tc.done === tc.total">
                          {{ tc.done }}/{{ tc.total }}
                        </span>
                      } @else {
                        <span class="tcount tnone">0 câu</span>
                      }
                    }
                  </button>

                  @if (isOpen(t.id)) {
                    <div class="topic-body">
                      <p class="t-obj">{{ t.objective }}</p>
                      <p class="t-ov">{{ t.overview }}</p>
                      <div class="t-links">
                        @for (l of t.links; track l.url) {
                          <a class="btn sm" [href]="l.url" target="_blank" rel="noopener">
                            {{ l.label }} ↗
                          </a>
                        }
                        @if (cov().topics[t.id].total) {
                          <button class="btn sm" (click)="practice(t.id)">
                            Thi chủ đề này ({{ cov().topics[t.id].total }})
                          </button>
                        }
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: `
    .study { display: flex; flex-direction: column; gap: 18px; }
    .study-body { padding: 16px 20px; font-size: calc(14.5px * var(--cs)); line-height: 1.68; color: var(--ink2); }
    .study-body p { margin: 0 0 10px; }
    .study-body p:last-child { margin: 0; }
    .study-note { font-size: calc(13.5px * var(--cs)); color: var(--ink3); border-left: 3px solid var(--warn-line); padding-left: 12px; }
    .study-note a { color: var(--amber); }
    .dm-title { font-weight: 650; font-size: 15px; color: var(--ink); }
    .dm-obj { font-family: var(--f-mono); font-size: 11.5px; letter-spacing: .02em; color: var(--ink3); text-transform: none; }
    .warn-box { background: var(--warn-bg); border: 1px solid var(--warn-line); color: var(--warn); border-radius: 9px; padding: 10px 13px; font-size: calc(13.5px * var(--cs)); }
    .cov-bar { display: flex; height: 6px; border-radius: 4px; overflow: hidden; background: var(--line); }
    .cov-bar i { display: block; height: 100%; transition: width .45s var(--ease); }
    .cv-ok { background: var(--ok); } .cv-no { background: var(--bad); } .cv-sh { background: var(--warn); }
    .group { border-top: 1px solid var(--line); padding: 14px 20px; }
    .group-h { margin: 0 0 10px; font-family: var(--f-mono); font-size: 10.5px; letter-spacing: .11em; text-transform: uppercase; color: var(--ink3); font-weight: 600; }
    .topic {
      border: 1px solid var(--line); border-radius: 10px; margin-bottom: 7px;
      background: var(--panel2); overflow: hidden;
      transition: border-color var(--t-fast), box-shadow var(--t-fast);
    }
    .topic:hover { border-color: var(--line2); box-shadow: var(--shadow-sm); }
    .topic:last-child { margin-bottom: 0; }
    .topic-head { display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; background: none; border: 0; padding: 11px 14px; font-size: calc(14px * var(--cs)); color: var(--ink); }
    .topic-head { transition: color var(--t-fast), background var(--t-fast); }
    .topic-head:hover { color: var(--amber); background: color-mix(in srgb, var(--amber) 6%, transparent); }
    .tw { font-family: var(--f-mono); color: var(--ink3); flex: 0 0 auto; }
    .tt { flex: 1; min-width: 0; }
    .tcount { font-family: var(--f-mono); font-size: 11px; color: var(--ink3); border: 1px solid var(--line2); border-radius: 20px; padding: 2px 8px; flex: 0 0 auto; }
    .tcount.tdone { color: var(--ok); border-color: var(--ok-line); }
    .tcount.tnone { opacity: .55; }
    .topic-body { padding: 0 14px 14px 36px; animation: topicIn .28s var(--ease) backwards; }
    @keyframes topicIn { from { opacity: 0; transform: translateY(-7px); } to { opacity: 1; transform: none; } }
    .t-obj { margin: 0 0 8px; font-family: var(--f-mono); font-size: 11px; color: var(--ink3); }
    .t-ov { margin: 0 0 12px; font-size: calc(14px * var(--cs)); line-height: 1.7; color: var(--ink2); }
    .t-links { display: flex; gap: 7px; flex-wrap: wrap; }
    .t-links a { text-decoration: none; }
    @media (max-width: 900px) {
      .study-body, .group { padding-left: 14px; padding-right: 14px; }
      .topic-body { padding-left: 30px; }
    }
  `,
})
export class StudyComponent {
  private readonly quiz = inject(QuizService);

  readonly domains = DOMAINS;
  readonly studyGuideUrl = STUDY_GUIDE_URL;
  readonly ai901Url = AI901_URL;
  readonly cov = this.quiz.coverage;

  private readonly open = signal<Record<string, boolean>>({});

  readonly topicTotal = computed(() =>
    DOMAINS.reduce((n, d) => n + d.groups.reduce((m, g) => m + g.topics.length, 0), 0),
  );

  isOpen(id: string): boolean {
    return !!this.open()[id];
  }

  toggle(id: string): void {
    this.open.set({ ...this.open(), [id]: !this.open()[id] });
  }

  pct(n: number, total: number): number {
    return total ? (n / total) * 100 : 0;
  }

  covTitle(id: string): string {
    const c = this.cov().domains[id];
    return `Đúng ${c.ok} · Sai ${c.no} · Đã xem đáp án ${c.sh} · Chưa làm ${c.total - c.done}`;
  }

  /** Chuyển sang màn luyện tập, lọc đúng phần thi / chủ đề vừa chọn. */
  practice(cat: string): void {
    this.quiz.setCategory(cat);
    this.quiz.setView('practice');
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  }
}
