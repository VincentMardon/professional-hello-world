import type { Metadata } from "next";

import { DocumentationPage } from "../../../features/doc/components/DocumentationPage";

export const metadata: Metadata = {
  title: "Sound Lifecycle — Professional Hello World",
  description:
    "The Bureau of Audible Transit follows a sound from Play to browser output.",
};

export default function AudioLifecyclePage() {
  return <DocumentationPage documentId="audioLifecycle" />;
}
