import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { QuizService } from './core/quiz.service';
import { ToastService } from './core/toast.service';
import { I18nService } from './core/i18n.service';
import { THEME_ICON, THEME_LABEL, nextTheme } from './core/theme';
import { SidebarComponent } from './components/sidebar';
import { QuestionCardComponent } from './components/question-card';
import { StudyComponent } from './components/study';
import { SetupComponent } from './components/setup';
import { IconComponent } from './components/icon';
import { VocabComponent } from './components/vocab';
import { PlanComponent } from './components/plan';
import { VocabService } from './core/vocab.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SidebarComponent,
    QuestionCardComponent,
    StudyComponent,
    SetupComponent,
    IconComponent,
    VocabComponent,
    PlanComponent,
  ],
  templateUrl: './app.html',
  styles: `
    .viewtabs { display: flex; border: 1px solid var(--line2); border-radius: 8px; overflow: hidden; }
    .viewtabs button {
      background: var(--panel); border: 0; padding: 6px 13px;
      font-size: 12.5px; font-weight: 550; color: var(--ink2);
      transition: background var(--t-fast), color var(--t-fast);
    }
    .viewtabs button + button { border-left: 1px solid var(--line2); }
    .viewtabs button:hover { color: var(--amber); background: var(--panel2); }
    /* tab đang mở dùng màu thương hiệu: "đang ở đâu" — màu nhấn xanh lá dành cho "làm gì tiếp" */
    .viewtabs button.on { background: var(--brand-soft); color: var(--brand); font-weight: 650; }
    .langctl button {
      font-family: var(--f-mono); font-size: 11.5px; letter-spacing: .06em; padding: 6px 10px;
    }
    .scope-bar {
      display: flex; align-items: center; gap: 9px; flex-wrap: wrap; margin-bottom: 14px;
      animation: scopeIn .3s var(--ease) backwards;
      background: color-mix(in srgb, var(--amber) 8%, var(--panel));
      border: 1px dashed color-mix(in srgb, var(--amber) 45%, transparent);
      border-radius: 10px; padding: 8px 10px 8px 14px; font-size: 13.5px; color: var(--ink);
    }
    .scope-lbl {
      font-family: var(--f-mono); font-size: 10.5px; letter-spacing: .11em;
      text-transform: uppercase; color: var(--ink3); font-weight: 600;
    }
    .scope-n { font-family: var(--f-mono); font-size: 12px; color: var(--ink3); }
    .study-wrap { padding-bottom: 40px; }
    .vocab-n {
      font-family: var(--f-mono); font-size: 11px; color: var(--ink3);
      border: 1px solid var(--line2); border-radius: 20px; padding: 0 6px; margin-left: 4px;
    }
    /* đang có từ bôi đen chờ lưu: đổi sang màu nhấn "làm gì tiếp" */
    .vocab-btn.pending {
      background: var(--accent-bg); border-color: var(--accent-bg); color: var(--accent-ink);
      font-weight: 650;
    }
    @media (max-width: 480px) { .theme-label { display: none; } }
    @keyframes scopeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
  `,
})
export class App {
  readonly quiz = inject(QuizService);
  readonly toast = inject(ToastService);
  readonly i18n = inject(I18nService);
  readonly vocab = inject(VocabService);

  readonly sideOpen = signal(false);
  readonly zoomSrc = signal('');
  readonly importText = signal('');

  /** nút giao diện: đang dùng tông nào, bấm thì sang tông nào */
  readonly themeIcon = computed(() => THEME_ICON[this.quiz.theme()]);
  readonly themeLabel = computed(() => this.i18n.t(THEME_LABEL[this.quiz.theme()]));
  readonly themeTitle = computed(() =>
    this.i18n.t('theme.title', {
      current: this.themeLabel(),
      next: this.i18n.t(THEME_LABEL[nextTheme(this.quiz.theme())]),
    }),
  );

  private readonly zoomDlgRef =
    viewChild.required<ElementRef<HTMLDialogElement>>('zoomDlg');
  private readonly impDlgRef = viewChild.required<ElementRef<HTMLDialogElement>>('impDlg');

  closeSide(): void {
    this.sideOpen.set(false);
  }

  openZoom(b64: string): void {
    this.zoomSrc.set('data:image/jpeg;base64,' + b64);
    this.zoomDlgRef().nativeElement.showModal();
  }

  openImport(): void {
    this.importText.set('');
    this.impDlgRef().nativeElement.showModal();
  }

  confirmImport(): void {
    if (this.quiz.importData(this.importText())) this.impDlgRef().nativeElement.close();
  }

  textValue(e: Event): string {
    return (e.target as HTMLTextAreaElement).value;
  }

  readFile(e: Event): void {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => this.importText.set(String(r.result));
    r.readAsText(f);
  }

  /* ---------- phím tắt ---------- */
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    // phím tắt chỉ áp dụng khi đang làm bài ở màn luyện thi (không phải khung thiết lập)
    if (this.quiz.view() !== 'practice' || !this.quiz.started()) return;
    const t = e.target as HTMLElement | null;
    if (t && typeof t.matches === 'function' && t.matches('input,textarea,select')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector('dialog[open]')) return;

    if (e.key === 'ArrowLeft') {
      this.quiz.go(this.quiz.idx() - 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      this.quiz.go(this.quiz.idx() + 1);
      return;
    }

    const q = this.quiz.current();
    if (!q) return;

    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.quiz.revealed()[q.id]) this.quiz.go(this.quiz.idx() + 1);
      else this.quiz.grade();
      return;
    }
    if (e.key === 'f' || e.key === 'F') {
      this.quiz.toggleFav();
      return;
    }
    if (/^[1-9]$/.test(e.key)) {
      const n = Number(e.key) - 1;
      if (q.type === 'single' || q.type === 'multi') {
        const arr = this.quiz.currentOptions();
        if (arr[n]) this.quiz.selectOpt(arr[n].k);
      } else if (q.subs.length === 1 && q.subs[0].options[n] !== undefined) {
        this.quiz.selectSub(0, n);
      }
    }
  }
}
