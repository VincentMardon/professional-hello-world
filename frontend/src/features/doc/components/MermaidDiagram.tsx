"use client";

import { type CSSProperties, useEffect, useId } from "react";
import { useTheme } from "../../../shared/theme/ThemeProvider";
import { useDiagramViewport } from "../hooks/useDiagramViewport";
import {
  closeFullscreen,
  diagramFigure,
  diagramViewport,
  viewerActions,
  zoomControls,
} from "./MermaidDiagram.css";

// Serialize initialization and rendering because Mermaid configuration is shared
// across diagram instances. Each queued render supplies its own theme.
let renderQueue: Promise<void> = Promise.resolve();
let nextDiagramId = 0;

/**
 * Renders Mermaid source with theme-aware SVG output and viewer controls.
 *
 * @param props - Component properties containing the Mermaid source.
 *
 * @remarks
 * Must be rendered beneath ThemeProvider in a React client tree.
 * Rendering is queued across instances and repeated when source or theme changes.
 * Mermaid is configured with strict security and loaded in the browser.
 *
 * A usable SVG viewBox width supplies reference for CSS-driven zoom.
 * Rendering failures produce fallback text; the source remains available
 * in a disclosure element.
 *
 * Effect cleanup prevents abandoned renders from replacing the current DOM.
 * It does not cancel Mermaid work that has already started.
 *
 * Diagram explanations and accessible Mermaid labels belong in the authored
 * document and source. Rendering alone does not establish accessibility.
 */
export function MermaidDiagram({ source }: { source: string }) {
  const { theme } = useTheme();
  const {
    figureRef,
    containerRef,
    zoom,
    fitToWidth,
    isFullscreen,
    fullscreenError,
    setNaturalWidth,
    changeZoom,
    fitWidth,
    toggleFullscreen,
  } = useDiagramViewport();

  const zoomId = useId();

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
        setNaturalWidth(naturalWidth);
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
  }, [source, theme, containerRef, setNaturalWidth]);

  return (
    <figure ref={figureRef} className={diagramFigure}>
      {isFullscreen ? (
        <button
          type="button"
          className={closeFullscreen}
          aria-label="Exit fullscreen"
          onClick={() => void toggleFullscreen()}
        >
          <span aria-hidden="true">×</span>
        </button>
      ) : null}
      <fieldset className={zoomControls} aria-label="Diagram zoom">
        <button
          type="button"
          aria-label="Zoom out"
          disabled={zoom === 1}
          onClick={() => changeZoom(zoom - 25)}
        >
          -
        </button>

        <input
          id={zoomId}
          type="range"
          min={1}
          max={300}
          step={1}
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

      <div className={viewerActions}>
        <button type="button" aria-pressed={fitToWidth} onClick={fitWidth}>
          Fit width
        </button>

        <button
          type="button"
          aria-pressed={isFullscreen}
          onClick={() => void toggleFullscreen()}
        >
          {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        </button>
      </div>

      {fullscreenError ? <p role="status">{fullscreenError}</p> : null}

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
