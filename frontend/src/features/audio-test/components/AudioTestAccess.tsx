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

const expectedKey = Uint8Array.from(
  "471c3c175243ae6d8ebdfe23db67c8ca6caa1e3030e90b755fe2e1dfdf6e81f9".match(
    /.{2}/g,
  ) ?? [],
  (byte) => Number.parseInt(byte, 16),
);

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

  let difference = candidate.length ^ expectedKey.length;

  for (let index = 0; index < expectedKey.length; index++) {
    difference |= candidate[index] ^ expectedKey[index];
  }

  candidate.fill(0);

  return difference === 0;
}

export function AudioTestAccess() {
  const passwordId = useId();
  const messageId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const verifyingRef = useRef(false);

  const [authorized, setAuthorized] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (verifyingRef.current || !inputRef.current) return;

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
