import { globalStyle, style } from "@vanilla-extract/css";
import { glassFrame } from "../styles/glassFrame.css";
import { semanticColors } from "../styles/semanticColors.css";

export const volumeControl = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  margin: 0,
  alignSelf: "start",
  width: "4.6rem",
  flexShrink: 0,
});

export const frame = style([
  glassFrame,
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "3rem",
    padding: "1.5rem 0.8rem 0.5rem",
    boxSizing: "content-box",
    flexShrink: 0,
  },
]);

/**
 * Shared positioning area for the native range and decorative guide.
 * Their dimensions must remain coordinated for visual alignment.
 */
export const fader = style({
  position: "relative",
  width: "100%",
  height: "12rem",
  flexShrink: 0,
});

export const volumeValue = style({
  padding: "0.6rem 0 0.5rem",
  fontSize: "0.75rem",
  lineHeight: 1.2,
  fontVariantNumeric: "tabular-nums",
});

/**
 * Decorative track and fill behind the native range.
 *
 * @remarks
 * The parent frame receives --volume-level from React as a percentage.
 * The inherited value sets the fill height from the bottom.
 *
 * Vertical insets account for half the thumb's current height, aligning
 * the guide endpoints with the intended thumb-center travel.
 * Revisit this relationship when changing thumb dimensions.
 *
 * Pointer events pass through this decoration to the range input.
 */
export const guide = style({
  position: "absolute",
  inset: "0.625rem 0.375rem",
  pointerEvents: "none",

  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: "0.375rem",
    transform: "translateX(-50%)",
    borderRadius: "999px",

    backgroundColor: semanticColors.backgroundPrimary,
    boxShadow: [
      "inset 1px 0 2px rgb(0 0 0 / 85%)",
      "1px 0 0 rgb(255 255 255 / 10%)",
    ].join(", "),
  },

  "::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: "0.375rem",
    height: "var(--volume-level)",
    transform: "translateX(-50%)",
    borderRadius: "999px",

    backgroundImage: `linear-gradient(
      to right,
      ${semanticColors.actionPrimaryDark} 0%,
      ${semanticColors.actionPrimaryLight} 55%,
      ${semanticColors.textPrimary} 100%
    )`,
    boxShadow: [
      "inset 1px 0 2px rgb(0 0 0 / 85%)",
      "inset 0 2px 3px rgb(0 0 0 / 75%)",
      "inset -0.5px -0.5px 0 rgb(245 241 232 / 25%)",
    ].join(", "),
  },
});

export const graduation = style({
  position: "absolute",
  left: 0,
  right: 0,
  height: "2px",
  transform: "translateY(50%)",

  backgroundImage: [
    `linear-gradient(${semanticColors.textPrimary}, ${semanticColors.textPrimary})`,
    `linear-gradient(${semanticColors.textPrimary}, ${semanticColors.textPrimary})`,
  ].join(", "),
  backgroundSize: "0.375rem 100%",
  backgroundPosition: "left center, right center",
  backgroundRepeat: "no-repeat",
});

export const graduationMajor = style([
  graduation,
  {
    backgroundSize: "0.625rem 100%",
  },
]);

/**
 * Native interactive range overlaid on the decorative guide.
 *
 * @remarks
 * Vertical writing mode and right-to-left direction configure upward
 * progression. Native range behavior supplies value changes.
 *
 * Transparent styling exposes the custom guide beneath the control.
 * The --volume-level property affects the decoration, not the input value.
 */
export const slider = style({
  position: "absolute",
  inset: 0,
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,

  writingMode: "vertical-lr",
  direction: "rtl",
  appearance: "none",
  WebkitAppearance: "none",
  background: "transparent",
  border: 0,
  borderRadius: "inherit",
  cursor: "pointer",

  ":focus-visible": {
    outline: `2px solid ${semanticColors.actionPrimaryLight}`,
    outlineOffset: "4px",
  },
});

// Keep engine-specific native tracks transparent so the shared guide
// remains visible. Firefox's progress decoration is hidden as well.
globalStyle(`${slider}::-webkit-slider-runnable-track`, {
  width: "100%",
  height: "100%",
  background: "transparent",
  border: 0,
});

globalStyle(`${slider}::-moz-range-track`, {
  width: "100%",
  height: "100%",
  background: "transparent",
  border: 0,
});

globalStyle(`${slider}::-moz-range-progress`, {
  background: "transparent",
});

/**
 * Shared decorative thumb appearance for the engine-specific selectors.
 * Its 1.25rem height is coordinated with the guide's vertical insets.
 */
const thumb = {
  boxSizing: "border-box" as const,
  width: "2.25rem",
  height: "1.25rem",
  border: `1px solid ${semanticColors.actionPrimaryDark}`,
  borderRadius: "2px",

  backgroundColor: semanticColors.actionPrimary,
  backgroundImage: [
    "linear-gradient(to bottom, transparent 43%, rgb(35 25 10 / 85%) 44% 52%, rgb(255 255 255 / 55%) 53% 57%, transparent 58%)",
    `linear-gradient(
      183deg,
      ${semanticColors.textPrimary} 0%,
      ${semanticColors.actionPrimaryLight} 20%,
      ${semanticColors.actionPrimary} 40%,
      ${semanticColors.actionPrimaryDark} 49%,
      ${semanticColors.actionPrimaryLight} 55%,
      ${semanticColors.textPrimary} 62%,
      ${semanticColors.actionPrimary} 80%,
      ${semanticColors.actionPrimaryDark} 100%
    )`,
  ].join(", "),

  boxShadow: [
    "inset 0 1px 0 rgb(255 255 255 / 75%)",
    "inset 1px 0 0 rgb(245 241 232 / 35%)",
    "inset 0 -2px 1px rgb(0 0 0 / 45%)",
    "0 3px 4px rgb(0 0 0 / 70%)",
    "0 0 6px rgb(216 181 100 / 20%)",
  ].join(", "),

  opacity: 1,
};

// Separate rules: browsers use different thumb pseudo-elements.
globalStyle(`${slider}::-webkit-slider-thumb`, {
  ...thumb,
  WebkitAppearance: "none",
  marginLeft: "0.375rem",
});

globalStyle(`${slider}::-moz-range-thumb`, thumb);

for (const pseudo of ["::-webkit-slider-thumb", "::-moz-range-thumb"]) {
  globalStyle(
    `${slider}:hover${pseudo},
     ${slider}:active${pseudo},
     ${slider}:focus-visible${pseudo}`,
    {
      opacity: 1,
    },
  );

  globalStyle(`${slider}:active${pseudo}`, {
    boxShadow: [
      "inset 0 1px 2px rgb(0 0 0 / 40%)",
      "0 1px 2px rgb(0 0 0 / 70%)",
    ].join(", "),
  });
}

export const volumeIcon = style({
  display: "block",
  flexShrink: 0,

  filter: "drop-shadow(2px 1.5px 0.8px rgb(142 137 127 / 75%))",
});
