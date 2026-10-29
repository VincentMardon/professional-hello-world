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
 * @returns Serializable entries in catalogue declaration and section order.
 * @throws When a selected source cannot be read or index construction fails.
 *
 * @remarks
 * Runs on the server during page generation.
 * Resolves the documentation directory relative to the frontend working
 * directory and reads only explicitly registered sources.
 *
 * Reads sources concurrently while preserving catalogue declaration order.
 * One failed read rejects the operation instead of returning a partial index.
 * Other reads already started are not cancelled by that rejection.
 *
 * Rebuilds the complete index on each invocation without caching it.
 * Assumes catalogue declarations have been validated separately.
 *
 * Only the returned entries may be passed to a client component.
 * This module depends on Node.js and must remain outside client imports.
 */
export async function loadSearchIndex(): Promise<SearchEntry[]> {
  const documentationRoot = path.resolve(process.cwd(), "../docs");

  // Promise.all preserves input order even when file reads finish out of order.
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
