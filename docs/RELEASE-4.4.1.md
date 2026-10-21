# 4.4.1 — The Projector Receives Its Remote Control

**Published October 21, 2026 at 10:41:58 UTC (12:41:58 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.4.1), neither a draft nor a prerelease. This capability intentionally uses the third version number under PHW lore rather than strict SemVer. Package and root lockfile versions are aligned to 4.4.1.

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

Vincent confirms type checking, tests, and production build after version alignment. Preparation commit #92 passed its [exact CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39585783752). No dedicated automated zoom coverage or independent assistant browser inspection is claimed.

## Verified publication

Annotated tag object `89425db77e10c19fd6d0b9acbdd67095ddb4e747` resolves to preparation commit #92, `65357a731bfac26b26d82957feeb66be20f29af0`. This documentation-only publication follow-up does not move the tag.
