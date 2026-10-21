import type { Metadata } from "next";

import { DocumentationPage } from "../../../../features/doc/components/DocumentationPage";

export const metadata: Metadata = {
  title: "Engine Reference — Professional Hello World",
  description:
    "The Registry of Callable Authorities examines useBeepEngine through generated source documentation.",
};

export default function EngineReferencePage() {
  return <DocumentationPage documentId="engineReference" />;
}
