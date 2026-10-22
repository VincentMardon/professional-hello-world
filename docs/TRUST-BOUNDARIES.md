# Trust Boundaries — The Reception Desk Is Not a Vault

[Documentation reception](README.md) · [Dependencies](DEPENDENCIES.md) · [Operations](OPERATIONS.md)

## 1. Describe the boundary that actually exists

PHW publishes a static Next.js export. Its browser code and public assets are delivered to visitors. The current application has no server-side authorization service or private account store. This guide records the implementation's limits; it is not a security audit or a claim that every browser interaction has been independently tested.

An elaborate access form can be part of the artistic experience without being a suitable boundary for confidential resources. The fictional Ministry of Restricted Beeps may issue ceremonial permits. The deployed application must still be described according to what enforces those permits.

## 2. The audio access ceremony

The [access component](../frontend/src/features/audio-test/components/AudioTestAccess.tsx) handles the password in browser code. It uses Web Crypto PBKDF2 with a source-defined salt, iteration count, and expected derived value. It compares the derived bytes and mounts the listening panel after a successful check.

During verification it disables another concurrent submission through its tracking flag, marks the form busy, clears the input, and reports progress or failure. Authorization is held in React component state. This is not a server session or a remote permission decision.

The derivation makes the ceremony more elaborate than a plain string comparison, but all the enforcing code still runs on the visitor's machine. A visitor can inspect the delivered program and alter local execution. Do not place a confidential asset behind this component and describe it as protected by the access form. This distinction follows the actual enforcement location, not the impressive appearance of the cryptographic vocabulary.

The code clears the candidate byte array after comparison. That does not establish comprehensive erasure of every browser-managed representation of the entered value, and this guide makes no such claim.

## 3. Public content selection is deliberate

The documentation reader selects source files through an explicit catalogue. It does not publish every file in the repository merely because the file is Markdown. Release notes, planning documents, and source-code links can remain repository material without automatically becoming reader pages.

The proposed 4.6 catalogue migration preserves this selection boundary while removing repetitive route wrappers. It does not introduce private documents or a server for reading arbitrary paths. Systematic declaration validation is a later roadmap checkpoint; do not describe it as installed before its implementation and verification.

Nothing in a public Git repository should be assumed private because it lacks a navigation link. Navigation selection determines the reading experience, not repository confidentiality.

## 4. Rendering and browser capabilities

The reader uses react-markdown with GFM support. It does not install a raw-HTML rendering plugin. Mermaid rendering runs in the browser with its configured strict security level. These are observed configuration choices, not a blanket guarantee that every possible future content source is safe.

Current documentation sources are maintained project files. Introducing user-submitted Markdown, arbitrary remote diagrams, or editable browser content would change that boundary and require a separate design discussion.

Fullscreen depends on browser support and permission. A failed request is reported by the diagram viewer rather than replaced with a claim that fullscreen succeeded. Audio status similarly reports initialization or request results; it is not a measurement proving that a listener heard anything.

## 5. Verification has limited authority too

The audio suite replaces the access component with the listening panel and mocks BeepEngine. Its passing result does not certify the password ceremony, real cryptography in each browser, or audible output. The documentation freshness gate establishes agreement between one regenerated file and HEAD, not that every sentence is factually correct.

The repository includes commented ceremonial analytics placeholders in the root layout. Comments do not install telemetry. Conversely, this observation is not a network audit proving that every dependency makes no requests; source inspection must not be inflated into a result that was never measured.

Use the [operations guide](OPERATIONS.md) to distinguish local checks, browser checks, CI, and publication. If a future change introduces a real server, accounts, user content, or sensitive data, update this guide from the changed implementation rather than reusing the static-site assumptions.

## 6. Questions before crossing a new boundary

| Proposed change | Question the implementation must answer |
| --- | --- |
| Protect a confidential resource | What trusted service decides whether to deliver it? |
| Accept arbitrary Markdown | Who controls the content and which rendering features are allowed? |
| Load a new external script | What source, version, and browser authority are being introduced? |
| Broaden generated documentation | Which files become public reader destinations and which checks cover them? |
| Add persistence | What is stored, where, and what happens when the state is reset? |

These questions are design prompts, not announcements of installed services. The Reception Desk has a form, a stamp, and two noises. It should not accidentally promise a vault.
