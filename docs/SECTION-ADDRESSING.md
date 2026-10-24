# Section Addressing — Every Paragraph Receives an Address

**Local 4.8.0 implementation checkpoint — October 24, 2026. Not released.** Package version remains 4.7.1. The reader now assigns Markdown heading identifiers, exposes section links, and offers per-page contents. The local-link command validates heading fragments on selected reader documents. Exact-commit remote verification and release preparation remain pending.

## One heading policy

The shared documentHeadings module parses CommonMark/GFM and extracts plain text from heading nodes. github-slugger assigns identifiers and document-local duplicate suffixes. Accented and non-Latin letters are retained. Formatting and link destinations do not become identifier syntax; image alternative text contributes to the label and raw HTML is excluded.

A heading whose text produces no usable slug uses a section fallback before duplicate numbering. This ordering fixes the initial punctuation-only case, where a previously recorded empty slug could become a misleading -1 identifier. Each document starts a fresh slugger. Renaming headings or reordering duplicate headings can change addresses: these identifiers are deterministic, not permanent independently of edits.

The same indexing function annotates the Markdown tree for rendering and supplies the inventories used by contents and fragment inspection. The current TypeDoc output contains eighteen local selected-document fragment links, all matching this policy at comparison time. That observation does not guarantee compatibility with arbitrary future TypeDoc output or custom HTML anchors.

## Reader behavior

All six Markdown heading levels receive their indexed IDs and a visible section permalink. The permalink is appended beside the heading content, avoiding a wrapper link around existing inline links. It has an accessible name and uses an encoded fragment address.

The native details disclosure labelled On this page lists heading levels two and three in document order. It is omitted when neither level exists. The list is flat rather than inferring a hierarchy across skipped levels. Deeper headings remain directly addressable even though they are not listed. The existing theme and document presentation remain the baseline; this is functional navigation work rather than the deferred redesign.

Vincent confirms that Tab and Enter open the contents, that selecting a contents entry moves to its section, and that section permalinks position the heading at the top of the viewport. He also confirms generated Theme and ThemeContextValue links reach their corresponding headings. These checks do not constitute a complete accessibility or multi-browser audit.

## Fragment inspection

The runner indexes each selected source once and maps its heading set both to its real filesystem path and to its canonical reader route. Existing destination validation still checks files and permitted routes first. The fragment layer then compares decoded fragment text case-sensitively with the selected target's heading IDs.

Current-document, selected-file, and selected-route heading fragments can pass or fail. Empty fragments address the page top. Malformed encoding on an inspected fragment fails. Images, unselected targets, external destinations, and browser fragment directives remain deferred. Raw HTML headings and custom anchor elements are not included in the Markdown-heading inventory.

Destination counts and fragment counts are distinct: an existing file may pass destination inspection while its fragment fails. Diagnostics retain the referring document and source position. A failed destination is not reported again as an independent fragment failure.

## Verification checkpoint

The heading suite covers formatted labels, collisions with numbered headings, document-local reset, Unicode text, fenced examples, and punctuation-only fallback. The Markdown rendering test compares actual rendered IDs with the shared index and checks permalink targets. The fragment suite covers selected and deferred targets, encoding, case, missing headings, image fragments, and page-top behavior. Vincent reports these checks pass.

The assistant runs the integrated command: twenty selected documents, 156 local destinations checked, 52 external destinations not fetched, zero non-file destinations skipped, eighteen fragments checked, 45 deferred, zero rejected, and zero errors. These are occurrence counts.

On October 24, the assistant temporarily adds a missing current-document fragment to the selected reception source. The command rejects it with a positioned diagnostic and exit code 1. The original file bytes are restored in a finally block; the normal command then succeeds again with the counts above. This is a manual command-level exercise, not a newly installed automated CLI fixture.

## Dependencies and remaining work

The implementation declares github-slugger, mdast-util-to-string, and the mdast development types. Next.js moves from 16.4.0 to 16.4.1 and Vitest from 5.0.1 to 5.0.3 after audit warnings on existing dependencies. A subsequent assistant audit reports zero vulnerabilities at that inspection time. This is a point-in-time registry result, not a guarantee about future advisories or complete application security.

The newly added heading and fragment modules are not yet additional TypeDoc entry points. The established selected reference surface remains unchanged. Vincent confirms reference freshness and production build for the integrated source. Review intended file additions before committing and verify the actual published implementation commit in CI. Later version alignment and stable 4.8.0 publication require their own preparation record.
