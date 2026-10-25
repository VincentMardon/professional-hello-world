import { toString as markdownToString } from "mdast-util-to-string";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { SKIP, visit } from "unist-util-visit";

import { indexDocumentHeadings } from "../markdown/documentHeadings.ts";

/** Searchable content associated with a rendered heading or page introduction */
export type SearchSection = {
  id: string | undefined;
  heading: string;
  text: string;
};

const parser = unified().use(remarkParse).use(remarkGfm);

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
 * Mermaid source, raw HTML, and linkdestinations are excluded.
 * No filesystem access or rendered navigation is involved.
 */
export function extractSearchSections(source: string): SearchSection[] {
  const tree = parser.parse(source);
  const headings = indexDocumentHeadings(tree);
  const sections: SearchSection[] = [{ id: undefined, heading: "", text: "" }];

  let current = sections[0];
  let headingIndex = 0;

  function append(text: string) {
    if (text) {
      current.text = current.text ? `${current.text} ${text}` : text;
    }
  }

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
