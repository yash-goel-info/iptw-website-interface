import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../components/ui";
import { useAssessment } from "./AssessmentContext";
import { PLANS, type Plan } from "./data";
import { cn } from "../utils/cn";

function ComingSoonCard({ plan, dark }: { plan: Plan; dark: boolean }) {
  return (
    <div
      aria-disabled="true"
      className={cn(
        "relative flex h-full cursor-not-allowed flex-col overflow-hidden rounded-[2rem] p-7 text-left",
        dark
          ? "bg-gradient-to-br from-navy via-navy-700 to-navy-900 shadow-xl shadow-navy/20"
          : "bg-white ring-1 ring-slate-200/80"
      )}
    >
      {dark && <div className="bg-grid-light absolute inset-0" />}
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <p
            className={cn(
              "text-xs font-bold uppercase tracking-[0.18em]",
              dark ? "text-crimson-100" : "text-crimson"
            )}
          >
            {plan.label}
          </p>
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
              dark ? "bg-white/10 text-white/80" : "bg-slate-100 text-slate-500"
            )}
          >
            Coming soon
          </span>
        </div>
        <h2 className={cn("mt-4 text-2xl font-extrabold", dark ? "text-white" : "text-ink")}>{plan.title}</h2>
        <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-white/75" : "text-slate-600")}>
          {plan.description}
        </p>
      </div>
    </div>
  );
}

export default function PlanSelection() {
  const { selectPlan } = useAssessment();

  return (
    <div className="mx-auto max-w-5xl text-center">
      <Eyebrow>Choose how you&apos;d like to start</Eyebrow>
      <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl">Which one fits right now?</h1>

      <div className="mt-12 grid items-stretch gap-6 text-left md:grid-cols-3">
        {PLANS.map((plan) => {
          if (plan.available) {
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => selectPlan(plan.id)}
                className="group relative flex h-full flex-col rounded-[2rem] bg-white p-7 text-left ring-2 ring-crimson/70 shadow-[0_25px_60px_rgba(190,32,38,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(190,32,38,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy">{plan.label}</p>
                  <span className="rounded-full bg-crimson-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-crimson">
                    Available now
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold text-ink">{plan.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{plan.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 pt-2 text-sm font-bold text-crimson">
                  Start the quick self-check
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </button>
            );
          }
          return <ComingSoonCard key={plan.id} plan={plan} dark={plan.id === "premium"} />;
        })}
      </div>
    </div>
  );
}
