import { ComingSoon } from "../components/ComingSoon";
import { EmptyLine } from "../components/EmptyLine";
import { ProfessionalHelloWorld } from "../components/ProfessionalHelloWorld";
import { greeting } from "./page.css";

export default function HomePage() {
  return (
    <div className={greeting}>
      <ProfessionalHelloWorld />
      <EmptyLine />
      <ComingSoon />
    </div>
  );
}
