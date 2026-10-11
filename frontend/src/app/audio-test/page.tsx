"use client";

import {
  type BeepEngine,
  createBeepEngine,
  type SampleRate,
} from "beep-engine";
import { useEffect, useState } from "react";

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export default function AudioTestPage() {
  const [engine, setEngine] = useState<BeepEngine | null>(null);
  const [sampleRate, setSampleRate] = useState<SampleRate>(48000);
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

  async function play(sound: "startupBeep" | "crashSound") {
    if (!engine) {
      return;
    }

    try {
      await engine[sound](sampleRate);
      setStatus(`Started ${sound} at ${sampleRate} Hz.`);
    } catch (error: unknown) {
      setStatus(`Playback failed: ${errorMessage(error)}`);
    }
  }

  return (
    <main>
      <h1>BeepEngine audio test</h1>

      <label htmlFor="sample-rate">Sample Rate</label>
      <select
        id="sample-rate"
        value={sampleRate}
        onChange={(event) =>
          setSampleRate(event.target.value === "44100" ? 44100 : 48000)
        }
      >
        <option value="44100">44,100 Hz</option>
        <option value="48000">48,000 Hz</option>
      </select>

      <button
        type="button"
        disabled={!engine}
        onClick={() => void play("startupBeep")}
      >
        Play startup beep
      </button>

      <button
        type="button"
        disabled={!engine}
        onClick={() => void play("crashSound")}
      >
        Play crash sound
      </button>

      <p role="status">{status}</p>
    </main>
  );
}
