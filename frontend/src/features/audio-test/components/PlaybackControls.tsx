import { type CSSProperties, useId } from "react";
import { semanticColors } from "../styles/semanticColors.css";
import { playButton, playIcon, playRing } from "./PlaybackControls.css";

type PlaybackControlsProps = {
  isReady: boolean;
  onPlay: () => Promise<void>;
};

export function PlaybackControls({ isReady, onPlay }: PlaybackControlsProps) {
  const gradientId = useId();
  const ivoryId = `${gradientId}-ivory`;
  const goldId = `${gradientId}-gold`;

  return (
    <div className={playRing}>
      <button
        className={playButton}
        type="button"
        aria-label="Play"
        disabled={!isReady}
        onClick={() => void onPlay()}
      >
        <svg
          className={playIcon}
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
          style={
            {
              "--play-ivory": `url(#${ivoryId})`,
              "--play-gold": `url(#${goldId})`,
            } as CSSProperties
          }
        >
          <defs>
            <linearGradient id={ivoryId} x1="0%" y1="0%" x2="5%" y2="100%">
              <stop offset="10%" stopColor={semanticColors.textPrimary} />
              <stop offset="35%" stopColor="#FFFFFF" />
              <stop offset="49%" stopColor="#CEC9BD" />
              <stop offset="54%" stopColor={semanticColors.textPrimary} />
              <stop offset="62%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#CEC9BD" />
            </linearGradient>

            <linearGradient id={goldId} x1="0%" y1="0%" x2="5%" y2="100%">
              <stop offset="0%" stopColor={semanticColors.actionPrimary} />
              <stop offset="35%" stopColor={semanticColors.actionPrimaryDark} />
              <stop offset="49%" stopColor="#72562F" />
              <stop offset="55%" stopColor={semanticColors.actionPrimary} />
              <stop offset="75%" stopColor={semanticColors.actionPrimaryDark} />
              <stop offset="100%" stopColor="#72562F" />
            </linearGradient>
          </defs>

          <path d="M8 5L20 12L8 19Z" />
        </svg>
      </button>
    </div>
  );
}
