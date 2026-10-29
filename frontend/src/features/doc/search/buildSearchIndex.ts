import { extractSearchSections } from "./extractSearchSections.ts";

/** Selected document supplied to the search index builder */
export type SearchDocument = {
  /** Unique document identity supplied by the caller. */
  documentId: string;
  /** Reader-facing title copied to each section entry. */
  title: string;
  /** Document description copied to each section entry. */
  description: string;
  /** Canonical reader path without a query, fragment, or deployment prefix. */
  href: string;
  /** Markdown content to extract; not retained in the resulting entries. */
  source: string;
};

/** Serializable search entry pointing to a document or heading. */
export type SearchEntry = {
  /** Internal identity combining the document and optional heading ID. */
  key: string;
  /** Document to which this section belongs. */
  documentId: string;
  /** Reader-facing document title. */
  title: string;
  /** Document description, available for matching and fallback excerpts. */
  description: string;
  /** Section label, empty for an introduction or metadata-only entry. */
  heading: string;
  /** Reader destination, including an encoded heading fragment when present. */
  href: string;
  /** Extracted section body without the heading label. */
  text: string;
};

/**
 * Builds searchable entries from explicitly supplied Markdown documents.
 *
 * @param documents - Selected sources with their canonical reader routes.
 * @returns Entries in document and section order.
 *
 * @remarks
 * Heading fragments use the reader's existing identifiers.
 * Empty documents retain an entry so their metadata remains searchable.
 * Source Markdown and filesystem paths are not included in the output.
 * Routes remain independent of the deployment base path.
 * Document metadata is repeated for each section; matching is section-based,
 * not grouped into one result per document.
 *
 * The caller supplies unique document IDs and valid canonical paths.
 * This function does not validate those declarations or inspect files.
 * Entry keys use the document ID and heading ID, with null for introductions.
 * They identify results internally and are not public URLs.
 */
export function buildSearchIndex(
  documents: readonly SearchDocument[],
): SearchEntry[] {
  return documents.flatMap((document) => {
    const extracted = extractSearchSections(document.source);

    // Preserve one metadata-only entry when extraction yields no sections.
    const sections =
      extracted.length > 0
        ? extracted
        : [{ id: undefined, heading: "", text: "" }];

    return sections.map((section) => ({
      key: JSON.stringify([document.documentId, section.id ?? null]),
      documentId: document.documentId,
      title: document.title,
      description: document.description,
      heading: section.heading,
      href:
        section.id === undefined
          ? document.href
          : `${document.href}#${encodeURIComponent(section.id)}`,
      text: section.text,
    }));
  });
}
