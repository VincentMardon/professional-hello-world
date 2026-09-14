# Contributing to Professional Hello World

First of all: thank you for even considering contributing to a project that
says “Hello, World!” with this much ceremony.  
This repository is intentionally disproportionate — please help us keep it that way.

## 📦 What this project is

- An artistic project marking Vincent Mardon's return to public creative work
- A place to learn programming and practice **good habits** (CI, changelog, releases, documentation)
- A satire of **over-engineered software culture**
- A real repository with real commits, real tags and real expectations

The ceremony is deliberately excessive. The artistic work and the learning are real. The personal context is available in the [recovery addendum](docs/postmortem-unsaved-guideline.md); participation does not require knowing that history.

---

## 1. How to contribute

For work with the assistant, follow [AGENTS.md](AGENTS.md): code is proposed and explained in the conversation, and Vincent applies it himself. The assistant may edit prose documentation directly. The workflow below applies to human contributions.

1. **Fork** the repository  
2. **Create a branch** for your change  
   - `feature/...` for new stuff  
   - `docs/...` for wiki / changelog / readme  
   - `style/...` for tiny HTML changes (like a `<strong>` that needs its own release 😉)
3. **Save your files**, review the diff, and **commit** with a clear message (see below)
4. **Open a Pull Request** with a short rationale

We value **clarity over speed** and **tone over cleverness**.

---

## 2. Commit Messages: Every Change Deserves a Dossier

All commit messages must be written in English and follow the structure below. A Conventional Commit subject is only the entrance hall. The full administrative building is mandatory, even for a single HTML tag.

### Required Structure

```text
<type>(<scope>): <specific summary>

Rationale:
- Explain why the change was necessary and what prompted it.
- Elaborate on its artistic, technical, or procedural significance with entirely disproportionate care.

Changes:
- Describe the actual edits, naming the affected files and relevant elements.
- Include precise before-and-after details where useful.

Impact:
- Explain what the change means for behavior, readers, contributors, or the ongoing ceremonial narrative.
- State relevant verification and limitations accurately.

Footer:
Refs: #<commit-number>
```

Keep the section names, order, and numbered footer exactly as shown. Use bullets under `Rationale:`, `Changes:`, and `Impact:`. Author names and timestamps are supplied by Git and do not belong in the message body.

### Mandatory Commit Numbering

Every new commit must carry its own sequential project number in `Footer:`, written as `Refs: #N`. This is the project's human-readable commit sequence, separate from Git's generated commit hash and from release version numbers.

- Inspect the latest numbered commits in the relevant history before choosing the next number.
- Continue the established sequence: `Refs: #26` is followed by `Refs: #27`, then `Refs: #28`, and so on.
- Never omit the number, reuse one for a different new commit, or leave the template placeholder in a final message.
- When preparing several commits, give each its own number in the intended order. Coordinate numbering before integrating parallel work.
- A draft may retain `#<commit-number>` until the history has been checked; verify the final number immediately before committing.

GitHub may interpret `#N` as a link to an issue or pull request. That automatic link does not establish that a corresponding issue exists: the convention here numbers commits. Do not invent or create issues merely to make the number clickable.

### Required Level of Detail

Describe the change as if a future committee will investigate why this particular comma was entrusted with production responsibilities.

The explanation should be far more elaborate than the size of the edit would ordinarily justify. Record the motivation, the exact intervention, and its consequences. Small changes deserve specific explanations rather than generic claims of improvement. Philosophical implications are welcome; fictional implementation, invented tests, and unsupported claims are not.

For documentation changes, explain how the wording changes the reader's understanding. For code changes, explain the resulting behavior. Distinguish observed effects from hoped-for future developments. The pomp belongs in the interpretation; the account of what changed must remain accurate.

### Historical Example

The following is the established `#26` message, preserved as a model. Its number belongs to that historical commit and must not be copied into a new one.

```text
docs(changelog): document v2.1.2 italic rebellion and emotional hierarchy

Rationale:
- The project has expanded its semantic vocabulary with <em>, symbolizing the fusion of strength and sentiment.
- Documenting this ensures future contributors respect the balance between assertion (<strong>) and anticipation (<em>).

Changes:
- Added 2.1.2 entry to CHANGELOG.md outlining the scope and intent of The Italic Rebellion.

Impact:
- Changelog now reflects the project's transition from structural confidence to expressive nuance.

Footer:
Refs: #26
```

A one-line commit message is an undocumented emotional event. Please complete the paperwork.

---
## 3. Documentation rules

- Write all project documentation in English.
- Distinguish implemented behavior from proposals. Keep personal details within what Vincent has chosen to share.
- If you add or change something visible → **update `README.md`**
- If you ship something new (even tiny) → **update `CHANGELOG.md`**
- If a change deserves a ceremonial account, add it to the relevant document in `docs/` and link it. A separate Wiki page is optional.

Yes, we really do that here.

---

## 4. CI / GitHub Actions

- CI must be green. Even for a `<div>`.
- If CI fails, investigate and describe the failure accurately. The current workflow only prints a message; a green run does not establish that the application works.
- State how you checked the actual change. Do not claim tests or coverage that were not performed.

---

## 5. Style guidelines

- HTML: keep it simple, even when the `<head>` is overpopulated.
- Python: prefer structure (functions, `if __name__ == "__main__":`) even for one print.
- Comments: allowed to be funny, but must be **useful funny**, not “lol”.

---

## 6. When to bump a version

This repo is intentionally generous with versions.

- **MAJOR (x.0.0)** — when the project gains a new “layer” (ex: actual greeting added)
- **MINOR (x.y.0)** — when the project evolves conceptually (ex: prelaunch message, new view, new doc section)
- **PATCH (x.y.z)** — when we clarify intent, tweak wording, or add a `<strong>`

Record ongoing work under **Unreleased**. Choose a version when preparing a release; editing documentation does not automatically publish one.

When a release is ready, even a small change may deserve a very large announcement.
This project would rather be “over-released” than under-documented.

---

## 7. Code of Conduct (non-official)

- Be kind
- Don’t mock contributors — we’re all here to overthink a 1-line program
- Keep the tone slightly pompous, never cruel
- Remember: the joke is about the *process*, not about the *people*
- Respect the pace of learning and reconstruction. Personal hardship is not a productivity target.

---

## 8. Questions?

Open an issue with the label `discussion` or `design-philosophy`.  
We accept questions like:
- “Should this div have a release?”
- “Is this change worthy of a changelog?”
- “How documented is too documented?”

➡️ Short answer: it’s never too documented.

---

_“No code is too small to deserve ceremony.”_
