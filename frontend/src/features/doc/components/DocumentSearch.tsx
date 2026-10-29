"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { SearchEntry } from "../search/buildSearchIndex.ts";
import { searchDocuments } from "../search/searchDocuments.ts";

/** Number of additional ranked results revealed by each display request. */
const resultBatchSize = 20;

/**
 * Builds an introductory excerpt from section text or document description.
 *
 * @param entry - Search entry whose text should be previewed.
 * @returns Up to 180 UTF-16 code units, followed by "..." when truncated.
 *
 * @remarks
 * Does not center the excerpt on query terms or highlight matches.
 * Truncation does not preserve word or grapheme boundaries.
 *
 */
function excerpt(entry: SearchEntry): string {
  const text = entry.text || entry.description;

  return text.length > 180 ? `${text.slice(0, 180)}...` : text;
}

/**
 * Searches the selected documentation index in the browser.
 *
 * @param props - Complete serializable entries prepared during page generation.
 *
 * @remarks
 * Queries and the visible-result allowance live in this component instance.
 * They are not submitted to a server, stored in the URL, or persisted
 * across a full reload. Closing the disclosure does not clear them.
 *
 * Recomputes matching synchronously on each render.
 * Shows an initial batch of twenty matches; further requests reveal
 * more entries from the ranked result list.
 *
 * Editing or clearing the query resets the display allowance.
 * Empty queries show instructions; unmatched queries show an empty state.
 * The status output declares polite announcements of result counts.
 *
 * Result links retain section anchors and use Next Link for deployment
 * prefix handling. Excerpts introduce sections rather than locating matches.
 */
export function DocumentSearch({
  entries,
}: {
  entries: readonly SearchEntry[];
}) {
  const inputId = useId();
  const helpId = useId();
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(resultBatchSize);

  const results = searchDocuments(entries, query);
  const hasQuery = query.trim().length > 0;

  // Limit presentation after ranking; the matcher still returns every match.
  const visibleResults = results.slice(0, visibleCount);

  return (
    <details>
      <summary>Search documentation</summary>

      <search aria-label="Documentation search">
        <div>
          <label htmlFor={inputId}>Search terms</label>
        </div>

        <input
          id={inputId}
          type="search"
          value={query}
          aria-describedby={helpId}
          onChange={(event) => {
            setQuery(event.target.value);
            setVisibleCount(resultBatchSize);
          }}
        />

        <button
          type="button"
          disabled={!query}
          onClick={() => {
            setQuery("");
            setVisibleCount(resultBatchSize);
          }}
        >
          Clear
        </button>

        <p id={helpId}>
          Search titles, descriptions, and section text. All terms must match;
          case and accents are ignored.
        </p>

        <output aria-live="polite" aria-atomic="true">
          {!hasQuery
            ? "Enter terms to search the selected documentation."
            : results.length === 0
              ? "No matching sections."
              : `${results.length} matching ${
                  results.length === 1 ? "section" : "sections"
                }. Showing ${visibleResults.length}.`}
        </output>

        {visibleResults.length > 0 ? (
          <ol>
            {visibleResults.map(({ entry }) => (
              <li key={entry.key}>
                <Link href={entry.href}>
                  {entry.title}
                  {entry.heading ? ` — ${entry.heading}` : ""}
                </Link>
                <p>{excerpt(entry)}</p>
              </li>
            ))}
          </ol>
        ) : null}

        {visibleResults.length < results.length ? (
          <button
            type="button"
            onClick={() => {
              setVisibleCount((count) => count + resultBatchSize);
            }}
          >
            Show more results
          </button>
        ) : null}
      </search>
    </details>
  );
}
