import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { DocumentId } from "../data/documents";
import { DocumentNavigation, DocumentPagination } from "./DocumentNavigation";

describe("the Ministry's directory and bounded reading corridors", () => {
  it("expands the current group and marks its current document", () => {
    render(<DocumentNavigation documentId="engineReference" />);

    expect(
      screen.getByText("Technical reference", { selector: "summary" })
        .parentElement,
    ).toHaveAttribute("open");

    expect(
      screen.getByText("Guides", { selector: "summary" }).parentElement,
    ).not.toHaveAttribute("open");

    const directory = screen.getByRole("navigation", {
      name: "Documentation",
    });

    expect(
      within(directory).getByRole("link", {
        name: "Reference — useBeepEngine",
      }),
    ).toHaveAttribute("aria-current", "page");
  });

  it("links a reference module to reception and its group landing page", () => {
    render(<DocumentNavigation documentId="engineReference" />);

    const breadcrumb = screen.getByRole("navigation", {
      name: "Breadcrumb",
    });

    expect(
      within(breadcrumb).getByRole("link", { name: "Reception" }),
    ).toHaveAttribute("href", "/doc");

    expect(
      within(breadcrumb).getByRole("link", {
        name: "Technical reference",
      }),
    ).toHaveAttribute("href", "/doc/reference");

    expect(
      within(breadcrumb).getByText("Reference — useBeepEngine"),
    ).toHaveAttribute("aria-current", "page");
  });

  it("does not repeat the group landing page in its own breadcrumb", () => {
    render(<DocumentNavigation documentId="referenceOverview" />);

    const breadcrumb = screen.getByRole("navigation", {
      name: "Breadcrumb",
    });

    expect(within(breadcrumb).getAllByRole("link")).toHaveLength(1);
    expect(within(breadcrumb).getByText("Reference — index")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it.each([
    ["overview", "Previous:", "Next: Architecture", "/doc/architecture"],
    [
      "documentationWorkshop",
      "Next:",
      "Previous: Operations",
      "/doc/operations",
    ],
    [
      "referenceOverview",
      "Previous:",
      "Next: Reference — useBeepEngine",
      "/doc/reference/use-beep-engine",
    ],
    [
      "themeReference",
      "Next:",
      "Previous: Reference — errorMessage",
      "/doc/reference/error-message",
    ],
  ] as const)(
    "keeps the reading sequence inside its group at %s",
    (documentId: DocumentId, absentLabel, presentLabel, target) => {
      render(<DocumentPagination documentId={documentId} />);

      const sequence = screen.getByRole("navigation", {
        name: "Reading sequence",
      });

      expect(
        within(sequence).queryByRole("link", {
          name: new RegExp(`^${absentLabel}`),
        }),
      ).not.toBeInTheDocument();

      expect(
        within(sequence).getByRole("link", { name: presentLabel }),
      ).toHaveAttribute("href", target);
    },
  );
});
