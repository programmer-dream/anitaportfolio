"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { ArrowRight, Check } from "./Icons";

const types = ["Custom plugin", "WooCommerce", "HivePress / marketplace", "Forms & integrations", "Fix or speed up my site", "New website", "Ongoing support"];
const budgets = ["Hourly", "Under $1k", "$1k – $3k", "$3k – $6k", "$6k+", "Not sure yet"];

/**
 * Sends to `site.formEndpoint` (e.g. Formspree) when configured,
 * otherwise opens the visitor's email app with everything pre-filled.
 */
export default function ContactForm() {
  const [type, setType] = useState(types[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("project", type);
    data.set("budget", budget);

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error();
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [`Name: ${get("name")}`, `Email: ${get("email")}`, `Company / website: ${get("company")}`, `Project: ${type}`, `Budget: ${budget}`, "", get("message")].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`New project: ${type} — ${get("name")}`)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent" && site.formEndpoint) {
    return (
      <div className="form-done">
        <span className="icon-tile">
          <Check size={26} />
        </span>
        <h3>Thank you — message received!</h3>
        <p>I&apos;ll get back to you within 24 hours with next steps.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label className="field">
          <span>Your name *</span>
          <input name="name" autoComplete="name" required placeholder="Jane Cooper" />
        </label>
        <label className="field">
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="jane@company.com" />
        </label>
      </div>
      <label className="field">
        <span>Company or current website</span>
        <input name="company" placeholder="company.com" />
      </label>

      <fieldset className="field">
        <legend>What do you need?</legend>
        <div className="pills">
          {types.map((t) => (
            <button type="button" key={t} className={`pill ${type === t ? "is-active" : ""}`} aria-pressed={type === t} onClick={() => setType(t)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="field">
        <legend>Budget</legend>
        <div className="pills">
          {budgets.map((b) => (
            <button type="button" key={b} className={`pill ${budget === b ? "is-active" : ""}`} aria-pressed={budget === b} onClick={() => setBudget(b)}>
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="field">
        <span>Tell me about your project *</span>
        <textarea name="message" required rows={5} placeholder="What do you need built or fixed? Current setup, plugins, deadlines…" />
      </label>

      <button type="submit" className="btn btn--accent btn--block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"} <ArrowRight />
      </button>
      <p className="form__note" role="status">
        {status === "error"
          ? `Something went wrong — please email ${site.email} directly.`
          : status === "sent"
            ? "Your email app should open now — thank you!"
            : "I reply to every message within 24 hours. No spam, ever."}
      </p>
    </form>
  );
}
