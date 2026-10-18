import { keyframes } from "@vanilla-extract/css";

export const pickerOpening = keyframes({
  from: { rotate: "0deg" },
  to: { rotate: "180deg" },
});

export const pickerClosing = keyframes({
  from: { rotate: "180deg" },
  to: { rotate: "360deg" },
});
