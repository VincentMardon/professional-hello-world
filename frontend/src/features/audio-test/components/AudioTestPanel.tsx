"use client";

import { useAudioTest } from "../hooks/useAudioTest";
import { AudioSettings } from "./AudioSettings";
import { controls, divider, panel, statusRegion } from "./AudioTestPanel.css";
import { PlaybackControls } from "./PlaybackControls";
import { StatusDisplay } from "./StatusDisplay";
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

      <div className={divider} aria-hidden="true" />

      <div className={controls}>
        <AudioSettings
          selectedSound={selectedSound}
          onSoundChange={setSelectedSound}
          sampleRate={sampleRate}
          onSampleRateChange={setSampleRate}
        />
        <PlaybackControls isReady={isReady} onPlay={play} />
      </div>

      <div className={statusRegion}>
        <StatusDisplay status={status} />
      </div>
    </div>
  );
}
