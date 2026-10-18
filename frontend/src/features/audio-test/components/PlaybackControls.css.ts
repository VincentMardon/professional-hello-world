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
