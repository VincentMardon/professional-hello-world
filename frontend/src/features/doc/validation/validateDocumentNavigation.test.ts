import { describe, expect, it } from "vitest";

import { documentGroups } from "../data/documentNavigation";
import { documentEntries } from "../data/documents";
import {
  type NavigationGroupInput,
  validateDocumentNavigation,
} from "./validateDocumentNavigation";

function group(
  documents: readonly string[],
  overrides: Partial<NavigationGroupInput> = {},
): NavigationGroupInput {
  return { id: "guides", title: "Guides", documents, ...overrides };
}

describe("the Register assigning each document exactly one reading room", () => {
  it("accepts the maintained navigation with complete catalogue coverage", () => {
    expect(
      validateDocumentNavigation(
        documentGroups,
        documentEntries.map(([id]) => id),
      ),
    ).toEqual([]);
  });

  it("rejects an omitted document", () => {
    expect(
      validateDocumentNavigation(
        [group(["overview"])],
        ["overview", "architecture"],
      ),
    ).toContain('[navigation] Document "architecture" has no group.');
  });

  it("rejects an unknown document", () => {
    expect(
      validateDocumentNavigation(
        [group(["overview", "invented"])],
        ["overview"],
      ),
    ).toContain('[navigation:guides] Unknown document "invented".');
  });

  it("rejects duplicates within one group", () => {
    expect(
      validateDocumentNavigation(
        [group(["overview", "overview"])],
        ["overview"],
      ),
    ).toContain(
      '[navigation:guides] Document "overview" is already assigned to "guides".',
    );
  });

  it("rejects duplicates across groups", () => {
    expect(
      validateDocumentNavigation(
        [group(["overview"]), group(["overview"], { id: "reference" })],
        ["overview"],
      ),
    ).toContain(
      '[navigation:reference] Document "overview" is already assigned to "guides".',
    );
  });

  it("rejects duplicate group IDs", () => {
    expect(
      validateDocumentNavigation(
        [group(["overview"]), group(["architecture"])],
        ["overview", "architecture"],
      ),
    ).toContain("[navigation:guides] Group ID is already declared.");
  });

  it("rejects empty groups and titles", () => {
    expect(validateDocumentNavigation([group([], { title: " " })], [])).toEqual(
      [
        "[navigation:guides] Group title must not be empty.",
        "[navigation:guides] Group must contain at least one document.",
      ],
    );
  });

  it("rejects invalid group identifiers", () => {
    expect(
      validateDocumentNavigation(
        [group(["overview"], { id: "Invalid Group" })],
        ["overview"],
      ),
    ).toContain(
      "[navigation:Invalid Group] Group ID must contain lowercase words or digits with hyphens.",
    );
  });
});
