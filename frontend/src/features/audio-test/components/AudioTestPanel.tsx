"use client";

import { useAudioTest } from "../hooks/useAudioTest";
import { AudioSettings } from "./AudioSettings";
import {
  brand,
  controls,
  divider,
  dividerLower,
  panel,
  signature,
  statusRegion,
} from "./AudioTestPanel.css";
import { PlaybackControls } from "./PlaybackControls";
import { StatusDisplay } from "./StatusDisplay";
import { VolumeControl } from "./VolumeControl";

/**
 * Connects the audio hook to the listening panel's controls and status display.
 *
 * @remarks
 * Each mounted panel calls useAudioTest for its settings, readiness, playback
 * command, and status. Child controls receive values and callbacks rather
 * than maintaining separate copies of those settings.
 *
 * Playback availability follows the hook's readiness flag. Settings and
 * volume controls remain available while initialization is pending.
 *
 * The hook handles engine interaction and playback errors. This component
 * composes the interface; it does not create audio resources directly.
 *
 * Decorative dividers are excluded from the accessibility tree.
 */
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
      <div className={dividerLower} aria-hidden="true" />

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

      <p className={brand}>
        Beep
        <br />
        Engine
      </p>

      <p className={signature}>
        Overengineered by:
        <br />
        &laquo; <strong>Les Productions Majeures</strong> &raquo;
        <br />
        Made by a <strong>real</strong> professional
      </p>
    </div>
  );
}
