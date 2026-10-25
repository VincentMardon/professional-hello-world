import { extractSearchSections } from "./extractSearchSections.ts";

/** Selected document supplied to the search index builder */
export type SearchDocument = {
  documentId: string;
  title: string;
  description: string;
  href: string;
  source: string;
};

/** Serializable search entry pointing to a document or heading. */
export type SearchEntry = {
  key: string;
  documentId: string;
  title: string;
  description: string;
  heading: string;
  href: string;
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
 */
export function buildSearchIndex(
  documents: readonly SearchDocument[],
): SearchEntry[] {
  return documents.flatMap((document) => {
    const extracted = extractSearchSections(document.source);
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
