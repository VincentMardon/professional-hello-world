"use client";

import { AudioTestHeader } from "../../features/audio-test/components/AudioTestHeader";
import { PlaybackControls } from "../../features/audio-test/components/PlaybackControls";
import { SampleRateSelector } from "../../features/audio-test/components/SampleRateSelector";
import { SoundSelector } from "../../features/audio-test/components/SoundSelector";
import { VolumeControl } from "../../features/audio-test/components/VolumeControl";
import { useAudioTest } from "../../features/audio-test/hooks/useAudioTest";

export default function AudioTestPage() {
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
    <main>
      <AudioTestHeader />
      <SoundSelector value={selectedSound} onChange={setSelectedSound} />
      <SampleRateSelector value={sampleRate} onChange={setSampleRate} />
      <VolumeControl value={volume} onChange={changeVolume} />
      <PlaybackControls isReady={isReady} status={status} onPlay={play} />
    </main>
  );
}
