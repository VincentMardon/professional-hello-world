import { style } from "@vanilla-extract/css";

export const playButton = style({
  width: "3.5rem",
  height: "3.5rem",
  flexShrink: 0,
  alignSelf: "center",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  border: "1px solid currentColor",
  borderRadius: "50%",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",

  ":focus-visible": {
    outline: "3px solid currentColor",
    outlineOffset: "4px",
  },

  ":disabled": {
    opacity: 0.4,
    cursor: "not-allowed",
  },
});

export const statusFrame = style({
  boxSizing: "border-box",
  width: "18rem",
  maxWidth: "100%",
  minHeight: "4.5rem",
  margin: 0,
  padding: "0.75rem 1rem",
  border: "1px solid currentColor",
  borderRadius: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowWrap: "anywhere",
  fontSize: "0.875rem",
});
