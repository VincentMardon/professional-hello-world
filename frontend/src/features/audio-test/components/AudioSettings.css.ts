import { globalStyle, style } from "@vanilla-extract/css";
import { glassFrame } from "../styles/glassFrame.css";
import {
  PickerRestRelief,
  pickerClosing,
  pickerOpening,
  pickerOpenRelief,
} from "../styles/pickerMotion.css";
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
    backgroundColor: "rgb(8 8 8 / 65%)",
    backgroundImage: [
      "radial-gradient(ellipse at 15% 0%, rgb(245 241 232 / 8%), transparent 65%)",
      "linear-gradient(100deg, rgb(245 241 232 / 6%), transparent 45%, rgb(0 0 0 / 25%))",
    ].join(", "),

    "@media": {
      "screen and (width < 600px)": {
        padding: "1rem 0.75rem",
        gap: "1rem",
      },
    },
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
    "screen and (max-width: 600px)": {
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

// Opt into customizable select rendering only when the browser reports
// support. The TypeScript assertion below accommodates the CSS typings;
// it does not change the emitted value or provide browser support.
globalStyle(`${settings} select, ${settings} select::picker(select)`, {
  "@supports": {
    "(appearance: base-select)": {
      appearance: "base-select" as "auto",
    },
  },
});

// Style the browser-provided picker surface. Anchor sizing follows the
// select's width; placement is configured below it, without fallback
// repositioning. Internal scrolling limits the open surface's height.
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

// Replace the picker indicator with the embedded decorative SVG.
// The closed state supplies the resting orientation and shadow.
globalStyle(`${settings} select::picker-icon`, {
  content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' viewBox='0 0 16 12'%3E%3Cdefs%3E%3ClinearGradient id='gold' x2='0' y2='1'%3E%3Cstop stop-color='%23F5F1E8'/%3E%3Cstop offset='.3' stop-color='%23FEC94D'/%3E%3Cstop offset='.7' stop-color='%23D8B564'/%3E%3Cstop offset='1' stop-color='%23A9854C'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M1 1H15L8 11Z' fill='url(%23gold)'/%3E%3C/svg%3E")`,

  display: "block",
  flexShrink: 0,
  width: "16px",
  height: "12px",
  lineHeight: 0,
  alignSelf: "center",
  marginBlock: "auto",
  marginInlineStart: "auto",

  filter: PickerRestRelief,
  transformOrigin: "center",
  rotate: "0deg",
});

// The browser's open state determines the icon's static orientation.
// Animate only when no reduced-motion preference is expressed; otherwise
// the open orientation and shadow still apply without this animation.
globalStyle(`${settings} select:open::picker-icon`, {
  rotate: "180deg",
  filter: pickerOpenRelief,

  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: `${pickerOpening} 220ms ease-in-out both`,
    },
  },
});

// Enable the closing half-turn only after usePickerMotion has observed
// an opening-animation start. This avoids playing a closing animation
// on initial render. The attribute records history, not current openness.
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
    "screen and (max-width: 600px)": {
      textAlign: "left",
    },
  },
});
