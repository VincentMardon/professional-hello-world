"use client";

import { type FormEvent, useId, useRef, useState } from "react";
import { EmptyLine } from "../../../components/EmptyLine";
import {
  accessForm,
  accessLabel,
  accessMessage,
  accessRegion,
  passwordInput,
} from "./AudioTestAccess.css";
import { AudioTestPanel } from "./AudioTestPanel";

/**
 * Expected PBKDF2 output encoded as bytes for local comparison.
 *
 * This value and the verification procedure are delivered to the browser.
 * They support the access ceremony, not server-enforced authorization.
 */
const expectedKey = Uint8Array.from(
  "471c3c175243ae6d8ebdfe23db67c8ca6caa1e3030e90b755fe2e1dfdf6e81f9".match(
    /.{2}/g,
  ) ?? [],
  (byte) => Number.parseInt(byte, 16),
);

/**
 * Compares a password-derived value with the local expected bytes.
 *
 * @param password - Input used as supplied, without trimming or normalization.
 * @returns Whether the derived bytes match the expected value.
 * @throws When the required browser cryptography operation fails.
 *
 * @remarks
 * Uses PBKDF2 with SHA-256, a fixed source-defined salt, 210,000 iterations,
 * and a 256-bit output.
 *
 * This function makes no network request. Matching does not establish a
 * server session or permission to retrieve confidential resources.
 * Callers handle rejected cryptography operations separately from a mismatch.
 */
async function verifyPassword(password: string): Promise<boolean> {
  const encoder = new TextEncoder();

  const material = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: encoder.encode("PHW:BeepEngine:AccessCommittee:v1"),
      iterations: 210_000,
      hash: "SHA-256",
    },
    material,
    256,
  );

  const candidate = new Uint8Array(derivedBits);

  // Accumulate length and byte differences without returning at the first
  // mismatch. This JavaScript implementation does not guarantee constant-time
  // execution.
  let difference = candidate.length ^ expectedKey.length;

  for (let index = 0; index < expectedKey.length; index++) {
    difference |= candidate[index] ^ expectedKey[index];
  }

  // Clear this derived-byte view after comparison. Other browser-managed
  // representations of the input are not erased by this operation.
  candidate.fill(0);

  return difference === 0;
}

/**
 * Presents a local access form before mounting the audio test panel.
 *
 * @remarks
 * The input value is read through a DOM ref rather than stored in React state.
 * Submission clears the visible input before awaiting local verification.
 *
 * A synchronous ref prevents overlapping submissions; React state exposes
 * progress through the busy form and read-only input.
 *
 * A mismatch marks the input invalid. A verification failure reports that
 * the operation is unavailable. Both paths attempt to return focus to input.
 *
 * Acceptance replaces the form with the audio panel. It lasts for this
 * mounted component instance and is not persisted across a full reload.
 *
 * This browser-controlled presentation gate is not a security boundary
 * for confidential content.
 */
export function AudioTestAccess() {
  const passwordId = useId();
  const messageId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const verifyingRef = useRef(false);

  const [authorized, setAuthorized] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(false);

  /**
   * Handles the form locally and updates its verification state.
   *
   * @param event - Form submission whose default navigation is prevented.
   * @returns A promise settling after verification and UI-state handling.
   *
   * @remarks
   * Concurrent submissions and submissions without a mounted input are ignored.
   * Cryptography failures are converted into a message rather than rethrown.
   */
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (verifyingRef.current || !inputRef.current) return;

    // Lock immediately: another submission may arrive before React renders
    // the pending state.
    verifyingRef.current = true;
    setVerifying(true);
    setInvalid(false);
    setMessage("Verification in progress.");

    const password = inputRef.current.value;
    inputRef.current.value = "";

    try {
      if (await verifyPassword(password)) {
        setAuthorized(true);
      } else {
        setInvalid(true);
        setMessage("Access denied.");
        inputRef.current?.focus();
      }
    } catch {
      setMessage("Verification unavailable. Please try again.");
      inputRef.current?.focus();
    } finally {
      verifyingRef.current = false;
      setVerifying(false);
    }
  }

  if (authorized) {
    return (
      <>
        <EmptyLine />
        <AudioTestPanel />
      </>
    );
  }

  return (
    <section className={accessRegion}>
      <form className={accessForm} onSubmit={submit} aria-busy={verifying}>
        <label className={accessLabel} htmlFor={passwordId}>
          Enter the <u>password</u>:
        </label>

        <input
          ref={inputRef}
          className={passwordInput}
          id={passwordId}
          name="password"
          type="password"
          autoComplete="current-password"
          spellCheck={false}
          required
          readOnly={verifying}
          aria-invalid={invalid}
          aria-describedby={messageId}
        />

        <p className={accessMessage} id={messageId} role="status">
          {message}
        </p>
      </form>
    </section>
  );
}
