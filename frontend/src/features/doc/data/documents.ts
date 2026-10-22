export type DocumentDefinition = {
  title: string;
  metadataTitle: string;
  description: string;
  file: string;
  slug: readonly string[];
};

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
    title: "Engine reference",
    metadataTitle: "Engine Reference — Professional Hello World",
    description: "The generated source reference for useBeepEngine.",
    file: "generated/api-pilot/README.md",
    slug: ["reference", "use-beep-engine"],
  },
} as const satisfies Record<string, DocumentDefinition>;

export type DocumentId = keyof typeof documents;

export const documentEntries = Object.entries(documents) as [
  DocumentId,
  DocumentDefinition,
][];

export function getDocumentRoute(document: DocumentDefinition): string {
  return document.slug.length === 0
    ? "/doc"
    : `/doc/${document.slug.join("/")}`;
}

export function findDocument(slug: readonly string[]) {
  const requestedPath = slug.join("/");

  return documentEntries.find(
    ([, document]) => document.slug.join("/") === requestedPath,
  );
}
