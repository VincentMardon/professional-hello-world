import Link from "next/link";

import { ComingSoon } from "../components/ComingSoon";
import { EmptyLine } from "../components/EmptyLine";
import { ProfessionalHelloWorld } from "../components/ProfessionalHelloWorld";
import { documentationNav, greeting } from "./page.css";

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
