# Changelog

All notable changes to **Professional Hello World** will be documented in this file.

The format is loosely inspired by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and this project adheres (ironically) to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### A Limited Resumption of Movement

- Extracted the two greeting lines into named React components, `ProfessionalHelloWorld` and `ComingSoon`, assembled by `page.tsx`.
- Removed the trailing colon from the first line while preserving strong emphasis and the italic announcement.
- Centred the existing page container horizontally and vertically using a flex column, `100dvh` minimum height, border-box sizing, and centred text.
- Removed the default body margin while retaining `2rem` padding, system typography, and `1.5` line height. Text wraps naturally without dedicated breakpoints.
- Vincent approved the visual result. TypeScript checking without emit or incremental output passed; a production build for this change has not been independently verified by the assistant. Remote deployment remains pending.
- Updated the README and architecture document to reflect the current frontend and the earlier retirement of the terminal example.

### Previously Published Pause and Retreat

- Commit #32 recorded an intentional empty commit, leaving the tracked file tree unchanged.
- Commit #33 removed `backend/src/hello.py` and its 57 lines. This deletion is already committed; its documentation is reconciled here.
- The Pages workflows for both commits succeeded. These gestures remain distinct from a new numbered release.

### The Department of Visual Dignity

- Added Vanilla Extract and its Next.js plugin with explicit opt-in to experimental Turbopack integration through `unstable_turbopack.mode: "auto"`.
- Added `page.css.ts` and applied its generated class: `2rem` padding, a system sans-serif font, and `1.5` line height.
- Recorded version-specific npm install-script approvals for `@swc/core` and `esbuild`; Vincent successfully rebuilt both packages.
- Preserved static export and the existing Pages workflow. Vincent confirmed local checks and appearance; generated CSS was inspected. The initial styling integration deployed successfully for commit #31.
- Updated documentation to reflect styling and the successful deployment of the preceding Next.js migration.
- Granted the greeting physical space and an entirely disproportionate administrative identity. No new numbered release is declared here.

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

### Possible Future Work
- Visual exploration of the prelaunch greeting, with WebGL to be discussed when appropriate.
- Greeting API, shared hello sessions, and suitable aggregate statistics.
- Tests, linting, builds, and operational exercises as the implementation develops.

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

