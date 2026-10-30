import type { Metadata } from "next";
import Link from "next/link";
import { bookingHref, site } from "@/content/site";
import { getProject } from "@/content/projects";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import BuildPaths from "@/components/BuildPaths";
import BrowserFrame from "@/components/BrowserFrame";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import { ArrowRight, ArrowUpRight, Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Custom WordPress plugins, WooCommerce development, HivePress & BuddyBoss marketplaces, Gravity Forms automation and API integrations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Services & Pricing"
        title={["WordPress solutions", "built to last."]}
        accent="built to last."
        intro="Custom development for when standard plugins aren't enough — clean, reliable, secure and easy to extend. Fixed price or hourly, whichever suits your project."
      >
        <div className="hero-chips">
          {site.services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="hero-chip">
              <Icon name={s.icon} size={16} /> {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section section--tight">
        <div className="wrap svc-detail-list">
          {site.services.map((s, i) => {
            const example = getProject(s.example)!;
            return (
              <Reveal as="article" key={s.slug} id={s.slug} className={`svc-detail ${i % 2 ? "svc-detail--flip" : ""}`}>
                <div className="svc-detail__text">
                  <span className="svc-detail__num">0{i + 1}</span>
                  <span className="icon-tile">
                    <Icon name={s.icon} />
                  </span>
                  <h2>{s.title}</h2>
                  <p className="svc-detail__lead">{s.text}</p>
                  <ul className="checks checks--grid">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="svc-detail__meta">
                    <div>
                      <span className="mini-label">Core tech</span>
                      <strong>{s.tech}</strong>
                    </div>
                    <div>
                      <span className="mini-label accent">Pricing</span>
                      <strong className="grad">Fixed or hourly</strong>
                    </div>
                  </div>
                  <div className="actions">
                    <Link href="/contact" className="btn btn--accent">
                      Get a Quote <ArrowRight />
                    </Link>
                    <Link href={bookingHref} className="btn btn--dark">
                      Book Free Call
                    </Link>
                  </div>
                </div>
                <div className="svc-detail__visual spot">
                  <BrowserFrame src={example.cover} alt={`${example.title} — ${s.title} example`} url={example.url} sizes="(min-width: 1024px) 560px, 100vw" />
                  <Link href={`/work/${example.slug}`} className="svc-detail__caption">
                    <span>
                      <span className="mini-label">Example project</span>
                      <b>{example.title}</b>
                    </span>
                    <ArrowUpRight />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <SectionHead
            label="How we can work"
            title="Choose Your Path"
            sub="Whether you're starting fresh, need something custom, or need an existing site fixed."
            center
          />
          <Reveal>
            <BuildPaths />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap included">
          <SectionHead
            label="Every project"
            title={
              <>
                Included as <span className="grad">standard</span>
              </>
            }
            sub="The way every project is handled — big or small."
          />
          <Reveal as="ul" className="included__grid">
            {site.included.map((item, i) => (
              <li key={item} className="included__item spot">
                <span className="included__num">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap faq-wrap">
          <SectionHead
            label="FAQ"
            title={
              <>
                Questions, <span className="grad">answered</span>
              </>
            }
            sub="Can't find what you're looking for? Send me a message — I usually reply within a few hours."
          />
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Have a WordPress challenge" accent="for me?" />
    </>
  );
}
