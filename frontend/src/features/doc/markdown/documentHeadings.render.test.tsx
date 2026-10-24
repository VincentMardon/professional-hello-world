import { render, screen } from "@testing-library/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { describe, expect, it } from "vitest";
import { markdownHeadingComponents } from "../components/MarkdownHeadings";
import {
  extractDocumentHeadings,
  remarkDocumentHeadings,
} from "./documentHeadings";

describe("the Office of Addresses Actually Affixed to Headings", () => {
  it("renders the same identifiers used by the heading index", () => {
    const source = [
      "# Ready",
      "",
      "## Ready",
      "",
      "### **Play** `sound()`",
      "",
      "[Second section](#ready-1)",
    ].join("\n");

    const { container } = render(
      <Markdown
        remarkPlugins={[remarkGfm, remarkDocumentHeadings]}
        components={markdownHeadingComponents}
      >
        {source}
      </Markdown>,
    );

    const renderedIds = Array.from(
      container.querySelectorAll("h1, h2, h3, h4, h5, h6"),
      (heading) => heading.id,
    );

    expect(renderedIds).toEqual(
      extractDocumentHeadings(source).map((heading) => heading.id),
    );
    expect(renderedIds).toEqual(["ready", "ready-1", "play-sound"]);

    expect(
      screen.getByRole("link", { name: "Second section" }),
    ).toHaveAttribute("href", "#ready-1");

    const permalinks = screen.getAllByRole("link", {
      name: "Link to this section",
    });

    expect(permalinks).toHaveLength(3);

    for (const link of permalinks) {
      const href = link.getAttribute("href");
      expect(href).toBeTruthy();

      const targetId = decodeURIComponent((href ?? "").slice(1));
      expect(document.getElementById(targetId)).not.toBeNull();
    }
  });
});
