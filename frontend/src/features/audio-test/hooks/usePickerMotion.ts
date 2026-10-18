import { type AnimationEvent, useState } from "react";

import { pickerOpening } from "../styles/pickerMotion.css";

export function usePickerMotion() {
  const [hasOpened, setHasOpened] = useState(false);

  function onAnimationStart(event: AnimationEvent<HTMLSelectElement>) {
    if (event.animationName === pickerOpening) {
      setHasOpened(true);
    }
  }

  return {
    "data-picker-animated": hasOpened ? "true" : undefined,
    onAnimationStart,
  };
}
