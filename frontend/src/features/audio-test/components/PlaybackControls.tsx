import { playButton, playIcon, statusFrame } from "./PlaybackControls.css";

type PlaybackControlsProps = {
  isReady: boolean;
  status: string;
  onPlay: () => Promise<void>;
};

export function PlaybackControls({
  isReady,
  status,
  onPlay,
}: PlaybackControlsProps) {
  return (
    <>
      <button
        className={playButton}
        type="button"
        aria-label="Play"
        disabled={!isReady}
        onClick={() => void onPlay()}
      >
        <svg
          className={playIcon}
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 5L20 12L8 19Z" />
        </svg>
      </button>

      <p className={statusFrame} role="status">
        {status}
      </p>
    </>
  );
}
