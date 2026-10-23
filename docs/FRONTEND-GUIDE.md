# Frontend Field Guide — Follow the Greeting Through the Building

[Documentation reception](README.md) · [Architecture](ARCHITECTURE.md) · [Operations](OPERATIONS.md)

## 1. Read a path before counting its files

The frontend divides route composition, reusable components, feature behavior, shared utilities, and styles. These divisions are learning tools. Their value is whether a reader can locate a responsibility, not whether a two-sound demonstration has accumulated an impressive number of directories.

Begin with the URL you are investigating. Then follow composition into the relevant feature, identify who owns state, and finally inspect the presentation rules. Starting with every stylesheet at once is an excellent way to understand neither the page nor the wallpaper.

## 2. The route map

| URL within the configured base path | Entry point | Main responsibility |
| --- | --- | --- |
| `/` | [Homepage](../frontend/src/app/page.tsx) | Compose the greeting and documentation entrance |
| `/audio-test/` | [Audio route](../frontend/src/app/audio-test/page.tsx) | Compose the audio annex header and access experience |
| `/doc/` | [Documentation route](../frontend/src/app/doc/page.tsx) | Select the reception document |
| `/doc/architecture/` | [Architecture route](../frontend/src/app/doc/%5B...slug%5D/page.tsx) | Select the architecture document |
| `/doc/audio-lifecycle/` | [Lifecycle route](../frontend/src/app/doc/%5B...slug%5D/page.tsx) | Select the authored sound explanation |
| `/doc/reference/use-beep-engine/` | [Reference route](../frontend/src/app/doc/%5B...slug%5D/page.tsx) | Select generated hook documentation |

The base path comes from [Next configuration](../frontend/next.config.ts). The table omits that prefix for readability. All documentation destinations except reception now use one generic catch-all route. The [catalogue](../frontend/src/features/doc/data/documents.ts) supplies nine selected documents, their metadata, and slug segments. Static parameter generation exports those paths; no additional wrapper is needed for an entry. Vincent confirms local checks pass after route-type regeneration. Export inspection finds all nine destinations; exact-commit remote verification remains pending.

## 3. The shared envelope

The [root layout](../frontend/src/app/layout.tsx) supplies document language, metadata, viewport settings, global stylesheet import, and the shared theme provider. Commented ceremonial placeholders in that file are not installed analytics, preload behavior, or a feature-flag service.

The [theme provider](../frontend/src/shared/theme/ThemeProvider.tsx) shares theme state. The reusable [switch](../frontend/src/components/ThemeSwitch.tsx) changes that state. The documentation surface consumes the theme presentation; the existence of a provider does not by itself recolor every greeting or audio style.

Follow actual consumers when deciding where a theme change should appear. Global state and global styling are separate choices. This is why a reusable switch can exist before every page adopts its palette.

## 4. Walk through the audio feature

The route composes the annex rather than handling every interaction. The access component controls when the listening panel is mounted. Because this is client-side presentation in a static application, the access ceremony is not server-enforced protection of confidential material.

The [panel](../frontend/src/features/audio-test/components/AudioTestPanel.tsx) connects state and actions to volume, settings, playback, and status components. It is the composition point, not the Wasm generator.

[useBeepEngine](../frontend/src/features/audio-test/hooks/useBeepEngine.ts) initializes the package interface and reports initialization status. [useAudioTest](../frontend/src/features/audio-test/hooks/useAudioTest.ts) owns the selected sound, sample rate, volume, and interaction functions. Its defaults are startup beep, 48,000 Hz, and 100 percent volume. It converts percentage volume to the normalized engine scale and dispatches playback through the selected method.

[usePickerMotion](../frontend/src/features/audio-test/hooks/usePickerMotion.ts) concerns picker interaction and animation tracking. It does not generate audio. The [Sound type](../frontend/src/features/audio-test/types/Sound.ts) constrains sound selection, while shared [errorMessage](../frontend/src/shared/errors/errorMessage.ts) converts unknown error values for display.

Read the [sound lifecycle](AUDIO-LIFECYCLE.md) for promises, failure paths, sample data, and browser audio connections. Read the [generated hook reference](generated/reference/features/audio-test/hooks/useBeepEngine.md) for the extracted initialization contract. These are complementary explanations rather than competing copies of one enormous API document.

## 5. Walk through the documentation feature

[DocumentationPage](../frontend/src/features/doc/components/DocumentationPage.tsx) is an asynchronous server-side reader. Its imported catalogue maps document IDs to navigation titles, metadata, source files, and slug segments. Routes are derived from those segments. It reads the selected Markdown during rendering and passes it to react-markdown with GFM support.

Registered document destinations become application links. Other relative destinations use the repository fallback, resolved from the current source document. A file placed in `docs` does not automatically become a public application route. This boundary keeps release records and planning documents from being exposed merely because they share a directory.

Mermaid code fences receive special handling. The [diagram component](../frontend/src/features/doc/components/MermaidDiagram.tsx) runs in the browser, imports Mermaid, renders SVG, and follows the shared theme. Its render queue serializes rendering work. The [viewport hook](../frontend/src/features/doc/hooks/useDiagramViewport.ts) owns zoom, fit, measured width, and fullscreen interaction.

Keeping reader, renderer, and viewport distinct lets a content change remain content, a layout change remain presentation, and a diagram-control change receive focused behavioral review. A static export still needs browser JavaScript for interactive diagrams.

## 6. Change the layer that owns the problem

| Desired change | First place to inspect |
| --- | --- |
| Explain an existing concept more clearly | Its authored Markdown or source documentation comment |
| Add a web-readable document | Source Markdown and the shared catalogue entry |
| Change the meaning of Ready | Hook implementation and consumers, then reference and lifecycle explanation |
| Change a control's arrangement | Component composition and its feature stylesheet |
| Change zoom behavior | Diagram viewport hook and controls |
| Change publication conditions | CI and reusable deployment workflows |
| Change a shared error message policy | Shared utility and the callers relying on it |

A cross-cutting change may legitimately touch several layers. The table identifies starting points, not a rule that a feature may only touch one file.

## 7. A practical reading exercise

Trace one press of Play from its button to the panel callback, through `useAudioTest`, to the BeepEngine interface. Identify which code chooses the method, which code reports status, and which package owns the sound generation. Then trace an initialization rejection and explain why Play remains unavailable.

For a second exercise, trace an architecture link from Markdown through the document resolver to its application route. Ask why `../frontend` should lead to source history while a registered guide should remain in the reader.

If those paths are clear, the directory structure has justified its existence. The Department of Additional Folders may then request another meeting, but the reader is under no obligation to attend.
