import { globalStyle, style } from "@vanilla-extract/css";

import { darkGlassFrame } from "../styles/glassFrame.css";
import { semanticColors } from "../styles/semanticColors.css";
import { title } from "./AudioTestHeader.css";
import { volumeControl } from "./VolumeControl.css";

export const panel = style([
  darkGlassFrame,
  {
    position: "relative",
    boxSizing: "border-box",
    display: "grid",
    alignItems: "stretch",
    gridTemplateColumns: "4.6rem 4px minmax(0, 1fr)",
    gridTemplateAreas: `
      "volume . controls"
      "volume . status"
      "brand . signature"
    `,
    columnGap: "2rem",
    rowGap: "1rem",
    maxWidth: "100%",
    padding: "2rem 2rem 0.3rem 2rem",

    "@media": {
      "screen and (max-width: 600px)": {
        gridTemplateAreas: `
          "volume . controls"
          "status status status"
          "brand . signature"
        `,
        columnGap: "0.75rem",
        rowGap: "1.25rem",
        padding: "1rem 0.75rem",
      },
    },
  },
]);

globalStyle(`${panel} > ${volumeControl}`, {
  gridArea: "volume",
});

export const divider = style({
  position: "absolute",
  gridColumn: "2",
  gridRow: "1 / -1",
  left: 0,
  width: "4px",

  top: "calc(-1.7rem - 0.375rem)",
  bottom: "calc(-0.375rem)",

  pointerEvents: "none",

  borderRadius: "999px",

  backgroundImage: `linear-gradient(
    to bottom,
    ${semanticColors.actionPrimaryDark},
    ${semanticColors.actionPrimaryLight} 25%,
    ${semanticColors.textPrimary} 45%,
    ${semanticColors.actionPrimary} 70%,
    ${semanticColors.actionPrimaryDark}
  )`,

  boxShadow: [
    "inset 1px 0 0 rgb(245 241 232 / 55%)",
    "inset -1px 0 0 rgb(114 86 47 / 85%)",

    "1px 1px 0 #A9854C",
    "2px 2px 0 #72562F",
    "3px 3px 0 #48351D",

    "5px 6px 5px rgb(0 0 0 / 75%)",
    "0 0 4px rgb(216 181 100 / 12%)",
  ].join(", "),

  "@media": {
    "screen and (max-width: 600px)": {
      gridRow: "1 / 2",
      top: "calc(-0.7rem - 0.375rem)",
      bottom: "-0.8rem",
    },
  },
});

export const dividerLower = style([
  divider,
  {
    display: "none",

    "@media": {
      "screen and (max-width: 600px)": {
        display: "block",
        gridRow: "3 / 4",
        top: "-0.7rem",
        bottom: "calc(-0.7rem - 0.375rem)",
      },
    },
  },
]);

export const controls = style({
  display: "flex",
  gridArea: "controls",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  minWidth: 0,
});

export const statusRegion = style({
  gridArea: "status",
  minWidth: 0,
  display: "flex",
});

export const brand = style([
  title,
  {
    gridArea: "brand",
    alignSelf: "end",
    justifySelf: "start",
    minWidth: 0,

    margin: "0 0 0.6rem",
    padding: 0,
    fontSize: "0.89rem",
    lineHeight: 1.5,
    letterSpacing: "0.13em",
    textAlign: "left",

    filter: "drop-shadow(1.5px 3px 0.45px rgb(114 86 47 / 75%))",
  },
]);

export const signature = style({
  gridArea: "signature",
  justifySelf: "end",
  minWidth: 0,
  marginTop: "0.5rem",

  fontFamily: "var(--font-audio-status), monospace",
  fontSize: "0.55rem",
  fontStyle: "italic",
  lineHeight: 1.5,
  textAlign: "right",
  color: "rgb(245 241 232 / 48%)",

  textShadow: [
    "-0.4px -0.6px 0.6px rgb(0 0 0 / 95%)",
    "0.4px 0.6px 0.3px rgb(245 241 232 / 18%)",
  ].join(", "),
});
