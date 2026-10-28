import { style } from "@vanilla-extract/css";

import { themeColors } from "../shared/theme/theme.css";

/**
 * Switch track using the shared theme colors.
 * Provides the positioning container for the decorative thumb.
 * Screen placement remains the consuming layout's responsibility.
 */
export const themeSwitch = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "5.5rem",
  height: "2.75rem",
  boxSizing: "border-box",
  padding: "0.5rem",
  border: `1px solid ${themeColors.border}`,
  borderRadius: "999px",
  backgroundColor: themeColors.surface,
  color: themeColors.foreground,
  cursor: "pointer",

  selectors: {
    "&:focus-visible": {
      outline: `3px solid ${themeColors.link}`,
      outlineOffset: "4px",
    },
  },
});

/**
 * Decorative indicator positioned from the button's checked state.
 *
 * @remarks
 * CSS reads aria-checked rather than maintaining a separate visual flag.
 * The translation is coordinated with the track and thumb dimensions.
 * Reduced-motion preference removes the transition, not the state change.
 */
export const thumb = style({
  position: "absolute",
  top: "0.25rem",
  left: "0.25rem",
  width: "2.125rem",
  height: "2.125rem",
  borderRadius: "50%",
  backgroundColor: themeColors.background,
  boxShadow: `0 0 0 1px ${themeColors.border}`,
  transition: "transform 160ms ease",

  selectors: {
    [`${themeSwitch}[aria-checked="true"] &`]: {
      transform: "translateX(2.75rem)",
    },
  },

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

/** Decorative icon sizing; pointer events remain with enclosing button. */
export const icon = style({
  position: "relative",
  width: "1.5rem",
  height: "1.5rem",
  pointerEvents: "none",
});
