# Changelog

All notable changes to **Professional Hello World** will be documented in this file.

The format is loosely inspired by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and this project adheres (ironically) to [Semantic Versioning](https://semver.org/).

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

---

## [Unreleased]

### Planned
- Frontend landing page: “PROFESSIONAL HELLO, WORLD! — Coming soon…”
- Django/DRF backend exposing `/api/greetings/default/`
- CLI client for terminal-based salutations
- CI steps for linting, testing and building
- Optional Prometheus `/metrics` endpoint counting greetings per minute
- Add "Global Hello Session" feature to enable synchronized greeting events.
- Instrument the feature in order to demonstrate real-time usage analytics on a trivial interaction.
- Expose a public stats page to showcase the collected data.

