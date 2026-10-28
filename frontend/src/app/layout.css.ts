import { globalStyle } from "@vanilla-extract/css";

// Remove the browser's default body margin so page surfaces reach the edges.
// This reset does not define page colors or layout.
globalStyle("body", {
  margin: 0,
});
