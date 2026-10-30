import type { Metadata } from "next";
import Link from "next/link";
import { bookingHref, phoneHref, site, whatsappHref } from "@/content/site";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { ArrowUpRight, Icon, WhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hire Anita Sharma for WordPress & WooCommerce development — send a message, book a free call or hire on Upwork."
};

export default function ContactPage() {
  const channels = [
    { icon: <Icon name="mail" size={22} />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <Icon name="phone" size={22} />, label: "Phone", value: site.phone, href: phoneHref },
    { icon: <WhatsApp size={22} />, label: "WhatsApp", value: site.phone, href: whatsappHref, external: true },
    { icon: <Icon name="calendar" size={22} />, label: "Free call", value: "Book a 30-minute call", href: bookingHref },
    { icon: <Icon name="award" size={22} />, label: "Upwork · Top Rated", value: "Hire me on Upwork", href: site.upworkUrl, external: true },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title={["Let's discuss your", "WordPress project."]}
        accent="WordPress"
        intro="Tell me about your requirements — custom functionality, integrations, a marketplace or a site that needs fixing — and I'll suggest the best technical approach."
      />

      <section className="section section--tight">
        <div className="wrap contact">
          <div className="contact__side">
            {channels.map((c, i) => {
              const props = c.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
              const inner = (
                <>
                  <span className="icon-tile">{c.icon}</span>
                  <span className="contact__text">
                    <span className="mini-label">{c.label}</span>
                    <b>{c.value}</b>
                  </span>
                  <ArrowUpRight />
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 70}>
                  {c.href.startsWith("/") && !c.href.startsWith("//") ? (
                    <Link href={c.href} className="channel spot">
                      {inner}
                    </Link>
                  ) : (
                    <a href={c.href} className="channel spot" {...props}>
                      {inner}
                    </a>
                  )}
                </Reveal>
              );
            })}
            <Reveal className="contact__info" delay={320}>
              <div>
                <Icon name="clock" size={18} /> {site.responseTime}
              </div>
              <div>
                <Icon name="map" size={18} /> {site.location}
              </div>
              <div>
                <Icon name="mail" size={18} /> {site.languages}
              </div>
              <div>
                <span className="badge__dot" aria-hidden /> Available for new projects
              </div>
            </Reveal>
          </div>

          <Reveal className="contact__form spot" delay={120}>
            <h2>Start your project</h2>
            <p>Fill in the form — it takes less than a minute.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap faq-wrap">
          <SectionHead
            label="FAQ"
            title={
              <>
                Before you <span className="grad">ask</span>
              </>
            }
            sub="Quick answers to the questions clients ask most."
          />
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>
    </>
  );
}
