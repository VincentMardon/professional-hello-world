import type { SampleRate } from "beep-engine";
import { useState } from "react";
import { errorMessage } from "../../../shared/errors/errorMessage";
import type { Sound } from "../types/Sound";
import { useBeepEngine } from "./useBeepEngine";

export function useAudioTest() {
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

  return {
    isReady: engine !== null,
    status,
    sampleRate,
    setSampleRate,
    selectedSound,
    setSelectedSound,
    volume,
    changeVolume,
    play,
  };
}
