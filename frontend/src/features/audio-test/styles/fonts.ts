import { Michroma, Oxanium, Space_Grotesk } from "next/font/google";

export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audio-title",
});

export const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audio-subtitle",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audio-body",
});
