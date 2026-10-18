import { globalStyle, style } from "@vanilla-extract/css";
import { semanticColors } from "../../features/audio-test/styles/semanticColors.css";

globalStyle("body", {
  margin: 0,
});

export const audioTestPage = style({
  color: semanticColors.textPrimary,
  backgroundColor: semanticColors.backgroundPage,
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
