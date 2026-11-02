import { describe, expect, it } from "vitest";

import { validateReferenceCoverage } from "./validateReferenceCoverage.ts";

const indexFile = "generated/reference/README.md";
const hookFile = "generated/reference/hooks/useExample.md";

describe("the Register refusing reference pages without assigned rooms", () => {
  it("accepts complete coverage", () => {
    expect(
      validateReferenceCoverage(
        [indexFile, hookFile],
        [
          { id: "referenceOverview", file: indexFile },
          { id: "example", file: hookFile },
        ],
      ),
    ).toEqual([]);
  });

  it("rejects a generated page missing from the catalogue", () => {
    expect(
      validateReferenceCoverage(
        [indexFile, hookFile],
        [{ id: "referenceOverview", file: indexFile }],
      ),
    ).toContain(
      `[reference] Generated page "${hookFile}" has no catalogue declaration.`,
    );
  });

  it("rejects a registered source absent from generated output", () => {
    expect(
      validateReferenceCoverage(
        [indexFile],
        [
          { id: "referenceOverview", file: indexFile },
          { id: "example", file: hookFile },
        ],
      ),
    ).toContain(
      `[example] Registered reference source "${hookFile}" is absent from generated output.`,
    );
  });

  it("ignores authored sources and the archived reference pilot", () => {
    expect(
      validateReferenceCoverage(
        [indexFile],
        [
          { id: "referenceOverview", file: indexFile },
          { id: "guide", file: "ARCHITECTURE.md" },
          { id: "pilot", file: "generated/api-pilot/README.md" },
        ],
      ),
    ).toEqual([]);
  });

  it("reports both directions of a coverage mismatch", () => {
    expect(
      validateReferenceCoverage(
        [indexFile],
        [{ id: "example", file: hookFile }],
      ),
    ).toEqual([
      `[reference] Generated page "${indexFile}" has no catalogue declaration.`,
      `[example] Registered reference source "${hookFile}" is absent from generated output.`,
    ]);
  });

  it("refuses an empty generated inventory even with no declarations", () => {
    expect(validateReferenceCoverage([], [])).toContain(
      "[reference] No generated Markdown pages were found.",
    );
  });
});
