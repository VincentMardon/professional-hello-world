import { describe, expect, it } from "vitest";

import { buildSearchIndex, type SearchDocument } from "./buildSearchIndex.ts";

function document(overrides: Partial<SearchDocument> = {}): SearchDocument {
  return {
    documentId: "engine",
    title: "Engine reference",
    description: "The exceptionally regulated sound department.",
    href: "/doc/reference/engine",
    source: "",
    ...overrides,
  };
}

describe("the Bureau assigning destinations to searchable testimony", () => {
  it("links introductions to the page and sections to their headings", () => {
    const entries = buildSearchIndex([
      document({ source: "Introduction.\n\n# Playback\n\nReady." }),
    ]);

    expect(entries.map((entry) => entry.href)).toEqual([
      "/doc/reference/engine",
      "/doc/reference/engine#playback",
    ]);
  });

  it("encodes Unicode fragments without adding a deployment prefix", () => {
    const [entry] = buildSearchIndex([document({ source: "# Réglages" })]);

    expect(entry?.href).toBe(
      `/doc/reference/engine#${encodeURIComponent("réglages")}`,
    );
  });

  it("retains searchable metadata for en empty document", () => {
    const entries = buildSearchIndex([document()]);

    expect(entries).toHaveLength(1);
    expect(entries[0]).toMatchObject({
      documentId: "engine",
      title: "Engine reference",
      description: "The exceptionally regulated sound department.",
      heading: "",
      href: "/doc/reference/engine",
      text: "",
    });
    expect(entries[0]).not.toHaveProperty("source");
  });

  it("distinguishes introductions repeated headings, and documents", () => {
    const entries = buildSearchIndex([
      document({
        source: "Opening.\n\n# Introduction\n\n# Introduction",
      }),
      document({
        documentId: "other",
        href: "/doc/other",
        source: "# Introduction",
      }),
    ]);

    expect(new Set(entries.map((entry) => entry.key)).size).toBe(4);
    expect(entries.map((entry) => entry.href)).toEqual([
      "/doc/reference/engine",
      "/doc/reference/engine#introduction",
      "/doc/reference/engine#introduction-1",
      "/doc/other#introduction",
    ]);
  });

  it("returns no entries when no documents are supplied.", () => {
    expect(buildSearchIndex([])).toEqual([]);
  });
});
