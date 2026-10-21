import { globalStyle, style } from "@vanilla-extract/css";

import { themeColors } from "../../../shared/theme/theme.css";

export const diagramViewport = style({
  overflowX: "auto",
  padding: "1rem",
  border: `1px solid ${themeColors.tableBorder}`,
  borderRadius: "0.5rem",
  backgroundColor: themeColors.background,

  selectors: {
    "&:focus-visible": {
      outline: `3px solid ${themeColors.link}`,
      outlineOffset: "4px",
    },
  },
});

globalStyle(`${diagramViewport} svg`, {
  display: "block",
  width: "100%",
  minWidth: "48rem",
  maxWidth: "none",
  height: "auto",
});
