"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Close, Plus } from "./Icons";

/** Screenshot gallery; clicking an image opens it full-screen. */
export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className={`gallery gallery--${Math.min(images.length, 2)}`}>
        {images.map((src, i) => (
          <button key={src} className="gallery__item spot" onClick={() => setOpen(src)} aria-label={`Enlarge screenshot ${i + 1} of ${title}`}>
            <Image src={src} alt={`${title} — section ${i + 2}`} fill sizes="(min-width: 1024px) 620px, 100vw" />
            <span className="gallery__zoom" aria-hidden>
              <Plus />
            </span>
          </button>
        ))}
      </div>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} screenshot`} onClick={() => setOpen(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setOpen(null)}>
            <Close />
          </button>
          <div className="lightbox__img" onClick={(e) => e.stopPropagation()}>
            <Image src={open} alt={`${title} screenshot`} fill sizes="100vw" />
          </div>
        </div>
      )}
    </>
  );
}
