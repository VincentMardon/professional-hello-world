import type { SampleRate } from "beep-engine";
import type { Sound } from "../types/Sound";
import { settings } from "./AudioSettings.css";
import { SampleRateSelector } from "./SampleRateSelector";
import { SoundSelector } from "./SoundSelector";

/** Parent-owned values and change callbacks for the audio selectors. */
type AudioSettingsProps = {
  /** Sound currently selected by the parent. */
  selectedSound: Sound;
  /** Receives the sound requested through the selector. */
  onSoundChange: (sound: Sound) => void;
  /** Sample rate currently selected by the parent. */
  sampleRate: SampleRate;
  /** Receives the sample rate requested through the selector. */
  onSampleRateChange: (sampleRate: SampleRate) => void;
};

/**
 * Groups the controlled sound and sample-rate selectors.
 *
 * @param props - Current selections and callbacks supplied by the parent.
 *
 * @remarks
 * Owns no selection state. Changes are forwarded through the supplied
 * callbacks, and displayed values follow subsequent parent props.
 *
 * This component does not request playback or initialize the engine.
 */
export function AudioSettings({
  selectedSound,
  onSoundChange,
  sampleRate,
  onSampleRateChange,
}: AudioSettingsProps) {
  return (
    <div className={settings}>
      <SoundSelector value={selectedSound} onChange={onSoundChange} />
      <SampleRateSelector value={sampleRate} onChange={onSampleRateChange} />
    </div>
  );
}
