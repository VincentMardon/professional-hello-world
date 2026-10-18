import { globalStyle, style } from "@vanilla-extract/css";

import { semanticColors } from "../styles/semanticColors.css";

export const settings = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  width: "100%",
});

globalStyle(`${settings} > p`, {
  display: "grid",
  gridTemplateColumns: "6rem minmax(0, 1fr)",
  alignItems: "center",
  gap: "0.75rem",
  margin: 0,
  textAlign: "left",

  "@media": {
    "screen and (max-width: 30rem)": {
      gridTemplateColumns: "minmax(0, 1fr)",
      gap: "0.25rem",
    },
  },
});

const glassSurface = {
  color: semanticColors.textPrimary,
  border: "1px solid rgb(216 181 100 / 45%)",
  borderRadius: "0.625rem",

  backgroundColor: "rgb(20 20 20 / 55%)",
  backgroundImage: [
    "linear-gradient(135deg, rgb(255 255 255 / 12%), transparent 45%)",
    "linear-gradient(180deg, rgb(255 255 255 / 4%), rgb(0 0 0 / 12%))",
  ].join(", "),

  backdropFilter: "blur(14px)",
  boxShadow: [
    "inset 0 1px 0 rgb(255 255 255 / 25%)",
    "inset 0 -1px 0 rgb(255 255 255 / 6%)",
    "0 3px 10px rgb(0 0 0 / 25%)",
  ].join(", "),
};

globalStyle(`${settings} select`, {
  ...glassSurface,
  boxSizing: "border-box",
  width: "100%",
  minWidth: 0,
  padding: "0.5rem 0.75rem",
  font: "inherit",
  lineHeight: 1.5,
  cursor: "pointer",
});

globalStyle(`${settings} select:focus-visible`, {
  outline: `2px solid ${semanticColors.actionPrimaryLight}`,
  outlineOffset: "3px",
});

globalStyle(`${settings} select:hover`, {
  borderColor: semanticColors.actionPrimaryLight,
});

globalStyle(`${settings} select, ${settings} select::picker(select)`, {
  "@supports": {
    "(appearance: base-select)": {
      appearance: "base-select" as "auto",
    },
  },
});

globalStyle(`${settings} select::picker(select)`, {
  ...glassSurface,
  boxSizing: "border-box",

  backgroundColor: "rgb(20 20 20 / 20%)",
  backgroundImage:
    "linear-gradient(135deg, rgb(255 255 255 / 7%), transparent 55%)",
  backdropFilter: "blur(10px)",

  padding: "0.375rem",
  margin: 0,
  marginBlockStart: "0.375rem",

  inset: "auto",
  positionArea: "block-end span-inline-end",
  positionTryFallbacks: "none",
  positionTryOrder: "normal",

  maxHeight: "min(16rem, 50dvh)",
  overflowY: "auto",
});

globalStyle(`${settings} select::picker-icon`, {
  color: semanticColors.actionPrimary,
});

globalStyle(`${settings} select option`, {
  "@supports": {
    "(appearance: base-select)": {
      padding: "0.5rem 0.75rem",
      borderRadius: "0.375rem",
      backgroundColor: "transparent",
      color: semanticColors.textPrimary,
      cursor: "pointer",
    },
  },
});

globalStyle(`${settings} select option:checked`, {
  "@supports": {
    "(appearance: base-select)": {
      backgroundColor:
        "color-mix(in srgb, " +
        semanticColors.actionPrimaryLight +
        " 30%, transparent)",
      color: semanticColors.textPrimary,
    },
  },
});

globalStyle(
  `${settings} select option:not(:checked):hover,
   ${settings} select option:not(:checked):focus`,
  {
    "@supports": {
      "(appearance: base-select)": {
        backgroundColor: "rgb(220 220 220 / 25%)",
        color: semanticColors.textPrimary,
      },
    },
  },
);

globalStyle(`${settings} select option:active`, {
  "@supports": {
    "(appearance: base-select)": {
      backgroundColor:
        "color-mix(in srgb, " +
        semanticColors.actionPrimary +
        " 60%, transparent)",
      color: semanticColors.textPrimary,
    },
  },
});

globalStyle(`${settings} select option + option`, {
  "@supports": {
    "(appearance: base-select)": {
      marginBlockStart: "0.375rem",
    },
  },
});
