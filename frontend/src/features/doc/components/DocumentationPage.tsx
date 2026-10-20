import { readFile } from "node:fs/promises";
import path from "node:path";
import Markdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";

import { documentPage } from "./DocumentationPage.css";

const repositoryRoot =
  "https://github.com/VincentMardon/professional-hello-world/";

function resolveDocumentUrl(value: string) {
  const safeUrl = defaultUrlTransform(value);

  if (
    !safeUrl ||
    safeUrl.startsWith("#") ||
    safeUrl.startsWith("/") ||
    /^[a-z][a-z0-9+.-]*:/i.test(safeUrl)
  ) {
    return safeUrl;
  }

  const destination = new URL(safeUrl, `${repositoryRoot}blob/main/docs/`);

  const lastSegment = destination.pathname.split("/").at(-1) ?? "";

  if (!lastSegment.includes(".")) {
    destination.pathname = destination.pathname.replace(
      "/blob/main/",
      "/tree/main/",
    );
  }

  return destination.href;
}

export async function DocumentationPage() {
  const sourcePath = path.resolve(process.cwd(), "../docs/README.md");
  const content = await readFile(sourcePath, "utf8");

  return (
    <main className={documentPage}>
      <Markdown remarkPlugins={[remarkGfm]} urlTransform={resolveDocumentUrl}>
        {content}
      </Markdown>
    </main>
  );
}
