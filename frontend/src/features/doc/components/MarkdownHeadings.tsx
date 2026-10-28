import { createElement, type HTMLAttributes } from "react";
import type { Components, ExtraProps } from "react-markdown";

import { headingPermalink } from "./DocumentationPage.css";

/** Markdown heading levels supported by the reader. */
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Creates a Markdown heading renderer for one semantic level.
 *
 * @param level - Heading level to preserve in the rendered HTML.
 * @returns A renderer retaining the supplied ID and adding a section link.
 *
 * @remarks
 * Identifier generation belongs to the shared Markdown indexing plugin.
 * This renderer does not derive an address from the heading's children.
 *
 * Preserves formatted children and forwards HTML attributes, while removing
 * react-markdown's source node from the props passed to the DOM.
 * Adds the permalink only when a nonempty ID is supplied.
 */
function createHeading(level: HeadingLevel) {
  return function SectionHeading({
    node: _node,
    id,
    children,
    ...props
  }: HTMLAttributes<HTMLHeadingElement> & ExtraProps) {
    return createElement(
      `h${level}`,
      { ...props, id },
      children,
      id ? (
        <a
          href={`#${encodeURIComponent(id)}`}
          className={headingPermalink}
          aria-label="Link to this section"
        >
          #
        </a>
      ) : null,
    );
  };
}

/**
 * Supplies heading renderers for all six Markdown levels.
 *
 * @remarks
 * Each renderer preserves the indexed ID and exposes an encoded
 * fragment-only link labelled "Link to this section".
 *
 * Rendering and the section directory must use the same indexing rules
 * so their destinations agree.
 */
export const markdownHeadingComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
} satisfies Components;
