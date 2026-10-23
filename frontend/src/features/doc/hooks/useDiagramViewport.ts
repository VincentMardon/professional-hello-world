"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Coordinates one diagram's zoom, width fitting, and native fullscreen state.
 *
 * @remarks
 * Attach figureRef to the fullscreen figure and containerRef to its viewport.
 * After rendering an SVG, supply its reference width through setNaturalWidth.
 *
 * Zoom is expressed as a percentage. This hook calculates values but does
 * not resize the SVG; the consuming component and its styles apply them.
 *
 * Fit mode follows viewport measurements through ResizeObserver.
 * Manual zoom disables fitting. Fitted zoom is rounded down and constrained
 * to 1-300 percent, so extreme diagrams may still require scrolling.
 *
 * Fullscreen state follows browser fullscreenchange events rather than
 * assuming that a request succeeded. Request failures become error text.
 *
 * Cleanup disconnects the observer and removes the fullscreen listener.
 * It does not cancel an outstanding fullscreen request.
 *
 * This hook requires a React client component and browser ResizeObserver.
 *
 * @returns
 * Element refs, effective zoom and fitting state, fullscreen state and error,
 * the reference-width setter, and commands for the viewer controls.
 */
export function useDiagramViewport() {
  const figureRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const [manualZoom, setManualZoom] = useState(100);
  const [fitToWidth, setFitToWidth] = useState(false);
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [availableWidth, setAvailableWidth] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setAvailableWidth(entry.contentRect.width);
      }
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function updateFullscreen() {
      setIsFullscreen(document.fullscreenElement === figureRef.current);
    }

    document.addEventListener("fullscreenchange", updateFullscreen);

    return () => {
      document.removeEventListener("fullscreenchange", updateFullscreen);
    };
  }, []);

  const fittedZoom =
    naturalWidth > 0 && availableWidth > 0
      ? Math.min(
          300,
          Math.max(1, Math.floor((availableWidth / naturalWidth) * 100)),
        )
      : 100;

  const zoom = fitToWidth ? fittedZoom : manualZoom;

  /**
   * Leaves fit mode and stores a manual zoom percentage.
   *
   * @param value - A finite percentage, constrained here to 1-300.
   *
   * @remarks
   * Values are not rounded. Non-finite input is outside this command's contract.
   */
  function changeZoom(value: number) {
    setFitToWidth(false);
    setManualZoom(Math.min(300, Math.max(1, value)));
  }

  /**
   * Enables responsive width fitting and resets horizontal scroll.
   *
   * @remarks
   * Fitting uses the latest measured viewport and SVG reference widths.
   * Until both measurements are positive, the effective zoom is 100 percent.
   */
  function fitWidth() {
    setFitToWidth(true);

    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }

  /**
   * Requests fullscreen for this figure, or exits when it already owns it.
   *
   * @remarks
   * Invoke from a user interaction. The browser controls availability and
   * permission. Missing figures are ignored; unsupported or rejected requests
   * produce fullscreenError text rather than being rethrown.
   *
   * @returns A promise that settles after request handling.
   */
  async function toggleFullscreen() {
    const figure = figureRef.current;

    if (!figure) return;

    setFullscreenError("");

    try {
      if (document.fullscreenElement === figure) {
        await document.exitFullscreen();
      } else {
        if (
          !document.fullscreenEnabled ||
          typeof figure.requestFullscreen !== "function"
        ) {
          setFullscreenError(
            "Fullscreen is unavailable in this browser or context.",
          );
          return;
        }

        await figure.requestFullscreen();
      }
    } catch {
      setFullscreenError("The fullscreen request could not be completed.");
    }
  }

  return {
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
  };
}
