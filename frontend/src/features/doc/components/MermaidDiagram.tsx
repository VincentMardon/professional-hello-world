"use client";

import { type CSSProperties, useEffect, useId, useRef, useState } from "react";

import { useTheme } from "../../../shared/theme/ThemeProvider";
import {
  diagramFigure,
  diagramViewport,
  zoomControls,
} from "./MermaidDiagram.css";

let renderQueue: Promise<void> = Promise.resolve();
let nextDiagramId = 0;

export function MermaidDiagram({ source }: { source: string }) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLElement>(null);
  const [zoom, setZoom] = useState(100);
  const zoomId = useId();

  function changeZoom(value: number) {
    setZoom(Math.min(300, Math.max(25, value)));
  }

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

        const svgElement = document.importNode(parsed.documentElement, true);
        const viewBox = svgElement
          .getAttribute("viewBox")
          ?.trim()
          .split(/[\s,]+/)
          .map(Number);

        const naturalWidth = viewBox?.[2];

        if (!naturalWidth || !Number.isFinite(naturalWidth)) {
          throw new Error("The diagram has no usable reference width.");
        }

        svgElement.style.removeProperty("max-width");
        svgElement.style.removeProperty("width");
        svgElement.style.removeProperty("height");
        svgElement.style.setProperty(
          "--diagram-natural-width",
          `${naturalWidth}px`,
        );

        container.replaceChildren(svgElement);
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
    <figure className={diagramFigure}>
      <fieldset className={zoomControls} aria-label="Diagram zoom">
        <button
          type="button"
          aria-label="Zoom out"
          disabled={zoom === 25}
          onClick={() => changeZoom(zoom - 25)}
        >
          −
        </button>

        <input
          id={zoomId}
          type="range"
          min={25}
          max={300}
          step={5}
          value={zoom}
          aria-label="Diagram zoom"
          aria-valuetext={`${zoom}%`}
          onChange={(event) => changeZoom(Number(event.target.value))}
        />

        <output htmlFor={zoomId}>{zoom}%</output>

        <button
          type="button"
          aria-label="Zoom in"
          disabled={zoom === 300}
          onClick={() => changeZoom(zoom + 25)}
        >
          +
        </button>

        <button type="button" onClick={() => changeZoom(100)}>
          100%
        </button>
      </fieldset>

      <section
        ref={containerRef}
        className={diagramViewport}
        aria-label="Sequence diagram"
        style={{ "--diagram-zoom": zoom / 100 } as CSSProperties}
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
