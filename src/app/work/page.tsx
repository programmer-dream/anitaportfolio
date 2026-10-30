import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import Marquee from "@/components/Marquee";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: "WordPress and WooCommerce projects by Anita Sharma — healthcare, training, travel, marketplaces, e-commerce and more.",
};

export default function WorkPage() {
  const industries = new Set(projects.map((p) => p.industry)).size;
  return (
    <>
      <PageHero
        crumb="Work"
        eyebrow="Portfolio"
        title={["Selected work &", "case studies."]}
        accent="case studies."
        intro="Live WordPress and WooCommerce websites for real businesses — healthcare, training, travel, education, marketplaces and e-commerce. Click any project for the full story."
      >
        <dl className="hero-stats">
          <div>
            <dt>Live projects</dt>
            <dd className="grad">{String(projects.length).padStart(2, "0")}</dd>
          </div>
          <div>
            <dt>Industries</dt>
            <dd className="grad">{String(industries).padStart(2, "0")}</dd>
          </div>
          <div>
            <dt>Years of experience</dt>
            <dd className="grad">8+</dd>
          </div>
        </dl>
      </PageHero>

      <section className="section section--tight">
        <div className="wrap">
          <WorkGrid />
        </div>
      </section>

      <Marquee items={site.industries} big />
      <CtaBanner title="Want results like these for your" accent="business?" />
    </>
  );
}
