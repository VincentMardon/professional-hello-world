import { slider, volumeControl } from "./VolumeControl.css";

type VolumeControlProps = {
  value: number;
  onChange: (volume: number) => void;
};

export function VolumeControl({ value, onChange }: VolumeControlProps) {
  return (
    <div className={volumeControl}>
      <label htmlFor="volume">Vol.</label>
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
      <span aria-hidden="true">{value}%</span>
    </div>
  );
}
