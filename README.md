# Professional Hello World!

[![CI](https://github.com/VincentMardon/professional-hello-world/actions/workflows/ci.yml/badge.svg)](https://github.com/VincentMardon/professional-hello-world/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange)](CONTRIBUTING.md)

A greeting with release notes, architectural ambitions, and something to come back from.

## A Disproportionate Undertaking

**Professional Hello World** is an artistic and programming project by Vincent Mardon. It marks a return to public artistic life while providing a place to learn, experiment, and give an extremely small program an unreasonable amount of ceremony.

Behind the greeting is a difficult year of rebuilding a life and an independent practice. Returning to this work has come at a considerable personal cost. That history gives the title its weight; the greeting itself remains open to anyone, without requiring the backstory.

The project takes software rituals very seriously for someone whose principal deliverable is saying hello. A bold word can have a release. An italic phrase can have a manifesto. The learning is real, and the excessive paperwork is part of the work.

## What Exists Today

- A static HTML page displaying **Professional "Hello, World!":** followed by *Coming soon ...*.
- A Python script that prints `Hello, World!`, with more preparation than the sentence requires.
- A GitHub Actions workflow that checks out the repository and prints a ceremonial message. It does not yet run tests, measure coverage, or build the project.
- Documentation, historical release notes, and an [official coding cat](docs/assets/images/coding-cat.png).

The latest recorded release is **2.1.2 — The Italic Rebellion**. Current documentation changes are listed under [Unreleased](CHANGELOG.md#unreleased).

## Getting Started

Open `frontend/src/hello.html` in a browser to see the prelaunch greeting. The page references placeholder stylesheets, scripts, and a font that are absent from the repository; the visible content uses the browser's default styling.

For the terminal greeting, run `python backend/src/hello.py` from the repository root with Python 3.11 or newer. The script uses only the standard library.

No application framework or dependency installation is needed for these examples. Kubernetes remains available for ceremonial consultation.

## Possible Next Greetings

The [architecture document](docs/ARCHITECTURE.md) records the current implementation and possible technical directions. The [Global Hello Session proposal](docs/FEATURE-global-hello.md) imagines one person saying hello and others answering together.

Visual experiments, including WebGL, may become part of the learning process when their turn comes. These are directions to explore, with no promised delivery date or requirement to build everything at once.

## Further Reading

- [Contributing](CONTRIBUTING.md): tone, working practices, and documentation conventions.
- [Changelog](CHANGELOG.md): an unusually eventful history of very small changes.
- [Recovery addendum](docs/postmortem-unsaved-guideline.md#recovery-addendum--the-maintainer-was-also-unsaved): the more personal context, for those who want it.
- [Collaboration rules](AGENTS.md): Vincent writes the code; the assistant explains proposals and may edit documentation.

All project documentation is written in English, in recognition of our greeting's considerable international responsibilities.

## License

Released under the [MIT License](LICENSE). You may fork the absurdity, modify the overengineering, and redistribute the inefficiency, provided you retain the required copyright and permission notice.
