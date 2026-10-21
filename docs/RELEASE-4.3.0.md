# 4.3.0 — The Directorate Obtains a Night Shift

**Release preparation — not published.** This compatible theme capability follows 4.2.0. Package and root lockfile metadata are aligned to 4.3.0. Vincent confirms the requested local checks, production build, and manual theme checks. The preparation commit, its exact CI and deployment, tag, and release publication remain pending.

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

Vincent reports the visual result works and confirms the white-frame correction. Source inspection confirms the provider, switch, theme variables, and documentation integration. The root stylesheet is correctly named layout.css.ts, and targeted Biome checks pass for all nine inspected source files. Vincent confirms successful application checks, type checking, tests, production build, and the requested manual behavior checks. Exact-commit CI and deployment remain pending publication.

Vincent confirms both palettes, keyboard switch operation, navigation between documentation pages, dark default after reload, direct architecture access without the white frame, and the requested narrow-screen, zoom, and reduced-motion checks. These are his reported results, not an independent assistant browser audit. Existing suites alone do not establish dedicated theme behavior coverage or an accessibility audit.

## Publication sequence

Corrections and version alignment are complete without creating a tag. Vincent reviews and publishes the preparation commit after local validation. Verify CI and Pages for that exact commit before Vincent creates its annotated v4.3.0 tag and publishes a stable release. Remove preparation instructions from the public release body and update this record only after verification.

## Return to the interrupted work

After this milestone, resume the authored explanation of a sound's lifecycle, then introduce Mermaid rendering as a distinct learning step. Neither is included in this release merely because the lighting committee has finished its meeting.
