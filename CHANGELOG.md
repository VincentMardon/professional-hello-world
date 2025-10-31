# Changelog

All notable changes to **Professional Hello World** will be documented in this file.

The format is loosely inspired by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and this project adheres (ironically) to [Semantic Versioning](https://semver.org/).

---

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

