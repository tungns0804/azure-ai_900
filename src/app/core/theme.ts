import { I18nKey } from './i18n';
import type { IconName } from '../components/icon';

/**
 * 'system' = theo cài đặt sáng/tối của hệ điều hành.
 * 'night'  = đèn đêm: nền giấy ngà, ít ánh sáng xanh, giống Night light của Windows.
 */
export type Theme = 'system' | 'light' | 'dark' | 'night';

/** Tông thật sự đang vẽ ra màn hình — 'system' đã quy đổi xong. */
export type ResolvedTheme = Exclude<Theme, 'system'>;

/** thứ tự xoay vòng của nút giao diện */
export const THEMES: readonly Theme[] = ['system', 'light', 'dark', 'night'];

export const THEME_LABEL: Record<Theme, I18nKey> = {
  system: 'theme.system',
  light: 'theme.light',
  dark: 'theme.dark',
  night: 'theme.night',
};

export const THEME_ICON: Record<Theme, IconName> = {
  system: 'contrast',
  light: 'sun',
  dark: 'moon',
  // ngọn nến chứ không phải mặt trời thứ hai: nút thu gọn nhãn thì chỉ còn biểu tượng để phân biệt
  night: 'candle',
};

/** màu thanh trình duyệt trên di động = --bg2 của từng tông (xem base.css) */
const THEME_COLOR: Record<ResolvedTheme, string> = {
  light: '#ffffff',
  dark: '#181d24',
  night: '#fbf3e3',
};

const DARK_QUERY = '(prefers-color-scheme: dark)';

export function isTheme(v: unknown): v is Theme {
  return THEMES.includes(v as Theme);
}

export function nextTheme(t: Theme): Theme {
  return THEMES[(THEMES.indexOf(t) + 1) % THEMES.length];
}

export function prefersDark(): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(DARK_QUERY).matches
    : false;
}

export function resolveTheme(t: Theme, systemDark: boolean): ResolvedTheme {
  return t === 'system' ? (systemDark ? 'dark' : 'light') : t;
}

/** Gọi lại mỗi khi hệ điều hành đổi sáng/tối. */
export function watchSystemDark(cb: (dark: boolean) => void): void {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
  window.matchMedia(DARK_QUERY).addEventListener('change', (e) => cb(e.matches));
}

/**
 * Bảng màu nằm trong base.css. 'system' thì bỏ hẳn data-theme để `color-scheme: light dark`
 * tự theo hệ điều hành; ba tông còn lại đặt đúng tên của nó lên thẻ <html>.
 */
export function applyTheme(t: Theme, resolved: ResolvedTheme): void {
  const root = document.documentElement;
  if (t === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', t);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[resolved]);
}
