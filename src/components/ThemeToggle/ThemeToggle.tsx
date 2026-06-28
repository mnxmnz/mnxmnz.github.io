import React, { useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { ToggleButton } from './ThemeToggle.style';

function ThemeToggle() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute(
          'data-theme',
          event.matches ? 'dark' : 'light',
        );
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleToggle = () => {
    const current =
      document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

    document.documentElement.setAttribute('data-theme', next);

    if (next === systemTheme) {
      localStorage.removeItem('theme');
      return;
    }

    localStorage.setItem('theme', next);
  };

  return (
    <ToggleButton
      type="button"
      onClick={handleToggle}
      aria-label="다크 모드 전환"
    >
      <FiMoon className="theme-icon-light" />
      <FiSun className="theme-icon-dark" />
    </ToggleButton>
  );
}

export default ThemeToggle;
