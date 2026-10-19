import { globalStyle, style } from "@vanilla-extract/css";

import { darkGlassFrame } from "../styles/glassFrame.css";
import { semanticColors } from "../styles/semanticColors.css";
import { volumeControl } from "./VolumeControl.css";

export const panel = style([
  darkGlassFrame,
  {
    boxSizing: "border-box",
    display: "grid",
    alignItems: "stretch",
    gridTemplateColumns: "4.6rem 2px minmax(0, 1fr)",
    gridTemplateAreas: `
      "volume divider controls"
      "volume divider status"
    `,
    columnGap: "2rem",
    rowGap: "1rem",
    maxWidth: "100%",
    padding: "2rem",

    "@media": {
      "screen and (max-width: 600px)": {
        gridTemplateAreas: `
          "volume divider controls"
          "status status status"
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

export const statusRegion = style({
  gridArea: "status",
  minWidth: 0,
  display: "flex",
});

export const divider = style({
  alignSelf: "stretch",
  gridArea: "divider",
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
  gridArea: "controls",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  minWidth: 0,
});
