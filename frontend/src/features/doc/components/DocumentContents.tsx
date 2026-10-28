import type { DocumentHeading } from "../markdown/documentHeadings";

/**
 * Presents a collapsible section directory for heading levels two and three.
 *
 * @param props - Headings indexed from the displayed document.
 * @returns A section directory, or null when no selected headings exist.
 *
 * @remarks
 * Preserves input order in a flat list rather than rebuilding nesting.
 * Uses supplied heading IDs without generating or deduplicating them.
 * Empty heading labels fall back to "Untitled section".
 *
 * Fragment-only links target the current page and encode the identifier.
 * The component does not track scroll position or mark an active section.
 */
export function DocumentContents({
  headings,
}: {
  headings: readonly DocumentHeading[];
}) {
  const sections = headings.filter(
    (heading) => heading.depth === 2 || heading.depth === 3,
  );

  if (sections.length === 0) return null;

  return (
    <details>
      <summary>On this page</summary>
      <nav aria-label="On this page">
        <ol>
          {sections.map((heading) => (
            <li key={heading.id}>
              <a href={`#${encodeURIComponent(heading.id)}`}>
                {heading.text || "Untitled section"}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
