import { globalStyle, style } from "@vanilla-extract/css";

import { artDecoBackground } from "../../features/audio-test/styles/artDecoBackground.css";
import { semanticColors } from "../../features/audio-test/styles/semanticColors.css";

globalStyle("body", {
  margin: 0,
});

/**
 * Composes the decorative background with the audio page's layout.
 * Typography, spacing, and content alignment remain separate from the
 * reusable artwork class.
 */
export const audioTestPage = style([
  artDecoBackground,
  {
    color: semanticColors.textPrimary,
    boxSizing: "border-box",
    minHeight: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "clamp(0.75rem, 2dvh, 1.5rem)",
    fontFamily: "var(--font-audio-body), system-ui, sans-serif",
    lineHeight: 1.5,
    textAlign: "center",
  },
]);

// Use top alignment while the access form is present. Once the panel
// replaces the form, the base centered layout applies again.
globalStyle(`${audioTestPage}:has(form)`, {
  justifyContent: "flex-start",
  gap: 0,
  paddingBottom: 0,
});
