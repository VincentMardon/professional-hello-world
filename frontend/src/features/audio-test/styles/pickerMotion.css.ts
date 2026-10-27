import { keyframes } from "@vanilla-extract/css";

/**
 * Computes the picker icon's shadow for a rotation angle.
 *
 * @param angle - Icon rotation in degrees.
 * @returns A CSS drop-shadow filter with offsets expressed in pixels.
 *
 * @remarks
 * Counter-rotates the shadow offset in the icon's local coordinates.
 * This compensates for the icon rotation at each sampled angle, aiming
 * to preserve a consistent lighting direction in page coordinates.
 */
function reliefAt(angle: number) {
  const radians = (angle * Math.PI) / 180;

  /**
   * Converts a page-space shadow offset into the rotated icon's local space.
   *
   * @param x - Horizontal offset in pixels before compensation.
   * @param y - Vertical offset in pixels before compensation.
   * @param blur - Shadow blur length in pixels.
   * @param color - CSS shadow color.
   * @returns A drop-shadow expression with offsets rounded to three decimals
   */
  function shadow(x: number, y: number, blur: number, color: string) {
    const localX = x * Math.cos(radians) + y * Math.sin(radians);
    const localY = -x * Math.sin(radians) + y * Math.cos(radians);

    return `drop-shadow(${localX.toFixed(3)}px ${localY.toFixed(3)}px ${blur}px ${color})`;
  }

  return shadow(1.25, 1.25, 0.6, "rgb(114 86 47 / 85%)");
}

/**
 * Builds thirteen keyframes spanning a half-turn.
 *
 * @param start - Initial rotation in degrees.
 * @returns Keyframes pairing icon rotation with its compensated shadow.
 *
 * @remarks
 * Samples twelve 15-degree intervals, including both endpoints.
 * Percentages distribute the samples evenly across the animation.
 * The browser interpolates between them.
 *
 * Duration, easing, motion preferences, and triggering selectors belong
 * to the consuming stylesheet.
 */
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
/** Shadow at the closed icon's zero-degree orientation. */
export const PickerRestRelief = reliefAt(0);

/** Shadow at the open icon's 180-degree orientation. */
export const pickerOpenRelief = reliefAt(180);

/** Opening half-turn from 0 to 180 degrees with shadow compensation. */
export const pickerOpening = keyframes(rotationFrames(0));

/** Closing half-turn from 180 to 360 degrees, continuing the rotation. */
export const pickerClosing = keyframes(rotationFrames(180));
