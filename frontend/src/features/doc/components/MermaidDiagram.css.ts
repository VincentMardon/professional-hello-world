import { globalStyle, style } from "@vanilla-extract/css";

import { themeColors } from "../../../shared/theme/theme.css";

export const diagramFigure = style({
  margin: "1.5rem 0",
  minWidth: 0,
});

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
  width: "calc(var(--diagram-natural-width) * var(--diagram-zoom, 1))",
  minWidth: "0",
  maxWidth: "none",
  height: "auto",
});

export const zoomControls = style({
  display: "grid",
  gridTemplateColumns: "2rem minmax(0, 1fr) 5ch 2rem 3.5rem",
  alignItems: "center",
  gap: "0.375rem",
  minWidth: 0,
  margin: "0 0 0.5rem",
  padding: 0,
  border: 0,
  color: themeColors.foreground,
  fontSize: "0.75rem",
});

globalStyle(`${zoomControls} button`, {
  minWidth: 0,
  minHeight: "2rem",
  padding: "0.25rem",
  border: `1px solid ${themeColors.border}`,
  borderRadius: "0.3rem",
  color: themeColors.foreground,
  backgroundColor: themeColors.surface,
  font: "inherit",
  cursor: "pointer",
});

globalStyle(`${zoomControls} button:disabled`, {
  opacity: 0.5,
  cursor: "default",
});

globalStyle(`${zoomControls} input`, {
  width: "100%",
  minWidth: 0,
  height: "2rem",
  margin: 0,
  accentColor: themeColors.link,
});

globalStyle(`${zoomControls} output`, {
  minWidth: "5ch",
  fontVariantNumeric: "tabular-nums",
});

globalStyle(
  `${zoomControls} button:focus-visible, ${zoomControls} input:focus-visible`,
  {
    outline: `3px solid ${themeColors.link}`,
    outlineOffset: "4px",
  },
);
