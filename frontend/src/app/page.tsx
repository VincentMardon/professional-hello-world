import { greeting } from "./page.css";

export default function HomePage() {
  return (
    <div className={greeting}>
      <div>
        Professional <strong>&quot;Hello, World!&quot;</strong>:
      </div>
      <div>
        <em>Coming soon ...</em>
      </div>
    </div>
  );
}
