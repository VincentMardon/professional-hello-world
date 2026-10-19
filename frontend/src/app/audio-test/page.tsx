import { EmptyLine } from "../../components/EmptyLine";
import { AudioTestHeader } from "../../features/audio-test/components/AudioTestHeader";
import { AudioTestPanel } from "../../features/audio-test/components/AudioTestPanel";

import {
  intelOneMono,
  michroma,
  oxanium,
  spaceGrotesk,
} from "../../features/audio-test/styles/fonts";

import { audioTestPage } from "./page.css";

export default function AudioTestPage() {
  return (
    <main
      className={`${audioTestPage} ${intelOneMono.variable} ${michroma.variable} ${oxanium.variable} ${spaceGrotesk.variable}`}
    >
      <AudioTestHeader />
      <EmptyLine />
      <AudioTestPanel />
    </main>
  );
}
