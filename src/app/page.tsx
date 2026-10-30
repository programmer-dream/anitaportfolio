import Image from "next/image";
import Link from "next/link";
import { bookingHref, site, whatsappHref } from "@/content/site";
import { getProject, projects } from "@/content/projects";
import { portrait } from "@/lib/media";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/ProjectCard";
import CtaBanner from "@/components/CtaBanner";
import { ArrowRight, ArrowUpRight, Icon, Star, WhatsApp, toolMarks } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={site.marquee} />
      <Stats />
      <Problems />
      <SelectedWork />
      <Why />
      <Services />
      <Process />
      <Testimonials />
      <Audit />
      <CtaBanner />
    </>
  );
}

/* ───────────── Hero ───────────── */

const orbit = [
  [0, -46],
  [32.5, -32.5],
  [46, 0],
  [32.5, 32.5],
  [0, 46],
  [-32.5, 32.5],
  [-46, 0],
  [-32.5, -32.5],
];

function Hero() {
  const h = site.hero;
  const photo = portrait();
  const shots = ["towit", "functionfindr", "photo-trips"].map((s) => getProject(s)!);
  const highlight = (line: string) => {
    if (!line.includes(h.accent)) return line;
    const [pre, ...post] = line.split(h.accent);
    return (
      <>
        {pre}
        <span className="grad">{h.accent}</span>
        {post.join(h.accent)}
      </>
    );
  };

  return (
    <section className="hero">
      <div className="bg-grid" aria-hidden />
      <div className="wrap hero__grid">
        <div>
          <Reveal>
            <span className="badge">
              <span className="badge__dot" aria-hidden /> Available for new projects
            </span>
          </Reveal>
          <Reveal as="h1" delay={80}>
            {h.lines.map((line) => (
              <span key={line}>{highlight(line)}</span>
            ))}
          </Reveal>
          <Reveal as="p" className="hero__intro" delay={160}>
            {h.intro}
          </Reveal>
          <Reveal className="actions" delay={240}>
            <Link href="/contact" className="btn btn--accent">
              Discuss Your Project <ArrowRight />
            </Link>
            <Link href="/work" className="btn btn--dark">
              Explore My Work
            </Link>
          </Reveal>
          <Reveal className="hero__proof" delay={320}>
            <div className="avatars" aria-hidden>
              {projects.slice(0, 4).map((p) => (
                <span key={p.slug}>
                  <Image src={p.cover} alt="" width={44} height={44} />
                </span>
              ))}
            </div>
            <div>
              <div className="hero__stars" aria-label="5-star client reviews">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} />
                ))}
                <b>Top Rated · 100% Job Success</b>
              </div>
              <a href={site.upworkUrl} target="_blank" rel="noopener noreferrer" className="hero__upwork">
                74 Upwork jobs · 2,416 hours delivered <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="orbit" delay={200}>
          <div className="orbit__ring" />
          <div className="orbit__ring orbit__ring--inner" />
          <div className="orbit__center">
            {photo ? (
              <div className="portrait">
                <Image src={photo} alt={`${site.firstName} ${site.lastName}`} fill sizes="420px" priority />
              </div>
            ) : (
              shots.map((p, i) => (
                <div key={p.slug} className={`shot shot--${["back", "mid", "front"][i]}`}>
                  <div className="shot__bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="shot__img">
                    <Image src={p.cover} alt={i === 2 ? `${p.title} website` : ""} fill sizes="380px" priority={i === 2} />
                  </div>
                </div>
              ))
            )}
          </div>
          {site.tools.map((tool, i) => (
            <span
              key={tool}
              className="orbit__tool"
              title={tool}
              style={{ "--x": `${orbit[i][0]}%`, "--y": `${orbit[i][1]}%`, "--d": `${i * -0.7}s` } as React.CSSProperties}
            >
              {toolMarks[tool]}
              <span className="sr-only">{tool}</span>
            </span>
          ))}
          <div className="float-card float-card--a">
            <span className="icon-tile icon-tile--sm">
              <Icon name="award" size={18} />
            </span>
            <div>
              <b>8+ Years</b>
              <span>WordPress &amp; WooCommerce</span>
            </div>
          </div>
          <div className="float-card float-card--b">
            <span className="icon-tile icon-tile--sm">
              <Icon name="zap" size={18} />
            </span>
            <div>
              <b>Clean Custom Code</b>
              <span>Secure &amp; easy to extend</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── Stats ───────────── */

function Stats() {
  return (
    <section className="stats-band">
      <div className="wrap stats-band__grid">
        {site.stats.map((s, i) => (
          <Reveal key={s.label} className="stat-big" delay={i * 80}>
            <strong className="grad">
              <CountUp value={s.value} suffix={s.suffix} />
            </strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────── Problems ───────────── */

function Problems() {
  return (
    <section className="section">
      <div className="wrap problems">
        <SectionHead
          label="Sound familiar?"
          title={
            <>
              Problems I <span className="grad">love</span> solving
            </>
          }
          sub="I'm most useful when a project goes beyond standard plugin configuration. If you've said one of these, we should talk."
          aside={
            <Link href="/contact" className="btn btn--accent">
              Tell me yours <ArrowRight />
            </Link>
          }
        />
        <ul className="problems__list">
          {site.problems.map((p, i) => (
            <Reveal as="li" key={p} className="problem spot" delay={(i % 3) * 80}>
              <span className="problem__arrow" aria-hidden>
                →
              </span>
              <p>“{p}”</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────── Work ───────────── */

function SelectedWork() {
  const featured = ["functionfindr", "photo-trips", "towit", "gradeschools"].map((s) => getProject(s)!);
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          num="01"
          label="Selected work"
          title={
            <>
              Recent <span className="grad">Projects</span>
            </>
          }
          sub="Live WordPress and WooCommerce websites for real businesses across healthcare, training, travel and e-commerce."
          aside={
            <Link href="/work" className="link-accent">
              View all {projects.length} projects <ArrowUpRight />
            </Link>
          }
        />
        <div className="featured-grid">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <ProjectCard project={p} index={projects.indexOf(p)} large />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Why ───────────── */

function Why() {
  const [first, ...rest] = site.why;
  const collage = projects.slice(4, 7);
  return (
    <section className="section section--alt">
      <div className="wrap">
        <SectionHead
          num="02"
          label="Why work with me"
          title={
            <>
              Reliable code. <span className="grad">Zero guesswork.</span>
            </>
          }
          center
        />
        <div className="bento">
          <Reveal className="bento__tile bento__tile--hero spot">
            <div className="bento__collage" aria-hidden>
              {collage.map((p) => (
                <span key={p.slug}>
                  <Image src={p.cover} alt="" fill sizes="300px" />
                </span>
              ))}
            </div>
            <span className="icon-tile">
              <Icon name={first.icon} />
            </span>
            <h3>{first.title}</h3>
            <p>{first.text}</p>
          </Reveal>
          {rest.map((w, i) => (
            <Reveal key={w.title} className="bento__tile spot" delay={(i % 3) * 80}>
              <span className="icon-tile">
                <Icon name={w.icon} />
              </span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Services ───────────── */

function Services() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          num="03"
          label="Services"
          title={
            <>
              What I <span className="grad">build</span>
            </>
          }
          sub="WordPress and WooCommerce development for projects that go beyond standard plugin configuration."
          aside={
            <Link href="/services" className="link-accent">
              Explore all services <ArrowUpRight />
            </Link>
          }
        />
        <div className="svc-grid">
          {site.services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 80}>
              <Link href={`/services#${s.slug}`} className="svc spot">
                <span className="svc__num">0{i + 1}</span>
                <span className="icon-tile">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="svc__foot">
                  <span>{s.tech}</span>
                  <strong>
                    <ArrowUpRight size={18} />
                  </strong>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Process ───────────── */

function Process() {
  return (
    <section className="section section--alt">
      <div className="wrap">
        <SectionHead
          num="04"
          label="Process"
          title={
            <>
              How I <span className="grad">work</span>
            </>
          }
          sub="Good development starts with understanding the business requirement — not immediately writing code."
          center
        />
        <ol className="steps">
          {site.process.map((s, i) => (
            <Reveal as="li" key={s.title} className="steps__item spot" delay={i * 100}>
              <span className="steps__num">0{i + 1}</span>
              <span className="icon-tile">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────── Testimonials ───────────── */

function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          num="05"
          label="Client reviews"
          title={
            <>
              What clients <span className="grad">say</span>
            </>
          }
          sub="Genuine 5-star reviews from Upwork clients."
          center
        />
        <div className="quotes">
          {site.testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              <figure className="quote spot">
                <span className="quote__mark" aria-hidden>
                  “
                </span>
                <div className="quote__stars" aria-label="Rated 5 out of 5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={15} />
                  ))}
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="quote__avatar" aria-hidden>
                    Up
                  </span>
                  <span>
                    <span className="quote__name">Verified Upwork client</span>
                    <span className="quote__role">{t.project}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="insights">
          <span className="mini-label">What clients highlight most on Upwork</span>
          <ul>
            {site.insights.map((x) => (
              <li key={x.label}>
                {x.label}
                <b>×{x.count}</b>
              </li>
            ))}
          </ul>
          <a href={site.upworkUrl} target="_blank" rel="noopener noreferrer" className="link-accent">
            Read all reviews on Upwork <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── Audit ───────────── */

function Audit() {
  const a = site.audit;
  const [pre, ...post] = a.title[1].split(a.accent);
  return (
    <section className="section section--alt">
      <div className="wrap audit">
        <Reveal>
          <span className="label">
            <b>06</b>
            {a.eyebrow}
          </span>
          <h2 className="h2">
            <span className="block">{a.title[0]}</span>
            <span className="block">
              {pre}
              <span className="grad">{a.accent}</span>
              {post.join(a.accent)}
            </span>
          </h2>
          <p className="audit__text">
            {a.text} <strong>{a.strong}</strong>
          </p>
          <ul className="audit__items">
            {a.items.map((item) => (
              <li key={item.title} className="audit__item">
                <span className="icon-tile icon-tile--sm">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="audit-card spot">
            <span className="audit-card__badge">{a.card.badge}</span>
            <h3>{a.card.title}</h3>
            <p>{a.card.text}</p>
            <ul className="checks">
              {a.card.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="audit-card__actions">
              <Link href={bookingHref} className="btn btn--accent btn--block">
                Book My Free Audit <ArrowRight />
              </Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn--dark btn--block">
                <WhatsApp size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
