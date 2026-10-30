import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { portrait } from "@/lib/media";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import CtaBanner from "@/components/CtaBanner";
import { ArrowRight, toolMarks } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description: "Anita Sharma is a Top Rated WordPress & WooCommerce developer with 8+ years of experience in custom plugins, marketplaces, integrations and complex WooCommerce workflows.",
};

export default function AboutPage() {
  const a = site.about;
  const photo = portrait();
  const collage = projects.slice(0, 4);

  return (
    <>
      <PageHero crumb="About" eyebrow="About me" title={[a.headline[0], a.headline[1]]} accent={a.accent} intro={a.intro} />

      <section className="section section--tight">
        <div className="wrap about">
          <Reveal className="about__visual spot">
            {photo ? (
              <div className="about__photo">
                <Image src={photo} alt={`${site.firstName} ${site.lastName}`} fill sizes="(min-width: 1024px) 520px, 100vw" />
              </div>
            ) : (
              <div className="about__collage" aria-hidden>
                {collage.map((p) => (
                  <span key={p.slug}>
                    <Image src={p.cover} alt="" fill sizes="260px" />
                  </span>
                ))}
              </div>
            )}
            <div className="about__card">
              <span className="logo__mark">{site.initials}</span>
              <div>
                <b>
                  {site.firstName} {site.lastName}
                </b>
                <span>
                  {site.role} · {site.location}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="about__story">
            <Reveal as="span" className="label">
              <b>01</b>My story
            </Reveal>
            {a.story.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 80} className={i === 0 ? "about__lead" : undefined}>
                {para}
              </Reveal>
            ))}
            <Reveal className="about__stats" delay={200}>
              {site.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <strong className="grad">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={260}>
              <Link href="/contact" className="btn btn--accent">
                Work With Me <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap exp">
          <SectionHead num="02" label="Experience & education" title={<>8+ years of <span className="grad">building</span></>} sub="Computer applications graduate turned full-stack and WordPress specialist." />
          <ol className="timeline">
            {a.timeline.map((t, i) => (
              <Reveal as="li" key={t.period} className="timeline__item" delay={i * 80}>
                <span className="timeline__dot" aria-hidden />
                <span className="timeline__period">{t.period}</span>
                <h3>{t.title}</h3>
                <span className="timeline__place">{t.place}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead num="03" label="Toolkit" title={<>Skills &amp; <span className="grad">tools</span></>} center />
          <div className="skills">
            {Object.entries(site.skills).map(([group, items], i) => (
              <Reveal key={group} className="skills__group spot" delay={i * 90}>
                <h3>{group}</h3>
                <ul className="chips">
                  {items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal as="ul" className="tools">
            {site.tools.map((t) => (
              <li key={t} className="tools__item spot">
                <span className="tools__mark">{toolMarks[t]}</span>
                {t}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <SectionHead num="04" label="Values" title={<>How I <span className="grad">work</span></>} center />
          <div className="values">
            {a.values.map((v, i) => (
              <Reveal key={v.title} className="value spot" delay={i * 90}>
                <span className="value__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={site.industries} big />
      <CtaBanner title="Let's create something" accent="great." />
    </>
  );
}
