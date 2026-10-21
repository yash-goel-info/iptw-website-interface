import { Check, Sparkles } from "lucide-react";
import { CtaBanner, PageHero } from "../components/shared";
import { Reveal, SectionHeading, useInView } from "../components/ui";

const rows = [
  ["Access", "Invitation-only, admin-managed", "Self-serve, start today"],
  ["Time to complete", "Open for up to 2 weeks", "~12 minutes per respondent"],
  ["Methodology", "Largely proprietary", "Published, segment by segment"],
  ["What you get", "A score against a threshold", "A rating, a floor-check, and a roadmap"],
  ["Pricing", "Custom quote, sales-led", "Transparent, tiered subscription"],
];

function TimeBars() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="mx-auto max-w-4xl">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Traditional survey</p>
        <div className="mt-2 h-14 overflow-hidden rounded-2xl bg-slate-100">
          <div
            className="flex h-full items-center justify-end rounded-2xl bg-slate-300/70 pr-5 transition-all duration-[1400ms] ease-out"
            style={{ width: inView ? "100%" : "10%" }}
          >
            <span className="whitespace-nowrap text-sm font-semibold text-slate-600">
              Up to 2 weeks open, plus review time
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy">
          <Sparkles className="h-4 w-4 text-crimson" /> IPTW
        </p>
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <div className="h-14 flex-1 overflow-hidden rounded-2xl bg-slate-100">
            <div
              className="h-full rounded-r-2xl bg-crimson transition-all duration-[1400ms] ease-out"
              style={{ width: inView ? "7%" : "2%" }}
            />
          </div>
          <span className="whitespace-nowrap text-sm font-bold text-ink">
            ~12 minutes per respondent, 24-hour review
          </span>
        </div>
      </div>

      <p className="mt-7 text-center text-xs text-slate-400">
        Illustrative proportional comparison based on stated timelines, not a controlled study.
      </p>
    </div>
  );
}

export default function Compare() {
  return (
    <>
      <PageHero
        eyebrow="Vs. traditional workplace surveys"
        title={
          <>
            The industry standard wasn't built to <span className="text-crimson">feel good to take.</span>
          </>
        }
        sub="Established players run rigorous methodology — but the experience is invitation-based, spans weeks, and pricing is negotiated case by case. We looked closely before deciding what to build differently."
      />

      {/* comparison table */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="overflow-x-auto rounded-[2rem] bg-white ring-1 ring-slate-200/80">
              <div className="min-w-[640px]">
                <div className="grid grid-cols-[1.2fr_1fr_1fr] items-center border-b border-slate-100 px-6 py-5 sm:px-8">
                  <div />
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Traditional survey</p>
                  <p className="flex justify-center">
                    <span className="rounded-full bg-navy px-5 py-2 text-sm font-bold text-white shadow-lg shadow-navy/25">
                      IPTW
                    </span>
                  </p>
                </div>
                {rows.map(([label, trad, iptw]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1.2fr_1fr_1fr] items-center border-b border-slate-100 last:border-b-0"
                  >
                    <p className="px-6 py-5 font-semibold text-ink sm:px-8">{label}</p>
                    <p className="px-4 py-5 text-sm leading-relaxed text-slate-500">{trad}</p>
                    <div className="px-2 py-2">
                      <p className="flex items-center gap-2 rounded-xl bg-navy-50/70 px-3 py-3 text-sm font-semibold leading-relaxed text-navy">
                        <Check className="h-4 w-4 shrink-0 text-crimson" strokeWidth={3} />
                        {iptw}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-5 text-xs text-slate-400">
              Based on our own review of publicly available information about established workplace-certification
              providers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* time visualized */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Side by side"
            tone="red"
            title="Time to first result, visualized"
          />
          <Reveal delay={100} className="mt-14">
            <TimeBars />
          </Reveal>
        </div>
      </section>

      {/* statement */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
              Why we didn't just copy the incumbent
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 rounded-[2rem] bg-navy-50/70 p-8 ring-1 ring-navy/10 sm:p-12">
              <p className="text-center font-display text-xl font-bold leading-relaxed text-ink sm:text-2xl">
                A methodology can be rigorous and still feel cold to the people answering it. We kept the rigor —{" "}
                <span className="text-navy">floor rules, analyst review, published scoring</span> — and rebuilt the
                experience around the person actually typing the answers, because{" "}
                <span className="text-crimson">
                  a survey people resent finishing produces worse data than one they enjoy.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
