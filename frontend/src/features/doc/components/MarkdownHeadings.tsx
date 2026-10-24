import { createElement, type HTMLAttributes } from "react";
import type { Components, ExtraProps } from "react-markdown";

import { headingPermalink } from "./DocumentationPage.css";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

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

/**Markdown heading renderers preserving indexed IDs and exposing section links. */
export const markdownHeadingComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
} satisfies Components;
