import { type BeepEngine, createBeepEngine } from "beep-engine";
import { useEffect, useState } from "react";
import { errorMessage } from "../../../shared/errors/errorMessage";

/**
 * Initializes BeepEngine for a mounted audio panel and exposes its status.
 *
 * @remarks
 * Initialization starts in an effect after mounting. The engine remains null
 * until the factory resolves. Initialization failures are converted into a
 * readable status message instead of being thrown from the hook.
 *
 * Ready means that a playback interface is available. It does not mean that
 * an AudioContext has already been created or that sound has been heard.
 *
 * Cleanup prevents a pending initialization result from updating an abandoned
 * hook instance. It does not cancel initialization or dispose of engine
 * resources.
 *
 * This hook must be called from a React function component or another hook.
 *
 * @returns
 * The nullable engine, the current status message, and the React status setter.
 * Consumers may use the setter to report subsequent playback results.
 *
 * @example
 * ```tsx
 * function EngineStart() {
 *   const { engine, status } = useBeepEngine();
 *
 *   return <p data-ready={engine !== null}>{status}</p>
 * }
 * ```
 */
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
