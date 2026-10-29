import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

/**
 * Checks Git status for the owned generated-reference directory.
 *
 * @remarks
 * The npm freshness command runs TypeDoc before invoking this script.
 * Running this script alone does not regenerate or validate source comments.
 *
 * Refuses reported staged, unstaged, deleted, or untracked output.
 * Intentional generated changes must be reviewed and committed before
 * the freshness command can pass.
 *
 * Requires Git and a working repository checkout. Does not stage files,
 * create commits, or modify generated content.
 */

// Resolve the checkout root from this script's location.
const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));

// Use stable porcelain output and include individual untracked files.
// Restrict inspection to the generated-reference directory.
const inspection = spawnSync(
  "git",
  [
    "status",
    "--porcelain=v1",
    "--untracked-files=all",
    "--",
    "docs/generated/reference/",
  ],
  {
    cwd: repositoryRoot,
    encoding: "utf8",
  },
);

// Distinguish failure to start Git, a failed Git command, and changed output.
if (inspection.error) {
  console.error(
    "The Registry could not start its output inspection:",
    inspection.error,
  );
  process.exitCode = 1;
} else if (inspection.status !== 0) {
  console.error(
    "The registry could not inspect generated output:",
    inspection.stderr.trim(),
  );
  process.exitCode = 1;
} else if (inspection.stdout.trim()) {
  console.error("The generated reference differs from the committed record:");
  console.error(inspection.stdout.trimEnd());
  console.error(
    "Review generated files, including additions and deletions, " +
      "and include the intended output in the next commit.",
  );
  process.exitCode = 1;
} else {
  console.info(
    "The Registry's generated reference matches the committed record.",
  );
}
