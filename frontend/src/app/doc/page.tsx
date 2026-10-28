import type { Metadata } from "next";

import { DocumentationPage } from "../../features/doc/components/DocumentationPage";
import { documents } from "../../features/doc/data/documents";

/** Reception metadata sourced from the overview catalogue declaration. */
export const metadata: Metadata = {
  title: documents.overview.metadataTitle,
  description: documents.overview.description,
};

/**
 * Renders documentation reception through the shared reader.
 * The empty catalogue slug is handled here rather than by the catch-all route
 */
export default function DocPage() {
  return <DocumentationPage documentId="overview" />;
}
