import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { Reveal } from "./ui";

const faqs = [
  {
    q: '"Is this just another survey nobody reads?"',
    a: "Every response is read by a human analyst before anything is issued — not just run through an algorithm.",
  },
  {
    q: '"What if our score isn\'t great?"',
    a: "Then you get a specific, segment-by-segment roadmap instead of a certificate — arguably more useful.",
  },
  {
    q: '"Do we need IT or procurement involved to try this?"',
    a: "No. The free self-check needs nothing but your own answers — no setup, no approval chain.",
  },
];

export function FaqPreview() {
  return (
    <section id="faq" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Before you start, the honest answers</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 100}>
              <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(15,26,64,0.10)] hover:ring-transparent">
                <p className="font-display text-lg font-bold leading-snug text-ink">{f.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <a
            href="#cta"
            className="group mt-10 inline-flex items-center gap-2 font-semibold text-navy transition hover:text-crimson"
          >
            See the full FAQ
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="cta" className="px-5 pb-24 pt-4 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-navy-700 to-navy-900 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="bg-grid-light absolute inset-0" />
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-crimson/40 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-crimson/30 blur-[100px]" />
          <div className="animate-spin-slow absolute -right-16 -top-16 h-56 w-56 rounded-full border-2 border-dashed border-white/10" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Ready to find out where you <span className="text-crimson-100">actually stand?</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group inline-flex items-center gap-2 rounded-full bg-crimson px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-crimson/30 transition hover:bg-crimson-700"
              >
                Start your free assessment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#group"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 bg-white/5 px-8 py-[14px] text-[15px] font-bold text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10"
              >
                Talk to our team instead
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const footerCols = [
  {
    h: "Product",
    links: [
      ["How it works", "/how-it-works"],
      ["Certification", "/certification"],
      ["Compare", "/compare"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    h: "Company",
    links: [
      ["About", "/about"],
      ["Clients", "/clients"],
      ["Talk to our team", "#cta"],
    ],
  },
  {
    h: "Resources",
    links: [
      ["FAQ", "/faq"],
      ["Verify certification", "/certification"],
      ["Sign in", "#cta"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-16">
              <Logo />
            </div>
            <div>
              <p className="font-display text-xl font-extrabold tracking-tight text-navy">IPTW</p>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                An Infomerics Group Company
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
            A published, floor-checked workplace certification — built with the same rigor as a credit rating.
          </p>
        </div>

        {footerCols.map((c) => (
          <div key={c.h}>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-ink">{c.h}</p>
            <ul className="mt-5 space-y-3">
              {c.links.map(([t, href]) => {
                const cls = "group inline-flex items-center gap-1 text-sm text-slate-500 transition hover:text-navy";
                const icon = <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />;
                return (
                  <li key={t}>
                    {href.startsWith("/") ? (
                      <Link to={href} className={cls}>
                        {t}
                        {icon}
                      </Link>
                    ) : (
                      <a href={href} className={cls}>
                        {t}
                        {icon}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-slate-400 lg:px-8">
          © 2026 Infomerics Analytics &amp; Research Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
