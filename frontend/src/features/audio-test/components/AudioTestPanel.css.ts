import { style } from "@vanilla-extract/css";

import { darkGlassFrame } from "../styles/glassFrame.css";
import { semanticColors } from "../styles/semanticColors.css";

export const panel = style([
  darkGlassFrame,
  {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "auto 2px minmax(0, 1fr)",
    alignItems: "stretch",
    gap: "2rem",
    maxWidth: "100%",
    padding: "2rem",

    "@media": {
      "screen and (max-width: 30rem)": {
        gap: "1.5rem",
        padding: "1rem 0.75rem",
      },
    },
  },
]);

export const divider = style({
  alignSelf: "stretch",
  marginBlock: "0.5rem",
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
    "1px 0 1px rgb(0 0 0 / 65%)",
    "0 0 5px rgb(216 181 100 / 18%)",
  ].join(", "),
});

export const controls = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  minWidth: 0,
});
