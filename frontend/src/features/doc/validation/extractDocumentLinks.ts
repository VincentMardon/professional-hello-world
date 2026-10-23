import { definitions } from "mdast-util-definitions";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export type DocumentLink = {
  kind: "link" | "image";
  destination: string;
  line: number | undefined;
  column: number | undefined;
};

const parser = unified().use(remarkParse).use(remarkGfm);

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
