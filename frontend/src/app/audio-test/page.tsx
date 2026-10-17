"use client";

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
      <h1>BeepEngine audio test</h1>

      <SoundSelector value={selectedSound} onChange={setSelectedSound} />
      <SampleRateSelector value={sampleRate} onChange={setSampleRate} />
      <VolumeControl value={volume} onChange={changeVolume} />

      <button type="button" disabled={!isReady} onClick={() => void play()}>
        Play
      </button>

      <p role="status">{status}</p>
    </main>
  );
}
