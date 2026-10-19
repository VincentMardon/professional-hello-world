import { statusFrame } from "./StatusDisplay.css";

type StatusDisplayProps = {
  status: string;
};

export function StatusDisplay({ status }: StatusDisplayProps) {
  return (
    <p className={statusFrame} role="status">
      {status}
    </p>
  );
}
