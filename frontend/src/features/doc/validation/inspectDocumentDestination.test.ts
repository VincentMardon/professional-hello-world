// @vitest-environment node

import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import {
  type DestinationContext,
  inspectDocumentDestination,
} from "./inspectDocumentDestination";

let root: string;
let context: DestinationContext;

beforeEach(async () => {
  root = await mkdtemp(path.join(os.tmpdir(), "phw-links-"));

  await mkdir(path.join(root, "docs", "nested"), { recursive: true });
  await writeFile(path.join(root, "docs", "guide.md"), "# Guide\n");
  await writeFile(path.join(root, "docs", "some file.md"), "# Space\n");

  context = {
    repositoryRoot: root,
    sourcePath: path.join(root, "docs", "nested", "source.md"),
    siteUrl: "https://example.com/professional-hello-world/",
    documentRoutes: ["/doc", "/doc/operations"],
    applicationRoutes: ["/", "/audio-test"],
  };
});

afterEach(async () => {
  await rm(root, { recursive: true, force: true });
});

function inspect(destination: string, kind: "link" | "image" = "link") {
  return inspectDocumentDestination(
    { destination, kind, line: 1, column: 1 },
    context,
  );
}

describe("The Inspectorate checking where the corridor actually leads", () => {
  it("resolves relative files from the referring document", async () => {
    expect(await inspect("../guide.md")).toMatchObject({
      status: "checked",
      category: "file",
    });
  });

  it("handles encoded filenames while deferring fragments", async () => {
    expect(
      await inspect("../some%20file.md?view=source#purpose"),
    ).toMatchObject({
      status: "checked",
      category: "file",
      fragmentDeferred: true,
    });
  });

  it("rejects a missing file", async () => {
    expect(await inspect("../missing.md")).toMatchObject({
      status: "error",
      category: "file",
    });
  });

  it("rejects a path escaping the repository", async () => {
    expect(await inspect("../../../outside.md")).toMatchObject({
      status: "error",
      message: "Target escapes the repository.",
    });
  });

  it.each([
    "/doc/operations/",
    "/professional-hello-world/doc/operations/",
    "https://example.com/professional-hello-world/doc/operations/",
  ])("accepts the declared reader route %s", async (destination) => {
    expect(await inspect(destination)).toMatchObject({
      status: "checked",
      category: "route",
      target: "/doc/operations",
    });
  });

  it("rejects an undeclared reader route", async () => {
    expect(await inspect("/doc/missing")).toMatchObject({
      status: "error",
      category: "route",
    });
  });

  it("checks root-relative image files in the public directory", async () => {
    await mkdir(path.join(root, "frontend", "public"), {
      recursive: true,
    });
    await writeFile(
      path.join(root, "frontend", "public", "example.svg"),
      "<svg />",
    );

    expect(await inspect("/example.svg", "image")).toMatchObject({
      status: "checked",
      category: "file",
    });
  });

  it("skips external availability and fragment-only checks", async () => {
    expect(await inspect("https://elsewhere.example/guide")).toMatchObject({
      status: "skipped",
      category: "external",
    });

    expect(await inspect("#purpose")).toMatchObject({
      status: "skipped",
      category: "fragment",
      fragmentDeferred: true,
    });
  });

  it("reports invalid path encoding", async () => {
    expect(await inspect("../broken%ZZ.md")).toMatchObject({
      status: "error",
    });
  });

  it("rejects unsupported schemes", async () => {
    expect(await inspect("javascript:alert(1)")).toMatchObject({
      status: "error",
      category: "scheme",
    });
  });

  it.each([
    "/doc/broken%ZZ",
    "https://example.com/professional-hello-world/doc/broken%ZZ",
  ])(
    "reports malformed route encoding without rejecting the inspection: %s",
    async (destination) => {
      await expect(inspect(destination)).resolves.toMatchObject({
        status: "error",
        message: "Destination could not be interpreted as a valid URL path.",
      });
    },
  );
});
