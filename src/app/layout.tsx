import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";
import { site } from "@/content/site";
import { portrait } from "@/lib/media";
import "./globals.css";

const fullName = `${site.firstName} ${site.lastName}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: site.seo.title, template: `%s | ${site.firstName} ${site.lastName}` },
  description: site.seo.description,
  authors: [{ name: fullName }],
  creator: fullName,
  openGraph: {
    type: "website",
    url: "/",
    siteName: fullName,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0c0a08" };

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  telephone: site.phone.replace(/\s/g, ""),
  url: site.siteUrl,
  sameAs: [site.upworkUrl, site.linkedinUrl].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Spotlight />
        <Navbar portrait={portrait()} />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
