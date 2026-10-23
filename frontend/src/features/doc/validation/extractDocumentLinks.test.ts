// @vitest-environment node

import { describe, expect, it } from "vitest";

import { extractDocumentLinks } from "./extractDocumentLinks";

describe("The Inspectorate distinguishing corridors from drawings of corridors", () => {
  it("extracts links and images with their source positions", () => {
    expect(
      extractDocumentLinks(
        "[Guide](OPERATIONS.md)\n\n![Cat](assets/cat.png)\n",
      ),
    ).toEqual([
      {
        kind: "link",
        destination: "OPERATIONS.md",
        line: 1,
        column: 1,
      },
      {
        kind: "image",
        destination: "assets/cat.png",
        line: 3,
        column: 1,
      },
    ]);
  });

  it("resolves named references at each use", () => {
    const source = [
      "[First][guide]",
      "[Second][GUIDE]",
      "![Portrait][cat]",
      "",
      "[guide]: OPERATIONS.md",
      "[cat]: assets/cat.png",
    ].join("\n");

    expect(
      extractDocumentLinks(source).map(({ kind, destination, line }) => ({
        kind,
        destination,
        line,
      })),
    ).toEqual([
      { kind: "link", destination: "OPERATIONS.md", line: 1 },
      { kind: "link", destination: "OPERATIONS.md", line: 2 },
      { kind: "image", destination: "assets/cat.png", line: 3 },
    ]);
  });

  it("ignores link examples inside code", () => {
    const source = [
      "`[Example](missing-inline.md)`",
      "",
      "```markdown",
      "[Example](missing-fenced.md)",
      "```",
      "",
      "[Actual](README.md)",
    ].join("\n");

    expect(
      extractDocumentLinks(source).map((link) => link.destination),
    ).toEqual(["README.md"]);
  });

  it("preserves encoded paths, queries, and fragments", () => {
    const links = extractDocumentLinks(
      "[Source](../some%20folder/file.md?view=source#purpose)",
    );

    expect(links[0]?.destination).toBe(
      "../some%20folder/file.md?view=source#purpose",
    );
  });

  it("extracts GFM autolinks without fetching them", () => {
    const links = extractDocumentLinks(
      "Consult https://example.com/guide for details",
    );

    expect(links.map((link) => link.destination)).toEqual([
      "https://example.com/guide",
    ]);
  });

  it("ignores raw HTML and undefined reference-like text", () => {
    const source = [
      '<a href="uninspected.md>HTML</a>',
      "",
      "[Unresolved][missing-definition]",
    ].join("\n");

    expect(extractDocumentLinks(source)).toEqual([]);
  });

  it("ignores unused reference definitions", () => {
    expect(extractDocumentLinks("[unused]; missing.md\n")).toEqual([]);
  });
});
