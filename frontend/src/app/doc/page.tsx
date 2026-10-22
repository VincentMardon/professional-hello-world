import type { Metadata } from "next";

import { DocumentationPage } from "../../features/doc/components/DocumentationPage";
import { documents } from "../../features/doc/data/documents";

export const metadata: Metadata = {
  title: documents.overview.metadataTitle,
  description: documents.overview.description,
};

export default function DocPage() {
  return <DocumentationPage documentId="overview" />;
}
