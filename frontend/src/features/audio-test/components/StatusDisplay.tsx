import { statusFrame } from "./StatusDisplay.css";

/** Status text prepared by the parent. */
type StatusDisplayProps = {
  /** Message to display without additional interpretation. */
  status: string;
};

/**
 * Displays the parent's message in a status region.
 *
 * @param props - Status text supplied by the parent.
 *
 * @remarks
 * Declares role="status" for assistive-technology announcements.
 * Actual announcement behavior depends on the browser and assistive tools.
 *
 * Does not infer readiness, classify errors, or measure audible output.
 * The message's meaning and update timing belong to the parent.
 */
export function StatusDisplay({ status }: StatusDisplayProps) {
  return (
    <p className={statusFrame} role="status">
      {status}
    </p>
  );
}
