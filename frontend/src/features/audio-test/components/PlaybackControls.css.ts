import { style } from "@vanilla-extract/css";

import { semanticColors } from "../styles/semanticColors.css";

export const playButton = style({
  boxSizing: "border-box",
  width: "5rem",
  height: "5rem",
  flexShrink: 0,
  alignSelf: "center",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,

  border: `2px solid ${semanticColors.actionPrimary}`,
  borderRadius: "50%",
  color: semanticColors.textPrimary,
  backgroundColor: semanticColors.backgroundSurface,
  backgroundImage:
    "linear-gradient(145deg, rgb(255 255 255 / 14%), transparent 55%, rgb(0 0 0 / 25%))",

  boxShadow: [
    "inset 0 1px 1px rgb(255 255 255 / 25%)",
    "inset 0 -2px 4px rgb(0 0 0 / 45%)",
    "0 4px 10px rgb(0 0 0 / 40%)",
  ].join(", "),

  cursor: "pointer",
  transition:
    "border-color 160ms ease, color 160ms ease, box-shadow 160ms ease, transform 100ms ease",

  selectors: {
    "&:hover:not(:disabled)": {
      color: semanticColors.actionPrimary,
      borderColor: semanticColors.actionPrimary,
      boxShadow: [
        "inset 0 1px 1px rgb(255 255 255 / 30%)",
        "inset 0 -2px 4px rgb(0 0 0 / 45%)",
        "0 4px 12px rgb(0 0 0 / 45%)",
        "0 0 12px rgb(216 181 100 / 18%)",
      ].join(", "),
    },

    "&:active:not(:disabled)": {
      color: semanticColors.actionPrimaryDark,
      borderColor: semanticColors.actionPrimaryDark,
      transform: "translateY(1px)",
      boxShadow: [
        "inset 0 2px 5px rgb(0 0 0 / 60%)",
        "inset 0 -1px 1px rgb(255 255 255 / 12%)",
        "0 1px 3px rgb(0 0 0 / 30%)",
      ].join(", "),
    },
  },

  ":focus-visible": {
    outline: `2px solid ${semanticColors.actionPrimaryLight}`,
    outlineOffset: "4px",
  },

  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",

      selectors: {
        "&:active:not(:disabled)": {
          transform: "none",
        },
      },
    },
  },
});

export const playIcon = style({
  selectors: {
    [`${playButton}:hover:not(:disabled) &`]: {
      fill: "currentColor",
    },
  },
});

export const statusFrame = style({
  boxSizing: "border-box",
  width: "18rem",
  maxWidth: "100%",
  minHeight: "4.5rem",
  margin: 0,
  padding: "0.75rem 1rem",
  border: "1px solid currentColor",
  borderRadius: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowWrap: "anywhere",
  fontSize: "0.875rem",
});
