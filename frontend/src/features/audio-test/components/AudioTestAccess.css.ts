import { style } from "@vanilla-extract/css";

import { semanticColors } from "../styles/semanticColors.css";
import { statusFrame } from "./StatusDisplay.css";

export const accessRegion = style({
  flex: "1 0 auto",
  alignSelf: "stretch",
  display: "grid",
  placeItems: "center",
  minWidth: 0,
  paddingBlock: "2rem",
});

export const accessForm = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: "1.25rem",
  width: "min(100%, 24rem)",
  margin: 0,
});

export const accessLabel = style({
  fontFamily: "var(--font-audio-subtitle), sans-serif",
  fontWeight: 500,
  fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
  lineHeight: 1.3,
  letterSpacing: "0.18rem",
  textAlign: "center",
  color: semanticColors.actionPrimary,

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
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  filter: [
    "drop-shadow(0 1px 0 #72562F)",
    "drop-shadow(0 3px 2px rgb(0 0 0 / 75%))",
    "drop-shadow(0 4px 5px rgb(216 181 100 / 20%))",
  ].join(" "),
});

export const passwordInput = style([
  statusFrame,
  {
    minWidth: 0,
    minHeight: "2.75rem",
    padding: "0.8rem 1.1rem",
    fontSize: "1rem",
    lineHeight: 1.3,
    letterSpacing: "0.2rem",
    textAlign: "center",
    caretColor: semanticColors.actionPrimaryLight,

    ":focus-visible": {
      outline: `1px solid ${semanticColors.actionPrimary}`,
      outlineOffset: "4px",
    },

    ":read-only": {
      cursor: "progress",
    },
  },
]);

export const accessMessage = style({
  margin: 0,
  minHeight: "2.6rem",
  fontFamily: "var(--font-audio-status), monospace",
  fontSize: "0.7rem",
  lineHeight: 1.3,
  textAlign: "center",
  color: semanticColors.textPrimary,
});
