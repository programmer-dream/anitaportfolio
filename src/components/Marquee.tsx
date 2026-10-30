/** Endless horizontal ticker; the list is rendered twice so the loop is seamless. */
export default function Marquee({ items, big = false }: { items: readonly string[]; big?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee ${big ? "marquee--big" : ""}`} aria-hidden>
      <div className="marquee__track">
        {loop.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <svg viewBox="0 0 24 24" width="1em" height="1em" className="marquee__star">
              <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0Z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
