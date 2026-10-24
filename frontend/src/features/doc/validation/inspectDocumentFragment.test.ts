import { describe, expect, it } from "vitest";

import type { DocumentLink } from "./extractDocumentLinks";
import type { DestinationInspection } from "./inspectDocumentDestination";
import {
  type FragmentContext,
  inspectDocumentFragment,
} from "./inspectDocumentFragment";

const headings = new Set(["theme", "theme-1", "été"]);

const context: FragmentContext = {
  sourceFile: "current.md",
  headingsByFile: new Map([
    ["current.md", headings],
    ["target.md", headings],
  ]),
  headingsByRoute: new Map([["/doc/reference/theme", headings]]),
};

function inspect(
  value: string,
  category: DestinationInspection["category"] = "fragment",
  target = value,
  kind: DocumentLink["kind"] = "link",
) {
  return inspectDocumentFragment(
    { destination: value, kind, line: 1, column: 1 },
    {
      status: category === "fragment" ? "skipped" : "checked",
      category,
      target,
      fragmentDeferred: true,
    },
    context,
  );
}

describe("the Inspectorate of Actualy Existing Section Plaques", () => {
  it("accepts current-document headings and duplicate suffixes", () => {
    expect(inspect("#theme").status).toBe("checked");
    expect(inspect("#theme-1").status).toBe("checked");
  });

  it("decodes accented heading fragments", () => {
    expect(inspect("#%C3%A9t%C3%A9").status).toBe("checked");
  });

  it("rejects missing headings with case-sensitive comparison", () => {
    expect(inspect("#Theme").status).toBe("error");
    expect(inspect("#missing").status).toBe("error");
  });

  it("accepts selected file and reader-route targets", () => {
    expect(inspect("target.md#theme", "file", "target.md").status).toBe(
      "checked",
    );

    expect(
      inspect("/doc/reference/theme/#theme", "route", "/doc/reference/theme")
        .status,
    ).toBe("checked");
  });

  it("defers unselected files and external destinations", () => {
    expect(inspect("code.ts#L12", "file", "code.ts").status).toBe("deferred");
    expect(inspect("https://example.com/#theme", "external").status).toBe(
      "deferred",
    );
  });

  it("defers image fragments and browser text directives", () => {
    expect(
      inspect("target.md#theme", "file", "target.md", "image").status,
    ).toBe("deferred");
    expect(inspect("#:~:text=Theme").status).toBe("deferred");
  });

  it("accepts page-top fragments and ignores absent fragments", () => {
    expect(inspect("#").status).toBe("checked");
    expect(inspect("target.md", "file", "target.md").status).toBe("none");
  });

  it("rejects malformed fragment encoding", () => {
    expect(inspect("#%ZZ")).toEqual({
      status: "error",
      message: "Fragment contains invalid URL encoding.",
    });
  });
});
