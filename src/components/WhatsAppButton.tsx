"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/content/site";
import { WhatsApp } from "./Icons";

/** Floating WhatsApp button: a labelled pill at the top of the page, a compact circle once scrolling. */
export default function WhatsAppButton() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp ${compact ? "is-compact" : ""}`}
      aria-label="Chat on WhatsApp"
    >
      <WhatsApp size={26} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
