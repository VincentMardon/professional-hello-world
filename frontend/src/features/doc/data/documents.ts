/**
 * Declares a selected Markdown source and its reader-facing identity.
 *
 * @remarks
 * Source paths are relative to the documentation directory.
 * Slug segments identify the reader route beneath /doc.
 * An empty slug identifies the documentation reception.
 *
 * Runtime constraints are checked by the catalogue validator.
 * This type alone does not establish file existence or route uniqueness.
 */
export type DocumentDefinition = {
  /** Label used in documentation navigation. */
  title: string;
  /** Title supplied to Next.js page metadata. */
  metadataTitle: string;
  /** Description supplied to Next.js page metadata. */
  description: string;
  /** Markdown source path relative to the documentation directory. */
  file: string;
  /** Reader-route segments beneath /doc; empty for reception. */
  slug: readonly string[];
};

/**
 * Selects the documents published by the documentation reader.
 *
 * @remarks
 * Object keys are internal document identifiers. Source paths and public
 * slugs are separate declarations and need not match those identifiers.
 *
 * Declaration order currently determines navigation order.
 * Adding a Markdown file to the repository does not register it here.
 *
 * The const assertion preserves literal types; it does not freeze the
 * catalogue at runtime.
 */
export const documents = {
  overview: {
    title: "Reception",
    metadataTitle: "Documentation — Professional Hello World",
    description: "Architecture, explanations, and technical ceremony.",
    file: "README.md",
    slug: [],
  },
  architecture: {
    title: "Architecture",
    metadataTitle: "Architecture — Professional Hello World",
    description: "PHW architecture and responsibility boundaries.",
    file: "ARCHITECTURE.md",
    slug: ["architecture"],
  },
  audioLifecycle: {
    title: "Sound lifecycle",
    metadataTitle: "Sound Lifecycle — Professional Hello World",
    description: "Follow a sound from Play to browser output.",
    file: "AUDIO-LIFECYCLE.md",
    slug: ["audio-lifecycle"],
  },
  operations: {
    title: "Operations",
    metadataTitle: "Operations — Professional Hello World",
    description: "Run, inspect, diagnose, and publish PHW.",
    file: "OPERATIONS.md",
    slug: ["operations"],
  },
  frontendGuide: {
    title: "Frontend guide",
    metadataTitle: "Frontend Field Guide — Professional Hello World",
    description:
      "Follow routes, components, hooks, and shared responsibilities.",
    file: "FRONTEND-GUIDE.md",
    slug: ["frontend"],
  },
  documentationWorkshop: {
    title: "Documentation workshop",
    metadataTitle: "Documentation Workshop — Professional Hello World",
    description:
      "Maintain authored guides, references, diagrams, and their evidence.",
    file: "DOCUMENTATION-WORKSHOP.md",
    slug: ["workshop"],
  },
  trustBoundaries: {
    title: "Trust Boundaries",
    metadataTitle: "Trust Boundaries — Professional Hello World",
    description:
      "Understand client-side access, public content, and verification limits.",
    file: "TRUST-BOUNDARIES.md",
    slug: ["trust-boundaries"],
  },
  dependencies: {
    title: "Dependencies",
    metadataTitle: "Dependencies — Professional Hello World",
    description:
      "Understand borrowed machinery, package ownership, and maintenance.",
    file: "DEPENDENCIES.md",
    slug: ["dependencies"],
  },
  engineReference: {
    title: "Reference — useBeepEngine",
    metadataTitle: "useBeepEngine Reference — Professional Hello World",
    description: "Engine initialization, readiness, and cleanup contract.",
    file: "generated/reference/features/audio-test/hooks/useBeepEngine.md",
    slug: ["reference", "use-beep-engine"],
  },
  referenceOverview: {
    title: "Reference — index",
    metadataTitle: "Technical Reference — Professional Hello World",
    description: "Generated register of selected technical contracts.",
    file: "generated/reference/README.md",
    slug: ["reference"],
  },
  audioTestReference: {
    title: "Reference — useAudioTest",
    metadataTitle: "useAudioTest Reference — Professional Hello World",
    description: "Audio settings, playback requests, and status handling.",
    file: "generated/reference/features/audio-test/hooks/useAudioTest.md",
    slug: ["reference", "use-audio-test"],
  },
  soundReference: {
    title: "Reference — Sound",
    metadataTitle: "Sound Reference — Professional Hello World",
    description: "Playback identifiers offered by the audio panel.",
    file: "generated/reference/features/audio-test/types/Sound.md",
    slug: ["reference", "sound"],
  },
  catalogueReference: {
    title: "Reference — catalogue",
    metadataTitle: "Catalogue Reference — Professional Hello World",
    description: "Document declarations, identities, and route helpers.",
    file: "generated/reference/features/doc/data/documents.md",
    slug: ["reference", "catalogue"],
  },
  diagramViewportReference: {
    title: "Reference — useDiagramViewport",
    metadataTitle: "Diagram Viewport Reference — Professional Hello World",
    description: "Zoom, width fitting, and native fullscreen contracts.",
    file: "generated/reference/features/doc/hooks/useDiagramViewport.md",
    slug: ["reference", "diagram-viewport"],
  },
  mermaidReference: {
    title: "Reference — MermaidDiagram",
    metadataTitle: "Mermaid Reference — Professional Hello World",
    description: "Queued diagram rendering, theme changes, and cleanup.",
    file: "generated/reference/features/doc/components/MermaidDiagram.md",
    slug: ["reference", "mermaid"],
  },
  catalogueValidationReference: {
    title: "Reference — catalogue validation",
    metadataTitle: "Catalogue Validation Reference — Professional Hello World",
    description: "Declaration rules, source containment, and diagnostics.",
    file: "generated/reference/features/doc/validation/validateDocumentCatalogue.md",
    slug: ["reference", "catalogue-validation"],
  },
  linkExtractionReference: {
    title: "Reference — link extraction",
    metadataTitle: "Link Extraction Reference — Professional Hello World",
    description: "Markdown link occurrences and extraction boundaries.",
    file: "generated/reference/features/doc/validation/extractDocumentLinks.md",
    slug: ["reference", "link-extraction"],
  },
  destinationInspectionReference: {
    title: "Reference — destination inspection",
    metadataTitle:
      "Destination Inspection Reference — Professional Hello World",
    description:
      "Local destination checks and deliberately skipped categories.",
    file: "generated/reference/features/doc/validation/inspectDocumentDestination.md",
    slug: ["reference", "destination-inspection"],
  },
  errorReference: {
    title: "Reference — errorMessage",
    metadataTitle: "Error Message Reference — Professional Hello World",
    description: "Conversion of thrown values into status text.",
    file: "generated/reference/shared/errors/errorMessage.md",
    slug: ["reference", "error-message"],
  },
  themeReference: {
    title: "Reference — theme",
    metadataTitle: "Theme Reference — Professional Hello World",
    description: "Provider scope, theme selection, and consumer requirements.",
    file: "generated/reference/shared/theme/ThemeProvider.md",
    slug: ["reference", "theme"],
  },
} as const satisfies Record<string, DocumentDefinition>;

/** Internal identifiers derived from the maintained document catalogue. */
export type DocumentId = keyof typeof documents;

/**
 * Exposes catalogue entries in declaration order for routing and navigation.
 *
 * @remarks
 * The assertion preserves the known key type lost by Object.entries.
 * It performs no runtime validation.
 */
export const documentEntries = Object.entries(documents) as [
  DocumentId,
  DocumentDefinition,
][];

/**
 * Builds a reader path from a validated document declaration.
 *
 * @param document - A declaration whose slug satisfies catalogue rules.
 * @returns A path beneath /doc, without the deployment base path.
 *
 * @remarks
 * This helper joins segments without encoding or validating them.
 * Deployment-prefix handling belongs to the caller or routing framework.
 */
export function getDocumentRoute(document: DocumentDefinition): string {
  return document.slug.length === 0
    ? "/doc"
    : `/doc/${document.slug.join("/")}`;
}

/**
 * Finds the first catalogue entry matching the supplied route segments.
 *
 * @param slug - Reader-route segments excluding the /doc prefix.
 * @returns The matching identifier and declaration, or undefined.
 *
 * @remarks
 * Comparison is case-sensitive and uses slash-joined segments.
 * This helper does not decode, normalize, or validate its input.
 * Catalogue validation is responsible for rejecting duplicate routes.
 */
export function findDocument(slug: readonly string[]) {
  const requestedPath = slug.join("/");

  return documentEntries.find(
    ([, document]) => document.slug.join("/") === requestedPath,
  );
}
