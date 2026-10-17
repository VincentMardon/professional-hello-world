"use client";

import {
  type BeepEngine,
  createBeepEngine,
  type SampleRate,
} from "beep-engine";
import { useEffect, useState } from "react";

type Sound = "startupBeep" | "crashSound";

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export default function AudioTestPage() {
  const [engine, setEngine] = useState<BeepEngine | null>(null);
  const [sampleRate, setSampleRate] = useState<SampleRate>(48000);
  const [selectedSound, setSelectedSound] = useState<Sound>("startupBeep");
  const [volume, setVolume] = useState(100);
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

  function changeVolume(value: number) {
    setVolume(value);
    engine?.setVolume(value / 100);
  }

  async function play() {
    if (!engine) {
      return;
    }

    try {
      engine.setVolume(volume / 100);
      await engine[selectedSound](sampleRate);
      setStatus(`Started ${selectedSound} at ${sampleRate} Hz.`);
    } catch (error: unknown) {
      setStatus(`Playback failed: ${errorMessage(error)}`);
    }
  }

  return (
    <main>
      <h1>BeepEngine audio test</h1>

      <p>
        <label htmlFor="sound">Sound </label>
        <select
          id="sound"
          value={selectedSound}
          onChange={(event) =>
            setSelectedSound(
              event.target.value === "crashSound"
                ? "crashSound"
                : "startupBeep",
            )
          }
        >
          <option value="startupBeep">Startup beep</option>
          <option value="crashSound">Crash sound</option>
        </select>
      </p>

      <p>
        <label htmlFor="sample-rate">Sample rate</label>
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
      </p>

      <p>
        <label htmlFor="volume">Volume: {volume}%</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={(event) => changeVolume(Number(event.target.value))}
        />
      </p>

      <button type="button" disabled={!engine} onClick={() => void play()}>
        Play
      </button>

      <p role="status">{status}</p>
    </main>
  );
}
