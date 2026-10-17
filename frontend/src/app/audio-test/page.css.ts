import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
});

export const audioTestPage = style({
  boxSizing: "border-box",
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  padding: "2rem 1rem",
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.5,
  textAlign: "center",
});
