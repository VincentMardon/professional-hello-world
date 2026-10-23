import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  documentEntries,
  getDocumentRoute,
} from "../src/features/doc/data/documents.ts";
import { extractDocumentLinks } from "../src/features/doc/validation/extractDocumentLinks.ts";
import { inspectDocumentDestination } from "../src/features/doc/validation/inspectDocumentDestination.ts";
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
  let checked = 0;
  let externalSkipped = 0;
  let schemesSkipped = 0;
  let fragmentsDeferred = 0;

  for (const [id, document] of documentEntries) {
    const sourcePath = path.resolve(documentationRoot, document.file);

    try {
      const source = await readFile(sourcePath, "utf8");
      const links = extractDocumentLinks(source);

      for (const link of links) {
        const inspection = await inspectDocumentDestination(link, {
          repositoryRoot,
          sourcePath,
          siteUrl,
          documentRoutes,
          applicationRoutes: ["/", "/audio-test"],
        });

        if (inspection.fragmentDeferred) {
          fragmentsDeferred += 1;
        }

        if (inspection.status === "checked") {
          checked += 1;
        } else if (inspection.status === "error") {
          errors.push(
            [
              `[${id}] ${document.file}:${link.line ?? "?"}:${link.column ?? "?"}`,
              `Destination: ${JSON.stringify(link.destination)}`,
              `Resolved target: ${inspection.target}`,
              inspection.message ?? "Destination rejected.",
            ].join("\n "),
          );
        } else if (inspection.category === "external") {
          externalSkipped += 1;
        } else if (inspection.category === "scheme") {
          schemesSkipped += 1;
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
      `Fragment checks deferred: ${fragmentsDeferred}.`,
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
