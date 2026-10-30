"use client";

import { useState } from "react";
import { bookingHref, site } from "@/content/site";

export default function BuildPaths() {
  const [index, setIndex] = useState(0);
  const path = site.buildPaths[index];

  return (
    <div className="paths">
      <div className="paths__tabs" role="tablist" aria-label="Project types">
        {site.buildPaths.map((p, i) => (
          <button
            key={p.title}
            role="tab"
            id={`path-tab-${i}`}
            aria-selected={i === index}
            aria-controls="path-panel"
            className={`paths__tab ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <span className="paths__label">{p.label}</span>
            <span className="paths__title">{p.title}</span>
          </button>
        ))}
      </div>

      <div className="paths__panel card" role="tabpanel" id="path-panel" aria-labelledby={`path-tab-${index}`} key={index}>
        <div className="paths__top">
          <div>
            <h3>{path.title}</h3>
            <p className="paths__text">{path.text}</p>
          </div>
          <div className="paths__timeline">
            <span className="mini-label accent">Best for</span>
            <strong>{path.bestFor}</strong>
          </div>
        </div>

        <div className="paths__grid">
          <div>
            <span className="mini-label">Tech stack</span>
            <ul className="chips">
              {path.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="mini-label">Key features</span>
            <ul className="dots">
              {path.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="paths__foot">
          <div>
            <span className="mini-label">Pricing</span>
            <strong className="paths__price">{site.pricing}</strong>
          </div>
          <div className="paths__actions">
            <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Quote request: ${path.title}`)}`} className="btn btn--accent">
              Request Quote
            </a>
            <a href={bookingHref} className="btn btn--dark">
              Book Free Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
