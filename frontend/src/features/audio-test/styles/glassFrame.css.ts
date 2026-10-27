import { style } from "@vanilla-extract/css";

/**
 * Shared translucent surface treatment for audio controls.
 *
 * @remarks
 * Combines a tinted background, layered highlights, backdrop blur,
 * and shadows. It supplies visual treatment rather than layout.
 *
 * Consumers compose this class with their own dimensions and positioning.
 * The rendered effect depends on the backdrop and browser capabilities.
 */
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

/**
 * Darker framed variant composed from glassFrame.
 *
 * @remarks
 * Adds a border and replaces the radius, tint, gradients, and shadows.
 * Retains the base backdrop blur.
 *
 * Stacked outer shadows suggest a thick frame without additional
 * decorative DOM elements.
 */
export const darkGlassFrame = style([
  glassFrame,
  {
    border: "1px solid rgb(245 241 232 / 12%)",
    borderRadius: "1rem",
    backgroundColor: "rgb(8 8 8 / 65%)",

    backgroundImage: [
      "radial-gradient(ellipse at 15% 0%, rgb(245 241 232 / 5%), transparent 65%)",
      "linear-gradient(110deg, rgb(245 241 232 / 4%), transparent 45%, rgb(0 0 0 / 30%))",
    ].join(", "),

    boxShadow: [
      "inset 0 1px 0 rgb(245 241 232 / 16%)",
      "inset 1px 0 1px rgb(245 241 232 / 8%)",
      "inset 0 -2px 3px rgb(0 0 0 / 75%)",

      "0 1px 0 #242320",
      "0 3px 0 #171715",
      "0 6px 0 #10100F",
      "0 8px 0 #080808",

      "0 12px 12px rgb(0 0 0 / 75%)",
    ].join(", "),
  },
]);
