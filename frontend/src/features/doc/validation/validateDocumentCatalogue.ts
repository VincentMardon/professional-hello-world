import { realpath, stat } from "node:fs/promises";
import path from "node:path";

import type { DocumentDefinition } from "../data/documents.ts";

/**
 * A document identifier paired with its declaration for catalogue inspection.
 *
 * @remarks
 * The identifier accepts any string so validation can inspect candidate
 * catalogues independently of the currently registered DocumentId union.
 */
export type CatalogueEntry = readonly [string, DocumentDefinition];

function isOutside(root: string, destination: string): boolean {
  const relative = path.relative(root, destination);

  return (
    relative === ".." ||
    relative.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relative)
  );
}

/**
 * Checks catalogue declarations against routing and source-file rules.
 *
 * @param entries - Typed document identifiers and declarations to inspect.
 * @param documentationRoot - Existing documentation directory to resolve.
 * @returns Collected diagnostics, or an empty array when all check pass.
 * @throws When the documentation root cannot be resolved.
 *
 * @remarks
 * Requires overview at the root, nonempty metadata, valid slug segments,
 * unique routes, and existing regular Markdown sources.
 *
 * Source containment is checked both lexically and after resolving symlinks.
 * Individual source inspection failures become diagnostics.
 *
 * This Node.js function reads filesystem metadata without changing files.
 * It expects typed declarations rather than arbitrary untrusted JSON.
 * It does not inspect Markdown contents, links, or factual accuracy.
 */
export async function validateDocumentCatalogue(
  entries: readonly CatalogueEntry[],
  documentationRoot: string,
): Promise<string[]> {
  const root = await realpath(documentationRoot);
  const errors: string[] = [];
  const routes = new Map<string, string>();

  if (!entries.some(([id]) => id === "overview")) {
    errors.push("[catalogue] The overview entry is required.");
  }

  for (const [id, document] of entries) {
    const report = (message: string) => {
      errors.push(`[${id}] ${message}`);
    };

    for (const field of ["title", "metadataTitle", "description"] as const) {
      if (!document[field].trim()) {
        report(`${field} must not be empty.`);
      }
    }

    if (id === "overview" && document.slug.length !== 0) {
      report("The overview must use an empty slug.");
    }

    if (id !== "overview" && document.slug.length === 0) {
      report("Only overview may use an empty slug.");
    }

    const validSlug = document.slug.every((segment) =>
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(segment),
    );

    if (!validSlug) {
      report(
        "Slug segments must contain lowercase words or digits separated by hyphens.",
      );
    }

    const route =
      document.slug.length === 0 ? "/doc" : `/doc/${document.slug.join("/")}`;

    const previousOwner = routes.get(route);

    if (previousOwner !== undefined) {
      report(`Route "${route}" is already declared by "${previousOwner}".`);
    } else {
      routes.set(route, id);
    }

    const file = document.file;

    if (
      !file ||
      file.includes("\\") ||
      file.includes(":") ||
      path.posix.isAbsolute(file) ||
      path.win32.isAbsolute(file) ||
      file.split("/").some((segment) => !segment || segment === ".")
    ) {
      report(`Source "${file}" must be a portable relative file path.`);
      continue;
    }

    const sourcePath = path.resolve(root, file);

    if (isOutside(root, sourcePath)) {
      report(`Source "${file}" escapes the documentation directory.`);
      continue;
    }

    if (!/\.md$/i.test(file)) {
      report(`Source "${file}" must be a Markdown file.`);
      continue;
    }

    try {
      const resolvedSource = await realpath(sourcePath);

      if (isOutside(root, resolvedSource)) {
        report(
          `Source "${file}" resolves outside the documentation directory.`,
        );
        continue;
      }

      const source = await stat(resolvedSource);

      if (!source.isFile()) {
        report(`Source "${file}" is not a regular file.`);
      }
    } catch {
      report(`Source "${file}" does not exist or cannot be inspected.`);
    }
  }

  return errors;
}
