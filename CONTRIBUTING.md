# Contributing to Professional Hello World

First of all: thank you for even considering contributing to a project that
says “Hello, World!” with this much ceremony.  
This repository is intentionally disproportionate — please help us keep it that way.

## 📦 What this project is

- A sandbox to practice **good habits** (CI, changelog, releases, doc)
- A satire of **over-engineered software culture**
- A real repository with real commits, real tags and real expectations

So: joke project, **serious structure**.

---

## 1. How to contribute

1. **Fork** the repository  
2. **Create a branch** for your change  
   - `feature/...` for new stuff  
   - `docs/...` for wiki / changelog / readme  
   - `style/...` for tiny HTML changes (like a `<strong>` that needs its own release 😉)
3. **Commit** with a clear message (see below)
4. **Open a Pull Request** with a short rationale

We value **clarity over speed** and **tone over cleverness**.

---

## 2. Commit messages

We follow a light version of Conventional Commits.

Examples:

- `feat(demo): add absurdly overprepared hello.html`
- `feat(demo): add overstructured python hello script`
- `style(demo): introduce minimal emphasis to inspire future ui direction`
- `docs(changelog): record 2.1.1 minimal emphasis release`

👉 If your change is small but philosophical, **say it** in the commit.  
This project assumes *intent matters*.

---

## 3. Documentation rules

- If you add or change something visible → **update `README.md`**
- If you ship something new (even tiny) → **update `CHANGELOG.md`**
- If the change is narratively funny / absurd → **add a page in the Wiki**

Yes, we really do that here.

---

## 4. CI / GitHub Actions

- CI must be green. Even for a `<div>`.
- If CI fails, fix it or explain in the PR why failure is part of the performance.

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

If you hesitate: **bump.**  
This project would rather be “over-released” than under-documented.

---

## 7. Code of Conduct (non-official)

- Be kind
- Don’t mock contributors — we’re all here to overthink a 1-line program
- Keep the tone slightly pompous, never méchant
- Remember: the joke is about the *process*, not about the *people*

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
