import type { Metadata } from "next";

import { DocumentationPage } from "../../../features/doc/components/DocumentationPage";

export const metadata: Metadata = {
  title: "Operations — Professional Hello World",
  description:
    "Run, inspect, diagnose, and publish the disproportionately qualified greeting.",
};

export default function OperationsPage() {
  return <DocumentationPage documentId="operations" />;
}
