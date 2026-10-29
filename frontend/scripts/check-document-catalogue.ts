import { fileURLToPath } from "node:url";
import { documentGroups } from "../src/features/doc/data/documentNavigation.ts";
import { documentEntries } from "../src/features/doc/data/documents.ts";
import { validateDocumentCatalogue } from "../src/features/doc/validation/validateDocumentCatalogue.ts";
import { validateDocumentNavigation } from "../src/features/doc/validation/validateDocumentNavigation.ts";

// Resolve from this script's location, independently of the working directory.
const documentationRoot = fileURLToPath(
  new URL("../../docs/", import.meta.url),
);

/**
 * Runs catalogue and navigation inspection for the maintained declarations.
 *
 * @returns A promise settling after diagnostics or acceptance are reported.
 *
 * @remarks
 * Delegates source and route rules to the catalogue validator, then checks
 * group declarations and coverage against the selected document IDs.
 *
 * Collected diagnostics are printed together and set the process exit code
 * to one. Unexpected failures reject this function and are handled below.
 *
 * Does not generate reference files, inspect Markdown links, render pages,
 * or modify declarations.
 */
async function main() {
  const errors = [
    ...(await validateDocumentCatalogue(documentEntries, documentationRoot)),
    ...validateDocumentNavigation(
      documentGroups,
      documentEntries.map(([id]) => id),
    ),
  ];

  if (errors.length > 0) {
    console.error("The Registrar rejected the document catalogue:");

    for (const error of errors) {
      console.error(`- ${error}`);
    }

    // Signal failure without terminating immediately through process.exit.
    process.exitCode = 1;
    return;
  }

  console.info(
    `The Registrar accepted ${documentEntries.length} document declarations.`,
  );
}

// Report an inspection failure separately from ordinary validation diagnostics.
main().catch((error: unknown) => {
  console.error(
    "The Registrar could not inspect the documentation directory:",
    error,
  );
  process.exitCode = 1;
});
