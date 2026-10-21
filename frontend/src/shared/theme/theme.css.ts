import { createTheme } from "@vanilla-extract/css";

export const [lightTheme, themeColors] = createTheme({
  background: "#fffaf0",
  foreground: "#24211c",
  link: "#684a10",
  border: "#9b7939",
  tableBorder: "#b9aa8d",
  surface: "#eee3cb",
});

export const darkTheme = createTheme(themeColors, {
  background: "#151719",
  foreground: "#ece5d7",
  link: "#e6c477",
  border: "#957d48",
  tableBorder: "#646057",
  surface: "#25292d",
});
