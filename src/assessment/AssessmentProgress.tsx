import { CHAPTERS, STEP, STEP_LABELS, TOTAL_STEPS, chapterForStep } from "./data";
import { cn } from "../utils/cn";

export default function AssessmentProgress({ step }: { step: number }) {
  const current = chapterForStep(step);
  const label = current ? current.chapter.topic : STEP_LABELS[step];
  const percent = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em]">
        <span className="text-navy">
          Step {step} of {TOTAL_STEPS}
        </span>
        <span className="truncate text-slate-500">{label}</span>
      </div>
      <div
        role="progressbar"
        aria-label="Assessment progress"
        aria-valuemin={1}
        aria-valuemax={TOTAL_STEPS}
        aria-valuenow={step}
        aria-valuetext={`Step ${step} of ${TOTAL_STEPS}: ${label}`}
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200/80"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-navy to-crimson transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {step >= STEP.firstChapter && step < STEP.results && (
        <ol className="mt-5 grid grid-cols-6 gap-2 sm:gap-3" aria-label="Assessment chapters">
          {CHAPTERS.map((chapter, i) => {
            const status = current ? (i < current.index ? "done" : i === current.index ? "current" : "todo") : "todo";
            return (
              <li key={chapter.id} aria-current={status === "current" ? "step" : undefined}>
                <div
                  className={cn(
                    "h-1 rounded-full transition-colors",
                    status === "done" && "bg-navy",
                    status === "current" && "bg-crimson",
                    status === "todo" && "bg-slate-200"
                  )}
                />
                <p
                  className={cn(
                    "mt-2 hidden truncate text-[10px] font-bold uppercase tracking-[0.12em] sm:block",
                    status === "current" ? "text-crimson" : status === "done" ? "text-navy" : "text-slate-400"
                  )}
                >
                  {chapter.tabLabel}
                </p>
                <span className="sr-only">
                  {chapter.tabLabel}, {status === "done" ? "completed" : status === "current" ? "current" : "upcoming"}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
