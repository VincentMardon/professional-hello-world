import { style } from "@vanilla-extract/css";

import { semanticColors } from "../styles/semanticColors.css";

export const playRing = style({
  position: "relative",
  alignSelf: "center",
  flexShrink: 0,
  display: "inline-flex",
  padding: "calc(0.5rem + 4px)",
  borderRadius: "50%",

  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    padding: "4px",
    borderRadius: "inherit",
    pointerEvents: "none",

    backgroundImage: `linear-gradient(
      183deg,
      ${semanticColors.textPrimary} 0%,
      ${semanticColors.actionPrimaryLight} 22%,
      ${semanticColors.actionPrimary} 43%,
      ${semanticColors.actionPrimaryLight} 52%,
      ${semanticColors.textPrimary} 57%,
      ${semanticColors.actionPrimary} 75%,
      ${semanticColors.actionPrimaryDark} 100%
    )`,

    maskImage: [
      "linear-gradient(#fff, #fff)",
      "linear-gradient(#fff, #fff)",
    ].join(", "),
    maskClip: "content-box, border-box",
    maskOrigin: "content-box, border-box",
    maskComposite: "exclude",
  },

  backgroundColor: "#030303",
  boxShadow: [
    "inset 1px 0 0 rgb(245 241 232 / 55%)",
    "inset -1px 0 0 rgb(114 86 47 / 85%)",

    "1px 1px 0 #A9854C",
    "2px 2px 0 #72562F",
    "3px 3px 0 #48351D",

    "5px 6px 5px rgb(0 0 0 / 75%)",
    "0 0 4px rgb(216 181 100 / 12%)",
  ].join(", "),
});

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

  border: 0,
  borderRadius: "50%",
  color: semanticColors.textPrimary,
  backgroundColor: semanticColors.backgroundSurface,
  backgroundImage: [
    "radial-gradient(ellipse at 30% 20%, rgb(245 241 232 / 16%), transparent 65%)",
    "radial-gradient(ellipse at 75% 85%, rgb(216 181 100 / 9%), transparent 60%)",
    "linear-gradient(145deg, rgb(255 255 255 / 5%), transparent 50%, rgb(0 0 0 / 20%))",
  ].join(", "),

  boxShadow: [
    "inset 0 2px 4px rgb(245 241 232 / 16%)",
    "inset 2px 0px 5px rgb(245 241 232 / 7%)",
    "inset -2px -3px 6px rgb(0 0 0 / 60%)",
    "inset 0 -1px 3px rgb(216 181 100 / 10%)",
    "0 3px 6px rgb(0 0 0 / 45%)",
  ].join(", "),

  cursor: "pointer",
  transition:
    "border-color 160ms ease, color 160ms ease, box-shadow 160ms ease, transform 100ms ease",

  selectors: {
    "&:hover:not(:disabled)": {
      color: semanticColors.actionPrimary,
    },

    "&:active:not(:disabled)": {
      color: semanticColors.actionPrimaryDark,
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
  flexShrink: 0,
  stroke: "var(--play-ivory)",

  filter: "drop-shadow(0 2px 0 #8E897F)",

  selectors: {
    [`${playButton}:hover:not(:disabled) &`]: {
      fill: "var(--play-ivory)",
      filter: [
        "drop-shadow(0 3px 0 #8E897F)",
        "drop-shadow(0 5px 2px rgb(0 0 0 / 95%))",
      ].join(" "),
    },

    [`${playButton}:active:not(:disabled) &`]: {
      stroke: "var(--play-gold)",
      fill: "var(--play-gold)",
    },
  },
});
