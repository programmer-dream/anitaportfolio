"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { bookingHref, site } from "@/content/site";
import { Close, Menu } from "./Icons";

export default function Navbar({ portrait }: { portrait: string | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav" aria-label="Main">
        <Link href="/" className="logo" aria-label={`${site.firstName} ${site.lastName} — home`}>
          <span className="logo__mark">{site.initials}</span>
          <span className="logo__text">
            {site.firstName.toUpperCase()} <span>{site.lastName.toUpperCase()}</span>
          </span>
        </Link>

        <ul className="nav__links">
          {site.nav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(l.href) ? "is-active" : undefined} aria-current={isActive(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav__right">
          <Link href={bookingHref} className="btn btn--accent btn--sm nav__cta">
            Book Free Call
          </Link>
          <span className="nav__avatar" aria-hidden>
            {portrait ? <Image src={portrait} alt="" width={40} height={40} /> : site.initials}
          </span>
          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        {site.nav.map((l, i) => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? "is-active" : undefined}>
            <span className="mobile-menu__num">0{i + 1}</span>
            {l.label}
          </Link>
        ))}
        <Link href={bookingHref} className="btn btn--accent">
          Book Free Call
        </Link>
      </div>
    </header>
  );
}
