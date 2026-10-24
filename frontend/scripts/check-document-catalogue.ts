import { fileURLToPath } from "node:url";
import { documentGroups } from "../src/features/doc/data/documentNavigation.ts";
import { documentEntries } from "../src/features/doc/data/documents.ts";
import { validateDocumentCatalogue } from "../src/features/doc/validation/validateDocumentCatalogue.ts";
import { validateDocumentNavigation } from "../src/features/doc/validation/validateDocumentNavigation.ts";

const documentationRoot = fileURLToPath(
  new URL("../../docs/", import.meta.url),
);

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

    process.exitCode = 1;
    return;
  }

  console.info(
    `The Registrar accepted ${documentEntries.length} document declarations.`,
  );
}

main().catch((error: unknown) => {
  console.error(
    "The Registrar could not inspect the documentation directory:",
    error,
  );
  process.exitCode = 1;
});
