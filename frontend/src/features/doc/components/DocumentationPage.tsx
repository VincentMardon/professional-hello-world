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
import {
  documentationSurface,
  documentPage,
  themeSwitchPosition,
} from "./DocumentationPage.css";
import { DocumentContents } from "./DocumentContents";
import { markdownHeadingComponents } from "./MarkdownHeadings";
import { MermaidDiagram } from "./MermaidDiagram";

const repositoryRoot =
  "https://github.com/VincentMardon/professional-hello-world/";

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
  const content = await readFile(sourcePath, "utf8");
  const headings = extractDocumentHeadings(content);

  return (
    <div className={documentationSurface}>
      <div className={themeSwitchPosition}>
        <ThemeSwitch />
      </div>

      <main className={documentPage}>
        <nav aria-label="Documentation">
          <ul>
            {Object.entries(documents).map(([id, document]) => (
              <li key={id}>
                <Link
                  href={getDocumentRoute(document)}
                  aria-current={id === documentId ? "page" : undefined}
                >
                  {document.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
      </main>
    </div>
  );
}
