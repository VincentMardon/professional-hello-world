import { emptyLine } from "./EmptyLine.css";

/**
 * Inserts a styled decorative interval with no accessible content.
 * Its dimensions belong to the associated stylesheet.
 */
export function EmptyLine() {
  return <div className={emptyLine} aria-hidden="true" />;
}
