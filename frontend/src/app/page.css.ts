import { globalStyle, style } from "@vanilla-extract/css";

/**
 * Centers the homepage's content within at least one dynamic viewport height.
 * Supplies layout and typography without owning the greeting's wording.
 */
export const greeting = style({
  boxSizing: "border-box",
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",
  alignItems: "center",
  padding: "2rem",
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.5,
  textAlign: "center",
});

/**
 * Keeps the documentation entry point at the viewport's lower-right corner,
 * independently of the centered greeting's flex layout.
 */
export const documentationNav = style({
  position: "fixed",
  right: "1rem",
  bottom: "1rem",
  fontSize: "0.75rem",
  lineHeight: 1.5,
});

globalStyle(`${documentationNav} a`, {
  color: "inherit",
  textUnderlineOffset: "0.2em",
});

globalStyle(`${documentationNav} a:focus-visible`, {
  outline: "2px solid currentColor",
  outlineOffset: "4px",
});
