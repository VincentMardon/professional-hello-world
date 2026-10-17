import { AudioTestHeader } from "../../features/audio-test/components/AudioTestHeader";
import { AudioTestPanel } from "../../features/audio-test/components/AudioTestPanel";

import { audioTestPage } from "./page.css";

export default function AudioTestPage() {
  return (
    <main className={audioTestPage}>
      <AudioTestHeader />
      <AudioTestPanel />
    </main>
  );
}
