import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Question } from './app/core/models';

/**
 * Nạp ngân hàng câu hỏi trước khi khởi động, sau đó nạp tiến độ đã lưu.
 * Dữ liệu nằm ở public/ai900-data.json nên không nằm trong bundle chính.
 */
async function main(): Promise<void> {
  const res = await fetch('ai900-data.json');
  if (!res.ok) throw new Error('Không tải được ngân hàng câu hỏi (HTTP ' + res.status + ')');
  const questions = (await res.json()) as Question[];

  const ref = await bootstrapApplication(App, appConfig);

  const { QuizService } = await import('./app/core/quiz.service');
  const { TranslateService } = await import('./app/core/translate.service');
  await ref.injector.get(TranslateService).load();
  await ref.injector.get(QuizService).init(questions);
}

main().catch((err) => {
  console.error(err);
  document.body.innerHTML =
    '<p style="font-family:system-ui;padding:24px;color:#e8695e">' +
    'Không khởi động được ứng dụng: ' +
    String(err instanceof Error ? err.message : err) +
    '</p>';
});
