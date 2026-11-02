# 4.9.2 — One Application to Inspect the Department

**Local preparation — November 3, 2026. Not published.** The consolidated command and CI wiring are implemented in the working tree. Package and both root lockfile version fields are aligned to 4.9.2. Vincent confirms the final local checks pass. The preparation commit, remote verification, tag, and stable publication remain pending.

## Capability

From `frontend`, `npm run docs:check` now runs:

1. Reference generation and committed-output freshness.
2. Catalogue and navigation validation.
3. Generated-reference coverage.
4. Local destination and supported heading-fragment inspection.

The npm script joins the existing commands with `&&`. Each starts only after the preceding command succeeds. A failed constituent returns a nonzero overall status and stops the remainder; existing diagnostics remain visible. No new runner, dependency, or inspection algorithm is introduced.

The Directorate previously required four visits to adjacent counters. It now accepts one application and escorts it through the same offices. The number of inspectors is unchanged; the applicant is merely relieved of repeatedly explaining why they are standing in the corridor.

## Shared local and CI workflow

CI invokes the same command after lint, type checks, and tests, before the production build. It removes the separate documentation steps rather than retaining duplicate invocations alongside the chain. The individual commands remain available for focused diagnosis.

The build still generates reference through prebuild. This release does not promise removal of all repeated generation. The consolidated command does not include lint, application type checks, tests, the build, browser review, or publication.

Freshness retains its existing refusal of staged, unstaged, deleted, or untracked generated changes reported by Git. Intentional generated output must be reviewed and committed before the chain can pass. No command stages files or commits on the contributor's behalf.

## Local evidence

Vincent supplies a complete successful run: twenty-three catalogue declarations, twelve generated reference pages, 204 local destination checks, eighteen fragments checked, 45 deferred, none rejected, and zero errors. Fifty external destinations are not fetched.

With the glossary temporarily renamed, generation/freshness succeeds and catalogue validation rejects its missing source. Coverage and link inspection do not start. Restoring the source restores full-chain success. The transcript establishes the stopping boundary and recovery; it does not include a separately printed numeric exit code or demonstrate every possible constituent failure.

For the aligned 4.9.2 state, Vincent confirms Biome, TypeScript, the full test run, the consolidated documentation chain, and the production build pass. All three version fields are also inspected at 4.9.2. No additional browser review is claimed for this tooling change. Exact-commit remote CI and deployment remain pending.

## Boundaries

Existing reader routes, navigation rules, search algorithms, diagram controls, TypeDoc entry points, and dependencies are unchanged by this workflow addition. Updated manuals explain the installed chain and the distinction between preparing intentional generated changes and satisfying committed freshness.

The third-number increment marks a contributor-tooling capability under PHW's artistic versioning. It does not imply strict SemVer classification. Visual design remains reserved for Part IX, following the Part VIII exit review.
