import type { Metadata } from "next";

import { DocumentationPage } from "../../features/doc/components/DocumentationPage";

export const metadata: Metadata = {
  title: "Documentation — Professional Hello World",
  description:
    "The Directorate of Disproportionate Documentation: architecture, explanations, and technical ceremony.",
};

export default function DocPage() {
  return <DocumentationPage />;
}
