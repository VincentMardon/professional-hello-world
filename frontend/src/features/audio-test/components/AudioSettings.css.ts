import { globalStyle, style } from "@vanilla-extract/css";
import { glassFrame } from "../styles/glassFrame.css";
import { pickerClosing, pickerOpening } from "../styles/pickerMotion.css";
import { semanticColors } from "../styles/semanticColors.css";

const selectWidth = "12rem";

export const settings = style([
  glassFrame,
  {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    minWidth: 0,
    padding: "1.5rem 2rem",
    backgroundColor: "#080808",
    backgroundImage: [
      "radial-gradient(ellipse at 15% 0%, rgb(245 241 232 / 8%), transparent 65%)",
      "linear-gradient(100deg, rgb(245 241 232 / 6%), transparent 45%, rgb(0 0 0 / 25%))",
    ].join(", "),
  },
]);

globalStyle(`${settings} > p`, {
  display: "grid",
  gridTemplateColumns: "6rem minmax(0, 1fr)",
  alignItems: "center",
  columnGap: "1.25rem",
  rowGap: "0.5rem",
  margin: 0,
  textAlign: "left",

  "@media": {
    "screen and (max-width: 30rem)": {
      gridTemplateColumns: "minmax(0, 1fr)",
      columnGap: 0,
      rowGap: "0.5rem",
    },
  },
});

const glassSurface = {
  color: semanticColors.textPrimary,
  border: "1px solid transparent",
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

  backgroundImage: [
    "linear-gradient(135deg, rgb(245 241 232 / 16%), transparent 50%)",
    "linear-gradient(180deg, rgb(216 181 100 / 8%), transparent 45%, rgb(0 0 0 / 25%))",
  ].join(", "),

  boxShadow: [
    "inset 0 1px 0 rgb(245 241 232 / 40%)",
    "inset 1px 0 0 rgb(245 241 232 / 12%)",
    "inset 0 -2px 2px rgb(0 0 0 / 65%)",
    "0 3px 4px rgb(0 0 0 / 65%)",
    "0 0 5px rgb(216 181 100 / 12%)",
  ].join(", "),

  boxSizing: "border-box",
  width: selectWidth,
  maxWidth: "100%",
  minWidth: 0,
  padding: "0.625rem 0.875rem",
  font: "inherit",
  lineHeight: 1.5,
  cursor: "pointer",
});

globalStyle(`${settings} select:active, ${settings} select:open`, {
  backgroundImage: [
    "linear-gradient(180deg, rgb(0 0 0 / 35%), transparent 75%)",
    "linear-gradient(135deg, rgb(216 181 100 / 6%), transparent 55%)",
  ].join(", "),

  boxShadow: [
    "inset 0 3px 5px rgb(0 0 0 / 80%)",
    "inset 1px 0 2px rgb(0 0 0 / 45%)",
    "inset 0 -1px 0 rgb(245 241 232 / 25%)",
    "0 1px 2px rgb(0 0 0 / 45%)",
  ].join(", "),
});

globalStyle(`${settings} select:focus-visible`, {
  outline: `2px solid ${semanticColors.actionPrimaryLight}`,
  outlineOffset: "3px",
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
  backgroundImage: [
    "linear-gradient(135deg, rgb(245 241 232 / 10%), transparent 55%)",
    "linear-gradient(180deg, rgb(216 181 100 / 8%), transparent 65%)",
  ].join(", "),
  boxShadow: [
    "inset 0 1px 0 rgb(245 241 232 / 40%)",
    "inset 1px 0 0 rgb(245 241 232 / 14%)",
    "inset -1px 0 0 rgb(216 181 100 / 20%)",
    "0 6px 12px rgb(0 0 0 / 60%)",
    "0 0 8px rgb(216 181 100 / 16%)",
  ].join(", "),
  backdropFilter: "blur(10px)",

  width: "anchor-size(width)",
  minWidth: "anchor-size(width)",
  maxWidth: "anchor-size(width)",
  padding: "0.5rem",
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
  color: semanticColors.actionPrimaryLight,

  filter: [
    "drop-shadow(0 1px 0 rgb(169 133 76 / 80%))",
    "drop-shadow(0 0 3px rgb(216 181 100 / 30%))",
  ].join(" "),

  transformOrigin: "center",
  rotate: "0deg",
});

globalStyle(`${settings} select:open::picker-icon`, {
  rotate: "180deg",

  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: `${pickerOpening} 220ms ease-in-out both`,
    },
  },
});

globalStyle(
  `${settings} select[data-picker-animated="true"]:not(:open)::picker-icon`,
  {
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        animation: `${pickerClosing} 220ms ease-in-out both`,
      },
    },
  },
);

globalStyle(`${settings} select option`, {
  "@supports": {
    "(appearance: base-select)": {
      padding: "0.625rem 0.875rem",
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

globalStyle(`${settings} label[for="sound"]`, {
  textAlign: "right",

  "@media": {
    "screen and (max-width: 30rem)": {
      textAlign: "left",
    },
  },
});
