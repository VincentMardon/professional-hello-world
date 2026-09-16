import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
});

export const greeting = style({
  boxSizing: "border-box",
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.5,
  textAlign: "center",
});
