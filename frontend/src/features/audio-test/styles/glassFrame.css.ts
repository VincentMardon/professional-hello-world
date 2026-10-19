import { style } from "@vanilla-extract/css";

export const glassFrame = style({
  borderRadius: "0.65rem",

  backgroundColor: "rgb(20 20 20 / 55%)",
  backgroundImage: [
    "radial-gradient(ellipse at 15% 0%, rgb(245 241 232 / 8%), transparent 65%)",
    "linear-gradient(100deg, rgb(245 241 232 / 6%), transparent 45%, rgb(0 0 0 / 30%))",
  ].join(", "),
  backdropFilter: "blur(10px)",

  boxShadow: [
    "inset 1px 0 1px rgb(245 241 232 / 18%)",
    "inset -1px 0 1px rgb(245 241 232 / 12%)",
    "inset 0 1px 1px rgb(245 241 232 / 8%)",
    "inset 0 -2px 4px rgb(0 0 0 / 45%)",
    "0 3px 8px rgb(0 0 0 / 35%)",
  ].join(", "),
});

export const darkGlassFrame = style([
  glassFrame,
  {
    border: "1px solid rgb(245 241 232 / 12%)",
    borderRadius: "1rem",
    backgroundColor: "rgb(8 8 8 / 85%)",

    backgroundImage: [
      "radial-gradient(ellipse at 15% 0%, rgb(245 241 232 / 5%), transparent 65%)",
      "linear-gradient(110deg, rgb(245 241 232 / 4%), transparent 45%, rgb(0 0 0 / 30%))",
    ].join(", "),

    boxShadow: [
      "inset 1px 0 1px rgb(245 241 232 / 10%)",
      "inset -1px 0 1px rgb(245 241 232 / 7%)",
      "inset 0 1px 1px rgb(245 241 232 / 8%)",
      "inset 0 -2px 5px rgb(0 0 0 / 65%)",
      "0 8px 20px rgb(0 0 0 / 55%)",
    ].join(", "),
  },
]);
