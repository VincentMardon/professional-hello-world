// @vitest-environment node

import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { DocumentDefinition } from "../data/documents";
import { validateDocumentCatalogue } from "./validateDocumentCatalogue";

let root: string;

function document(
  overrides: Partial<DocumentDefinition> = {},
): DocumentDefinition {
  return {
    title: "Reception",
    metadataTitle: "Documentation",
    description: "A documented greeting.",
    file: "README.md",
    slug: [],
    ...overrides,
  };
}

beforeEach(async () => {
  root = await mkdtemp(path.join(os.tmpdir(), "phw-catalogue-"));
  await writeFile(path.join(root, "README.md"), "# Reception\n");
});

afterEach(async () => {
  await rm(root, { recursive: true, force: true });
});

describe("the Registrar examining application for documentary accomodation", () => {
  it("accepts existing Markdown sources and a nested public route", async () => {
    await mkdir(path.join(root, "generated"));
    await writeFile(path.join(root, "generated", "hook.md"), "# Hook\n");

    const errors = await validateDocumentCatalogue(
      [
        ["overview", document()],
        [
          "hook",
          document({
            file: "generated/hook.md",
            slug: ["reference", "hook"],
          }),
        ],
      ],
      root,
    );

    expect(errors).toEqual([]);
  });

  it("identifies both owners of a duplicated public route", async () => {
    const errors = await validateDocumentCatalogue(
      [
        ["overview", document()],
        ["first", document({ slug: ["guide"] })],
        ["second", document({ slug: ["guide"] })],
      ],
      root,
    );

    expect(errors).toContain(
      '[second] Route "/doc/guide" is already declared by "first".',
    );
  });

  it("rejects a missing source with its document identifier", async () => {
    const errors = await validateDocumentCatalogue(
      [["overview", document({ file: "missing.md" })]],
      root,
    );

    expect(errors).toContain(
      '[overview] Source "missing.md" does not exist or cannot be inspected.',
    );
  });

  it.each(["Guide", "../outside", "two/segments", ""])(
    "rejects the invalid slug segment %j",
    async (segment) => {
      const errors = await validateDocumentCatalogue(
        [
          ["overview", document()],
          ["invalid", document({ slug: [segment] })],
        ],
        root,
      );

      expect(errors).toContain(
        "[invalid] Slug segments must contain lowercase words or digits separated by hyphens.",
      );
    },
  );

  it("rejects a source escaping the documentation root", async () => {
    const errors = await validateDocumentCatalogue(
      [["overview", document({ file: "../outside.md" })]],
      root,
    );

    expect(errors).toContain(
      '[overview] Source "../outside.md" escapes the documentation directory.',
    );
  });

  it("rejects a directory presented as a Markdown source", async () => {
    await mkdir(path.join(root, "directory.md"));

    const errors = await validateDocumentCatalogue(
      [["overview", document({ file: "directory.md" })]],
      root,
    );

    expect(errors).toContain(
      '[overview] Source "directory.md" is not a regular file.',
    );
  });

  it("rejects an empty metadata description", async () => {
    const errors = await validateDocumentCatalogue(
      [["overview", document({ description: " " })]],
      root,
    );

    expect(errors).toContain("[overview] description must not be empty.");
  });

  it("rejects an overview moved away from the documentation root", async () => {
    const errors = await validateDocumentCatalogue(
      [["overview", document({ slug: ["reception"] })]],
      root,
    );

    expect(errors).toContain("[overview] The overview must use an empty slug.");
  });
});
