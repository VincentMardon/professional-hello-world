# Professional Hello World — Architecture

## Purpose

This project brings together an artistic return, practical learning, and a deliberately excessive approach to saying “Hello, World!”. Technical experiments should contribute to that experience or teach something worth exploring. Their value is not measured by the number of services required to render a sentence.

This document separates the implementation from the architectural ambitions. The imaginary procurement department may continue planning at full capacity.

## Current Implementation

| Component | Location | Actual behavior |
|-----------|----------|-----------------|
| Web greeting | `frontend/src/hello.html` | Static prelaunch text with bold and italic emphasis |
| Terminal greeting | `backend/src/hello.py` | Prints a greeting; provides a function accepting an optional target |
| CI | `.github/workflows/ci.yml` | Checks out the repository and prints a message on pushes and pull requests |

The two examples are independent. There is no API, database, frontend framework, container setup, or connection between them. CI does not yet run tests or measure coverage.

The HTML references absent CSS, JavaScript, and font files. Its Open Graph image path also differs from the existing image at `docs/assets/images/coding-cat.png`. These references are placeholders, not implemented capabilities.

The Python script prepares a timestamp and a logging payload but prints only the greeting. Its internal version remains `0.0.1-dev`; the historical project release recorded in the changelog is `2.1.2`.

## Running the Existing Examples

Open `frontend/src/hello.html` directly in a browser. To run the terminal example, use `python backend/src/hello.py` from the repository root with Python 3.11 or newer.

There is currently no `manage.py` or `package.json`. Django and npm startup commands belong to a possible future implementation.

## Proposed Directions

The following ideas preserve the original architectural ambitions. They are not an installed stack or a commitment to implement every layer.

### Presentation

React/Next.js with TypeScript was proposed for an API-driven interface. Vanilla Extract and elaborate visual treatments were also considered. A future WebGL experiment could become both an artistic medium and a learning exercise; its role will be discussed before implementation.

The experience should remain understandable without reading the artist's personal history. A small interaction can carry the return on its own.

### Greeting API

Django and Django REST Framework were proposed to expose `GET /api/greetings/{code}/`, with `default` as an example greeting code. Health checks, request logging, and a response-time target could provide practical exercises in operating a service.

No endpoint or performance guarantee exists yet. A greeting may eventually require a service-level agreement, but it has not signed one.

### Storage

SQLite for local development and PostgreSQL for a more elaborate deployment were proposed. A possible `greetings` table would contain `id`, `code`, `text`, and `language`.

The [Global Hello Session proposal](FEATURE-global-hello.md) would introduce sessions and responses if pursued. Its storage and participant rules remain to be designed.

### Shared Interaction

A visitor could initiate a greeting and watch other visitors answer during a short window. This would extend the individual “I am here again” into an encounter with others. The proposal describes a possible experience, not an existing feature.

### Operations and Observation

Possible exercises include meaningful tests, linting, builds, containers, and greeting metrics. Each should be introduced alongside the behavior it would verify or explain. Example metrics from the original plan include `hello_requests_total` and counts by language or client.

Any public service would also need appropriate access controls and consideration of rate limits. Instrumentation choices and public statistics should be specified before implementation; there is currently no analytics collection in the application code.

## Development Approach

Vincent implements the code as part of learning. The assistant presents code and explanations in the conversation and may edit prose documentation directly, as specified in [AGENTS.md](../AGENTS.md).

Choose the next experiment together. Keep documentation explicit about whether something exists, is proposed, or has been deferred. WebGL, dark mode, multilingual greetings, and other ambitious salutation infrastructure remain possible topics rather than release obligations.

The engineering ceremony can grow. The person doing the work must have room to grow with it.
