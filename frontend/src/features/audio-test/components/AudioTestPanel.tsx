"use client";

import { useAudioTest } from "../hooks/useAudioTest";
import { PlaybackControls } from "./PlaybackControls";
import { SampleRateSelector } from "./SampleRateSelector";
import { SoundSelector } from "./SoundSelector";
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
      <SoundSelector value={selectedSound} onChange={setSelectedSound} />
      <SampleRateSelector value={sampleRate} onChange={setSampleRate} />
      <VolumeControl value={volume} onChange={changeVolume} />
      <PlaybackControls isReady={isReady} status={status} onPlay={play} />
    </div>
  );
}
