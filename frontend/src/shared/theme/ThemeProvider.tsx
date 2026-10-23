"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

import { darkTheme, lightTheme } from "./theme.css";

/** These names supported by the shared provider. */
export type Theme = "light" | "dark";

/** Theme selection and command exposed to provider consumers. */
export type ThemeContextValue = {
  /** Current selection within the nearest provider. */
  theme: Theme;
  /** Switches between light and dark without persisting the selection. */
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Provides light/dark selection and applies its theme class to a wrapper.
 *
 * @param props - Children rendered within this provider's themed scope.
 *
 * @remarks
 * Each provider starts in dark mode and owns independent in-memory state.
 * Selection survives child updates while the provider remains mounted.
 * It is not persisted across reloads or synchronized with system preferences.
 *
 * Theme styles apply within the wrapper rather than directly to document.body.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * Reads the nearest theme provider's selection and toggle command.
 *
 * @returns The current theme and a command that switches light and dark.
 * @throws An Error when called outside ThemeProvider.
 *
 * @remarks
 * Must be called from a React function component or another hook.
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }

  return context;
}
