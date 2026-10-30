import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = { num?: string; label: string; title: ReactNode; sub?: string; center?: boolean; aside?: ReactNode };

/** Section heading: numbered label, large title, optional subtitle and right-hand action. */
export default function SectionHead({ num, label, title, sub, center, aside }: Props) {
  return (
    <Reveal className={`head ${center ? "head--center" : ""} ${aside ? "head--row" : ""}`}>
      <div>
        <span className="label">
          {num && <b>{num}</b>}
          {label}
        </span>
        <h2 className="h2">{title}</h2>
        {sub && <p className="sub">{sub}</p>}
      </div>
      {aside}
    </Reveal>
  );
}
