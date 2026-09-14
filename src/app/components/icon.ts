import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName = 'contrast' | 'sun' | 'moon' | 'candle' | 'sliders';

/**
 * Biểu tượng nét mảnh bằng SVG nội tuyến — ký tự (◐ ☀ 🕯) thì mỗi font vẽ một kiểu,
 * 🕯 còn là ô vuông rỗng trên nhiều máy Windows.
 * Màu theo `currentColor`, cỡ theo `font-size` của chỗ đặt (1.25em).
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('contrast') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          />
        }
        @case ('moon') {
          <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
        }
        @case ('candle') {
          <path d="M12 2.5c2 2.4 3 4.1 3 5.6a3 3 0 0 1-6 0c0-1.5 1-3.2 3-5.6z" />
          <rect x="8.5" y="13" width="7" height="8.5" rx="1" />
        }
        @case ('sliders') {
          <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" />
          <circle cx="16" cy="6" r="2" />
          <circle cx="10" cy="12" r="2" />
          <circle cx="18" cy="18" r="2" />
        }
      }
    </svg>
  `,
  styles: `
    :host { display: inline-grid; place-items: center; width: 1.25em; height: 1.25em; flex: 0 0 auto; }
    svg { width: 100%; height: 100%; display: block; }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
