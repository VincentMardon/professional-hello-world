import { style } from "@vanilla-extract/css";

/** Reserves a one-rem logical block interval without flex shrinking. */
export const emptyLine = style({
  blockSize: "1rem",
  flexShrink: 0,
});
