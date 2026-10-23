import { ArrowRight, BadgeCheck, CheckCircle2, Star, TrendingUp } from "lucide-react";
import Logo from "./Logo";
import { Eyebrow, useInView } from "./ui";
import { cn } from "../utils/cn";

const bars = [
  { label: "Leadership & Trust", value: 4.6 },
  { label: "Growth & Development", value: 3.9 },
  { label: "Compensation & Fairness", value: 4.1 },
];

function ScoreCard() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[480px]">
      {/* backdrop */}
      <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-navy to-crimson opacity-15 blur-md" />
      <div className="absolute -right-3 -top-3 h-full w-full rotate-3 rounded-[2rem] border-2 border-dashed border-navy/20" />

      <div className="relative rounded-[2rem] bg-white p-7 shadow-[0_40px_80px_rgba(15,26,64,0.18)] ring-1 ring-slate-100 sm:p-9">
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-ink">[Your Company]</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold text-white">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Certified
          </span>
        </div>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display text-6xl font-extrabold text-navy">4.3</span>
          <span className="text-sm font-medium text-slate-500">/ 5 — IPTW 2026</span>
        </div>

        <div className="mt-7 space-y-5">
          {bars.map((b, i) => (
            <div key={b.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-ink">{b.label}</span>
                <span className={cn("font-bold", b.value < 4 ? "text-crimson" : "text-navy")}>{b.value.toFixed(1)}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={cn("h-full rounded-full transition-all duration-1000 ease-out", b.value < 4 ? "bg-crimson" : "bg-navy")}
                  style={{ width: inView ? `${(b.value / 5) * 100}%` : "10%", transitionDelay: `${i * 180}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            <div className="h-8">
              <Logo />
            </div>
            <span className="whitespace-nowrap text-[10px] font-semibold text-slate-400">
              Ideal Place to Work™
            </span>
          </div>
          <p className="ml-auto text-[11px] leading-snug text-slate-400">
            Illustrative preview — your report will look like this.
          </p>
        </div>
      </div>

      {/* floating: analyst reviewed */}
      <div className="animate-float-slow absolute -top-5 -right-3 flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-white shadow-2xl sm:-right-8">
        <BadgeCheck className="h-5 w-5 text-crimson-100" />
        <span className="text-[13px] font-semibold">Analyst-reviewed</span>
      </div>

      {/* floating: next star */}
      <div className="animate-float absolute -bottom-8 -right-2 w-52 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-100 [animation-delay:1.4s] sm:-right-8">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-crimson-50 text-crimson">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Roadmap to the next star</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={cn("h-3.5 w-3.5", i < 4 ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200")} />
              ))}
              <span className="ml-1 text-[11px] font-bold text-navy">4.0 → 4.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-[160px] lg:pt-[190px]">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_78%)]" />
      <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-navy/15 blur-[120px]" />
      <div className="absolute -right-40 top-40 h-[440px] w-[440px] rounded-full bg-crimson/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-5 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8">
        <div>
          <Eyebrow>Workplace certification, reimagined</Eyebrow>

          <h1 className="mt-7 text-[2.4rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
            Your best people are already deciding whether to stay.{" "}
            <span className="text-gradient">
              This is how you find out{" "}
              <span className="relative inline-block text-ink">
                before they leave.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 9 C 80 2, 200 2, 298 7" stroke="#be2026" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
            Most workplace surveys feel like a compliance exercise, take weeks to complete, and hand you a score with no
            next step. IPTW is built the opposite way: a survey people enjoy, a rating built from real analyst review, and
            a roadmap to the next star.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#/assessment"
              className="group inline-flex items-center gap-2 rounded-full bg-crimson px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-crimson/25 transition hover:bg-crimson-700"
            >
              Start your free assessment
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-8 py-[14px] text-[15px] font-bold text-navy transition hover:border-navy hover:bg-navy-50"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Free self-check in ~3 minutes · no credit card ·{" "}
            <a href="#cta" className="font-semibold text-crimson underline-offset-4 hover:underline">
              or talk to our team →
            </a>
          </p>
        </div>

        <ScoreCard />
      </div>
    </section>
  );
}
