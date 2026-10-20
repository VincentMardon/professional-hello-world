import { keyframes } from "@vanilla-extract/css";

function reliefAt(angle: number) {
  const radians = (angle * Math.PI) / 180;

  function shadow(x: number, y: number, blur: number, color: string) {
    const localX = x * Math.cos(radians) + y * Math.sin(radians);
    const localY = -x * Math.sin(radians) + y * Math.cos(radians);

    return `drop-shadow(${localX.toFixed(3)}px ${localY.toFixed(3)}px ${blur}px ${color})`;
  }

  return shadow(1.25, 1.25, 0.6, "rgb(114 86 47 / 85%)");
}

function rotationFrames(start: number) {
  const frames: Parameters<typeof keyframes>[0] = {};

  for (let step = 0; step <= 12; step++) {
    const angle = start + step * 15;

    frames[`${(step / 12) * 100}%`] = {
      rotate: `${angle}deg`,
      filter: reliefAt(angle),
    };
  }

  return frames;
}
export const PickerRestRelief = reliefAt(0);
export const pickerOpenRelief = reliefAt(180);

export const pickerOpening = keyframes(rotationFrames(0));
export const pickerClosing = keyframes(rotationFrames(180));
