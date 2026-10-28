import Link from "next/link";

import { ComingSoon } from "../components/ComingSoon";
import { EmptyLine } from "../components/EmptyLine";
import { ProfessionalHelloWorld } from "../components/ProfessionalHelloWorld";
import { documentationNav, greeting } from "./page.css";

/**
 * Composes the greeting, decorative interval, pending message, and doc link.
 *
 * @remarks
 * Content components provide the wording; the stylesheet owns positioning.
 * The documentation link uses a reader path without the prefix,
 * which Next Link handles.
 */
export default function HomePage() {
  return (
    <div className={greeting}>
      <ProfessionalHelloWorld />
      <EmptyLine />
      <ComingSoon />
      <nav className={documentationNav} aria-label="Project resources">
        <Link href="/doc">Documentation</Link>
      </nav>
    </div>
  );
}
