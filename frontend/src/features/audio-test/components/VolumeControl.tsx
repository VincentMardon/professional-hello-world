type VolumeControlProps = {
  value: number;
  onChange: (volume: number) => void;
};

export function VolumeControl({ value, onChange }: VolumeControlProps) {
  return (
    <p>
      <label htmlFor="volume">Volume: {value}%</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </p>
  );
}
