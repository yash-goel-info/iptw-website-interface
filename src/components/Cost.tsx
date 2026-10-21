import { BadgeCheck, Landmark, ShieldCheck } from "lucide-react";
import { Counter, Reveal, SectionHeading } from "./ui";

const stats = [
  {
    to: 17.1,
    decimals: 1,
    suffix: "%",
    label: "India's average attrition rate in 2025",
    source: "Source: industry attrition benchmarking, 2025",
  },
  {
    to: 24.8,
    decimals: 1,
    suffix: "%",
    label: "Attrition in Indian financial services specifically",
    source: "Source: industry attrition benchmarking, 2025",
  },
  {
    prefix: "~",
    to: 50,
    suffix: "%",
    label: "Of Indian employees say they're considering leaving",
    source: "Source: Gallup, State of the Global Workplace 2025",
  },
  {
    prefix: "50–",
    to: 200,
    suffix: "%",
    label: "Of annual salary to replace one employee",
    source: "Source: widely cited HR-industry cost-of-turnover estimates",
  },
];

export function CostSection() {
  return (
    <section id="cost" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The cost of not knowing"
          tone="red"
          title={
            <>
              This isn't a soft-skills problem.{" "}
              <span className="text-gradient">It shows up on the balance sheet.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,26,64,0.12)] hover:ring-transparent">
                <div
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition duration-500 group-hover:scale-x-100 ${
                    i % 2 ? "bg-crimson" : "bg-navy"
                  }`}
                />
                <p className="font-display text-5xl font-extrabold text-crimson lg:text-[3.2rem]">
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-4 font-semibold leading-snug text-ink">{s.label}</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">{s.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-12 max-w-4xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
            None of these numbers move on their own. They move when leadership can see, segment by segment, what's
            actually driving them — which is exactly what a{" "}
            <strong className="font-semibold text-navy">floor-checked, analyst-reviewed certification</strong> is built to
            show.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function GroupBand() {
  const items = [
    { icon: ShieldCheck, text: "Backed by Infomerics Rating — SEBI-registered, RBI-accredited" },
    { icon: Landmark, text: "Rating institutions since 1986 — pan-India, plus operations in Nepal" },
  ];
  return (
    <section id="group" className="bg-navy-900 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-white">
          An Infomerics Group Company
        </p>
        <div className="hidden h-8 w-px bg-white/15 lg:block" />
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          {items.map((it) => (
            <p key={it.text} className="flex items-center gap-2.5 text-sm text-white/85">
              <it.icon className="h-5 w-5 shrink-0 text-crimson-100" />
              {it.text}
            </p>
          ))}
        </div>
        <div className="hidden h-8 w-8 place-items-center lg:grid">
          <BadgeCheck className="h-7 w-7 text-white/40" />
        </div>
      </div>
    </section>
  );
}
