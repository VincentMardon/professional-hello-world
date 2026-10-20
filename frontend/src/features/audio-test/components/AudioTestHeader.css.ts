import { style } from "@vanilla-extract/css";

import { semanticColors } from "../styles/semanticColors.css";

const ornament = `
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 800 180" preserveAspectRatio="none">
  <defs>
    <g id="branch">
      <g fill="none" stroke="white"
         stroke-linecap="round" stroke-linejoin="round">
        <path
          stroke-width="2"
          d="M300 12H82Q60 12 60 34V52
             Q18 52 18 94V146H100"
        />
        <path
          stroke-width="1.5"
          d="M275 20H94Q72 20 72 42
             C72 84 28 80 28 112
             C28 138 62 142 66 122
             C70 105 48 102 46 116"
        />
        <path
          stroke-width="2"
          d="M20 150C36 134 52 96 48 65
             C45 38 26 24 20 36
             C9 58 87 83 110 50
             C124 28 101 17 91 31
             C83 44 101 54 106 40"
        />
        <path
          stroke-width="1.5"
          d="M60 53C88 76 126 73 145 47
             C155 33 140 25 133 35
             C128 43 136 51 142 45"
        />
        <path
          stroke-width="1.5"
          d="M29 146C48 164 92 164 126 153"
        />
      </g>

      <g fill="white">
        <path d="M58 65Q28 55 33 35Q53 39 58 65Z"/>
        <path d="M58 65Q57 35 75 31Q82 51 58 65Z"/>
        <path d="M32 133Q10 120 14 105Q31 108 32 133Z"/>
        <path d="M32 133Q36 110 51 108Q55 125 32 133Z"/>
      </g>
    </g>
  </defs>

  <use href="#branch"/>
  <use href="#branch" transform="translate(800 0) scale(-1 1)"/>
</svg>
`;

export const title = style({
  margin: 0,
  paddingBlock: "0.6em 0.18em",
  fontFamily: "var(--font-audio-title), sans-serif",
  fontWeight: 400,
  fontSize: "clamp(1.3rem, min(4vw, 6dvh), 3rem)",
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
  margin: "0.4rem 0 0",
  fontFamily: "var(--font-audio-subtitle), sans-serif",
  fontWeight: 500,
  fontSize: "clamp(0.85rem, min(2.2vw, 3dvh), 1.35rem)",
  lineHeight: 1.3,
  letterSpacing: "clamp(0.12rem, 0.6vw, 0.4rem)",
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

export const headingFrame = style({
  position: "relative",
  boxSizing: "border-box",
  padding: "1.1rem clamp(2.5rem, 8vw, 5rem) 1rem",
});

export const headingOrnament = style({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",

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

  maskImage: `url("data:image/svg+xml,${encodeURIComponent(ornament)}")`,
  maskSize: "100% 100%",
  maskPosition: "center",
  maskRepeat: "no-repeat",

  filter: [
    "drop-shadow(0 1px 0 #72562F)",
    "drop-shadow(0 3px 2px rgb(0 0 0 / 75%))",
  ].join(" "),
});

export const header = style({
  position: "relative",
  isolation: "isolate",
  width: "min(100%, 46rem)",
  flexShrink: 0,

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
