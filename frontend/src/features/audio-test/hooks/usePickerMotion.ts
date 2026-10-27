import { type AnimationEvent, useState } from "react";

import { pickerOpening } from "../styles/pickerMotion.css";

/**
 * Records whether the select's opening animation has started.
 *
 * @returns Props to spread onto the select: an animation-start handler
 * and a data attribute enabling subsequent closing animation.
 *
 * @remarks
 * Does not open the picker or track its current open state.
 * The browser's :open state and the associated CSS control presentation.
 *
 * The data attribute remains absent until a matching opening-animation
 * event is received, preventing an initial closing animation.
 * Once enabled, it remains enabled for this mounted hook instance.
 *
 * Event delivery and visual effects depend on browser support.
 * Reduced-motion handling belongs to the associated CSS rules.
 */
export function usePickerMotion() {
  const [hasOpened, setHasOpened] = useState(false);

  /**
   * Enables closing animation after the named opening animation starts.
   *
   * @param event - Animation event received by the select.
   *
   * @remarks
   * Other animation names are ignored. Starting an animation does not
   * establish that it completed or that the picker remains open.
   */
  function onAnimationStart(event: AnimationEvent<HTMLSelectElement>) {
    if (event.animationName === pickerOpening) {
      setHasOpened(true);
    }
  }

  // Omit the attribute initially so the closing selector cannot match.
  return {
    "data-picker-animated": hasOpened ? "true" : undefined,
    onAnimationStart,
  };
}
