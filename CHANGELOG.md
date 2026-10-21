# Changelog

All notable changes to **Professional Hello World** will be documented in this file.

The format is loosely inspired by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and this project adheres (ironically) to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

- Update the documentation publication records for stable v4.2.0, the annotated tag on commit #85, and successful exact-commit CI and Pages deployment. This follow-up does not move the tag or change application code.

## [4.2.0] — 2026-10-21

### Two Reading Rooms Obtain a Corridor

A compatible documentation milestone selected by Vincent. Package and root lockfile versions are aligned to 4.2.0; Vincent confirms local checks and production build after alignment. Preparation commit #85 passed CI and Pages deployment. Stable v4.2.0 was published on October 21, 2026; its annotated tag targets that preparation commit (0832bb7).

- Expand the existing architecture document with the documentation pipeline, responsibility boundaries, and a guided source-reading exercise. Add reciprocal Markdown links with the documentation overview. Add the local architecture route, explicit two-document registry, and navigation with the current page identified. Vincent confirms local checks, build, reciprocal navigation, and direct route reload; generated HTML inspection confirms both local routes and their current-page markers. Implementation commit #84 (60b4408) passed CI and Pages deployment. Release-preparation commit #85 also passed its own CI and deployment.

- Update publication records to confirm stable v4.1.0, its annotated tag on commit #82, and successful exact-commit CI and Pages deployment. This documentation follow-up does not move the tag or change application behavior.

## [4.1.0] — 2026-10-21

### The Greeting Opens an Information Desk

- Add the Markdown-backed documentation route and its repository-readable overview, charter, and delivery plan.
- Add a small bottom-right homepage Documentation link with scoped focus styling, preserving the greeting's in-flow spacing.
- Vincent confirms local checks, production build, and keyboard, narrow-screen, and 200% zoom checks after the navigation corrections. Package and root lockfile versions are aligned to 4.1.0, and Vincent confirms repeating the local checks. The exact preparation commit passed CI and Pages deployment; the annotated tag targets commit #82 (7d213e7), and the stable GitHub release was published on October 21, 2026.

The entries below retain the earlier foundation and 4.0.0 follow-up records included since the previous tag; their original checkpoint wording is historical.

### The Documentation Directorate Opens Its Repository Desk

- Added a documentation charter, a substantial repository-readable overview, and staged delivery checkpoints. The overview maps existing routes, audio hooks, verification boundaries, and practical reading paths.
- Proposed 4.1.0 as the first useful in-application documentation milestone, subject to completed scope and the release decision. The documentation route and Markdown renderer are now present locally; Mermaid integration and reference generation remain unimplemented. The generated documentation HTML has been inspected locally; browser checks and deployment verification remain pending; no version metadata changed.

### The Departure Is Entered Into the Register

- Updated release notes, README, architecture, and changelog to record the verified stable v4.0.0 publication, its annotated tag on commit #79 (30eb0a0), and that exact commit's successful CI and Pages deployment. Corrected the release-process link for reuse outside the repository. No application behavior or version metadata changed.

## [4.0.0] — 2026-10-20

### The Great Apparent Standstill

- Published a direct transition from 3.0.0 to 4.0.0, with no intermediate 3.x release. Commits and Pages deployments continued between these milestones.
- The main greeting's composition, styles, layout, and components remain unchanged against the v3.0.0 tag; the new work lives in the separate audio test experience.
- Integrate the independently developed Rust/WebAssembly BeepEngine through the local 0.1.2 package, with two generated sounds, selectable sample rates, volume, and status feedback.
- Gather the feature's component and hook separation, behavioral test suite, extensive gold-and-glass design, responsive layout, password ceremony, and SVG ornamentation into one milestone.
- Close Part V of the wiki at Vincent's request. The release notes end with his commissioned satirical image of an unusually quiet Director, without inferring a private explanation.
- Add release notes and a reusable release process encouraging patch/minor milestones independently of wiki-part closures. Automation remains a proposal.
- The annotated v4.0.0 tag targets release-preparation commit #79 (30eb0a0), with package and lockfile versions aligned to 4.0.0. Its CI and Pages deployment succeeded; the stable GitHub release was published on October 20, 2026. Implementation commit #78 also passed its own checks.

The detailed entries below preserve their preparation-stage verification statements as history. Read docs/RELEASE-4.0.0.md for the milestone summary and current publication boundaries.

### The Listening Room Commissions Wallpaper and Botanical Goldwork

- Added artDecoBackground.css.ts with a repeating 640-by-800px inline SVG of dark arches, fine vertical texture, and a vignette; composed it into the audio page.
- Added a decorative, accessibility-hidden ornament layer around the existing h1 and h2. An SVG mask mirrors botanical branches and leaves over the title's semantic gold-and-ivory gradient.
- Limited header width to 46rem, prevented flex shrinking, reduced heading sizes with viewport-width and viewport-height constraints, and adjusted subtitle spacing and title padding. Preserved the existing gold separator styling.
- Replaced the desktop-specific top alignment and 3rem upper padding with centered unlocked content and clamp-based page padding on all sides. Retained the form-dependent access layout and natural document scrolling.
- Reduced darkGlassFrame's background opacity from 85% to 65% and replaced AudioSettings' opaque base with a 65% dark background to expose more of the backdrop through the existing glass effects.
- Vincent approved the result for commit preparation. Targeted Biome checks pass for all six affected source files, and tracked-diff whitespace checks pass. No new automated test execution, production build, assistant browser inspection, universal scroll-free fit, or CI result is claimed.


### A Trivial Password Receives a Disproportionate Verification Procedure

- Added AudioTestAccess and its stylesheet, preserving the header while initially replacing the audio panel with a password form centered in the remaining page space.
- Composed the input from statusFrame and styled the gold label in Oxanium, with the word password underlined as a deliberate hint. Enter submits the form.
- Added PBKDF2/SHA-256 verification with 210,000 iterations, a fixed feature-specific salt, a 256-bit reference key, and a full-byte comparison. The intended password is password, with no trimming or case normalization.
- Clear the field on submission, prevent concurrent verification, report progress and refusal through a status paragraph, and mount EmptyLine plus AudioTestPanel after acceptance. Authorization is held only in component state.
- Added a form-dependent page layout rule. The gate is client-side presentation on a static export, not server-enforced authentication or a constant-time guarantee.
- Preparation review identified formatting corrections, a premature invalid-state assignment, a message typo, and existing audio-page tests that need to accommodate the gate. No new test execution, build, or CI result is claimed.


### The Two-Bip Instrument Receives Its Final Relief Inspection

- Separated Play's 5rem button from a decorative 4px gold ring with an interior gap, layered ring relief, and revised button lighting. Enlarged the SVG to 64px and added uniquely identified ivory and dark-gold gradients, ivory hover fill, and icon shadows.
- Added a two-line Beep Engine footer mark and an italic Intel One Mono signature with subtle text shadows; enabled the font's italic style.
- Doubled the vertical divider to 4px, extended it beyond the panel, and added layered gold relief. At widths up to 600px, split it into two decorative segments around the full-width status row.
- Strengthened the outer panel's apparent thickness and the status display's inset shadows.
- Replaced the visible Vol. label with a decorative gradient triangle below the fader while preserving the input's accessible name. Reworked the gold fill with inset shadows and a brighter gradient to suggest a recessed guide.
- Replaced customizable-select arrows with matching 16-by-12px gold SVGs. Opening and closing keyframes compensate the shadow direction for rotation, keeping the relief directed toward the lower right.
- Vincent approved the visual adjustments. Initial targeted Biome checks report formatting and import-order corrections; tracked-diff checks report trailing whitespace in two source files. No new automated test execution, production build, assistant browser inspection, or CI result is claimed.

### The Fader Keeps Its Dimensions and the Status Finds Its Own Row

- Fixed the volume control's width at 4.6rem and the fader height at 12rem, removed growth that tied its size to adjacent content, and replaced the WebKit thumb's percentage-based margin with 0.375rem.
- Extracted StatusDisplay and StatusDisplay.css.ts from PlaybackControls, preserving the status paragraph and its existing visual treatment.
- Added named panel grid areas. The status occupies the right column normally and spans the complete panel width at viewport widths up to 600px.
- Reduced narrow-screen panel gaps and settings padding, and moved stacked labels to the 600px breakpoint.
- Set the page gap to 1rem at all widths. Above 768px, top-align content with 3rem upper padding while retaining the existing alignment below that threshold.
- Vincent approved the positioning adjustments. Initial targeted Biome checks identified formatting and an unnecessary fragment around Play to clean up; tracked-diff whitespace checks passed. No new automated test execution, production build, assistant browser inspection, or CI result is claimed.


### Two Departments Receive a Gold Boundary and Room to Breathe

- Added a decorative, accessibility-hidden divider between VolumeControl and the remaining controls in AudioTestPanel.
- Expanded the grid to three columns with a 2px divider column. Set a 2rem gap on each side, reduced to 1.5rem at viewport widths up to 30rem.
- Styled the divider with semantic gold and ivory gradient stops, rounded ends, a subtle shadow and glow, and 0.5rem vertical margins.
- Vincent approved the adjusted spacing. Targeted Biome and tracked-diff whitespace checks passed. No new automated test execution, browser inspection, production build, or CI result is claimed.


### The Status Office Recesses Its Display and Adopts Monospaced Correspondence

- Expanded statusFrame to the full controls-column width and replaced its gold border with layered backgrounds producing a fading ivory perimeter.
- Added inset shadows and lower-edge highlights to suggest a recessed display. Adjusted padding, left alignment, 0.75rem text, unit line height, and 0.15rem letter spacing.
- Configured Intel One Mono through next/font/google and applied its variable only to the status text; updated the existing font-loader test mock.
- Reduced the shared glassFrame reflections, affecting its consumers including the volume housing. AudioSettings adds an opaque #080808 base with its own reflections; darkGlassFrame retains its existing overrides.
- Vincent adjusted and approved the treatment. Targeted Biome checks passed for all six changed source and test files, and tracked-diff whitespace checks passed. No new automated test execution, browser inspection, production build, or CI result is claimed.


### The Listening Room Receives an Outer Case

- Added darkGlassFrame as a composed variant of the existing glassFrame style, with a darker translucent background, restrained reflections, deeper shadows, 1rem corners, and a 1px ivory border at 12% opacity.
- Applied the variant to AudioTestPanel's existing grid container without adding a wrapper or changing audio behavior.
- Added 2rem panel padding; at widths up to 30rem, reduced padding to 1rem vertically and 0.75rem horizontally and the grid gap to 1rem.
- Vincent approved the result. Targeted Biome and tracked-diff whitespace checks passed. No new browser inspection, automated test execution, production build, or CI result is claimed.


### The Selection Counters Share Their Glass and Rotate Their Signage

- Extracted the volume housing's visual treatment into glassFrame.css.ts and composed it into VolumeControl and the existing AudioSettings wrapper, keeping component-specific dimensions separate.
- Increased spacing between settings rows and between labels and controls, aligned Sound to the right on wider screens, and retained stacked labels on narrow screens.
- Replaced the gold control and picker borders with transparent borders while retaining keyboard focus indication.
- Added shared opening and closing keyframes and a usePickerMotion hook used by both selectors. Opening rotates the arrow from 0 to 180 degrees; closing continues from 180 to 360 degrees, with no initial closing animation and no animation under reduced-motion preferences.
- Added raised resting surfaces, inset shadows during active/open states, brighter picker reflections, and illuminated gold arrows.
- Set a 12rem preferred control width with a 100% maximum; open pickers follow their control through anchor-size(width). Increased control, picker, and option padding.
- Initial targeted Biome checks identified formatting corrections before committing. Tracked-diff whitespace checks passed. No new automated test execution, production build, CI result, or cross-browser verification is claimed.


### The Ministry of Volume Installs a Graduated Gold Fader

- Restyled VolumeControl with a dark translucent housing, softly lit ivory edges, and a percentage readout inside the same frame, without a gold perimeter border.
- Retained the native vertical 0–100 range input and its existing label, value text, and change callback. A CSS custom property drives the decorative gold fill.
- Added eleven decorative 2px ivory graduations with longer marks at 0%, 50%, and 100%.
- Added a permanently visible rectangular gold thumb with a central groove, polished gradients, inset highlights, an active shadow treatment, and a keyboard focus outline. Separate WebKit and Firefox pseudo-element rules style the native control.
- Vincent adjusted the WebKit thumb alignment and housing spacing and approved this design as the current baseline. No cross-browser equivalence is inferred from that approval.
- Initial preparation checks identified formatting, trailing whitespace, and an array-index key warning. Source review also identified a missing comma join for the housing's background layers; these corrections are proposed before committing. No new automated test execution, production build, or CI result is claimed.


### The Header Receives Its Letters Patent in Gold and Ivory

- Added feature-local font configuration for Michroma, Oxanium, and Space Grotesk through next/font/google, with font variables applied to the audio test page.
- Changed the headings to Beep Engine and The Audio Test. Added responsive title sizing, letter spacing, clipped gold and ivory gradients, layered drop shadows, and padding beneath the main title's descenders.
- Added a decorative gold separator and a subdued radial ivory halo behind the header. The final ellipse uses 40% radii at 40% horizontal and 70% vertical position.
- Reused the existing EmptyLine component between the header and the audio panel.
- Updated heading assertions and mocked the font loaders in the existing page tests.
- Vincent approved the visual result and supplied a screenshot. Initial targeted Biome checks identified import ordering and formatting to correct before committing; no new automated test execution, production build, or CI result is claimed.

### The Selection Counters Receive Downward-Opening Glass Cabinets

- Styled the existing sound and sample-rate selects in AudioSettings.css.ts with translucent dark surfaces, reflections, gold borders, focus outlines, and backdrop blur, leaving labels and responsive row layout unchanged.
- Enabled appearance: base-select through a support query. Supporting browsers receive a more transparent picker with 10px backdrop blur; other browsers retain native menu behavior.
- Positioned pickers below their controls using block-end span-inline-end, with automatic alternative placements disabled, a height cap, and vertical scrolling.
- Distinguished selected options with translucent light gold, unselected hover/focus with translucent light gray, and active options with stronger gold. Added 0.375rem between options.
- Vincent reports successful behavior after the positioning correction and completion of the checks needed for a commit. Targeted Biome and tracked-diff whitespace checks passed. No specific test-suite, build, or cross-browser outcome is inferred from that report.

### The Status Office Exchanges Its Ceiling for Glass

- Removed the status frame's 4.5rem minimum height and reduced padding to 0.5rem vertically and 0.875rem horizontally, allowing height to follow the text.
- Retained the 18rem width and 100% maximum width; centered the frame within its parent.
- Added an ivory foreground, translucent dark surface, muted gold border, gradient reflections, inset highlights, an external shadow, and an 8px backdrop blur.
- Replaced internal flex centering with ordinary text layout, explicit line height, and centered text. Long-string wrapping and the existing status role and message logic remain unchanged.
- Targeted Biome checking and tracked-diff whitespace checks passed. No new browser inspection, automated test-suite run, production build, or CI result is claimed.

### Playback Receives a Gold-Rimmed Instrument of Extraordinary Importance

- Enlarged the circular Play button from 3.5rem to 5rem and its SVG from 24px to 48px, with an outlined triangle and a 2px gold border.
- Added a dark surface, diagonal lighting, inset shadows, and a hover halo. The ivory triangle becomes gold and filled on hover; the active state darkens the triangle and border and depresses the button by 1px.
- Added a playIcon class whose selector targets the icon according to the parent button's hover state, respecting Vanilla Extract's selector constraints.
- Retained the accessible Play label, decorative SVG attributes, disabled behavior, status frame, and playback callback. Added a gold focus ring and reduced-motion rules that suppress transitions and the active displacement.
- Vincent approved the visual result. Targeted Biome checking found an import-formatting issue in PlaybackControls.tsx; no new automated test-suite run, production build, or CI result is claimed.

### The Audio Test Establishes a Ministry of Color

- Added primitiveColors.css.ts and semanticColors.css.ts under frontend/src/features/audio-test/styles/, separating named color values from their intended interface roles.
- Applied the semantic primary text and page background colors to the audio test page: ivory (#F5F1E8) on ebony (#050505).
- Kept the palette local to the audio test feature. Other semantic roles are defined for future use; the main greeting styling is unchanged.
- Targeted Biome checks passed for the three affected style files. No new browser inspection, test-suite execution, production build, or CI result is claimed.



### The Greeting Acquires an Outgoing Mail Department

- Added the English rejection notice for pull request No. 1 to `records/`, preserving the approved two-page PDF with its PHW letterhead, administrative sidebar, three-line closing overflow and repeated footer.
- Established the standing correspondence structure in `records/README.md`, allowing the logo and colours to evolve while retaining the layout. Linked the registry from the README and the collaboration rules.
- Recorded Vincent's report that he delivered the letter through the closed pull request. No recipient acknowledgement is claimed.
- This is an artistic correspondence archive and documentation convention, not an application change, automated mail service or new release.

## [3.0.0] - 2026-09-19 — The Great Invisible Reconstruction

This major release gathers the reconstruction since `v2.1.2`: a Next.js and TypeScript frontend, extracted styles, reusable components, a retired Python greeting, real CI, static publication, and the first behavioral test suite. The greeting remains recognizably itself; its supporting institution has been rebuilt.

The visible changes include centred layout, system typography, spacing through `EmptyLine`, and removal of the greeting's trailing colon. The claim is continuity of purpose, not pixel-for-pixel identity.

Published as [v3.0.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v3.0.0), targeting commit #39 (`a14a2cd`). [Its CI run](https://github.com/VincentMardon/professional-hello-world/actions/runs/35449649488) passed the checks, tests, build, artifact packaging, and deployment. See [The Great Invisible Reconstruction](docs/RELEASE-3.0.0.md) for the release account. The entries below record the development history included in this milestone; preparation-time verification statements are retained with subsequent results where available.

### The Greeting Is Called to Testify

- Added Vitest, React Testing Library, jest-dom, and jsdom, with Vite plugins for React and Vanilla Extract and explicit DOM cleanup after each test.
- Added four tests rendering the real homepage: greeting text and punctuation, strong importance, the coming-soon announcement and its emphasis, and the empty accessibility-hidden interval between the two lines.
- Added `npm test` for watch mode and `npm run test:run` for a single execution. CI now runs the suite after TypeScript checks and before the build, making passing tests a publication prerequisite.
- Established poetic English suite names and progressive testing conventions covering both code behavior and the page experience. Coverage percentages are not a substitute for meaningful assertions.
- The initial local run passed all four tests, Biome, and TypeScript without emit or incremental output. At preparation, the new CI step awaited its first GitHub run. [The run for commit #38](https://github.com/VincentMardon/professional-hello-world/actions/runs/35448593710) subsequently passed the tests, production build, artifact packaging, and deployment. No assistant browser inspection is claimed.
- Coverage measurement, E2E, mutation testing, and multi-browser automation are not configured. The current DOM suite does not verify visual layout, Next.js-generated metadata, or the production export.

### The Inspection Department Begins Inspecting

- Replaced the ceremonial CI message with locked dependency installation, Biome checks, TypeScript checking, and the Next.js production build on pushes, pull requests, and manual runs.
- Made CI the publication entry point: successful runs on `main` outside pull-request events upload `frontend/out` and call the reusable Pages workflow through a job depending on `sanity`.
- Removed checkout, installation, checks, and rebuilding from the Pages workflow. It configures Pages and deploys the artifact produced by the calling CI run.
- Moved manual publication to CI, retained the Pages environment and deployment concurrency group, and scoped publication permissions to the relevant jobs.
- Updated checkout and Node setup to v7 and selected `ubuntu-24.04` explicitly. The frontend continues using Node.js 24.
- Removed the separate CI/publication double build on `main`. Push and pull-request triggers can still produce separate CI executions for an open repository PR.
- Updated README, architecture, and contribution guidance. Local file review and whitespace checks passed. [The run for commit #37](https://github.com/VincentMardon/professional-hello-world/actions/runs/35402940885) subsequently verified the build-to-publication handoff successfully; the run for #38 also succeeded with the new tests.

### The Department of Emotionally Significant Emptiness

- Added a reusable `EmptyLine` React component between the greeting and the coming-soon announcement, rendering an empty `div` hidden from the accessibility tree.
- Assigned its Vanilla Extract style a `1rem` block size and disabled flex shrinking. The page container now adds a `0.5rem` gap between children, producing `2rem` between the current text blocks around the spacer.
- Kept the existing text and centred column layout. A future statistics section remains a proposal; this change adds no statistics or data collection.
- Local Biome checks and TypeScript checking without emit or incremental output passed. At preparation, no assistant browser verification or production build had been performed. Commit #36 subsequently completed its production build and deployment on GitHub; no assistant browser inspection is claimed.
- Updated the README and architecture document to describe the spacer and distinguish the already published component extraction from the current unpublished spacing change.

### A Limited Resumption of Movement

- Extracted the two greeting lines into named React components, `ProfessionalHelloWorld` and `ComingSoon`, assembled by `page.tsx`.
- Removed the trailing colon from the first line while preserving strong emphasis and the italic announcement.
- Centred the existing page container horizontally and vertically using a flex column, `100dvh` minimum height, border-box sizing, and centred text.
- Removed the default body margin while retaining `2rem` padding, system typography, and `1.5` line height. Text wraps naturally without dedicated breakpoints.
- Vincent approved the visual result. TypeScript checking without emit or incremental output passed; a production build for this change has not been independently verified by the assistant. This was the verification status at preparation; the component extraction and centring were subsequently published in commit #34.
- Updated the README and architecture document to reflect the current frontend and the earlier retirement of the terminal example.

### Previously Published Pause and Retreat

- Commit #32 recorded an intentional empty commit, leaving the tracked file tree unchanged.
- Commit #33 removed `backend/src/hello.py` and its 57 lines. This deletion is already committed; its documentation is reconciled here.
- The Pages workflows for both commits succeeded. These gestures preceded this release preparation and are retained here as part of its development history.

### The Department of Visual Dignity

- Added Vanilla Extract and its Next.js plugin with explicit opt-in to experimental Turbopack integration through `unstable_turbopack.mode: "auto"`.
- Added `page.css.ts` and applied its generated class: `2rem` padding, a system sans-serif font, and `1.5` line height.
- Recorded version-specific npm install-script approvals for `@swc/core` and `esbuild`; Vincent successfully rebuilt both packages.
- Preserved static export and the existing Pages workflow. Vincent confirmed local checks and appearance; generated CSS was inspected. The initial styling integration deployed successfully for commit #31.
- Updated documentation to reflect styling and the successful deployment of the preceding Next.js migration.
- Granted the greeting physical space and an entirely disproportionate administrative identity. The styling change itself did not declare a numbered release; it is now included in the 3.0.0 preparation.

### Next.js Migration

- Added a Next.js App Router frontend with React, TypeScript, typed metadata and viewport exports, and the existing two-line greeting.
- Added Biome for linting and formatting, using the recommended preset; ESLint and Prettier are not part of the final dependency set.
- Configured ECMAScript modules, static export, the project base path, and trailing slashes.
- Added the public coding cat asset, dependency lockfile, development scripts, and generated-file exclusions.
- Replaced direct HTML packaging in the Pages workflow with dependency installation, Biome checks, TypeScript checking, and a Next.js build publishing `frontend/out`.
- Retained `frontend/src/hello.html` as a historical reference; it no longer supplies the published homepage.
- Local operation was reported by Vincent, and the generated homepage's Open Graph addresses and image were inspected. The Pages deployment subsequently succeeded for commit #30.

### Added
- GitHub Pages publication workflow for the static greeting, including a generated homepage copy and the coding cat asset. The original HTML deployment succeeded for commit #29; the Next.js replacement succeeded for commit #30.
- Collaboration rules in `AGENTS.md`: Vincent applies code changes himself; the assistant explains code in the conversation and may edit prose documentation.
- Recovery addendum to the unsaved-file postmortem, acknowledging the personal effort behind the return to artistic work.
- English as the language for all project documentation.

### Changed
- Updated Open Graph URLs for the intended Pages address and commented out requests for absent stylesheets, scripts, and the placeholder font.
- Documented the Pages publication process and its current verification status.
- Reframed the README around the artistic return, practical learning, and deliberate software ceremony.
- Separated existing examples from proposed architecture and Global Hello Session features.
- Replaced hypothetical setup instructions with instructions for the existing HTML and Python examples.
- Removed the decorative coverage badge and clarified what the current CI actually does.
- Aligned contribution guidance with the learning process and the project's tone.

### Beyond This Release
- Visual exploration of the prelaunch greeting, with WebGL to be discussed when appropriate.
- Greeting API, shared hello sessions, and suitable aggregate statistics.
- Broader testing and operational exercises as the implementation develops; linting, type checks, page tests, and builds are already configured.

These are exploratory directions, not committed release contents. The entries below preserve the original release narrative, including the expectations expressed at the time.

---

## [2.1.2] - 2025-11-01

### Added
- Introduced `<em>` to the HTML greeting to emphasize the temporal nature of the announcement line.
  The structure now separates the *eternal message* (“Professional Hello, World!”) from the *fleeting promise* (“Coming soon ...”).

### Changed
- Updated `hello.html` to include both `<strong>` and `<em>` elements, establishing a full semantic hierarchy.
- Continued the project’s tradition of minimal visual markup with maximal philosophical implications.

### Rationale
- This release marks the beginning of **The Italic Rebellion**:  
  a bold act of softness, asserting that emotion too deserves documentation.
- Where `<strong>` declared conviction, `<em>` introduces vulnerability — 
  thus balancing assertive confidence with quiet anticipation.

### Notes
- Still no CSS.
- Still no JavaScript.
- Only feelings.
- Next planned evolution: **2.2.0 — The Visual Awakening**, when style sheets shall descend upon the markup.


## [2.1.1] - 2025-11-01

### Fixed
- CONTRIBUTING.md was accidentally omitted due to an unsaved edit.  
  This tragic event has been addressed with full transparency.

### Added
- CONTRIBUTING.md documenting how to contribute, how to name commits, and when to bump versions in an intentionally over-documented project.

### Changed
- Refined the HTML greeting to emphasize the canonical phrase **"Hello, World!"** using semantic `<strong>` markup.
- Kept the rest of the page intentionally unstyled to preserve the pedagogical contrast between minimal UI and maximal documentation.


### Rationale
- This release introduces the principle of **minimal emphasis as style direction**: one visual affordance is enough to suggest a future design system.
- By highlighting only the core message, the project reinforces that everything else (CI, docs, analytics) is in orbit around the greeting.

### Notes
- No breaking changes.
- This release exists mainly to document intent.
- This is, unapologetically, a documentation-driven UI change.


## [2.1.0] - 2025-11-01

### Added
- Introduced a structured prelaunch layout in `hello.html`, featuring:
  - A container `<div>` with nested `<div>` elements.
  - A formal announcement of “Professional Hello, World!” followed by the message “Coming soon ...”.
- Established the concept of an evolving **public-facing interface**, signaling that the greeting experience will soon be interactive.

### Changed
- Replaced the plain text `Hello, World!` with a two-line declarative structure, reflecting the project's transition from raw existence to product awareness.
- Retained all redundant metadata and unused imports in the `<head>` section for legacy and cultural continuity.

### Rationale
- This release marks the beginning of the *Prelaunch Phase* of the Professional Hello World project.
- The greeting has matured from a raw existential statement to a **marketing-aware artifact**.
- The change embodies the project’s philosophy: <em>each iteration must increase complexity without altering purpose.</em>

### Notes
- The body now contains more HTML tags than actual content, demonstrating substantial architectural growth.
- No functionality has been harmed in the making of this release.
- The next version (<strong>2.2.0</strong>) is expected to introduce visual styling, animations, and optional telemetry for audience measurement.

<em>Tagline:</em> “We are no longer saying hello. We are announcing that we will soon say hello.”


## [2.0.0] - 2025-10-31

### Added
- Introduced `hello.html`, a raw, zero-style HTML entrypoint with an intentionally overpopulated `<head>` section for future ceremonial assets.
- Introduced `hello.py`, a Python variant of the greeting featuring unused imports, a typed getter, and an unnecessary `if __name__ == "__main__":` entrypoint.

### Rationale
- This release formalizes the existence of **runtime-level greetings** alongside the previously established documentation and CI layers.
- The project is no longer purely theoretical or satirical: it now contains actual, executable greetings.

### Breaking changes
- The project has moved from “purely conceptual” to “conceptual with working examples.” Some expectations about our level of seriousness may be broken.

### Notes
- Version number bumped to **major** to honor the disproportion between the simplicity of the feature and the ambition of the repository.
- Future minor versions will add styling, telemetry, and the Global Hello Session feature.


## [1.0.1] - 2025-10-31

### Added
- CI status badge in README pointing to the actual GitHub Actions workflow.

### Notes
- This change is mostly cosmetic but increases perceived project maturity.


## [1.0.0] - 2025-10-31

### Added
- Initial repository structure for a totally disproportionate project.
- `README.md` setting the satirical/enterprise tone of the platform.
- `docs/ARCHITECTURE.md` describing a distributed salutation system far more complex than reality.
- `docs/assets/` to host the official coding cat visual identity.
- GitHub Actions workflow (`.github/workflows/ci.yml`) to ensure the pipeline can say hello professionally.

### Notes
- No actual “Hello, World!” has been rendered yet.
- This is intentional: architecture must always precede greeting.
- Future releases will introduce real features such as:
  - multi-language hellos,
  - observability of greetings,
  - and dark-mode greetings.

