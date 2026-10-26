import { usePickerMotion } from "../hooks/usePickerMotion";
import type { Sound } from "../types/Sound";

/** Parent-owned sound selection and its change callback. */
type SoundSelectorProps = {
  /** Sound currently displayed by the selector */
  value: Sound;
  /** Receives the sound requested by the user. */
  onChange: (sound: Sound) => void;
};

/**
 * Presents the two sound identifiers supported by the audio panel.
 *
 * @param props - Current selection and the parent's change callback.
 *
 * @remarks
 * Maps crashSound explicitly; other input values fall back to startupBeep.
 * This conversion handles the DOM string value without a type assertion.
 *
 * Selection does not request playback. The parent owns the selected value.
 * Picker animation tracking is delegated to usePickerMotion.
 */
export function SoundSelector({ value, onChange }: SoundSelectorProps) {
  const pickerMotion = usePickerMotion();

  return (
    <p>
      <label htmlFor="sound">Sound </label>
      <select
        {...pickerMotion}
        id="sound"
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value === "crashSound" ? "crashSound" : "startupBeep",
          )
        }
      >
        <option value="startupBeep">Startup beep</option>
        <option value="crashSound">Crash sound</option>
      </select>
    </p>
  );
}
