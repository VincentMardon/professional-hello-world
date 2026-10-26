import type { SampleRate } from "beep-engine";
import { usePickerMotion } from "../hooks/usePickerMotion";

/** Parent-owned sample-rate selection and its change callback. */
type SampleRateSelectorProps = {
  /** Sample rate currently displayed by the selector. */
  value: SampleRate;
  /** Receives the sample rate requested by the user, in hertz. */
  onChange: (sampleRate: SampleRate) => void;
};

/**
 * Presents the audio panel's 44,100 Hz and 48,000 Hz options.
 *
 * @param props - Current sample rate and the parent's change callback.
 *
 * @remarks
 * Maps the DOM value "44100" to 44100; other values fall back to 48000.
 * This conversion produces one of the two offered numeric values.
 *
 * Selection updates the parent's setting without requesting playback.
 * Picker animation tracking is delegated to usePickerMotion.
 */
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
