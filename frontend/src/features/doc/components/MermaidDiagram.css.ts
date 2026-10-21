import { globalStyle, style } from "@vanilla-extract/css";

import { themeColors } from "../../../shared/theme/theme.css";

export const diagramFigure = style({
  margin: "1.5rem 0",
  minWidth: 0,

  selectors: {
    "&:fullscreen": {
      position: "relative",
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      margin: 0,
      padding: "1rem",
      paddingTop: "4rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      overflow: "auto",
      color: themeColors.foreground,
      backgroundColor: themeColors.background,
    },
  },
});

export const diagramViewport = style({
  overflow: "auto",
  padding: "1rem",
  border: `1px solid ${themeColors.tableBorder}`,
  borderRadius: "0.5rem",
  backgroundColor: themeColors.background,

  selectors: {
    "&:focus-visible": {
      outline: `3px solid ${themeColors.link}`,
      outlineOffset: "4px",
    },

    [`${diagramFigure}:fullscreen &`]: {
      flex: "1 1 0",
      minHeight: 0,
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

export const viewerActions = style({
  display: "flex",
  flexWrap: "wrap",
  flexShrink: 0,
  gap: "0.5rem",
  marginBottom: "0.5rem",
  fontSize: "0.75rem",
});

globalStyle(`${viewerActions} button`, {
  minHeight: "2rem",
  padding: "0.25rem 0.5rem",
  border: `1px solid ${themeColors.border}`,
  borderRadius: "0.3rem",
  color: themeColors.foreground,
  backgroundColor: themeColors.surface,
  font: "inherit",
  cursor: "pointer",
});

globalStyle(`${viewerActions} button[aria-pressed="true"]`, {
  boxShadow: `inset 0 0 0 1px ${themeColors.link}`,
});

globalStyle(`${viewerActions} button:focus-visible`, {
  outline: `3px solid ${themeColors.link}`,
});

globalStyle(`${diagramFigure}:fullscreen details`, {
  flexShrink: 0,
  maxHeight: "25dvh",
  overflow: "auto",
});

export const closeFullscreen = style({
  position: "absolute",
  top: "0.75rem",
  right: "0.75rem",
  display: "grid",
  placeItems: "center",
  width: "2.75rem",
  height: "2.75rem",
  padding: 0,
  border: `1px solid ${themeColors.border}`,
  borderRadius: "0.4rem",
  color: themeColors.foreground,
  backgroundColor: themeColors.surface,
  fontSize: "1.75rem",
  lineHeight: 1,
  cursor: "pointer",
  zIndex: 1,

  selectors: {
    "&:focus-visible": {
      outline: `3px solid ${themeColors.link}`,
      outlineOffset: "3px",
    },
  },
});
