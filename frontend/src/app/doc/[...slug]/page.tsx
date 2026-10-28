import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocumentationPage } from "../../../features/doc/components/DocumentationPage";
import {
  documentEntries,
  findDocument,
} from "../../../features/doc/data/documents";

/** Asynchronous route parameters containing segments beneath /doc. */
type DocumentationRouteProps = {
  params: Promise<{ slug: string[] }>;
};

// Restrict this route to the paths enumerated by generateStaticParams
export const dynamicParams = false;

/**
 * Enumerates nonempty catalogue slugs for static page generation.
 *
 * @returns Route parameters without /doc or the deployment prefix.
 *
 * @remarks
 * Reception has an empty slug and its own explicit route.
 * Copies the slug arrays without modifying catalogue declarations.
 * Catalogue validation remains responsible for declaration correctness.
 */
export function generateStaticParams() {
  return documentEntries
    .filter(([, document]) => document.slug.length > 0)
    .map(([, document]) => ({
      slug: [...document.slug],
    }));
}

/**
 * Resolves route parameters to the selected document's metadata
 *
 * @param props - Asynchronous slug parameters supplied by Next.js.
 * @returns The catalogue title and description for the matching document.
 *
 * @remarks
 * An unknown slug invokes Next.js notFound rather than supplying
 * metadata for another document.
 */
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

/**
 * Selects a catalogue document and delegates rendering to the shared reader.
 *
 * @param props - Asynchronous slug parameters supplied by Next.js.
 * @returns The reader for the matching internal document identifier.
 *
 * @remarks
 * Resolves the slug independently of metadata generation.
 * Unknown slugs invoke Next.js notFound.
 * URL segments select a declaration, not an arbitrary filesystem path.
 */
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
