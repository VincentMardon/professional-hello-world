"use client";

import { useEffect, useRef } from "react";

import { useTheme } from "../../../shared/theme/ThemeProvider";
import { diagramViewport } from "./MermaidDiagram.css";

let renderQueue: Promise<void> = Promise.resolve();
let nextDiagramId = 0;

export function MermaidDiagram({ source }: { source: string }) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let active = true;

    container.textContent = "Preparing the diagram projector…";

    renderQueue = renderQueue.then(async () => {
      if (!active) return;

      try {
        const { default: mermaid } = await import("mermaid");

        if (!active) return;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          suppressErrorRendering: true,
          theme: theme === "dark" ? "dark" : "default",
        });
        nextDiagramId += 1;

        const { svg } = await mermaid.render(
          `phw-mermaid-${nextDiagramId}`,
          source,
        );

        if (!active) return;

        const parsed = new DOMParser().parseFromString(svg, "image/svg+xml");

        if (parsed.documentElement.localName !== "svg") {
          throw new Error("The projector did not produce an SVG.");
        }

        container.replaceChildren(
          document.importNode(parsed.documentElement, true),
        );
      } catch {
        if (active) {
          container.textContent =
            "Diagram unavailable. Its source and explanation remain below.";
        }
      }
    });

    return () => {
      active = false;
    };
  }, [source, theme]);

  return (
    <figure>
      <section
        ref={containerRef}
        className={diagramViewport}
        aria-label="Sequence diagram"
        // biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users need to focus this horizontally scrollable diagram.
        tabIndex={0}
      />

      <details>
        <summary>Mermaid source</summary>
        <pre>
          <code>{source}</code>
        </pre>
      </details>
    </figure>
  );
}
