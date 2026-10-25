import { describe, expect, it } from "vitest";

import { extractDocumentHeadings } from "../markdown/documentHeadings";
import { extractSearchSections } from "./extractSearchSections";

describe("the Bureau collecting searchable testimony from selected sources", () => {
  it("preserves an introduction and separates heading sections", () => {
    expect(
      extractSearchSections(
        "Introduction.\n\n# Engine\n\nReady.\n\n## Playback\n\nStarted.",
      ),
    ).toEqual([
      { id: undefined, heading: "", text: "Introduction." },
      { id: "engine", heading: "Engine", text: "Ready." },
      { id: "playback", heading: "Playback", text: "Started." },
    ]);
  });

  it("uses the same addresses as the reader for repeated headings", () => {
    const source = "# Ready\n\nFirst.\n\n## Ready\n\nSecond.";

    expect(extractSearchSections(source).map((section) => section.id)).toEqual(
      extractDocumentHeadings(source).map((heading) => heading.id),
    );
  });

  it("collects labels and inline code without link destinations", () => {
    expect(
      extractSearchSections(
        "# Settings\n\nUse `sampleRate` and [volume](PRIVATE-PATH.md)",
      )[0]?.text,
    ).toBe("Use sampleRate and volume");
  });

  it("includes ordinary code but excludes Mermaid source", () => {
    const source = [
      "# Example",
      "",
      "```ts",
      "const audible = true;",
      "```",
      "",
      "```mermaid",
      "graph TD; SecretDiagramToken --> B",
      "```",
    ].join("\n");

    expect(extractSearchSections(source)[0]?.text).toBe(
      "const audible = true;",
    );
  });

  it("keeps spaces between list items and table cells", () => {
    const source = [
      "# Inventory",
      "",
      "- Alpha",
      "- Beta",
      "",
      "| Name | State |",
      "| --- | --- |",
      "| Engine | Ready |",
    ].join("\n");

    expect(extractSearchSections(source)[0]?.text).toBe(
      "Alpha Beta Name State Engine Ready",
    );
  });

  it("ignores raw HTML and empty documents", () => {
    expect(extractSearchSections("")).toEqual([]);
    expect(extractSearchSections("<div>HiddenMarkupToken</div>")).toEqual([]);
  });
});
