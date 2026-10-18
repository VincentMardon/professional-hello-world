import type { SampleRate } from "beep-engine";
import { usePickerMotion } from "../hooks/usePickerMotion";

type SampleRateSelectorProps = {
  value: SampleRate;
  onChange: (sampleRate: SampleRate) => void;
};

export function SampleRateSelector({
  value,
  onChange,
}: SampleRateSelectorProps) {
  const pickerMotion = usePickerMotion();

  return (
    <p>
      <label htmlFor="sample-rate">Sample rate</label>
      <select
        {...pickerMotion}
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
