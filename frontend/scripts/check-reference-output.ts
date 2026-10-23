import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));

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
