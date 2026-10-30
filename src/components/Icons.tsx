import type { IconName } from "@/content/site";

type P = { size?: number; className?: string };

const stroke = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowRight = ({ size = 18 }: P) => (
  <svg {...stroke(size)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ size = 16 }: P) => (
  <svg {...stroke(size)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowLeft = ({ size = 18 }: P) => (
  <svg {...stroke(size)}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const Plus = ({ size = 18 }: P) => (
  <svg {...stroke(size)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Check = ({ size = 16 }: P) => (
  <svg {...stroke(size)}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const Star = ({ size = 14 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
  </svg>
);

export const Menu = ({ size = 22 }: P) => (
  <svg {...stroke(size)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ size = 22 }: P) => (
  <svg {...stroke(size)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const WhatsApp = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.66 15l-1.3 4.76 4.88-1.28A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.9.76.78-2.83-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.17 3.69c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

const paths: Record<IconName, React.ReactNode> = {
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  layers: (
    <>
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  pen: (
    <>
      <path d="M15.7 21.3a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l5.6-5.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4z" />
      <path d="m18 13-1.4-6.9a1 1 0 0 0-.7-.8L3.2 2a1 1 0 0 0-1.2 1.2l3.3 12.7a1 1 0 0 0 .8.7L13 18M2.3 2.3l7.3 7.3" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  palette: (
    <>
      <path d="M12 22a10 10 0 1 1 10-10c0 2.5-2 3.5-4 3.5h-2a2 2 0 0 0-1.5 3.3c.6.7.2 3.2-2.5 3.2z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10.5" cy="7" r="1" />
      <circle cx="15.5" cy="8" r="1" />
    </>
  ),
  phone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  cart: (
    <>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </>
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
    </>
  ),
  zap: <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />,
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  map: (
    <>
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

export const Icon = ({ name, size = 24 }: P & { name: IconName }) => <svg {...stroke(size)}>{paths[name]}</svg>;

/* ───────── Design-tool marks for the hero orbit (simplified, not official artwork) ───────── */

const Tile = ({ bg, fg, text }: { bg: string; fg: string; text: string }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
    <rect width="24" height="24" rx="5" fill={bg} />
    <text x="12" y="16.2" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Inter, Arial, sans-serif" fill={fg}>
      {text}
    </text>
  </svg>
);

export const toolMarks: Record<string, React.ReactNode> = {
  Figma: (
    <svg viewBox="0 0 24 36" width="17" height="26" aria-hidden>
      <path d="M6 0h6v12H6A6 6 0 0 1 6 0z" fill="#F24E1E" />
      <path d="M12 0h6a6 6 0 0 1 0 12h-6z" fill="#FF7262" />
      <path d="M6 12h6v12H6a6 6 0 0 1 0-12z" fill="#A259FF" />
      <circle cx="18" cy="18" r="6" fill="#1ABCFE" />
      <path d="M6 24h6v6a6 6 0 1 1-6-6z" fill="#0ACF83" />
    </svg>
  ),
  "Adobe XD": <Tile bg="#470137" fg="#FF61F6" text="Xd" />,
  Photoshop: <Tile bg="#001E36" fg="#31A8FF" text="Ps" />,
  Illustrator: <Tile bg="#330000" fg="#FF9A00" text="Ai" />,
  WordPress: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <text x="12" y="16.6" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Georgia, serif" fill="#ffffff">
        W
      </text>
    </svg>
  ),
  Elementor: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#92003B" />
      <rect x="7.5" y="7" width="2" height="10" fill="#fff" />
      <rect x="11" y="7" width="5.5" height="2" fill="#fff" />
      <rect x="11" y="11" width="5.5" height="2" fill="#fff" />
      <rect x="11" y="15" width="5.5" height="2" fill="#fff" />
    </svg>
  ),
  Webflow: <Tile bg="#146EF5" fg="#ffffff" text="W" />,
  Shopify: <Tile bg="#5E8E3E" fg="#ffffff" text="S" />,
  WooCommerce: (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <rect y="4" width="24" height="15" rx="4" fill="#7F54B3" />
      <path d="M8 23l2-4h-5z" fill="#7F54B3" />
      <text x="12" y="15.2" textAnchor="middle" fontSize="7.4" fontWeight="800" fontFamily="Inter, Arial, sans-serif" fill="#fff">Woo</text>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
      <ellipse cx="12" cy="12" rx="12" ry="7.5" fill="#777BB4" />
      <text x="12" y="14.8" textAnchor="middle" fontSize="7.6" fontWeight="800" fontStyle="italic" fontFamily="Inter, Arial, sans-serif" fill="#fff">php</text>
    </svg>
  ),
  React: (
    <svg viewBox="-12 -11 24 22" width="26" height="26" aria-hidden>
      <circle r="2.1" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.1">
        <ellipse rx="10" ry="4" />
        <ellipse rx="10" ry="4" transform="rotate(60)" />
        <ellipse rx="10" ry="4" transform="rotate(120)" />
      </g>
    </svg>
  ),
  "Gravity Forms": (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path d="M12 1.5 21.5 7v10L12 22.5 2.5 17V7z" fill="#F15A2B" />
      <text x="12" y="15.4" textAnchor="middle" fontSize="8.4" fontWeight="800" fontFamily="Inter, Arial, sans-serif" fill="#fff">GF</text>
    </svg>
  ),
  Stripe: <Tile bg="#635BFF" fg="#ffffff" text="S" />,
  Laravel: <Tile bg="#FF2D20" fg="#ffffff" text="L" />,
};
