# 4.4.2 — The Projector Opens Its Auditorium

**Release preparation — not published.** This documentation capability uses PHW's lore-driven third-number convention. Package and root lockfile metadata are aligned to 4.4.2. Vincent confirms the requested implementation corrections, local checks, production build, and manual behavior checks. Vincent also confirms the final local checks and build after version alignment. The preparation commit, its exact CI and deployment, tag, and publication remain pending.

## Scope

- Extract diagram viewport behavior into useDiagramViewport, separating it from Mermaid rendering.
- Add Fit width, using ResizeObserver to track the available content width and recalculate the scale while adjustment mode is active.
- Leave automatic adjustment when a reader uses the slider, minus/plus, or the 100 percent reset.
- Extend zoom to 1–300 percent so large diagrams can fit narrow viewports; automatic fitting remains bounded by that range and rounds down to an integer percentage.
- Add native fullscreen presentation of the diagram reader and its controls.
- Track fullscreenchange so button state follows browser-managed exits, including Escape.
- Provide a visible top-right close button, plus the text exit command, with space reserved above the controls.
- Preserve theme colors, scrollable diagram content, and bounded source disclosure in fullscreen.
- Display a message if fullscreen is unavailable or a request fails.

Fit width concerns horizontal space, not fitting the complete diagram height on one screen. Fullscreen depends on the browser and embedding context; this milestone does not implement a separate simulated fullscreen fallback. The source provides refusal handling, but no deliberate denied-request test is claimed.

## Verification checkpoint

Source inspection confirms the shared hook, corrected fullscreen state name, the explicit Exit fullscreen label, and foreground/background theme colors. Targeted Biome previously passed for five documentation feature files. Vincent subsequently confirms the requested final corrections, local checks, type checking, tests, production build, and manual checks for fit after resizing, both themes, and closing through the cross and Escape.

These browser checks are Vincent's report, not an independent assistant audit. Dedicated automated ResizeObserver, fullscreen, and denied-request coverage is not established. Vincent confirms the checks and build for the version-aligned preparation state; exact published CI and deployment remain pending.

## Publication sequence

Version alignment and local validation are complete without creating a tag. Vincent reviews and publishes the preparation commit. Verify CI and Pages for that exact commit before Vincent creates the annotated v4.4.2 tag and publishes a stable release. Update publication records afterward without moving the tag.

No new Markdown page or additional diagram is required to justify this milestone: the reader gains an adjustment mode and an auditorium. Audio generation and playback remain unchanged.
