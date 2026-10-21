import { ShieldCheck, Target, TrendingUp } from "lucide-react";
import { CtaBanner, PageHero } from "../components/shared";
import { Counter, Reveal, SectionHeading, useInView } from "../components/ui";
import { cn } from "../utils/cn";

const milestones = [
  { label: "1986", text: "Infomerics founded by finance professionals for research & risk evaluation." },
  { label: "Since", text: "SEBI-registered, RBI-accredited as an External Credit Assessment Institution." },
  { label: "Pan-India", text: "HQ in Delhi, corporate office in Mumbai, branches across major cities." },
  { label: "Nepal", text: "International rating operations through a joint-venture subsidiary." },
  { label: "2026", text: "That same discipline extended to workplace culture, as IPTW." },
];

const pillars = [
  {
    icon: Target,
    title: "Why we exist",
    text: "We spent decades building frameworks that let financial institutions trust each other's numbers. We think workplaces deserve the same rigor — a rating people can actually trust, not a badge anyone can buy.",
  },
  {
    icon: ShieldCheck,
    title: "What we bring from ratings",
    text: "Published methodology. Analyst review on every submission. Minimum bars that can't be averaged away. The same discipline that governs a credit rating, applied to workplace culture.",
  },
  {
    icon: TrendingUp,
    title: "Where we're headed",
    text: "From a single certification to a year-over-year benchmark — helping organizations track culture with the same seriousness they track financial performance.",
  },
];

function Milestone({ label, text, red, last, index }: { label: string; text: string; red: boolean; last: boolean; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  return (
    <div
      ref={ref}
      className={cn("reveal relative grid grid-cols-[56px_24px_1fr] gap-3 sm:grid-cols-[96px_28px_1fr] sm:gap-4", inView && "is-visible")}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <p
        className={cn(
          "pt-4 text-right font-display text-base font-extrabold sm:pt-5 sm:text-lg",
          red ? "text-crimson" : "text-navy"
        )}
      >
        {label}
      </p>
      <div className="relative flex justify-center">
        <span
          className={cn(
            "z-10 mt-5 h-4 w-4 rounded-full border-4 border-white shadow transition-all duration-500",
            inView ? (last ? "scale-125 bg-crimson" : "scale-125 bg-navy") : "bg-slate-300"
          )}
        />
      </div>
      <div
        className={cn(
          "rounded-3xl p-6 transition duration-300 hover:-translate-y-1 sm:p-7",
          last
            ? "bg-gradient-to-br from-navy via-navy-700 to-navy-900 text-white shadow-xl shadow-navy/25"
            : "bg-white ring-1 ring-slate-200/80 hover:shadow-[0_20px_45px_rgba(15,26,64,0.08)]"
        )}
      >
        <p className={cn("leading-relaxed", last ? "text-white/80" : "text-slate-600")}>{text}</p>
        {last && (
          <p className="mt-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-crimson-100">
            Ideal Place to Work™
          </p>
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About IPTW"
        title={
          <>
            Built by people who've assessed trust for <span className="text-gradient">four decades.</span>
          </>
        }
        sub="IPTW is a certification platform from Infomerics Analytics & Research Pvt. Ltd. — part of the Infomerics group, whose rating arm, Infomerics Rating, was founded in 1986 and is SEBI-registered and RBI-accredited."
      />

      {/* timeline */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="relative">
            <div className="absolute bottom-4 left-[68px] top-4 w-[3px] rounded-full bg-gradient-to-b from-navy/15 via-navy/25 to-crimson/40 sm:left-[110px]" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <Milestone
                  key={m.label}
                  label={m.label}
                  text={m.text}
                  red={i % 2 === 1}
                  last={i === milestones.length - 1}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* three pillars */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group h-full rounded-3xl bg-white p-8 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)] hover:ring-transparent">
                  <div
                    className={cn(
                      "grid h-14 w-14 place-items-center rounded-2xl transition duration-300",
                      i % 2
                        ? "bg-crimson-50 text-crimson group-hover:bg-crimson group-hover:text-white"
                        : "bg-navy-50 text-navy group-hover:bg-navy group-hover:text-white"
                    )}
                  >
                    <p.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* by the numbers */}
      <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
        <div className="bg-grid-light absolute inset-0" />
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-navy blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-crimson/40 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            light
            eyebrow="Our group"
            title="The Infomerics group, by the numbers"
          />
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: <Counter to={1986} duration={1800} />, label: "Year founded" },
              {
                value: <span className="text-[2.1rem] sm:text-[2.4rem] lg:text-5xl">SEBI+RBI</span>,
                label: "Registered & accredited",
              },
              { value: <Counter to={2} duration={1400} />, label: "Countries with operations (India, Nepal)" },
              { value: <Counter to={6} duration={1400} />, label: "Certification segments, one methodology" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="rounded-3xl bg-white/[0.06] p-7 text-center ring-1 ring-white/10 backdrop-blur transition duration-300 hover:bg-white/[0.1]">
                  <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                    <span className="text-crimson-100">{s.value}</span>
                  </p>
                  <p className="mt-3 text-sm text-white/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
