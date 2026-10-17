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
      <button type="button" disabled={!isReady} onClick={() => void onPlay()}>
        Play
      </button>

      <p role="status">{status}</p>
    </>
  );
}
