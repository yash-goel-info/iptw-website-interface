import {
  BadgeCheck,
  BarChart3,
  Building2,
  Crown,
  Factory,
  Globe,
  HeartHandshake,
  Lightbulb,
  Map,
  Rocket,
  Scale,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
} from "lucide-react";
import Logo from "../components/Logo";
import { CtaBanner, PageHero } from "../components/shared";
import { Counter, Reveal, SectionHeading } from "../components/ui";
import { cn } from "../utils/cn";

const segments = [
  {
    icon: Crown,
    name: "Leadership & Trust",
    text: "Whether people believe leaders are honest, competent, and accountable.",
    eg: "When leadership makes a tough call, I understand why.",
  },
  {
    icon: TrendingUp,
    name: "Growth & Development",
    text: "Career progression, learning investment, and visible paths forward.",
    eg: "I can clearly see how to grow here, not just what to do next.",
  },
  {
    icon: Scale,
    name: "Compensation & Fairness",
    text: "Pay equity and transparency, relative to market and to each other.",
    eg: "I understand how pay decisions are made here.",
  },
  {
    icon: HeartHandshake,
    name: "Culture & Belonging",
    text: "Inclusion, psychological safety, and genuine pride in the organisation.",
    eg: "I can raise a disagreement here without fear of consequences.",
  },
  {
    icon: Sun,
    name: "Work-Life & Wellbeing",
    text: "Flexibility that's actually used, and protection against burnout.",
    eg: "I can take time off or log off without guilt or backlash.",
  },
  {
    icon: Lightbulb,
    name: "Innovation & Autonomy",
    text: "Ownership of outcomes, and room to experiment without fear.",
    eg: "When something I try fails, it's treated as learning, not blame.",
  },
];

const tiers = [
  { stars: 3, name: "Solid foundation", text: "Every segment clears the floor. Real, but with clear room to grow." },
  { stars: 4, name: "Strong, consistently", text: "No weak links. Every segment performing well above the minimum." },
  { stars: 5, name: "Exceptional, everywhere", text: "Genuine strength across all six segments — the rarest, most defensible tier." },
];

const receive = [
  {
    n: "01",
    icon: BadgeCheck,
    title: "A verifiable certificate",
    text: "The QR/ID pair lets any candidate or partner confirm it's genuine on our public verification page.",
  },
  {
    n: "02",
    icon: BarChart3,
    title: "A full segment report",
    text: "Every one of the six scores, with the specific answers and patterns behind each number.",
  },
  {
    n: "03",
    icon: Map,
    title: "A prioritized roadmap",
    text: "Not generic advice, but the specific segment to fix first, second, and the one to simply maintain.",
  },
];

const tracks = [
  {
    icon: Building2,
    name: "Standard IPTW",
    text: "The baseline certification — every segment weighted equally.",
    badge: true,
  },
  {
    icon: Rocket,
    name: "Startup",
    text: "Extra weight on Growth & Development and Innovation & Autonomy — where early-stage teams live or die.",
  },
  {
    icon: Globe,
    name: "Remote",
    text: "Extra weight on Work-Life & Wellbeing and Innovation & Autonomy — built for distributed teams.",
  },
  {
    icon: Sparkles,
    name: "Women-Friendly",
    text: "Extra weight on Culture & Belonging and Compensation & Fairness.",
  },
  {
    icon: Factory,
    name: "Facilities",
    text: "Extra weight on Work-Life & Wellbeing and Compensation & Fairness — for physical-workplace-heavy operations.",
  },
];

const research = [
  {
    to: 32,
    suffix: "%",
    text: "lower voluntary turnover at companies that invest systematically in manager development, per research tracking over 10,000 employees.",
  },
  {
    to: 10,
    suffix: "+ pts",
    text: "increase in employee loyalty from training investment alone — even training that makes staff more employable elsewhere, per a multi-firm European study.",
  },
  {
    to: 76,
    suffix: "%",
    text: "of employees cite manager quality as the primary factor in staying or leaving — which is exactly why Leadership & Trust carries real weight in your score.",
  },
];

export default function Certification() {
  return (
    <>
      <PageHero
        eyebrow="The certification"
        title={
          <>
            Six segments. A minimum bar in every one. <span className="text-crimson">No exceptions.</span>
          </>
        }
        sub={
          <>
            No company is perfect at all six — and a 5★ rating means genuine strength everywhere, not one great
            score hiding four weak ones. Here's exactly what we measure, and how.
          </>
        }
      />

      {/* six segments */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {segments.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 100}>
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)] hover:ring-transparent">
                  <div
                    className={cn(
                      "grid h-14 w-14 place-items-center rounded-2xl transition duration-300",
                      i % 2
                        ? "bg-crimson-50 text-crimson group-hover:bg-crimson group-hover:text-white"
                        : "bg-navy-50 text-navy group-hover:bg-navy group-hover:text-white"
                    )}
                  >
                    <s.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.name}</h3>
                  <p className="mt-2.5 leading-relaxed text-slate-600">{s.text}</p>
                  <p
                    className={cn(
                      "mt-5 border-l-2 pl-3.5 text-sm italic leading-relaxed text-slate-500",
                      i % 2 ? "border-crimson/40" : "border-navy/40"
                    )}
                  >
                    e.g. “{s.eg}”
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* star tiers */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Star tiers"
            tone="red"
            title={
              <>
                What separates <span className="text-navy">3★</span> from{" "}
                <span className="text-crimson">5★</span>
              </>
            }
            sub="Every segment is scored, but your overall rating is set by your lowest-scoring segment, not an average. That floor rule is what keeps a 5★ certification meaningful."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => {
              const top = i === 2;
              return (
                <Reveal key={t.stars} delay={i * 120}>
                  <div
                    className={cn(
                      "relative h-full overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-2",
                      top
                        ? "bg-gradient-to-br from-navy via-navy-700 to-navy-900 shadow-2xl shadow-navy/30"
                        : "bg-white ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)]"
                    )}
                  >
                    {top && <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-crimson/30 blur-2xl" />}
                    <div className="relative flex items-center gap-1">
                      {[...Array(5)].map((_, st) => (
                        <Star
                          key={st}
                          className={cn(
                            "h-5 w-5",
                            st < t.stars
                              ? "fill-amber-400 text-amber-400"
                              : top
                                ? "fill-white/20 text-white/20"
                                : "fill-slate-200 text-slate-200"
                          )}
                        />
                      ))}
                    </div>
                    <p className={cn("mt-6 font-display text-5xl font-extrabold", top ? "text-white" : "text-ink")}>
                      {t.stars}★
                    </p>
                    <h3 className={cn("mt-2 font-display text-xl font-bold", top ? "text-white" : "text-ink")}>
                      {t.name}
                    </h3>
                    <p className={cn("mt-3 text-sm leading-relaxed", top ? "text-white/70" : "text-slate-600")}>
                      {t.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* what you receive */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Deliverables"
            title="What you actually receive"
            sub={'Your certificate, roadmap, and report — not just a PDF that says "good job."'}
          />
          <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* certificate mock */}
            <Reveal>
              <div className="relative mx-auto max-w-[480px]">
                <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-gradient-to-br from-navy/10 to-crimson/10" />
                <div className="relative rounded-[1.8rem] border-2 border-navy/15 bg-white p-3 shadow-[0_30px_60px_rgba(15,26,64,0.12)]">
                  <div className="rounded-[1.4rem] border border-dashed border-navy/25 px-6 py-9 text-center sm:px-9">
                    <div className="mx-auto h-24 w-fit">
                      <Logo />
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-navy">IPTW</p>
                    <p className="mt-2 font-display text-2xl font-extrabold text-ink sm:text-[1.7rem]">
                      Certificate of Ideal Place to Work
                    </p>
                    <p className="mt-5 text-sm text-slate-500">This certifies that</p>
                    <p className="mt-1 font-display text-2xl font-extrabold text-navy">[Your Company Name]</p>
                    <p className="mt-4 text-sm text-slate-500">has been assessed and certified as an</p>
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                      <span className="font-display text-5xl font-extrabold text-crimson">4.3★</span>
                      <span className="font-display text-lg font-bold text-ink">Ideal Place to Work — 2026</span>
                    </div>
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-slate-100 pt-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Certificate ID
                        </p>
                        <p className="mt-1 text-sm font-semibold tracking-wide text-ink">IPTW-2026-000482</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Valid through
                        </p>
                        <p className="mt-1 text-sm font-semibold text-ink">Dec 2027</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* numbered items */}
            <div className="space-y-5">
              {receive.map((r, i) => (
                <Reveal key={r.n} delay={i * 100}>
                  <div className="group flex gap-5 rounded-3xl bg-white p-6 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,26,64,0.08)] hover:ring-transparent sm:p-7">
                    <div
                      className={cn(
                        "grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition duration-300",
                        i % 2
                          ? "bg-crimson-50 text-crimson group-hover:bg-crimson group-hover:text-white"
                          : "bg-navy-50 text-navy group-hover:bg-navy group-hover:text-white"
                      )}
                    >
                      <r.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className={cn("text-xs font-extrabold", i % 2 ? "text-crimson" : "text-navy")}>{r.n}</p>
                      <h4 className="mt-0.5 font-display text-lg font-bold">{r.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{r.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* tracks */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Tracks"
            tone="red"
            title="Certification tracks"
            sub="Every organization is assessed on the same six segments — tracks simply add extra weight where it matters most for your context."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 100}>
                <div
                  className={cn(
                    "group relative h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-2",
                    t.badge
                      ? "bg-gradient-to-br from-navy via-navy-700 to-navy-900 shadow-xl shadow-navy/25"
                      : "bg-white ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)] hover:ring-transparent"
                  )}
                >
                  {t.badge && (
                    <span className="absolute right-6 top-6 rounded-full bg-crimson px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Baseline
                    </span>
                  )}
                  <div
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-2xl",
                      t.badge ? "bg-white/10 text-crimson-100 ring-1 ring-white/15" : "bg-navy-50 text-navy"
                    )}
                  >
                    <t.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h3 className={cn("mt-5 font-display text-xl font-bold", t.badge ? "text-white" : "text-ink")}>
                    {t.name}
                  </h3>
                  <p className={cn("mt-2.5 text-sm leading-relaxed", t.badge ? "text-white/70" : "text-slate-600")}>
                    {t.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* beyond the diagnosis */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The evidence"
            title="Beyond the diagnosis"
            sub="A rating tells you where you stand. Here's how organizations actually move up."
          />
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base italic leading-relaxed text-slate-500">
              Our roadmap isn't generic advice — it draws on published research about what actually moves each
              segment, not just what sounds good in a workshop.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {research.map((r, i) => (
              <Reveal key={r.text} delay={i * 120}>
                <div className="group h-full rounded-3xl bg-white p-8 text-center ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)] hover:ring-transparent">
                  <p className={cn("font-display text-6xl font-extrabold", i % 2 ? "text-crimson" : "text-navy")}>
                    <Counter to={r.to} suffix={r.suffix} duration={1800} />
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-center text-xs text-slate-400">
              General workplace-research findings cited for context — individual results depend on execution, not the
              certification itself.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
