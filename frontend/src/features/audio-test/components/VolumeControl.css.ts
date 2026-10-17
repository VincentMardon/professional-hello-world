import { style } from "@vanilla-extract/css";

export const volumeControl = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  margin: 0,
});

export const slider = style({
  writingMode: "vertical-lr",
  direction: "rtl",
  width: "2rem",
  height: "12rem",
  flexGrow: 1,
  margin: 0,
});
