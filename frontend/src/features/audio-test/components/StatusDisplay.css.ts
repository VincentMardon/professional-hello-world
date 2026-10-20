import { style } from "@vanilla-extract/css";

import { semanticColors } from "../styles/semanticColors.css";

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
    "inset 0 1px 1px rgb(0 0 0 / 95%)",
    "inset 0 5px 7px rgb(0 0 0 / 90%)",
    "inset 3px 0 5px rgb(0 0 0 / 70%)",
    "inset -1px -1px 2px rgb(245 241 232 / 5%)",

    "0 1px 0 rgb(245 241 232 / 20%)",
    "1px 0 0 rgb(245 241 232 / 7%)",
  ].join(", "),

  overflowWrap: "anywhere",
  fontFamily: "var(--font-audio-status), monospace",
  fontSize: "0.750rem",
  lineHeight: 1,
  letterSpacing: "0.15rem",
  textAlign: "left",
});
