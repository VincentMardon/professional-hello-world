import { type DocumentId, documents } from "./documents.ts";

/** A reader-facing group with an explicit document order. */
export type DocumentGroup = {
  /** Navigation identity, independent of document route segments. */
  id: string;
  /** label displayed for this reading group. */
  title: string;
  /** Reading order; the first document is the group's landing page. */
  documents: readonly DocumentId[];
};

/**
 * Organizes selected documents independently of catalogue declaration order.
 *
 * @remarks
 * Each selected document must appear exactly once.
 * The first document serves as the group's existing landing page.
 * Groups create no additional application routes.
 */
export const documentGroups: readonly DocumentGroup[] = [
  {
    id: "guides",
    title: "Guides",
    documents: [
      "overview",
      "architecture",
      "frontendGuide",
      "audioLifecycle",
      "trustBoundaries",
      "dependencies",
      "operations",
      "documentationWorkshop",
    ],
  },
  {
    id: "reference",
    title: "Technical reference",
    documents: [
      "referenceOverview",
      "engineReference",
      "audioTestReference",
      "soundReference",
      "catalogueReference",
      "catalogueValidationReference",
      "linkExtractionReference",
      "destinationInspectionReference",
      "mermaidReference",
      "diagramViewportReference",
      "errorReference",
      "themeReference",
    ],
  },
];

/** A selected document paired with its catalogue declaration. */
export type NavigationDocument = {
  /** Internal catalogue identifier. */
  id: DocumentId;
  /** Existing catalogue declaration, not a separate copy. */
  document: (typeof documents)[DocumentId];
};

/** Group context and adjacent documents for one reader page. */
export type DocumentNavigation = {
  /** Group containing the requested document. */
  group: DocumentGroup;
  /** First document in that group, including when it is the current page. */
  landing: NavigationDocument;
  /** Previous document, absent at the beginning of the group. */
  previous: NavigationDocument | undefined;
  /** Next document, absent at the end of the group. */
  next: NavigationDocument | undefined;
};

/**
 * Resolves an optional identifier to its existing catalogue declaration.
 *
 * @param id - Selected identifier, or undefined at a boundary.
 * @returns The identifier and declaration, or undefined at a boundary.
 *
 * @remarks
 * Assumes any supplied identifier belongs to the catalogue.
 * Does not perform runtime validation or construct a public route.
 */
function navigationDocument(
  id: DocumentId | undefined,
): NavigationDocument | undefined {
  return id === undefined ? undefined : { id, document: documents[id] };
}

/**
 * Finds group context and adjacent pages without crossing group boundaries.
 *
 * @param documentId - Selected document whose navigation is requested.
 * @returns Its navigation context, or undefined when no group contains it.
 *
 * @remarks
 * Group order is explicit and independent of public URL structure.
 * The first and last pages have no previous or next page respectively.
 * This helper assumes the navigation declarations have been validated.
 * The first matching group is used. Duplicate membership is rejected
 * by navigation validation rather than resolved by this helper.
 * An absent group or a group without a landing document returns undefined.
 * Returned declarations reference the maintained data rather than copies.
 */
export function getDocumentNavigation(
  documentId: DocumentId,
): DocumentNavigation | undefined {
  const group = documentGroups.find((candidate) =>
    candidate.documents.includes(documentId),
  );

  if (!group) return undefined;

  const index = group.documents.indexOf(documentId);
  const landing = navigationDocument(group.documents[0]);

  if (!landing) return undefined;

  return {
    group,
    landing,
    previous: navigationDocument(group.documents[index - 1]),
    next: navigationDocument(group.documents[index + 1]),
  };
}
