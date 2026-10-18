import type { SampleRate } from "beep-engine";
import type { Sound } from "../types/Sound";
import { settings } from "./AudioSettings.css";
import { SampleRateSelector } from "./SampleRateSelector";
import { SoundSelector } from "./SoundSelector";

type AudioSettingsProps = {
  selectedSound: Sound;
  onSoundChange: (sound: Sound) => void;
  sampleRate: SampleRate;
  onSampleRateChange: (sampleRate: SampleRate) => void;
};

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
