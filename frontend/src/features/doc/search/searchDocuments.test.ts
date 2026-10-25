import { describe, expect, it } from "vitest";

import type { SearchEntry } from "./buildSearchIndex.ts";
import { searchDocuments } from "./searchDocuments.ts";

function entry(key: string, overrides: Partial<SearchEntry> = {}): SearchEntry {
  return {
    key,
    documentId: key,
    title: "",
    description: "",
    heading: "",
    href: `/doc/${key}`,
    text: "",
    ...overrides,
  };
}

describe("the Bureau ranking answers to plain-text enquiries", () => {
  it("ignores case and accents", () => {
    const source = entry("settings", {
      heading: "Réglages",
      text: "Émission sonore.",
    });

    expect(
      searchDocuments([source], "REGLAGES emission").map(
        (result) => result.entry.key,
      ),
    ).toEqual(["settings"]);
  });

  it("requires every term within the same entry", () => {
    const entries = [
      entry("complete", {
        title: "Engine",
        text: "Playback is ready.",
      }),
      entry("engine-only", { title: "Engine" }),
      entry("playback-only", { text: "Playback" }),
    ];

    expect(
      searchDocuments(entries, "engine playback").map(
        (result) => result.entry.key,
      ),
    ).toEqual(["complete"]);
  });

  it("ranks titles before headings, descriptions, and body text", () => {
    const entries = [
      entry("body", { text: "Playback" }),
      entry("description", { description: "Playback" }),
      entry("heading", { heading: "Playback" }),
      entry("title", { title: "Playback" }),
    ];

    expect(
      searchDocuments(entries, "play").map((result) => result.entry.key),
    ).toEqual(["title", "heading", "description", "body"]);
  });

  it("preverses source order when scores are equal", () => {
    const entries = [
      entry("first", { text: "Engine engine engine" }),
      entry("second", { text: "Engine" }),
    ];

    expect(
      searchDocuments(entries, "engine").map((result) => result.entry.key),
    ).toEqual(["first", "second"]);
  });

  it("does not reward repeated query terms", () => {
    const entries = [entry("engine", { title: "Engine" })];

    expect(searchDocuments(entries, "engine ENGINE")).toEqual(
      searchDocuments(entries, "engine"),
    );
  });

  it("returns no results for empty or unmatched queries", () => {
    const entries = [entry("engine", { title: "Playback" })];

    expect(searchDocuments(entries, "\n\t ")).toEqual([]);
    expect(searchDocuments(entries, "missing")).toEqual([]);
  });

  it("treats punctuation as literal text", () => {
    const entries = [entry("code", { text: "Call play() before continuing." })];

    expect(searchDocuments(entries, "play()")).toHaveLength(1);
    expect(searchDocuments(entries, "[")).toEqual([]);
  });
});
