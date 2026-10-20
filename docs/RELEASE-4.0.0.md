# 4.0.0 — The Great Apparent Standstill

*Published October 20, 2026 as [v4.0.0](https://github.com/VincentMardon/professional-hello-world/releases/tag/v4.0.0). The annotated tag targets release-preparation commit #79, 30eb0a0e7d3b33b7dc1e351c98b2f07dd8e620f7. This release closes Part V of the wiki.*

## A Major Release of Apparently Nothing

Professional Hello World still says hello. Something is still coming soon.

The project moves directly from 3.0.0 to 4.0.0. No 3.0.1, 3.1.0, or other intermediate 3.x release was published. That is a gap in release cadence, not an absence of work: individual commits and successful Pages deployments continued between the two milestones.

Comparison with the v3.0.0 tag finds no changes to the homepage composition, its page stylesheet, layout, or greeting components. The familiar facade is supported by a much larger project than the visitor might suspect.

During Vincent's detour from the main greeting, a separate Rust audio engine was developed and integrated into a dedicated browser test page. That page then received a design whose ceremony is difficult to reconcile with its actual repertoire of two sounds.

The Ministry of Visible Progress has inspected the front entrance. Its report is one line long. The annex containing the work requires several departments.

## The Work Behind the Greeting

### A Rust Engine With a Browser Interface

PHW consumes the vendored beep-engine 0.1.2 npm archive. Its packaged interface includes generated WebAssembly bindings, the Wasm binary, JavaScript playback code, and TypeScript declarations. The archive's README describes its Rust sound-generation library; the engine was developed in a separate project rather than implemented in PHW's frontend.

The two available sounds are startupBeep and crashSound. The interface exposes 44,100 and 48,000 Hz sample rates and shared volume control. In the browser, Rust-generated samples cross the Wasm boundary and are played through Web Audio. An AudioContext and gain node are created lazily when playback is requested.

The browser methods resolve after starting playback, not after the sound has finished. The sample-rate selector controls generated/buffer sample rates; it does not promise to reconfigure the physical output device. No audio files need to be fetched for these generated sounds.

### An Instrument Panel of Disproportionate Standing

The audio test has its own feature-local components, hooks, types, colors, fonts, and materials. Initialization and playback orchestration are separate from the visual controls. The interface includes sound and sample-rate selectors, a native vertical volume input, Play, and a status display.

The design combines Michroma, Oxanium, Space Grotesk, and Intel One Mono; semantic ivory, ebony, and gold colors; translucent glass-like surfaces; and carefully differentiated raised and recessed relief.

The volume module has fixed geometry, eleven graduations, a rectangular fader thumb, and a recessed gold fill. Play sits inside a separate gold mounting ring. The status display has its own stylesheet and deep inset treatment. Supported customizable selects open below their controls, distinguish selection from hover, and rotate their matched SVG arrows clockwise with shadow-direction compensation.

An anthracite SVG arch pattern gives the transparent panels something to reveal. Mirrored botanical goldwork surrounds the headings while the original lower gold separator retains its styling. Responsive grid placement gives status its own full-width row at narrow widths and splits the gold divider around it. A small footer mark and production signature complete the instrument.

No universal scroll-free fit or identical rendering across browsers is claimed.

### A Password With an Entire Verification Committee

The header initially accompanies a recessed password form. The accepted password is password, deliberately hinted in the label itself. PBKDF2 with SHA-256, 210,000 iterations, a fixed feature-specific salt, and a 256-bit reference key provides the requested disproportionate verification ceremony.

Only acceptance mounts the audio panel and begins its initialization. Authorization is local component state; reloading restores the gate. This is a bypassable client-side presentation mechanism on a static site, not server-enforced authentication. The comparison loop does not establish guaranteed constant-time JavaScript execution.

## Why 4.0.0, Without a 3.x Intermission?

Vincent chooses 4.0.0 as the next artistic and technical milestone: a dedicated audio experience now exists behind the unchanged greeting. The major number marks that chapter boundary. It does not announce a breaking public API change or claim that BeepEngine itself has reached 4.0.0; the integrated engine archive remains 0.1.2.

The missing intermediate releases are acknowledged rather than invented retrospectively. The commits already happened, and the site was deployed along the way. This release gathers that work into a named milestone.

Future releases should be smaller and more frequent. A completed, useful change can receive a patch or minor release independently of the wiki's narrative schedule. The [release process](https://github.com/VincentMardon/professional-hello-world/blob/v4.0.0/docs/RELEASE-PROCESS.md) records a lightweight manual procedure using the existing CI and Pages pipeline, plus a separately identified automation proposal.

## Verification and Open Boundaries

The [CI run for release-preparation commit #79](https://github.com/VincentMardon/professional-hello-world/actions/runs/39461228906) completed dependency installation, Biome checks, TypeScript checking, Vitest, the production build, artifact packaging, and Pages deployment successfully. The annotated v4.0.0 tag targets that exact commit, 30eb0a0e7d3b33b7dc1e351c98b2f07dd8e620f7. The preceding implementation commit #78 also passed its own CI and deployment.

The repository contains the original four homepage tests and an audio-page suite covering initialization, settings, playback, and volume integration through a mocked engine. The audio-page suite also substitutes the panel for the access component. It therefore does not verify the real password gate, its cryptographic derivation, or deferred initialization through that gate. Dedicated acceptance/refusal tests remain to be added.

DOM tests do not measure visual layout or real audible output. No independent Rust test execution, new assistant browser inspection, coverage measurement, or full cross-browser verification is claimed for this release.

The private frontend package and root package entries in the lockfile identify version 4.0.0. GitHub published v4.0.0 as a stable release on October 20, 2026 at 17:03:35 UTC. The tag resolves to the verified release-preparation commit; 4.0.0 is now the latest published release. No earlier tag was moved.

## Part V Is Closed

This milestone closes Part V, BeepEngine — The Audio Test — The Design. The greeting has not acquired a new line. Behind it, the Rust engine and its unnecessarily prestigious listening room have become concrete work.

At Vincent's request, the closing scene notices something else: since the opening of Part V, the usually excessively talkative Director has offered very little personal commentary. The chapters concentrated on implementation, and his reduced commentary is treated here as an unsettling institutional silence, not an explanation of his private state.

The Bureau prepares its customary request for a concluding statement.

The Director supplies none.
