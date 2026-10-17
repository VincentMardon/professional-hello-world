"use client";

import { useAudioTest } from "../hooks/useAudioTest";
import { AudioSettings } from "./AudioSettings";
import { controls, panel } from "./AudioTestPanel.css";
import { PlaybackControls } from "./PlaybackControls";
import { VolumeControl } from "./VolumeControl";

export function AudioTestPanel() {
  const {
    isReady,
    status,
    sampleRate,
    setSampleRate,
    selectedSound,
    setSelectedSound,
    volume,
    changeVolume,
    play,
  } = useAudioTest();

  return (
    <div className={panel}>
      <VolumeControl value={volume} onChange={changeVolume} />

      <div className={controls}>
        <AudioSettings
          selectedSound={selectedSound}
          onSoundChange={setSelectedSound}
          sampleRate={sampleRate}
          onSampleRateChange={setSampleRate}
        />
        <PlaybackControls isReady={isReady} status={status} onPlay={play} />
      </div>
    </div>
  );
}
