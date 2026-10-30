import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  crumb: string;
  eyebrow: string;
  title: [string, string?];
  accent?: string;
  intro?: string;
  children?: ReactNode;
};

/** Shared header for inner pages: breadcrumb, big headline with a gold accent word, intro. */
export default function PageHero({ crumb, eyebrow, title, accent, intro, children }: Props) {
  const highlight = (line: string) => {
    if (!accent || !line.includes(accent)) return line;
    const [pre, ...post] = line.split(accent);
    return (
      <>
        {pre}
        <span className="grad">{accent}</span>
        {post.join(accent)}
      </>
    );
  };
  return (
    <section className="page-hero">
      <div className="bg-grid" aria-hidden />
      <div className="wrap page-hero__inner">
        <Reveal as="nav" className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <span aria-current="page">{crumb}</span>
        </Reveal>
        <Reveal delay={60}>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal as="h1" className="page-hero__title" delay={120}>
          <span>{highlight(title[0])}</span>
          {title[1] && <span>{highlight(title[1])}</span>}
        </Reveal>
        {intro && (
          <Reveal as="p" className="page-hero__intro" delay={180}>
            {intro}
          </Reveal>
        )}
        {children && <Reveal delay={240}>{children}</Reveal>}
      </div>
    </section>
  );
}
