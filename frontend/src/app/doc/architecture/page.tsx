import type { Metadata } from "next";

import { DocumentationPage } from "../../../features/doc/components/DocumentationPage";

export const metadata: Metadata = {
  title: "Architecture — Professional Hello World",
  description:
    "The Directorate of Structural Disproportion explains PHW's architecture and responsibility boundaries.",
};

export default function ArchitecturePage() {
  return <DocumentationPage documentId="architecture" />;
}
