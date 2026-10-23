import { definitions } from "mdast-util-definitions";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

/**
 * One parsed Markdown link or image occurrence.
 *
 * @remarks
 * Positions are one-based when available. Reference-style occurrences use
 * the reference's position and the definition's destination.
 * Repeated destinations remain separate occurrences.
 */
export type DocumentLink = {
  kind: "link" | "image";
  destination: string;
  line: number | undefined;
  column: number | undefined;
};

const parser = unified().use(remarkParse).use(remarkGfm);

/**
 * Extracts link and image occurrences using CommonMark and GFM parsing.
 *
 * @param source - Markdown source text.
 * @returns Occurrences in syntax-tree traversal order, without deduplication.
 *
 * @remarks
 * Defined references are resolved through Markdown identifier matching.
 * Inline and fenced code, raw HTML links, unused definitions, are undefined
 * reference-like text do not produce inspected destinations.
 *
 * Extraction performs no filesystem or network access. It does not validate
 * destination existence, URL schemes, or heading fragments.
 */
export function extractDocumentLinks(source: string): DocumentLink[] {
  const tree = parser.parse(source);
  const findDefinition = definitions(tree);
  const links: DocumentLink[] = [];

  visit(tree, (node) => {
    if (node.type === "link" || node.type === "image") {
      links.push({
        kind: node.type,
        destination: node.url,
        line: node.position?.start.line,
        column: node.position?.start.column,
      });

      return;
    }

    if (node.type === "linkReference" || node.type === "imageReference") {
      const definition = findDefinition(node.identifier);

      if (!definition) return;

      links.push({
        kind: node.type === "imageReference" ? "image" : "link",
        destination: definition.url,
        line: node.position?.start.line,
        column: node.position?.start.column,
      });
    }
  });

  return links;
}
