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
  width: "100%",
  maxWidth: "100%",
  alignSelf: "center",
  margin: 0,
  padding: "0.55rem 1.1rem",

  color: semanticColors.textPrimary,
  border: "1px solid transparent",
  borderRadius: "0.625rem",

  backgroundImage: [
    "linear-gradient(180deg, rgb(0 0 0 / 35%), transparent 80%)",
    "linear-gradient(rgb(5 5 5 / 75%), rgb(5 5 5 / 75%))",
    "linear-gradient(135deg, rgb(245 241 232 / 18%), rgb(245 241 232 / 8%) 50%, rgb(245 241 232 / 2%))",
  ].join(", "),

  backgroundOrigin: "padding-box, padding-box, border-box",
  backgroundClip: "padding-box, padding-box, border-box",
  backgroundColor: "transparent",

  backdropFilter: "blur(8px)",

  boxShadow: [
    "inset 0 3px 5px rgb(0 0 0 / 85%)",
    "inset 2px 0 3px rgb(0 0 0 / 55%)",
    "inset 0 -1px 0 rgb(245 241 232 / 6%)",
    "0 1px 0 rgb(245 241 232 / 14%)",
    "1px 0 0 rgb(245 241 232 / 5%)",
  ].join(", "),

  overflowWrap: "anywhere",
  fontFamily: "var(--font-audio-status), monospace",
  fontSize: "0.750rem",
  lineHeight: 1,
  letterSpacing: "0.15rem",
  textAlign: "left",
});
