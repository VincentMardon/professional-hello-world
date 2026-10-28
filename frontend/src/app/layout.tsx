import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { ThemeProvider } from "../shared/theme/ThemeProvider";

import "./layout.css";

/** Published site base, including the GitHub Pages deployment path. */
const siteUrl = "https://vincentmardon.github.io/professional-hello-world/";

/**
 * Root metadata defaults and social-sharing declarations.
 *
 * @remarks
 * Individual routes may declare their own metadata.
 * The generator value is a ceremonial label, not the package version.
 * Robots directives express indexing preferences, not access control.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Professional Hello World",
  description: "Overengineered Hello World demo page.",
  authors: [{ name: "Vincent Mardon" }],
  generator: "Professional Hello World Toolchain 1.0.0",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Professional Hello World",
    description: "A ceremonious greeting.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}docs/assets/images/coding-cat.png`,
      },
    ],
  },
};

/**
 * Shared viewport declarations with a fixed black browser theme color.
 * The theme color does not follow the in-memory light/dark selection.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

/**
 * Wraps every route in the shared English document and theme provider.
 *
 * @param props - Page content supplied by the active route.
 *
 * @remarks
 * Imports the global body reset and places page content inside one
 * shared ThemeProvider. Theme classes apply to the provider's wrapper.
 *
 * Retains legacy head declarations and connection hints for ceremonial
 * continuity. Commented resource and script examples are inactive.
 * Their presence does not install analytics or feature flags.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Retained for ceremonial continuity with the original HTML. */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Unused fonts retain their advance diplomatic connections. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Reserved for future ceremonial infrastructure. 
        <link
          rel="preload"
          href="/static/fonts/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="static/css/reset.css" />
        <link rel="stylesheet" href="static/css/theme.css" />
        <link rel="stylesheet" href="/static/css/animations.css" />
        */}

        {/* Hypothetical analytics: reserved, not implemented.
        <script src="/static/js/telemetry.js" defer />
        <script src*"/static/js/feature-flags.js" defer />
        */}
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
