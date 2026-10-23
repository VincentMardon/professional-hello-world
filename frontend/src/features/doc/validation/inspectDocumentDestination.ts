import { realpath, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import type { DocumentLink } from "./extractDocumentLinks.ts";

export type DestinationContext = {
  repositoryRoot: string;
  sourcePath: string;
  siteUrl: string;
  documentRoutes: readonly string[];
  applicationRoutes: readonly string[];
};

export type DestinationInspection = {
  status: "checked" | "skipped" | "error";
  category: "file" | "route" | "external" | "fragment" | "scheme";
  target: string;
  fragmentDeferred: boolean;
  message?: string;
};

function isOutside(root: string, target: string): boolean {
  const relative = path.relative(root, target);

  return (
    relative === ".." ||
    relative.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relative)
  );
}

function canonicalRoute(value: string): string {
  return value.replace(/\/+$/, "") || "/";
}

export async function inspectDocumentDestination(
  link: DocumentLink,
  context: DestinationContext,
): Promise<DestinationInspection> {
  const destination = link.destination;
  const fragmentDeferred = destination.includes("#");

  function result(
    status: DestinationInspection["status"],
    category: DestinationInspection["category"],
    target: string,
    message?: string,
  ): DestinationInspection {
    return { status, category, target, fragmentDeferred, message };
  }

  async function inspectFile(target: string) {
    const declaredRoot = path.resolve(context.repositoryRoot);

    if (isOutside(declaredRoot, target)) {
      return result("error", "file", target, "Target escapes the repository.");
    }

    try {
      const root = await realpath(declaredRoot);
      const resolved = await realpath(target);

      if (isOutside(root, resolved)) {
        return result(
          "error",
          "file",
          resolved,
          "Target resolves outside the repository.",
        );
      }

      const information = await stat(resolved);
      const valid =
        link.kind === "image"
          ? information.isFile()
          : information.isFile() || information.isDirectory();

      return valid
        ? result("checked", "file", resolved)
        : result("error", "file", resolved, "Target has an invalid file type.");
    } catch {
      return result(
        "error",
        "file",
        target,
        "Target does not exist or cannot be inspected.",
      );
    }
  }

  async function inspectSitePath(url: URL, basePath: string) {
    if (/%2f|%5c/i.test(url.pathname)) {
      return result(
        "error",
        "route",
        url.pathname,
        "Encoded path separators are not accepted.",
      );
    }

    const pathname = decodeURIComponent(url.pathname);
    const withoutBase =
      basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
        ? pathname.slice(basePath.length) || "/"
        : pathname;

    if (link.kind === "image") {
      const publicRoot = path.resolve(
        context.repositoryRoot,
        "frontend/public",
      );

      const target = path.resolve(publicRoot, `.${withoutBase}`);

      if (isOutside(publicRoot, target)) {
        return result(
          "error",
          "file",
          target,
          "Image target escapes the public directory.",
        );
      }

      return inspectFile(target);
    }

    const route = canonicalRoute(withoutBase);
    const allowed = [
      ...context.documentRoutes,
      ...context.applicationRoutes,
    ].some((candidate) => canonicalRoute(candidate) === route);

    return allowed
      ? result("checked", "route", route)
      : result(
          "error",
          "route",
          route,
          "No declared application or documentation route matches.",
        );
  }

  try {
    if (!destination || destination.startsWith("#")) {
      return result("skipped", "fragment", destination);
    }

    if (destination.includes("\\")) {
      return result(
        "error",
        "file",
        destination,
        "use URL forward slashes rather than backslashes.",
      );
    }

    if (destination.startsWith("//")) {
      return result("skipped", "external", destination);
    }

    const site = new URL(context.siteUrl);
    const basePath = site.pathname.replace(/\/+$/, "");

    if (destination.startsWith("/")) {
      return await inspectSitePath(new URL(destination, site.origin), basePath);
    }

    if (/^[a-z][a-z0-9+.-]*:/i.test(destination)) {
      const url = new URL(destination);

      if (url.protocol === "http:" || url.protocol === "https:") {
        const belongsToSite =
          url.origin === site.origin &&
          (!basePath ||
            url.pathname === basePath ||
            url.pathname.startsWith(`${basePath}/`));

        return belongsToSite
          ? await inspectSitePath(url, basePath)
          : result("skipped", "external", destination);
      }

      if (
        ["mailto:", "tel:", "irc:", "ircs:", "xmpp:"].includes(url.protocol)
      ) {
        return result("skipped", "scheme", destination);
      }

      return result(
        "error",
        "scheme",
        destination,
        `Unsupported URL scheme "${url.protocol}".`,
      );
    }

    const targetUrl = new URL(destination, pathToFileURL(context.sourcePath));

    return inspectFile(fileURLToPath(targetUrl));
  } catch {
    return result(
      "error",
      "file",
      destination,
      "Destination could not be interpreted as a valid URL path.",
    );
  }
}
