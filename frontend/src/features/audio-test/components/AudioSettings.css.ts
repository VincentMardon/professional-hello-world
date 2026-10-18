import { globalStyle, style } from "@vanilla-extract/css";

export const settings = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  width: "100%",
});

globalStyle(`${settings} > p`, {
  display: "grid",
  gridTemplateColumns: "6rem minmax(0, 1fr)",
  alignItems: "center",
  gap: "0.75rem",
  margin: 0,
  textAlign: "left",

  "@media": {
    "screen and (max-width: 30rem)": {
      gridTemplateColumns: "minmax(0, 1fr)",
      gap: "0.25rem",
    },
  },
});

globalStyle(`${settings} select`, {
  boxSizing: "border-box",
  width: "100%",
  minWidth: 0,
  padding: "0.4rem 0.5rem",
  font: "inherit",
});
