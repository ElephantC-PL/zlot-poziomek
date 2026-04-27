const THEME_KEY = 'user-theme';
const LIGHT = 'winter';
const DARK = 'night';

// Ustawia theme, synchronizuje checkbox i zapisuje w localStorage
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  const checkbox = document.querySelector('.theme-controller');
  if (checkbox) {
    checkbox.checked = theme === DARK;
  }

  localStorage.setItem(THEME_KEY, theme);
}

// Pobiera preferowany theme (localStorage lub system)
function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return stored || (prefersDark ? DARK : LIGHT);
}

// Główna funkcja inicjalizująca
export function initThemeManager() {
  if (typeof window === 'undefined') return;

  const theme = getPreferredTheme();
  applyTheme(theme);

  const checkbox = document.querySelector('.theme-controller');

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      applyTheme(checkbox.checked ? DARK : LIGHT);
    });
  }
}

// Opcjonalny eksport do ręcznej zmiany motywu
export function setTheme(theme) {
  applyTheme(theme);
}