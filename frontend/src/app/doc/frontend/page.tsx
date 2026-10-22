import type { Metadata } from "next";

import { DocumentationPage } from "../../../features/doc/components/DocumentationPage";

export const metadata: Metadata = {
  title: "Frontend Field Guide — Professional Hello World",
  description:
    "Follow routes, components, hooks, and shared responsibilities through PHW.",
};

export default function FrontendGuidePage() {
  return <DocumentationPage documentId="frontendGuide" />;
}
