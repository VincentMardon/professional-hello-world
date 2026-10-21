"use client";

import { useTheme } from "../shared/theme/ThemeProvider";

import { icon, themeSwitch, thumb } from "./ThemeSwitch.css";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-label="Dark theme"
      aria-checked={theme === "dark"}
      onClick={toggleTheme}
      className={themeSwitch}
    >
      <span className={thumb} aria-hidden="true" />

      <svg
        className={icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
      </svg>

      <svg
        className={icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
      </svg>
    </button>
  );
}
