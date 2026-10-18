import type { CSSProperties } from "react";

import {
  fader,
  frame,
  graduation,
  graduationMajor,
  guide,
  slider,
  volumeControl,
  volumeValue,
} from "./VolumeControl.css";

type VolumeControlProps = {
  value: number;
  onChange: (volume: number) => void;
};

export function VolumeControl({ value, onChange }: VolumeControlProps) {
  return (
    <div className={volumeControl}>
      <label htmlFor="volume">Vol.</label>

      <div
        className={frame}
        style={{ "--volume-level": `${value}%` } as CSSProperties}
      >
        <div className={fader}>
          <div className={guide} aria-hidden="true">
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((level) => (
              <span
                key={level}
                className={level % 50 === 0 ? graduationMajor : graduation}
                style={{ bottom: `${level}%` }}
              />
            ))}
          </div>

          <input
            className={slider}
            id="volume"
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            aria-label="Volume"
            aria-orientation="vertical"
            aria-valuetext={`${value}%`}
            onChange={(event) => onChange(Number(event.target.value))}
          />
        </div>

        <span className={volumeValue} aria-hidden="true">
          {value}%
        </span>
      </div>
    </div>
  );
}
