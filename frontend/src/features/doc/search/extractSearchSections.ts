import { toString as markdownToString } from "mdast-util-to-string";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { SKIP, visit } from "unist-util-visit";

import { indexDocumentHeadings } from "../markdown/documentHeadings.ts";

/** Searchable content associated with a heading or page introduction */
export type SearchSection = {
  /** Shared heading ID, or undefined for the introduction. */
  id: string | undefined;
  /** Plain-text heading label; empty for the introduction. */
  heading: string;
  /** Extracted section body, stored separately from the heading. */
  text: string;
};

const parser = unified().use(remarkParse).use(remarkGfm);

/**
 * Extracts text from a Markdown node and collapses whitespace.
 *
 * @param node - Parsed Markdown content accepted by the text extractor.
 * @returns Trimmed text without raw HTML markup or link destinations.
 *
 * @remarks
 * Image alternative text contributes to the result.
 * This helper does not generate HTML or preserve visual formatting.
 */
function plainText(node: unknown): string {
  return markdownToString(node, {
    includeHtml: false,
    includeImageAlt: true,
  })
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts document-order search sections using the reader's heading IDs.
 *
 * @param source - CommonMark/GFM source to index.
 * @returns Heading sections and any nonempty introduction before the first heading.
 *
 * @remarks
 * Each section contains content until the next heading, at any level.
 * Paragraphs, lists, tables, and ordinary code contribute searchable text.
 * Mermaid source, raw HTML, and link destinations are excluded.
 * No filesystem access or rendered navigation is involved.
 * Heading labels and body text remain separate for later ranking.
 * Heading-only sections are retained even when their body is empty.
 * The introduction is omitted when no searchable text precedes the
 * first heading. Completely empty input produces no sections.
 */
export function extractSearchSections(source: string): SearchSection[] {
  const tree = parser.parse(source);
  const headings = indexDocumentHeadings(tree);
  const sections: SearchSection[] = [{ id: undefined, heading: "", text: "" }];

  let current = sections[0];
  let headingIndex = 0;

  /** Adds nonempty text to the current section with a separating space. */
  function append(text: string) {
    if (text) {
      current.text = current.text ? `${current.text} ${text}` : text;
    }
  }

  // Heading traversal follows the same order as the shared heading index.
  // Handled containers return SKIP so their children are not visited again.
  visit(tree, (node) => {
    if (node.type === "heading") {
      const heading = headings[headingIndex++];

      current = {
        id: heading.id,
        heading: heading.text,
        text: "",
      };
      sections.push(current);
      return SKIP;
    }

    if (node.type === "paragraph") {
      append(plainText(node));
      return SKIP;
    }

    if (node.type === "table") {
      for (const row of node.children) {
        append(row.children.map((cell) => plainText(cell)).join(" "));
      }
      return SKIP;
    }

    if (node.type === "code") {
      if (node.lang?.toLowerCase() !== "mermaid") {
        append(node.value.replace(/\s+/g, " ").trim());
      }
      return SKIP;
    }
  });

  return sections.filter(
    (section) => section.id !== undefined || section.text.length > 0,
  );
}
