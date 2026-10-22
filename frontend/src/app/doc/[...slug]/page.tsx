import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocumentationPage } from "../../../features/doc/components/DocumentationPage";
import {
  documentEntries,
  findDocument,
} from "../../../features/doc/data/documents";

type DocumentationRouteProps = {
  params: Promise<{ slug: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return documentEntries
    .filter(([, document]) => document.slug.length > 0)
    .map(([, document]) => ({
      slug: [...document.slug],
    }));
}

export async function generateMetadata({
  params,
}: DocumentationRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = findDocument(slug);

  if (!entry) {
    notFound();
  }

  const [, document] = entry;

  return {
    title: document.metadataTitle,
    description: document.description,
  };
}

export default async function DocumentationRoute({
  params,
}: DocumentationRouteProps) {
  const { slug } = await params;
  const entry = findDocument(slug);

  if (!entry) {
    notFound();
  }

  return <DocumentationPage documentId={entry[0]} />;
}
