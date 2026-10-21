import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Markdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";

import { ThemeSwitch } from "../../../components/ThemeSwitch";

import {
  documentationSurface,
  documentPage,
  themeSwitchPosition,
} from "./DocumentationPage.css";
import { MermaidDiagram } from "./MermaidDiagram";

const repositoryRoot =
  "https://github.com/VincentMardon/professional-hello-world/";

const documents = {
  overview: {
    title: "Reception",
    file: "README.md",
    route: "/doc",
  },
  architecture: {
    title: "Architecture",
    file: "ARCHITECTURE.md",
    route: "/doc/architecture",
  },
  audioLifecycle: {
    title: "Sound lifecycle",
    file: "AUDIO-LIFECYCLE.md",
    route: "/doc/audio-lifecycle",
  },
  engineReference: {
    title: "Engine reference",
    file: "generated/api-pilot/README.md",
    route: "/doc/reference/use-beep-engine",
  },
} as const;

type DocumentId = keyof typeof documents;

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
      return `${document.route}${destination.search}${destination.hash}`;
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
                  href={document.route}
                  aria-current={id === documentId ? "page" : undefined}
                >
                  {document.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Markdown
          remarkPlugins={[remarkGfm]}
          urlTransform={(value) =>
            resolveDocumentUrl(value, selectedDocument.file)
          }
          components={{
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
