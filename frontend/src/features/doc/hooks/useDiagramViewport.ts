"use client";

import { useEffect, useRef, useState } from "react";

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

  function changeZoom(value: number) {
    setFitToWidth(false);
    setManualZoom(Math.min(300, Math.max(1, value)));
  }

  function fitWidth() {
    setFitToWidth(true);

    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }

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
