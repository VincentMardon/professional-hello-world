import { readFile } from "node:fs/promises";
import path from "node:path";

import { documentEntries, getDocumentRoute } from "../data/documents.ts";
import {
  buildSearchIndex,
  type SearchDocument,
  type SearchEntry,
} from "./buildSearchIndex.ts";

/**
 * Loads the selected documentation sources and builds their search entries.
 *
 * @returns Serializable entries for the maintained document catalogue.
 *
 * @remarks
 * Runs on the server during page generation.
 * Reads only explicitly registered sources, without scanning directories.
 * Missing or unreadable sources reject the operation rather than producing
 * an incomplete index silently.
 *
 * Only the returned entries may be passed to a client component.
 * This module depends on Node.js and must remain outside client imports.
 */
export async function loadSearchIndex(): Promise<SearchEntry[]> {
  const documentationRoot = path.resolve(process.cwd(), "../docs");

  const selectedSources: SearchDocument[] = await Promise.all(
    documentEntries.map(async ([documentId, document]) => ({
      documentId,
      title: document.title,
      description: document.description,
      href: getDocumentRoute(document),
      source: await readFile(
        path.resolve(documentationRoot, document.file),
        "utf8",
      ),
    })),
  );

  return buildSearchIndex(selectedSources);
}
