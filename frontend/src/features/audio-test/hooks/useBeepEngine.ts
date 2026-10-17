import { type BeepEngine, createBeepEngine } from "beep-engine";
import { useEffect, useState } from "react";
import { errorMessage } from "../../../shared/errors/errorMessage";

export function useBeepEngine() {
  const [engine, setEngine] = useState<BeepEngine | null>(null);
  const [status, setStatus] = useState("Loading BeepEngine...");

  useEffect(() => {
    let cancelled = false;

    createBeepEngine()
      .then((loadedEngine) => {
        if (!cancelled) {
          setEngine(loadedEngine);
          setStatus("Ready.");
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setStatus(`Initialization failed: ${errorMessage(error)}`);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { engine, status, setStatus };
}
