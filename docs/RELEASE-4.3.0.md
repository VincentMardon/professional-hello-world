# 4.3.0 — The Directorate Obtains a Night Shift

**Published October 21, 2026 at 04:04:41 UTC (06:04:41 in Paris).** [Stable GitHub release](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.3.0), neither a draft nor a prerelease. Package and root lockfile versions are aligned to 4.3.0.

## The Committee Grants Permission to Lower the Lights

The documentation receives light and dark palettes, selected through a shared sun-and-moon switch at the top-left of its pages. Dark is the initial mode. The same document can now be read under different lighting without maintaining a second manuscript or issuing a separate license for the moon.

## Scope

- Add shared Vanilla Extract theme variables for background, text, links, borders, and secondary surfaces.
- Add a root ThemeProvider and useTheme hook; the selected state survives client-side page navigation while the provider remains mounted.
- Add a reusable ThemeSwitch component, independent of documentation content and positioning.
- Present a sun and moon inside a sliding switch with a stable accessible name, switch role, checked state, keyboard-focus styling, and reduced-motion handling.
- Apply the palettes to documentation content and its full-width background.
- Move the body margin reset from the homepage stylesheet to a root-layout stylesheet, correcting the white frame seen on direct documentation access.

The root provider supplies theme values globally. The homepage and audio feature are not automatically recolored: only consumers of the shared variables use the palettes. The switch is currently displayed on the documentation pages; later placement on the homepage is a separate change.

## Persistence and limits

Theme state is held in React memory. A full reload returns to dark; there is no localStorage persistence or automatic operating-system preference selection in this milestone. The body reset belongs to the shared layout so it does not depend on visiting the homepage first.

## Verification checkpoint

Vincent reports the visual result works and confirms the white-frame correction. Source inspection confirms the provider, switch, theme variables, and documentation integration. The root stylesheet is correctly named layout.css.ts, and targeted Biome checks pass for all nine inspected source files. Vincent confirms successful application checks, type checking, tests, production build, and the requested manual behavior checks. Commit #87, `96be7ab18c375b489a01ddafe43a9c911e040ae3`, passed its [exact CI and Pages deployment](https://github.com/VincentMardon/professional-hello-world/actions/runs/39540840023).

Vincent confirms both palettes, keyboard switch operation, navigation between documentation pages, dark default after reload, direct architecture access without the white frame, and the requested narrow-screen, zoom, and reduced-motion checks. These are his reported results, not an independent assistant browser audit. Existing suites alone do not establish dedicated theme behavior coverage or an accessibility audit.

## Published tag

Annotated tag object `08967d51fd1d47a98cd8457dcdc9eaf14b2d3f46` resolves to commit #87, `96be7ab18c375b489a01ddafe43a9c911e040ae3`. The publication-record follow-up does not move this tag.

## Return to the interrupted work

After this milestone, resume the authored explanation of a sound's lifecycle, then introduce Mermaid rendering as a distinct learning step. Neither is included in this release merely because the lighting committee has finished its meeting.
