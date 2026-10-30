import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const [name, role, tail] = site.hero.lines;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "radial-gradient(circle at 80% 40%, #3a2a0c 0%, #0c0a08 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "8px 18px",
            borderRadius: 999,
            border: "1px solid rgba(245,184,61,.5)",
            color: "#f5b83d",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {site.hero.badge}
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 36, fontSize: 92, fontWeight: 900, lineHeight: 1, letterSpacing: -4 }}>
          <span>{name}</span>
          <span style={{ color: "#f5b83d" }}>{role}</span>
          <span>{tail}</span>
        </div>
      </div>
    ),
    size,
  );
}
