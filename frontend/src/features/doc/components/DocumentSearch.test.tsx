import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { SearchEntry } from "../search/buildSearchIndex";
import { DocumentSearch } from "./DocumentSearch";

function entry(key: string, overrides: Partial<SearchEntry> = {}): SearchEntry {
  return {
    key,
    documentId: key,
    title: `Engine ${key}`,
    description: "Selected technical documentation.",
    heading: "Playback",
    href: `/doc/engine-${key}#playback`,
    text: "Playback is ready.",
    ...overrides,
  };
}

function openSearch(entries: SearchEntry[]) {
  render(<DocumentSearch entries={entries} />);
  fireEvent.click(screen.getByText("Search documentation"));

  return screen.getByRole("searchbox", { name: "Search terms" });
}

describe("the Bureau receiving enquiries through its public counter", () => {
  it("starts without results and explains how to search", () => {
    openSearch([entry("one")]);

    expect(screen.getByRole("status")).toHaveTextContent(
      "Enter terms to search",
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Clear" })).toBeDisabled();
  });

  it("provides a section link and an excerpt for a matching entry", () => {
    const input = openSearch([entry("one")]);

    fireEvent.change(input, { target: { value: "playback" } });

    expect(
      screen.getByRole("link", { name: "Engine one — Playback" }),
    ).toHaveAttribute("href", "/doc/engine-one#playback");
    expect(screen.getByText("Playback is ready.")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(
      "1 matching section. Showing 1.",
    );
  });

  it("announces missing results and clears the enquiry", () => {
    const input = openSearch([entry("one")]);

    fireEvent.change(input, { target: { value: "unfindable" } });

    expect(screen.getByRole("status")).toHaveTextContent(
      "No matching sections.",
    );

    fireEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(input).toHaveValue("");
    expect(screen.getByRole("status")).toHaveTextContent(
      "Enter terms to search",
    );
    expect(screen.getByRole("button", { name: "Clear" })).toBeDisabled();
  });

  it("reveals more matches and resets the batch for a changed query", () => {
    const entries = Array.from({ length: 25 }, (_, index) =>
      entry(String(index)),
    );

    const input = openSearch(entries);

    fireEvent.change(input, { target: { value: "engine" } });

    expect(screen.getAllByRole("link")).toHaveLength(20);
    expect(screen.getByRole("status")).toHaveTextContent(
      "25 matching sections. Showing 20.",
    );

    fireEvent.click(screen.getByRole("button", { name: "Show more results" }));

    expect(screen.getAllByRole("link")).toHaveLength(25);
    expect(
      screen.queryByRole("button", { name: "Show more results" }),
    ).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "playback" } });

    expect(screen.getAllByRole("link")).toHaveLength(20);
    expect(
      screen.getByRole("button", { name: "Show more results" }),
    ).toBeInTheDocument();
  });
});
