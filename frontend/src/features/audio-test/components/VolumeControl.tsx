import { type CSSProperties, useId } from "react";
import { semanticColors } from "../styles/semanticColors.css";
import {
  fader,
  frame,
  graduation,
  graduationMajor,
  guide,
  slider,
  volumeControl,
  volumeIcon,
  volumeValue,
} from "./VolumeControl.css";

type VolumeControlProps = {
  value: number;
  onChange: (volume: number) => void;
};

export function VolumeControl({ value, onChange }: VolumeControlProps) {
  const volumeGradientId = useId();

  return (
    <div className={volumeControl}>
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

      <svg
        className={volumeIcon}
        width="40"
        height="24"
        viewBox="0 0 40 24"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient
            id={volumeGradientId}
            x1="0%"
            y1="0%"
            x2="5%"
            y2="100%"
          >
            <stop offset="10%" stopColor={semanticColors.textPrimary} />
            <stop offset="35%" stopColor="#FFFFFF" />
            <stop offset="49%" stopColor="#CEC9BD" />
            <stop offset="54%" stopColor={semanticColors.textPrimary} />
            <stop offset="62%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#CEC9BD" />
          </linearGradient>
        </defs>

        <path
          d="M4 18L36 5V18Z"
          fill={`url(#${volumeGradientId})`}
          stroke={`url(#${volumeGradientId})`}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
