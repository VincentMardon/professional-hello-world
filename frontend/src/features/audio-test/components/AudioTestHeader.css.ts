import { style } from "@vanilla-extract/css";

import { semanticColors } from "../styles/semanticColors.css";

export const title = style({
  margin: 0,
  paddingBlock: "0.08em 0.18em",
  fontFamily: "var(--font-audio-title), sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1.75rem, 5vw, 4.25rem)",
  lineHeight: 1.2,
  letterSpacing: "0.12rem",
  color: semanticColors.actionPrimary,

  filter: [
    "drop-shadow(0 2px 0 #72562F)",
    "drop-shadow(0 4px 2px rgb(0 0 0 / 80%))",
    "drop-shadow(0 5px 6px rgb(216 181 100 / 25%))",
  ].join(" "),

  "@supports": {
    "(background-clip: text) or (-webkit-background-clip: text)": {
      backgroundImage: `linear-gradient(
            183deg,
            ${semanticColors.textPrimary} 0%,
            ${semanticColors.actionPrimaryLight} 22%,
            ${semanticColors.actionPrimary} 43%,
            ${semanticColors.actionPrimaryLight} 52%,
            ${semanticColors.textPrimary} 57%,
            ${semanticColors.actionPrimary} 72%,
            ${semanticColors.actionPrimaryDark} 100%
        )`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
});

export const subtitle = style({
  margin: "0.75rem 0 0",
  fontFamily: "var(--font-audio-subtitle), sans-serif",
  fontWeight: 500,
  fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
  lineHeight: 1.3,
  letterSpacing: "0.5rem",
  color: semanticColors.textPrimary,

  filter: [
    "drop-shadow(0 2px 0 #625E56)",
    "drop-shadow(0 3px 1px rgb(0 0 0 / 75%))",
    "drop-shadow(0 4px 5px rgb(245 241 232 / 24%))",
  ].join(" "),

  "@supports": {
    "(background-clip: text) or (-webkit-background-clip: text)": {
      backgroundImage: `linear-gradient(
            183deg,
            ${semanticColors.textPrimary} 10%,
            #FFFFFF 35%,
            #CEC9BD 49%,
            ${semanticColors.textPrimary} 54%,
            #FFFFFF 62%,
            #CEC9BD 100%
        )`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
});

export const header = style({
  position: "relative",
  isolation: "isolate",

  "::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: -1,
    pointerEvents: "none",

    backgroundImage: `radial-gradient(
            ellipse 40% 40% at 40% 70%,
            rgb(245 241 232 / 12%) 0%,
            rgb(245 241 232 / 8%) 30%,
            rgb(245 241 232 / 4%) 65%,
            transparent 100%
        )`,
  },

  "::after": {
    content: '""',
    display: "block",
    width: "85%",
    maxWidth: "36rem",
    height: "3px",
    margin: "1.5rem auto 0",
    borderRadius: "999px",

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

    filter: [
      "drop-shadow(0 2px 0 #72562F)",
      "drop-shadow(0 4px 2px rgb(0 0 0 / 80%))",
      "drop-shadow(0 5px 6px rgb(216 181 100 / 22%))",
    ].join(" "),
  },
});
