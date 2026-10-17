import { style } from "@vanilla-extract/css";

export const panel = style({
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr)",
  alignItems: "stretch",
  gap: "1.5rem",
  maxWidth: "100%",
});

export const controls = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  minWidth: 0,
});
