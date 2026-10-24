import { type DocumentId, documents } from "./documents.ts";

/** A reader-facing group with an explicit document order. */
export type DocumentGroup = {
  id: string;
  title: string;
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
  id: DocumentId;
  document: (typeof documents)[DocumentId];
};

/** Group context and adjacent documents for one reader page. */
export type DocumentNavigation = {
  group: DocumentGroup;
  landing: NavigationDocument;
  previous: NavigationDocument | undefined;
  next: NavigationDocument | undefined;
};

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
