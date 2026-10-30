import Link from "next/link";
import { bookingHref, site } from "@/content/site";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export default function CtaBanner({ title = "Have a project in", accent = "mind?" }: { title?: string; accent?: string }) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="cta spot">
          <div className="bg-grid" aria-hidden />
          <span className="label">
            <b>✦</b>Let&apos;s work together
          </span>
          <h2 className="cta__title">
            {title} <span className="grad">{accent}</span>
          </h2>
          <p>Tell me what you need built, customised or fixed. I&apos;ll review the requirements and suggest the best technical approach.</p>
          <div className="actions actions--center">
            <Link href={bookingHref} className="btn btn--accent">
              Book Free Call <ArrowRight />
            </Link>
            <a href={`mailto:${site.email}`} className="btn btn--dark">
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
