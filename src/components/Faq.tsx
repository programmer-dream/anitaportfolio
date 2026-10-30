import { site } from "@/content/site";
import { Plus } from "./Icons";

export default function Faq() {
  return (
    <div className="faq">
      {site.faqs.map((f, i) => (
        <details key={f.q} className="faq__item" open={i === 0}>
          <summary>
            <span>{f.q}</span>
            <span className="faq__icon" aria-hidden>
              <Plus />
            </span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
