# Release Process — Milestones Without Waiting for Another Era

## Current PHW Release Policy — October 21, 2026

Vincent explicitly uses release numbers as part of PHW's artistic lore. The three-number form is retained, but its increments are not a promise of strict Semantic Versioning: a small new capability may advance the third number. State the actual change and compatibility facts rather than inferring them from the version number. Large eventual numbers such as 23.15.289 are an artistic direction, not a published version or a requirement to manufacture hundreds of empty releases.

For the documentation project, release milestones concern capabilities of the documentation system: rendering, navigation mechanisms, diagram interaction, zoom, fitting, fullscreen presentation, search, and reference-generation tooling. A new Markdown page, a routine Next.js route using the established reader, or an additional diagram using an unchanged renderer does not by itself justify a documentation-feature release. Such content can be committed and deployed between releases and included in the next capability milestone. A reader-behavior correction may still justify a release; this rule does not prohibit fixes.

This criterion applies to documentation, not automatically to PHW's principal public experience. Changes to the actual homepage may warrant their own artistic release decisions, even when technically small. Preserve historical releases as issued rather than judging or renumbering them retroactively.

The remaining 4.x work is planned around documentation capabilities and diagram interaction. The next proposed slice is 4.4.1 for zoom controls; fitting and fullscreen follow as separately reviewable behavior. New error-path or signal-flow diagrams are content work unless they require a new rendering or interaction capability. Longer-term plans by major artistic generation remain to be established together.

This policy supersedes generic patch/minor classification for future PHW version choices. It does not change human ownership of application commits, tags, and publication, or the requirements for truthful notes and exact-commit verification. The older cadence examples below describe the earlier policy and preparation history.
## What This Changes

Version 3.0.0 was followed by many commits and deployments but no intermediate 3.x release. Version 4.0.0 gathers that work into an explicitly chosen milestone. Do not create retrospective releases suggesting that intermediate versions were published at the time.

A Pages deployment and a GitHub release are separate events. The current CI deploys successful main-branch runs; it does not create version tags or GitHub releases. No release automation is added by this document.

## A Small, Repeatable Cadence

Review release readiness whenever a coherent change is complete. Do not require a major redesign, a finished wiki part, or a large batch of commits.

- Patch: corrections, accessibility fixes, or small visual refinements without a new capability. After 4.0.0, the first such release would normally be 4.0.1.
- Minor: a useful compatible addition, such as a new sound or interaction. The next minor line would be 4.1.0; actual contents must be decided from completed work.
- Major: an actual compatibility break or an explicitly chosen artistic generation. Explain which meaning applies; the number alone is not evidence of a breaking API.
- Prerelease: use a suffix such as -rc.1 only when intentionally publishing a candidate for evaluation. A draft release and a prerelease are different states.

Maintain a short Unreleased summary as work lands. Each release should explain what changed, who can observe it, and what was verified. Detailed historical entries can remain; release preparation should add a readable summary rather than requiring readers to reconstruct a month of commits.

## Human-Owned Application Release

Vincent applies code and package-metadata changes and executes application commits, tags, and pushes under AGENTS.md. The assistant may inspect history and CI, edit prose documentation, and prepare exact instructions and commit messages.

1. Select a version and review changes since the last published tag. Inspect the actual diff, not only commit titles.
2. Update frontend/package.json and the root package entries in frontend/package-lock.json together. From frontend, npm version 4.0.0 --no-git-tag-version is the proposed metadata-only command for this milestone; review its diff before committing. Do not replace unrelated dependency versions.
3. Prepare the release notes, a versioned changelog section, and README links. Before publication, clearly label the release as prepared rather than published.
4. Run the existing checks and inspect the page. Commit the selected changes with the next project sequence number and push main.
5. Verify successful CI and Pages deployment for that exact release-preparation commit. A previous green run does not cover it.
6. Create an annotated v4.0.0 tag on that exact commit and push the tag. Do not retarget an existing published tag. The GitHub release must reference that tag, not an unspecified moving main branch.
7. In GitHub Releases, publish v4.0.0 with the title and body from docs/RELEASE-4.0.0.md, removing preparation-only instructions and replacing them with the verified commit, publication date, and CI record. Check that it is a full release rather than a prerelease.
8. Update the documentation's publication status accurately. The assistant can then synchronize the wiki's closing record with the verified release URL and tag.

For later patch/minor releases, reuse the same sequence with the appropriate version. Existing CI already performs the build and deployment; a release need not trigger a second build of the same verified commit.

## Proposed Automation, Not Installed

A later dedicated change could maintain a release PR containing the version bump, changelog summary, and draft notes. Merging a human-reviewed preparation PR could then initiate release publication after CI confirms that exact commit. Tag creation and release permissions must be explicitly designed rather than inferred from current Pages permissions.

That proposal is separate from 4.0.0. The immediate improvement is a lightweight manual checkpoint at the end of useful work, with no requirement to wait for a major artistic event.
