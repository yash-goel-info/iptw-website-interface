import { ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const cards = [
  {
    emoji: "🏅",
    title: "A verifiable certificate",
    text: "Publicly verifiable, backed by an analyst review — not just a downloadable image.",
  },
  {
    emoji: "📊",
    title: "A segment-by-segment report",
    text: "See exactly which of the six areas is strong, and which is quietly costing you people.",
  },
  {
    emoji: "🗺️",
    title: "A prioritized roadmap",
    text: "Backed by published workplace research, not generic HR platitudes.",
  },
];

const steps = [
  {
    n: "01",
    title: "How it actually works",
    text: "From your first click to the certificate in your inbox.",
    link: "Read the process",
    href: "#/how-it-works",
  },
  {
    n: "02",
    title: "What we certify",
    text: "Six segments, a published methodology, and star tiers that mean something.",
    link: "Explore it",
    href: "#walkaway",
  },
  {
    n: "03",
    title: "Who's already in",
    text: "An honest look at our founding cohort, early or not.",
    link: "See our clients",
    href: "#cta",
  },
  {
    n: "04",
    title: "Why we built it differently",
    text: "How the industry standard works today, and why we didn't copy it.",
    link: "See the comparison",
    href: "#cost",
  },
];

export default function WalkAway() {
  return (
    <section id="walkaway" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div className="bg-grid-light absolute inset-0" />
      <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-navy blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-crimson/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light">What you actually walk away with</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]">
            Not a badge. <span className="text-crimson-100">A diagnosis, a fix, and proof.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="group h-full rounded-3xl bg-white/[0.06] p-8 ring-1 ring-white/10 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/[0.1] hover:ring-white/20">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-2xl shadow-lg transition duration-300 group-hover:scale-110">
                  {c.emoji}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <a
            href="#cta"
            className="group mt-10 inline-flex items-center gap-2 font-semibold text-crimson-100 transition hover:text-white"
          >
            See exactly what your certificate looks like
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section id="how" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <a
                href={s.href}
                className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(15,26,64,0.10)] hover:ring-transparent"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-50 font-display text-xs font-extrabold text-navy transition group-hover:bg-navy group-hover:text-white">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
                  {s.link}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
