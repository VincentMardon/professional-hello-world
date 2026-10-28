import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Markdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeSwitch } from "../../../components/ThemeSwitch";
import {
  type DocumentId,
  documents,
  getDocumentRoute,
} from "../data/documents";
import {
  extractDocumentHeadings,
  remarkDocumentHeadings,
} from "../markdown/documentHeadings";
import { loadSearchIndex } from "../search/loadSearchIndex";
import {
  documentationSurface,
  documentPage,
  themeSwitchPosition,
} from "./DocumentationPage.css";
import { DocumentContents } from "./DocumentContents";
import { DocumentNavigation, DocumentPagination } from "./DocumentNavigation";
import { DocumentSearch } from "./DocumentSearch";
import { markdownHeadingComponents } from "./MarkdownHeadings";
import { MermaidDiagram } from "./MermaidDiagram";

/** Repository base used to resolve links outside registered reader pages. */
const repositoryRoot =
  "https://github.com/VincentMardon/professional-hello-world/";

/**
 * Resolves a Markdown URL relative to its selected source document.
 *
 * @param value - URL supplied by the Markdown renderer.
 * @param sourceFile - Source path relative to the documentation directory.
 * @returns A filtered URL, registered reader path, or repository destination.
 *
 * @remarks
 * Applies react-markdown's default URL filtering first.
 * Fragment-only, root-relative, and explicit-scheme URLs then pass through.
 *
 * Relative destinations matching a registered source become reader paths,
 * preserving the query and fragment.
 *
 * Other relative destinations point to the repository on main. A final
 * segment without a dot selects a tree URL by convention; this is a
 * heuristic, not a filesystem inspection.
 *
 * This helper performs no existence or fragment validation.
 */
function resolveDocumentUrl(value: string, sourceFile: string) {
  const safeUrl = defaultUrlTransform(value);

  if (
    !safeUrl ||
    safeUrl.startsWith("#") ||
    safeUrl.startsWith("/") ||
    /^[a-z][a-z0-9+.-]*:/i.test(safeUrl)
  ) {
    return safeUrl;
  }

  const sourceUrl = new URL(`blob/main/docs/${sourceFile}`, repositoryRoot);
  const destination = new URL(safeUrl, sourceUrl);

  for (const document of Object.values(documents)) {
    const source = new URL(`blob/main/docs/${document.file}`, repositoryRoot);

    if (destination.pathname === source.pathname) {
      return `${getDocumentRoute(document)}${destination.search}${destination.hash}`;
    }
  }

  const lastSegment = destination.pathname.split("/").at(-1) ?? "";

  if (!lastSegment.includes(".")) {
    destination.pathname = destination.pathname.replace(
      "/blob/main/",
      "/tree/main/",
    );
  }

  return destination.href;
}

/**
 * Builds the shared reader for a selected catalogue document.
 *
 * @param props - Catalogue document identifier; defaults to reception.
 * @returns The document reader with navigation, search, contents, and controls.
 * @throws When loading the selected source or search inventory fails.
 *
 * @remarks
 * Reads maintained Markdown on the server during static page generation.
 * Source paths assume the application runs from the frontend directory.
 *
 * Loads the current source and complete search inventory in parallel.
 * The serialized inventory is passed to the browser search component.
 *
 * Contents extraction and Markdown rendering use the same heading rules.
 * Mermaid code blocks are delegated to the client diagram component;
 * other code blocks retain ordinary preformatted rendering.
 *
 * Registered reader links use Next Link for deployment-prefix handling.
 * Other links remain ordinary anchors after URL transformation.
 *
 * Catalogue validation and route selection occur outside this component.
 * It does not accept an arbitrary source path from the visitor.
 */
export async function DocumentationPage({
  documentId = "overview",
}: {
  documentId?: DocumentId;
}) {
  const selectedDocument = documents[documentId];
  const sourcePath = path.resolve(
    process.cwd(),
    "../docs",
    selectedDocument.file,
  );
  const [content, searchEntries] = await Promise.all([
    readFile(sourcePath, "utf8"),
    loadSearchIndex(),
  ]);

  // Build the contents index separately; the rendering plugin applies
  // the same identifier rules to the tree used for HTML output.
  const headings = extractDocumentHeadings(content);

  return (
    <div className={documentationSurface}>
      <div className={themeSwitchPosition}>
        <ThemeSwitch />
      </div>

      <main className={documentPage}>
        <DocumentNavigation documentId={documentId} />

        <DocumentSearch entries={searchEntries} />

        <DocumentContents headings={headings} />

        <Markdown
          remarkPlugins={[remarkGfm, remarkDocumentHeadings]}
          urlTransform={(value) =>
            resolveDocumentUrl(value, selectedDocument.file)
          }
          components={{
            ...markdownHeadingComponents,
            pre({ node, children, ...props }) {
              const code = node?.children[0];

              if (
                code?.type === "element" &&
                code.tagName === "code" &&
                Array.isArray(code.properties.className) &&
                code.properties.className.includes("language-mermaid")
              ) {
                const source = code.children
                  .map((child) => (child.type === "text" ? child.value : ""))
                  .join("");

                return <MermaidDiagram source={source} />;
              }

              return <pre {...props}>{children}</pre>;
            },
            a({ href, children, node: _node, ...props }) {
              if (
                href === "/doc" ||
                href?.startsWith("/doc/") ||
                href?.startsWith("/doc#") ||
                href?.startsWith("/doc?")
              ) {
                return (
                  <Link href={href} {...props}>
                    {children}
                  </Link>
                );
              }

              return (
                <a href={href} {...props}>
                  {children}
                </a>
              );
            },
          }}
        >
          {content}
        </Markdown>

        <DocumentPagination documentId={documentId} />
      </main>
    </div>
  );
}
