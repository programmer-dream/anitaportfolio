import Link from "next/link";
import { bookingHref, phoneHref, site, whatsappHref } from "@/content/site";
import { projects } from "@/content/projects";
import { ArrowUpRight } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cta">
          <p className="footer__big">
            Let&apos;s build something <span className="grad">remarkable.</span>
          </p>
          <Link href={bookingHref} className="footer__circle spot" aria-label="Book a free call">
            <span>
              Book a<br />free call
            </span>
            <ArrowUpRight size={28} />
          </Link>
        </div>

        <div className="footer__grid">
          <div>
            <Link href="/" className="logo">
              <span className="logo__mark">{site.initials}</span>
              <span className="logo__text">
                {site.firstName.toUpperCase()} <span>{site.lastName.toUpperCase()}</span>
              </span>
            </Link>
            <p>Top Rated {site.role} with 8+ years of experience building custom plugins, stores, marketplaces and integrations.</p>
            <a href={`mailto:${site.email}`} className="footer__email">
              {site.email}
            </a>
            <a href={phoneHref} className="footer__phone">
              {site.phone}
            </a>
          </div>
          <div>
            <h3>Pages</h3>
            <ul>
              {site.nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {site.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Recent work</h3>
            <ul>
              {projects.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {site.phone}
                </a>
              </li>
              <li>
                <a href={site.upworkUrl} target="_blank" rel="noopener noreferrer">
                  Upwork
                </a>
              </li>
              {site.linkedinUrl && (
                <li>
                  <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.firstName} {site.lastName}. All rights reserved.
          </span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
