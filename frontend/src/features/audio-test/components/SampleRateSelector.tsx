import type { SampleRate } from "beep-engine";

type SampleRateSelectorProps = {
  value: SampleRate;
  onChange: (sampleRate: SampleRate) => void;
};

export function SampleRateSelector({
  value,
  onChange,
}: SampleRateSelectorProps) {
  return (
    <p>
      <label htmlFor="sample-rate">Sample rate</label>
      <select
        id="sample-rate"
        value={value}
        onChange={(event) =>
          onChange(event.target.value === "44100" ? 44100 : 48000)
        }
      >
        <option value="44100">44,100 Hz</option>
        <option value="48000">48,000 Hz</option>
      </select>
    </p>
  );
}
