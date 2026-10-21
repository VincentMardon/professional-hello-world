# 4.4.1 — The Projector Receives Its Remote Control

**Release preparation — not published.** This capability uses the third version number under Vincent's explicit PHW lore convention, rather than a strict SemVer classification. Package and root lockfile metadata are aligned to 4.4.1. Vincent confirms the final local checks and production build. The preparation commit, its exact CI and deployment, tag, and release publication remain pending.

## Scope

- Add independent zoom state for each Mermaid diagram, bounded from 25 to 300 percent.
- Provide decrement/increment buttons, a range input, displayed percentage, and a reset to 100 percent.
- Define 100 percent from the SVG viewBox reference width, rather than the available page width.
- Apply zoom through CSS variables on the existing SVG without adding zoom to the Mermaid rendering effect's dependencies.
- Remove inline SVG sizing constraints and default figure side margins.
- Group controls in a named fieldset, retaining labelled range input, keyboard focus styles, and the existing scrollable diagram region.
- Record PHW's artistic versioning policy and the rule that documentation releases mark tooling capabilities, not routine page additions.

Fit-to-width and fullscreen remain later capability slices. Additional diagrams are content work, not automatic release triggers. Audio behavior, theme persistence, and the renderer's existing queue are unchanged.

## Verification checkpoint

Vincent reports the zoom works. Targeted Biome checks pass for the two diagram files. Source review confirms the corrected CSS zoom formula and fieldset. The compact five-column grid, smaller buttons, and shrinkable slider are restored in the inspected stylesheet. Vincent confirms the requested correction and checks.

Vincent confirms type checking, tests, and production build after version alignment. Exact preparation-commit CI and deployment remain pending publication. No dedicated automated zoom coverage or independent assistant browser inspection is claimed.

## Publication sequence

Layout correction, version alignment, and local validation are complete. Vincent reviews and publishes the preparation commit. Verify CI and Pages for that exact commit before Vincent creates the annotated v4.4.1 tag and publishes the release. Replace preparation notices with verified publication records afterward without moving the tag.
