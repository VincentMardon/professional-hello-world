import { describe, expect, it } from "vitest";

import { extractDocumentHeadings } from "./documentHeadings";

describe("the Office of Deterministic Paragraph Addresses", () => {
  it("expects formatted heading text without link destinations", () => {
    expect(
      extractDocumentHeadings(
        "## **Ready** `play()` and [settings](settings.md)",
      ),
    ).toEqual([
      {
        id: "ready-play-and-settings",
        depth: 2,
        text: "Ready play() and settings",
      },
    ]);
  });

  it("avoids collisions with existing numbered headings", () => {
    expect(
      extractDocumentHeadings("# Ready\n\n## Ready-1\n\n## Ready").map(
        (heading) => heading.id,
      ),
    ).toEqual(["ready", "ready-1", "ready-2"]);
  });

  it("resets duplicate tracking for each document", () => {
    extractDocumentHeadings("# Ready\n\n# Ready");

    expect(extractDocumentHeadings("# Ready")[0]?.id).toBe("ready");
  });

  it("preserves accented and non-Latin letters", () => {
    expect(extractDocumentHeadings("## Été 中文")[0]?.id).toBe("été-中文");
  });

  it("ignores apparent headings inside fenced code", () => {
    expect(
      extractDocumentHeadings("```md\n# Example\n```\n\n## Actual"),
    ).toEqual([{ id: "actual", depth: 2, text: "Actual" }]);
  });

  it("assignes unique fallback addresses to punctuation-only headings", () => {
    expect(
      extractDocumentHeadings("# !!!\n\n# ???").map((heading) => heading.id),
    ).toEqual(["section", "section-1"]);
  });
});
