import { readFile, realpath } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  documentEntries,
  getDocumentRoute,
} from "../src/features/doc/data/documents.ts";
import { extractDocumentHeadings } from "../src/features/doc/markdown/documentHeadings.ts";
import { extractDocumentLinks } from "../src/features/doc/validation/extractDocumentLinks.ts";
import { inspectDocumentDestination } from "../src/features/doc/validation/inspectDocumentDestination.ts";
import { inspectDocumentFragment } from "../src/features/doc/validation/inspectDocumentFragment.ts";
import { validateDocumentCatalogue } from "../src/features/doc/validation/validateDocumentCatalogue.ts";

const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
const documentationRoot = path.join(repositoryRoot, "docs");

const siteUrl = "https://vincentmardon.github.io/professional-hello-world/";

async function main() {
  const catalogueErrors = await validateDocumentCatalogue(
    documentEntries,
    documentationRoot,
  );

  if (catalogueErrors.length > 0) {
    console.error("Link inspection requires a valid document catalogue.");

    for (const error of catalogueErrors) {
      console.error(`- ${error}`);
    }

    process.exitCode = 1;
    return;
  }

  const documentRoutes = documentEntries.map(([, document]) =>
    getDocumentRoute(document),
  );

  const errors: string[] = [];
  const sources = new Map<string, string>();
  const realPaths = new Map<string, string>();
  const headingsByFile = new Map<string, ReadonlySet<string>>();
  const headingsByRoute = new Map<string, ReadonlySet<string>>();

  let checked = 0;
  let externalSkipped = 0;
  let schemesSkipped = 0;
  let fragmentsChecked = 0;
  let fragmentsDeferred = 0;
  let fragmentsRejected = 0;

  for (const [id, document] of documentEntries) {
    const sourcePath = path.resolve(documentationRoot, document.file);

    try {
      const [source, sourceFile] = await Promise.all([
        readFile(sourcePath, "utf8"),
        realpath(sourcePath),
      ]);

      const headingIds = new Set(
        extractDocumentHeadings(source).map((heading) => heading.id),
      );

      sources.set(sourcePath, source);
      realPaths.set(sourcePath, sourceFile);
      headingsByFile.set(sourceFile, headingIds);
      headingsByRoute.set(getDocumentRoute(document), headingIds);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`[${id}] Could not index ${document.file}: ${message}`);
    }
  }

  for (const [id, document] of documentEntries) {
    const sourcePath = path.resolve(documentationRoot, document.file);

    try {
      const source = sources.get(sourcePath);
      const sourceFile = realPaths.get(sourcePath);

      if (source === undefined || sourceFile === undefined) continue;

      const links = extractDocumentLinks(source);

      for (const link of links) {
        const inspection = await inspectDocumentDestination(link, {
          repositoryRoot,
          sourcePath,
          siteUrl,
          documentRoutes,
          applicationRoutes: ["/", "/audio-test"],
        });

        const fragment = inspectDocumentFragment(link, inspection, {
          sourceFile,
          headingsByFile,
          headingsByRoute,
        });

        if (fragment.status === "checked") {
          fragmentsChecked += 1;
        } else if (fragment.status === "deferred") {
          fragmentsDeferred += 1;
        } else if (fragment.status === "error") {
          fragmentsRejected += 1;
        }

        if (inspection.status === "checked") {
          checked += 1;
        } else if (
          inspection.status === "skipped" &&
          inspection.category === "external"
        ) {
          externalSkipped += 1;
        } else if (
          inspection.status === "skipped" &&
          inspection.category === "scheme"
        ) {
          schemesSkipped += 1;
        }

        const rejection =
          inspection.status === "error"
            ? (inspection.message ?? "Destination rejected.")
            : fragment.status === "error"
              ? (fragment.message ?? "Fragment rejected")
              : undefined;

        if (rejection) {
          errors.push(
            [
              `[${id}] ${document.file}:${link.line ?? "?"}:${link.column ?? "?"}`,
              `Destination: ${JSON.stringify(link.destination)}`,
              `Resolved target: ${inspection.target}`,
              rejection,
            ].join("\n "),
          );
        }
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);

      errors.push(`[${id}] Could not inspect ${document.file}: ${message}`);
    }
  }

  console.info(
    [
      `Documents inspected: ${documentEntries.length}.`,
      `Local destinations checked: ${checked}.`,
      `External destinations not fetched: ${externalSkipped}.`,
      `Non-file destinations skipped: ${schemesSkipped}.`,
      `Fragments checked: ${fragmentsChecked}.`,
      `Fragment checks deferred: ${fragmentsDeferred}.`,
      `Fragments rejected: ${fragmentsRejected}`,
      `Errors: ${errors.length}.`,
    ].join("\n"),
  );

  if (errors.length > 0) {
    console.error("\nThe Inspectorate found defective corridors:");

    for (const error of errors) {
      console.error(`\n- ${error}`);
    }

    process.exitCode = 1;
    return;
  }

  console.info("\nAll inspected local destinations were accepted.");
}

main().catch((error: unknown) => {
  console.error("The Inspectorate could not complete its work:", error);
  process.exitCode = 1;
});
