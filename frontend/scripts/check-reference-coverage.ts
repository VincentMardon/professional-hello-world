import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { documentEntries } from "../src/features/doc/data/documents.ts";
import { validateReferenceCoverage } from "../src/features/doc/validation/validateReferenceCoverage.ts";

const documentationRoot = fileURLToPath(
  new URL("../../docs/", import.meta.url),
);
const referenceRoot = path.join(documentationRoot, "generated", "reference");

/**
 * Collects Markdown files beneath the owned reference directory.
 *
 * @param directory - Directory currently being inspected.
 * @returns Source paths relative to docs, using forward slashes.
 *
 * @remarks
 * Does not follow links or silently omit them.
 * Unreadable directories and symbolic entries reject the inspection.
 */
async function collectMarkdown(directory: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const target = path.join(directory, entry.name);

    if (entry.isSymbolicLink()) {
      throw new Error(
        `Symbolic entries are not supported in generated reference: ${target}`,
      );
    }

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdown(target)));
    } else if (entry.isFile() && /\.md$/i.test(entry.name)) {
      files.push(
        path.relative(documentationRoot, target).split(path.sep).join("/"),
      );
    }
  }

  return files;
}

/**
 * Compares existing generated Markdown with catalogue reference sources.
 *
 * @returns A promise settling after coverage diagnostics are reported.
 *
 * @remarks
 * Does not run TypeDoc. Generate reference before using this command
 * to inspect newly produced output.
 *
 * Catalogue and navigation validation remain separate checks.
 * Missing output, incomplete coverage, and inspection failures cause
 * a nonzero process exit status.
 */
async function main() {
  const generatedFiles = await collectMarkdown(referenceRoot);
  const catalogue = documentEntries.map(([id, document]) => ({
    id,
    file: document.file,
  }));
  const errors = validateReferenceCoverage(generatedFiles, catalogue);

  console.info(`Generated Markdown pages inspected: ${generatedFiles.length}.`);

  if (errors.length > 0) {
    console.error("The Register rejected reference coverage:");

    for (const error of errors) {
      console.error(`- ${error}`);
    }

    process.exitCode = 1;
    return;
  }

  console.info(
    "Every generated reference page has a catalogue declaration, " +
      "and every registered reference source exists in the output.",
  );
}

main().catch((error: unknown) => {
  console.error("The Register could not inspect reference coverage:", error);
  process.exitCode = 1;
});
