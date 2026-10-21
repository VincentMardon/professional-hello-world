import { globalStyle, style } from "@vanilla-extract/css";

export const documentPage = style({
  boxSizing: "border-box",
  maxWidth: "76rem",
  minHeight: "100dvh",
  margin: "0 auto",
  padding: "clamp(1rem, 4vw, 4rem)",
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.75,
  color: "#24211c",
  backgroundColor: "#fffaf0",
  overflowWrap: "anywhere",
});

globalStyle(`${documentPage} h1`, {
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  lineHeight: 1.15,
  maxWidth: "24ch",
});

globalStyle(`${documentPage} h2`, {
  marginTop: "3rem",
  lineHeight: 1.3,
  borderBottom: "1px solid #9b7939",
  paddingBottom: "0.5rem",
});

globalStyle(`${documentPage} h3`, {
  marginTop: "2rem",
  lineHeight: 1.4,
});

globalStyle(`${documentPage} a`, {
  color: "#684a10",
  textUnderlineOffset: "0.2em",
});

globalStyle(`${documentPage} a:focus-visible`, {
  outline: "3px solid #684a10",
  outlineOffset: "4px",
});

globalStyle(`${documentPage} table`, {
  display: "block",
  maxWidth: "100%",
  overflowX: "auto",
  borderCollapse: "collapse",
  margin: "1.5rem 0",
});

globalStyle(`${documentPage} th, ${documentPage} td`, {
  border: "1px solid #b9aa8d",
  padding: "0.75rem",
  textAlign: "left",
  verticalAlign: "top",
});

globalStyle(`${documentPage} th`, {
  backgroundColor: "#eee3cb",
});

globalStyle(`${documentPage} code`, {
  fontFamily: "monospace",
  backgroundColor: "#eee3cb",
  padding: "0.1em 0.3em",
});

globalStyle(`${documentPage} pre`, {
  overflowX: "auto",
  padding: "1rem",
  backgroundColor: "#eee3cb",
});

globalStyle(`${documentPage} pre code`, {
  padding: 0,
});

globalStyle(`${documentPage} nav ul`, {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem 1.5rem",
  padding: 0,
  listStyle: "none",
});

globalStyle(`${documentPage} nav a[aria-current="page"]`, {
  fontWeight: 700,
  textDecorationThickness: "0.15em",
});
