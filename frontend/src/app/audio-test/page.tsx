"use client";

import { SampleRateSelector } from "../../features/audio-test/components/SampleRateSelector";
import { SoundSelector } from "../../features/audio-test/components/SoundSelector";
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

      <button type="button" disabled={!isReady} onClick={() => void play()}>
        Play
      </button>

      <p role="status">{status}</p>
    </main>
  );
}
