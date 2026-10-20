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
  gap: "1rem",
  padding: "2rem 1rem",
  fontFamily: "var(--font-audio-body), system-ui, sans-serif",
  lineHeight: 1.5,
  textAlign: "center",

  "@media": {
    "screen and (width > 768px)": {
      justifyContent: "flex-start",
      paddingTop: "3rem",
    },
  },
});

globalStyle(`${audioTestPage}:has(form)`, {
  justifyContent: "flex-start",
  gap: 0,
  paddingBottom: 0,
});
