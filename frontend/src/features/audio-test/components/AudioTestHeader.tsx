import { header, subtitle, title } from "./AudioTestHeader.css";

export function AudioTestHeader() {
  return (
    <header className={header}>
      <h1 className={title}>Beep Engine</h1>
      <h2 className={subtitle}>The Audio Test</h2>
    </header>
  );
}
