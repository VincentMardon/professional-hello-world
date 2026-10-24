/**
 * A candidate navigation group inspected independently of catalogue key types.
 */
export type NavigationGroupInput = {
  id: string;
  title: string;
  documents: readonly string[];
};

/**
 * Checks navigation coverage and group declarations.
 *
 * @param groups - Candidate groups in their intended display order.
 * @param documentIds - Identifiers selected by the document catalogue.
 * @returns All detected declaration errors, or an empty array.
 *
 * @remarks
 * Each selected document must appear exactly once.
 * Groups require unique valid IDs, nonempty titles, and at least one document.
 * This function performs no filesystem access or route discovery.
 */
export function validateDocumentNavigation(
  groups: readonly NavigationGroupInput[],
  documentIds: readonly string[],
): string[] {
  const errors: string[] = [];
  const knownDocuments = new Set(documentIds);
  const groupIds = new Set<string>();
  const owners = new Map<string, string>();

  for (const group of groups) {
    const report = (message: string) => {
      errors.push(`[navigation:${group.id}] ${message}`);
    };

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(group.id)) {
      report("Group ID must contain lowercase words or digits with hyphens.");
    }

    if (groupIds.has(group.id)) {
      report("Group ID is already declared.");
    }
    groupIds.add(group.id);

    if (!group.title.trim()) {
      report("Group title must not be empty.");
    }

    if (group.documents.length === 0) {
      report("Group must contain at least one document.");
    }

    for (const id of group.documents) {
      if (!knownDocuments.has(id)) {
        report(`Unknown document "${id}".`);
        continue;
      }

      const previousOwner = owners.get(id);

      if (previousOwner !== undefined) {
        report(`Document "${id}" is already assigned to "${previousOwner}".`);
      } else {
        owners.set(id, group.id);
      }
    }
  }

  for (const id of knownDocuments) {
    if (!owners.has(id)) {
      errors.push(`[navigation] Document "${id}" has no group.`);
    }
  }

  return errors;
}
