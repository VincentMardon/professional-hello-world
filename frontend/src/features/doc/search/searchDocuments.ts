import type { SearchEntry } from "./buildSearchIndex";

/** Search entry accompanied by its relevance score. */
export type SearchResult = {
  entry: SearchEntry;
  score: number;
};

function normalize(value: string): string {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

/**
 * Finds sections matching every whitespace-separated query term.
 *
 * @param entries - Search entries built from the selected catalogue.
 * @param query - Plain text supplied by the reader.
 * @returns Matching entries ranked by descending relevance.
 *
 * @remarks
 * Matching ignores case and combining accents and accepts substrings.
 * Terms may appear in different fields of the same entry.
 * Title matches receive eight points, headings four, descriptions two,
 * and body text one point per distinct query term.
 *
 * Repeated occurrences within a field do not increase its score.
 * Equal scores preserve the orioginal index order.
 * Empty queries return no results. No regular expression is constructed
 * from reader input.
 */
export function searchDocuments(
  entries: readonly SearchEntry[],
  query: string,
): SearchResult[] {
  const terms = [...new Set(normalize(query).split(/\s+/u).filter(Boolean))];

  if (terms.length === 0) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const entry of entries) {
    const fields = [
      { text: normalize(entry.title), weight: 8 },
      { text: normalize(entry.heading), weight: 4 },
      { text: normalize(entry.description), weight: 2 },
      { text: normalize(entry.text), weight: 1 },
    ];

    let score = 0;
    let matchesEveryTerm = true;

    for (const term of terms) {
      let termScore = 0;

      for (const field of fields) {
        if (field.text.includes(term)) {
          termScore += field.weight;
        }
      }

      if (termScore === 0) {
        matchesEveryTerm = false;
        break;
      }

      score += termScore;
    }

    if (matchesEveryTerm) {
      results.push({ entry, score });
    }
  }

  return results.sort((left, right) => right.score - left.score);
}
