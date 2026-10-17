"use client";

import type { SampleRate } from "beep-engine";
import { useState } from "react";

import { useBeepEngine } from "../../features/audio-test/hooks/useBeepEngine";
import type { Sound } from "../../features/audio-test/types/Sound";
import { errorMessage } from "../../shared/errors/errorMessage";

export default function AudioTestPage() {
  const { engine, status, setStatus } = useBeepEngine();
  const [sampleRate, setSampleRate] = useState<SampleRate>(48000);
  const [selectedSound, setSelectedSound] = useState<Sound>("startupBeep");
  const [volume, setVolume] = useState(100);

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
