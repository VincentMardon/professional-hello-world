import type { SampleRate } from "beep-engine";
import { useState } from "react";
import { errorMessage } from "../../../shared/errors/errorMessage";
import type { Sound } from "../types/Sound";
import { useBeepEngine } from "./useBeepEngine";

/**
 * Coordinates the audio panel's settings, readiness, and playback requests.
 *
 * @remarks
 * Each hook instance owns its selection and volume state. Defaults are
 * startupBeep, 48000 Hz, and 100 percent volume.
 *
 * Readiness means that useBeepEngine has supplied a playback interface.
 * It does not confirm that audio output exists or has been heard.
 *
 * Call play from a user interaction so the engine can request browser audio
 * access. A request made before initialization completes is ignored.
 *
 * Playback uses the settings captured by that invocation. A successful
 * promise updates the status to "Started"; it does not report sound completion.
 * Playback errors are converted into status messages.
 *
 * Volume changes update local state and, when available, the engine's shared
 * gain. They can therefore affect sounds that are already playing.
 *
 * Settings are held in memory for this mounted instance and are not persisted.
 * This hook must be called from a React function component or another hook.
 *
 * @returns
 * Readiness and status, selected sound and sample rate with their setters,
 * volume with its change handler, and the asynchronous playback command.
 */
export function useAudioTest() {
  const { engine, status, setStatus } = useBeepEngine();
  const [sampleRate, setSampleRate] = useState<SampleRate>(48000);
  const [selectedSound, setSelectedSound] = useState<Sound>("startupBeep");
  const [volume, setVolume] = useState(100);

  /**
   * Stores a percentage and forwards its normalized value to the ready engine.
   *
   * @param value - Expected volume percentage from 0 to 100.
   *
   * @remarks
   * This handler does not clamp or validate its argument. The calling control
   * is responsible for providing a value in the expected range.
   * Before readiness, only local state changes; play reapplies the stored value.
   */
  function changeVolume(value: number) {
    setVolume(value);
    engine?.setVolume(value / 100);
  }

  /**
   * Requests the selected sound using this invocation's settings.
   *
   * @remarks
   * Requests are not serialized. Concurrent calls may overlap, and their
   * completion order determines subsequent status updates.
   *
   * @returns
   * A promise that settles after the request and its status handling.
   * Handled engine failures are reported through status rather than rethrown.
   */
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
