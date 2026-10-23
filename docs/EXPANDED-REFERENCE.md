# Expanded Technical Reference — The Contracts Acquire a Public Register

**Local implementation checkpoint — October 23, 2026. Not released.** Package version remains 4.6.2. The proposed 4.7.0 work expands the source-reference pilot to eleven selected modules and twelve generated Markdown pages. Remote verification and release preparation are pending.

## Selected contracts

The extraction surface covers audio initialization and orchestration, sound identifiers, the document catalogue, diagram rendering and viewport behavior, catalogue validation, Markdown link extraction, destination inspection, error conversion, and shared theme behavior.

Source comments describe caller obligations, error handling, state lifetime, asynchronous cleanup, and deliberate limits. They do not add runtime validation. Exported supporting types make the selected public signatures explainable without undocumented type references.

The [generated index](generated/reference/README.md) leads to the eleven modules. All twelve pages are selected in the document catalogue. The existing /doc/reference/use-beep-engine address is retained with its new generated source. The reference index uses /doc/reference. No individual route wrappers are required.

## Generation ownership

From frontend, npm run docs:reference now invokes typedoc.reference.json. That configuration inherits the plugin and shared options from typedoc.json and selects the expanded entry points explicitly. The prebuild script invokes the same command before Next.js construction.

TypeDoc exclusively owns docs/generated/reference. Its cleanOutputDir setting removes previous contents before writing the current output, allowing obsolete generated pages to disappear. Never place hand-authored material in that directory. Source links follow main rather than an immutable release snapshot.

The old docs/generated/api-pilot/README.md remains an archival compatibility destination for historical links. The normal generation and freshness commands no longer maintain it. The inherited pilot configuration is retained; it is not a second generated surface covered by the new gate.

## Freshness boundary

npm run docs:reference:check first regenerates the expanded output, then runs scripts/check-reference-output.ts. The script requests Git porcelain status for the entire generated/reference directory, including individual untracked files. A nonempty status fails the check, including staged changes. This compares the maintained output with the committed record, not merely with the index.

In conjunction with generation cleanup, tracked obsolete files appear as deletions. New output appears as untracked files until committed. This policy relies on the output directory being visible to Git; do not ignore generated/reference or its intended contents.

Generation modifies output. The subsequent Git inspection is read-only. The command needs a Git checkout and is not a standalone archive validator. It does not establish the truth of prose, fragment existence, or browser accessibility.

## Evidence and remaining checks

Vincent reports successful expanded generation after correcting an entry-point spelling and exporting supporting signature types. Filesystem inspection finds the expected twelve Markdown pages and catalogue declarations. The initial freshness refusal explicitly lists all twelve untracked pages. That establishes the new-output refusal case, not every failure branch.

Before publication, verify committed-state success and meaningful stale-output cases, including a changed tracked file and an obsolete tracked output. Confirm the full local checks, static export, reader navigation, and the exact published implementation CI. Do not claim these results solely from the initial refusal transcript.

The current CI command name is unchanged, so its existing freshness step invokes the expanded inspection once this implementation is committed. Heading addressing and fragment validation remain planned later work. Navigation organization and visual design retain their separate roadmap milestones.

## Integrated local confirmation

Vincent confirms the requested lint, type checking, full test suite, catalogue inspection, link inspection, and production build, together with reader checks for the reference index, module navigation, and preserved initialization-hook address. The assistant inspects twelve generated Markdown files and the twenty-entry catalogue. These confirmations do not replace committed-state freshness success or exact-commit remote verification, which remain pending.
