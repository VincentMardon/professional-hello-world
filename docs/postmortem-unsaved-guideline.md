# Postmortem – Unsaved File Incident

## Summary
On November 1, 2025, the CONTRIBUTING.md file was committed unsaved, resulting in an empty or missing document.

## Impact
Repository integrity briefly compromised.
Contributors experienced mild existential anxiety.

## Root Cause
Human error — specifically, forgetting to save changes before running `git add`.

## Lessons Learned
- Always save before committing.
- The emotional cost of an unsaved file exceeds the time required to press Ctrl+S.

## Action Items
- Introduce pre-commit hook to verify file changes.
- Add “Save Reminder” to CONTRIBUTING.md guidelines.
