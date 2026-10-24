import GithubSlugger, { slug as headingSlug } from "github-slugger";
import type { Root } from "mdast";
import { toString as markdownToString } from "mdast-util-to-string";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

/** One heading's reader address and plain-text navigation label. */
export type DocumentHeading = {
  id: string;
  depth: number;
  text: string;
};

const parser = unified().use(remarkParse).use(remarkGfm);

/**
 * Assigns deterministic heading IDs and returns their document-order index.
 *
 * @param tree - Parsed Markdown tree to annotate.
 * @returns Heading addresses, levels, and plain-text labels.
 *
 * @remarks
 * Duplicate tracking starts afresh for each document.
 * Raw HTML is excluded from labels. Images contribute their alternative text.
 * Headings without a usable slug receive a unique section fallback.
 *
 * This function replaces heading hProperties with the computed identifier.
 * Renaming or reordering repeated headings can change their addresses.
 */
export function indexDocumentHeadings(tree: Root): DocumentHeading[] {
  const slugger = new GithubSlugger();
  const headings: DocumentHeading[] = [];

  visit(tree, "heading", (node) => {
    const text = markdownToString(node, {
      includeHtml: false,
      includeImageAlt: true,
    });

    const slugSource = headingSlug(text) ? text : "section";
    const id = slugger.slug(slugSource);

    node.data = {
      ...node.data,
      hProperties: { id },
    };

    headings.push({
      id,
      depth: node.depth,
      text,
    });
  });

  return headings;
}

/**
 * Extracts heading addresses using the reader's planned indexing rule.
 *
 * @param source - CommonMark/GFM source.
 * @returns Headings in document order, including levels one through six.
 *
 * @remarks
 * Code examples and raw HTML headings do not enter this index.
 * This function performs no filesystem or network access.
 */
export function extractDocumentHeadings(source: string): DocumentHeading[] {
  return indexDocumentHeadings(parser.parse(source));
}

/**
 * Adds the shared heading identifiers during Markdown rendering.
 *
 * @returns A transformer that annotates headings without replacing the tree.
 */
export function remarkDocumentHeadings() {
  return (tree: Root): void => {
    indexDocumentHeadings(tree);
  };
}
