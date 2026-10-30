import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import Reveal from "@/components/Reveal";
import BrowserFrame from "@/components/BrowserFrame";
import Gallery from "@/components/Gallery";
import ProjectCard from "@/components/ProjectCard";
import CtaBanner from "@/components/CtaBanner";
import { ArrowLeft, ArrowRight, ArrowUpRight, Icon } from "@/components/Icons";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return {
    title: `${p.title} — Case Study`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title: `${p.title} — Case Study`, description: p.summary, images: [p.cover] },
  };
}

export default async function CaseStudy({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);
  const more = related.length >= 2 ? related : [...related, ...projects.filter((p) => p.slug !== project.slug && !related.includes(p))].slice(0, 2);

  let step = 0;
  const num = () => String(++step).padStart(2, "0");

  const meta = [
    ["Client", project.title],
    ["Project type", project.projectType],
    ["Industry", project.industry],
    ["Location", project.location],
    ["Platform", project.platform],
    ["My role", project.role],
  ].filter((m): m is [string, string] => Boolean(m[1]));

  return (
    <article>
      <section className="cs-hero">
        <div className="bg-grid" aria-hidden />
        <div className="wrap">
          <Reveal as="nav" className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/work">Work</Link>
            <span aria-hidden>/</span>
            <span aria-current="page">{project.title}</span>
          </Reveal>
          <Reveal className="cs-hero__top" delay={60}>
            <span className="label">
              <b>{String(i + 1).padStart(2, "0")}</b>
              Case study · {project.category}
            </span>
            <ul className="chips">
              {project.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="h1" className="cs-hero__title" delay={120}>
            {project.title}
          </Reveal>
          <Reveal as="p" className="cs-hero__summary" delay={180}>
            {project.summary}
          </Reveal>
          <Reveal className="actions" delay={240}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Visit Live Website <ArrowUpRight />
            </a>
            <Link href="/contact" className="btn btn--dark">
              Start a Similar Project
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="wrap">
        <Reveal as="dl" className="cs-meta">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </Reveal>
        <Reveal className="cs-cover spot">
          <BrowserFrame src={project.cover} alt={`${project.title} homepage`} url={project.url} sizes="(min-width: 1280px) 1200px, 100vw" priority />
        </Reveal>
      </section>

      <section className="section">
        <div className="wrap cs-story">
          <Reveal className="cs-block">
            <span className="label">
              <b>{num()}</b>Project overview
            </span>
            <p>{project.brief}</p>
          </Reveal>
          <Reveal className="cs-block" delay={100}>
            <span className="label">
              <b>{num()}</b>What I built
            </span>
            <p>{project.approach}</p>
          </Reveal>
        </div>
      </section>

      {project.responsibilities ? (
        <section className="section section--alt">
          <div className="wrap">
            <Reveal className="head">
              <span className="label">
                <b>{num()}</b>Responsibilities
              </span>
              <h2 className="h2">
                My key <span className="grad">contributions</span>
              </h2>
            </Reveal>
            <div className="duties">
              {project.responsibilities.map((r, n) => (
                <Reveal key={r.title} className="duty spot" delay={(n % 3) * 80}>
                  <span className="highlight__num">{String(n + 1).padStart(2, "0")}</span>
                  <h3>{r.title}</h3>
                  <ul className="checks">
                    {r.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section section--alt">
          <div className="wrap">
            <Reveal className="head">
              <span className="label">
                <b>{num()}</b>Key highlights
              </span>
              <h2 className="h2">
                What makes it <span className="grad">work</span>
              </h2>
            </Reveal>
            <div className="highlights">
              {project.highlights.map((h, n) => (
                <Reveal key={h.title} className="highlight spot" delay={(n % 2) * 90}>
                  <span className="highlight__num">0{n + 1}</span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.tech && (
        <section className="section">
          <div className="wrap cs-tech">
            <Reveal>
              <span className="label">
                <b>{num()}</b>Skills & technologies
              </span>
              <h2 className="h2">
                Under the <span className="grad">hood</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              {project.specialization && (
                <>
                  <span className="mini-label accent">Specialisation</span>
                  <ul className="chips chips--accent">
                    {project.specialization.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <span className="mini-label" style={{ marginTop: 28 }}>
                Technical skills
              </span>
              <ul className="chips">
                {project.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {project.gallery.length > 0 && (
        <section className="section">
          <div className="wrap">
            <Reveal className="head head--row">
              <div>
                <span className="label">
                  <b>{num()}</b>Gallery
                </span>
                <h2 className="h2">
                  Inside the <span className="grad">website</span>
                </h2>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-accent">
                Explore the live site <ArrowUpRight />
              </a>
            </Reveal>
            <Reveal>
              <Gallery images={project.gallery} title={project.title} />
            </Reveal>
          </div>
        </section>
      )}

      {project.outcome && (
        <section className="section section--alt">
          <div className="wrap cs-outcome">
            <Reveal>
              <span className="label">
                <b>{num()}</b>Project outcome
              </span>
              <h2 className="h2">
                The <span className="grad">result</span>
              </h2>
              <p className="cs-outcome__text">{project.outcome}</p>
            </Reveal>
            {project.achievement && (
              <Reveal className="achievement spot" delay={120}>
                <span className="icon-tile">
                  <Icon name="award" />
                </span>
                <span className="mini-label accent">Key achievement</span>
                <p>{project.achievement}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--block">
                  See it live <ArrowUpRight />
                </a>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <section className="wrap">
        <nav className="pager" aria-label="More case studies">
          <Link href={`/work/${prev.slug}`} className="pager__link spot">
            <span className="mini-label">
              <ArrowLeft size={14} /> Previous project
            </span>
            <strong>{prev.title}</strong>
          </Link>
          <Link href={`/work/${next.slug}`} className="pager__link pager__link--next spot">
            <span className="mini-label">
              Next project <ArrowRight size={14} />
            </span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="head head--row">
            <h2 className="h2">
              More <span className="grad">projects</span>
            </h2>
            <Link href="/work" className="link-accent">
              View all work <ArrowUpRight />
            </Link>
          </Reveal>
          <div className="featured-grid">
            {more.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} index={projects.indexOf(p)} large />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Want a website like" accent={`${project.title}?`} />
    </article>
  );
}
