"use client";

import { useAudioTest } from "../hooks/useAudioTest";
import { AudioSettings } from "./AudioSettings";
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
    <div>
      <AudioSettings
        selectedSound={selectedSound}
        onSoundChange={setSelectedSound}
        sampleRate={sampleRate}
        onSampleRateChange={setSampleRate}
      />
      <VolumeControl value={volume} onChange={changeVolume} />
      <PlaybackControls isReady={isReady} status={status} onPlay={play} />
    </div>
  );
}
