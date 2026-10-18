import { style } from "@vanilla-extract/css";

import { darkGlassFrame } from "../styles/glassFrame.css";

export const panel = style([
  darkGlassFrame,
  {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    alignItems: "stretch",
    gap: "1.5rem",
    maxWidth: "100%",
    padding: "2rem",

    "@media": {
      "screen and (max-width: 30rem)": {
        gap: "1rem",
        padding: "1rem 0.75rem",
      },
    },
  },
]);

export const controls = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  minWidth: 0,
});
