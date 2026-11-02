/** Catalogue and source path needed for coverage inspection. */
export type ReferenceCatalogueEntry = {
  /** Internal document identifier used in diagnostics. */
  id: string;
  /** Source path relative to docs, using forward slashes. */
  file: string;
};

const referencePrefix = "generated/reference/";

/** Compares generated reference paths with registered reader sources.
 *
 * @param generatedFiles - Markdown paths beneath the owned reference directory,
 * expressed relative to docs with forward slashes.
 * @param entries - Catalogue identities and source paths.
 * @returns Coverage diagnostics, or an empty array when coverage is complete.
 *
 * @remarks
 * Every generated page must have a catalogue declaration, and every declared
 * source beneath generated/reference must appear in the generated inventory.
 *
 * Authored documents and the archived pilot are outside this comparison.
 * An empty generated inventory is rejected.
 *
 * Comparison is case-sensitive. Inputs must already use canonical paths.
 * This function performs no filesystem access, path validation, generation,
 * route validation, or navigation inspection.
 */
export function validateReferenceCoverage(
  generatedFiles: readonly string[],
  entries: readonly ReferenceCatalogueEntry[],
): string[] {
  const errors: string[] = [];
  const generated = new Set(generatedFiles);
  const references = entries.filter((entry) =>
    entry.file.startsWith(referencePrefix),
  );
  const registered = new Set(references.map((entry) => entry.file));

  if (generated.size === 0) {
    errors.push("[reference] No generated Markdown pages were found.");
  }

  for (const file of [...generated].sort()) {
    if (!registered.has(file)) {
      errors.push(
        `[reference] Generated page "${file}" has no catalogue declaration.`,
      );
    }
  }

  for (const entry of references) {
    if (!generated.has(entry.file)) {
      errors.push(
        `[${entry.id}] Registered reference source "${entry.file}" is absent from generated output.`,
      );
    }
  }

  return errors;
}
