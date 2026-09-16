import { ComingSoon } from "../components/ComingSoon";
import { ProfessionalHelloWorld } from "../components/ProfessionalHelloWorld";
import { greeting } from "./page.css";

export default function HomePage() {
  return (
    <div className={greeting}>
      <ProfessionalHelloWorld />
      <ComingSoon />
    </div>
  );
}
