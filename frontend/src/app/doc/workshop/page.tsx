import type { Metadata } from "next";

import { DocumentationPage } from "../../../features/doc/components/DocumentationPage";

export const metadata: Metadata = {
  title: "Documentation Workshop — Professional Hello World",
  description:
    "Maintain authored guides, generated references, diagrams, and their evidence.",
};

export default function DocumentationWorkshopPage() {
  return <DocumentationPage documentId="documentationWorkshop" />;
}
