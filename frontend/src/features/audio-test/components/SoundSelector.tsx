import type { Sound } from "../types/Sound";

type SoundSelectorProps = {
  value: Sound;
  onChange: (sound: Sound) => void;
};

export function SoundSelector({ value, onChange }: SoundSelectorProps) {
  return (
    <p>
      <label htmlFor="sound">Sound </label>
      <select
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
