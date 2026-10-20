import {
  header,
  headingFrame,
  headingOrnament,
  subtitle,
  title,
} from "./AudioTestHeader.css";

export function AudioTestHeader() {
  return (
    <header className={header}>
      <div className={headingFrame}>
        <div className={headingOrnament} aria-hidden="true" />

        <h1 className={title}>Beep Engine</h1>
        <h2 className={subtitle}>The Audio Test</h2>
      </div>
    </header>
  );
}
