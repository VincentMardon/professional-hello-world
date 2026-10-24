import type { DocumentLink } from "./extractDocumentLinks.ts";
import type { DestinationInspection } from "./inspectDocumentDestination.ts";

/** Heading inventories for the selected reader documents. */
export type FragmentContext = {
  sourceFile: string;
  headingsByFile: ReadonlyMap<string, ReadonlySet<string>>;
  headingsByRoute: ReadonlyMap<string, ReadonlySet<string>>;
};

/** Result of inspecting the fragment independently of its destination. */
export type FragmentInspection = {
  status: "none" | "checked" | "deferred" | "error";
  message?: string;
};

/**
 * Checks a fragment against the selected document's rendered heading IDs.
 *
 * @param link - Original Markdown occurrence.
 * @param destination - Result of the existing destination inspection.
 * @param context - Selected-document heading inventories.
 * @returns Fragment status and an optional failure explanation.
 *
 * @remarks
 * File keys must match the real paths returned by destination inspection.
 * Route keys must use canonical paths without the deployment prefix.
 * SourceFile must identify the current document in the file inventory.
 *
 * Images, unselected targets, and browser fragment directives are deferred.
 * An empty fragment addresses the page top rather than a heading.
 * This function performs no filesystem or network access.
 */
export function inspectDocumentFragment(
  link: DocumentLink,
  destination: DestinationInspection,
  context: FragmentContext,
): FragmentInspection {
  const marker = link.destination.indexOf("#");

  if (marker === -1 || destination.status === "error") {
    return { status: "none" };
  }

  if (link.kind === "image") {
    return { status: "deferred" };
  }

  let headings: ReadonlySet<string> | undefined;

  if (destination.category === "fragment") {
    headings = context.headingsByFile.get(context.sourceFile);
  } else if (destination.category === "file") {
    headings = context.headingsByFile.get(destination.target);
  } else if (destination.category === "route") {
    headings = context.headingsByRoute.get(destination.target);
  }

  if (!headings) {
    return { status: "deferred" };
  }

  let fragment: string;

  try {
    fragment = decodeURIComponent(link.destination.slice(marker + 1));
  } catch {
    return {
      status: "error",
      message: "Fragment contains invalid URL encoding.",
    };
  }

  if (fragment.includes(":~:")) {
    return { status: "deferred" };
  }

  if (!fragment || headings.has(fragment)) {
    return { status: "checked" };
  }

  return {
    status: "error",
    message: `No rendered heading matches fragment ${JSON.stringify(fragment)}.`,
  };
}
