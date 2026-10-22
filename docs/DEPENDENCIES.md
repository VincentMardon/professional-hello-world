# Dependencies — The Office of Borrowed Machinery

[Documentation reception](README.md) · [Trust boundaries](TRUST-BOUNDARIES.md) · [Frontend field guide](FRONTEND-GUIDE.md)

## 1. The institution does not manufacture every gear

PHW combines application source with libraries and a vendored audio package. Explaining that composition is more useful than pretending that every imported capability was built in this repository.

The authoritative dependency declarations are [package.json](../frontend/package.json) and the [lockfile](../frontend/package-lock.json). This guide explains roles rather than duplicating every version, because a second manually maintained version list would become another document that can disagree with the package manager.

The root project has an [MIT license](../LICENSE). That file is not a substitute for checking the license and notices of each dependency when its use or distribution changes. This page does not claim a completed dependency-license audit.

## 2. Responsibility by family

| Family | Main role in PHW | Relevant boundary |
| --- | --- | --- |
| Next.js | Routes, metadata, rendering, static export | Application output remains configured for static hosting |
| React | Composition, state, hooks, context | A status update does not prove an external side effect occurred |
| TypeScript | Source types and compile-time checks | Type correctness is not runtime or browser verification |
| Vanilla Extract | Typed style source integrated with the frontend toolchain | Selectors and theme consumers still need deliberate ownership |
| BeepEngine | Audio interface backed by its packaged generation and browser integration | Upstream engine source is maintained outside this application repository |
| react-markdown and remark-gfm | Markdown-to-reader presentation and GFM constructs | They are not a complete documentation platform or automatic publication policy |
| Mermaid | Browser-rendered diagrams | Syntax, truth of the diagram, and browser interaction require different checks |
| TypeDoc and its Markdown plugin | Extracted source reference | Comments supply semantics that inferred signatures cannot |
| Biome | Lint and format checks | Formatting does not establish behavior |
| Vitest and Testing Library | Tests around configured DOM behavior and integration | Mocked dependencies limit what the tests prove |

The table is a map of responsibility, not a ranking of importance. The Office of Borrowed Machinery has declined to award medals based on download counts.

## 3. The BeepEngine package boundary

The application consumes `beep-engine` through a local archive reference to `frontend/vendor/beep-engine-0.1.2.tgz`. Older 0.1.0 and 0.1.1 archives are also present in that directory, but their presence does not make them the current selected dependency.

The engine is independently developed. Its Rust and WebAssembly work must not be described as source files located in PHW merely because the resulting package is vendored here. The frontend imports its interface, initializes it through a hook, and dispatches sound requests through the returned methods.

The [sound-lifecycle guide](AUDIO-LIFECYCLE.md) explains that integration in detail. The generated reference currently covers PHW's initialization hook, not the complete upstream engine API.

Vendoring makes the selected archive available with the checkout. It does not automatically establish authenticity, reproduce the archive from upstream sources, or test all exported behavior. No additional provenance attestation is claimed by this guide.

## 4. Declared ranges and installed versions

A package declaration can name a version range or a local file. The lockfile records the resolved dependency graph used by the installation workflow. The current CI uses `npm ci` to install that recorded graph before running checks and the production build.

When a dependency change is intentional, review both declaration and lockfile changes. An archive existing in vendor is not enough: the package declaration and resolution must point to the intended artifact. Do not infer that changing the application version also updates a dependency.

Keep the command's working directory in mind. The frontend owns its package metadata and lockfile; an unrelated npm operation elsewhere is not the same installation context.

## 5. Trace a dependency change through the application

Begin by identifying which imported contract is used. For an engine update, inspect the factory, playback methods, sample-rate types, volume scale, promise behavior, and packaging expectations at PHW's boundary. For a reader update, inspect parsing, links, static rendering, and diagram integration. Update tests where behavior under test actually depends on that contract.

Then run the relevant local checks and production build, inspect the real browser behavior affected, and verify the exact published commit in CI. A mocked engine suite can protect PHW dispatch behavior while still missing a changed real package interface or loading problem.

If a source-reference generator changes output, regenerate and review the reference. The freshness gate may correctly refuse a changed document until its intended update is committed. Do not remove the comparison merely because a new generator version produces new formatting.

## 6. Known limits and future work

This guide does not announce automated dependency updates, a software bill of materials, vulnerability triage automation, a reproducible upstream engine build, or comprehensive license verification. Those would be separate capabilities with their own implementation and evidence.

The next comment-completion work should document the actual application contracts beside their code. It should not copy this entire dependency map into every import statement. The manual explains the relationships; source comments explain the contracts that need local context.

Borrowed machinery is allowed. Unclear ownership is what this office is meant to prevent.
