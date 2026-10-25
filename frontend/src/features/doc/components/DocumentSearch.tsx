"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { SearchEntry } from "../search/buildSearchIndex.ts";
import { searchDocuments } from "../search/searchDocuments.ts";

const resultBatchSize = 20;

function excerpt(entry: SearchEntry): string {
  const text = entry.text || entry.description;

  return text.length > 180 ? `${text.slice(0, 180)}...` : text;
}

/**
 * Searches the selected documentation index in the browser.
 *
 * @param props - Serializable entries prepared during page generation.
 *
 * @remarks
 * Queries remain in component memory and are not submitted to a server.
 * Results use ordinary links and preserve the reader's section anchors.
 * Additional matches are revealed in batches without changing their ranking.
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
