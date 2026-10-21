import { Compass, Medal, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

const cards = [
  {
    icon: Users,
    title: "For your people",
    text: "A certification built from honest, anonymous answers tells your team their voice actually shaped something — not just a survey that vanished into a spreadsheet.",
    red: false,
  },
  {
    icon: Compass,
    title: "For your leadership",
    text: "You get more than a score: a segment-by-segment map of exactly where to invest next, instead of guessing which culture initiative to fund.",
    red: true,
  },
  {
    icon: Medal,
    title: "For your employer brand",
    text: "A certificate earned through minimum bars across six segments carries more credibility with candidates than a single vanity number.",
    red: false,
  },
];

export function WhyMatters() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why this matters"
          title="A rating is only useful if it changes something."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="group h-full rounded-3xl bg-white p-8 ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)] hover:ring-transparent">
                <div
                  className={cn(
                    "grid h-14 w-14 place-items-center rounded-2xl transition duration-300",
                    c.red
                      ? "bg-crimson-50 text-crimson group-hover:bg-crimson group-hover:text-white"
                      : "bg-navy-50 text-navy group-hover:bg-navy group-hover:text-white"
                  )}
                >
                  <c.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const audience = [
  {
    pill: "If you lead people",
    red: false,
    statement: (
      <>
        You're the one who has to answer, <span className="text-crimson">"is it actually good here?"</span> — honestly,
        not in a townhall voice.
      </>
    ),
    sub: "IPTW gives you a real, defensible answer — and a plan for the next one.",
  },
  {
    pill: "If you're the founder or CEO",
    red: true,
    statement: (
      <>
        Your board, your investors, or your next hundred hires will eventually ask for{" "}
        <span className="text-navy">proof, not a vibe.</span>
      </>
    ),
    sub: "A certification with a visible methodology is proof you can actually hand someone.",
  },
  {
    pill: "If you manage a team",
    red: false,
    statement: (
      <>
        You already know where the friction is.{" "}
        <span className="text-navy">This is the first time a survey will actually say so, out loud.</span>
      </>
    ),
    sub: 'The roadmap speaks in specifics, not "communication could be improved."',
  },
];

export function Audience() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="divide-y divide-slate-100">
          {audience.map((a, i) => (
            <Reveal key={a.pill} delay={i * 80}>
              <div className="group grid items-center gap-6 py-10 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-12">
                <div>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] ring-1",
                      a.red
                        ? "bg-crimson-50 text-crimson ring-crimson/10"
                        : "bg-navy-50 text-navy ring-navy/10"
                    )}
                  >
                    {a.pill}
                  </span>
                </div>
                <div>
                  <p className="max-w-3xl font-display text-2xl font-bold leading-snug text-ink transition group-hover:text-navy sm:text-3xl sm:leading-snug">
                    {a.statement}
                  </p>
                  <p className="mt-3 max-w-2xl text-slate-500">{a.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
