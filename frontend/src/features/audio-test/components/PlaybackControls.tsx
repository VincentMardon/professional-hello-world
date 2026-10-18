import { playButton, statusFrame } from "./PlaybackControls.css";

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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M7 4L21 12L7 20Z" />
        </svg>
      </button>

      <p className={statusFrame} role="status">
        {status}
      </p>
    </>
  );
}
