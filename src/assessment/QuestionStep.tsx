import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Eyebrow } from "../components/ui";
import { useAssessment } from "./AssessmentContext";
import { CHAPTERS, QUESTION_INTRO, SCALE, STEP, type Chapter, type Statement } from "./data";
import { btnNavy, btnPrimary, btnSecondary, cardSurface } from "./styles";
import { cn } from "../utils/cn";

function LikertQuestion({
  statement,
  value,
  invalid,
  onChange,
}: {
  statement: Statement;
  value: number | undefined;
  invalid: boolean;
  onChange: (value: number) => void;
}) {
  return (
    <fieldset
      className={cn(cardSurface, "rounded-3xl p-5 sm:p-6", invalid && "ring-2 ring-crimson/60")}
      aria-describedby={invalid ? `${statement.id}-error` : undefined}
    >
      <legend className="float-left w-full font-display text-[15px] font-semibold leading-snug text-ink sm:text-base">
        {statement.text}
      </legend>
      <div className="clear-both grid grid-cols-5 gap-1.5 pt-4 sm:gap-2">
        {SCALE.map((option) => (
          <label key={option.value} className="relative block cursor-pointer">
            <input
              type="radio"
              name={statement.id}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <span className="flex h-full min-h-[3.5rem] items-center justify-center rounded-xl border border-slate-200 bg-white px-0.5 py-2 text-center text-[10px] font-semibold leading-tight text-slate-700 transition hover:border-navy/40 hover:bg-navy-50 peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-navy/30 sm:px-1 sm:text-xs">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {invalid && (
        <p id={`${statement.id}-error`} className="mt-3 text-xs font-medium text-crimson">
          Please choose an answer.
        </p>
      )}
    </fieldset>
  );
}

export default function QuestionStep({ chapter, index }: { chapter: Chapter; index: number }) {
  const { state, answer, goTo } = useAssessment();
  const [attempted, setAttempted] = useState(false);

  const isLast = index === CHAPTERS.length - 1;
  const step = STEP.firstChapter + index;
  const missing = chapter.statements.filter((s) => state.answers[s.id] === undefined);

  const next = () => {
    if (missing.length > 0) {
      setAttempted(true);
      return;
    }
    goTo(step + 1);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div className="lg:pt-4">
          <Eyebrow>
            Quick check {index + 1} of {CHAPTERS.length} · {chapter.topic}
          </Eyebrow>
          <h1 className="mt-6 text-3xl font-extrabold leading-[1.15] sm:text-4xl">{chapter.heading}</h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-600">{QUESTION_INTRO}</p>
        </div>

        <div className="space-y-5">
          {chapter.statements.map((statement) => (
            <LikertQuestion
              key={statement.id}
              statement={statement}
              value={state.answers[statement.id]}
              invalid={attempted && state.answers[statement.id] === undefined}
              onChange={(value) => answer(statement.id, value)}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <button type="button" onClick={() => goTo(step - 1)} className={btnSecondary}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <div className="flex flex-col items-end gap-2">
          <button type="button" onClick={next} className={isLast ? btnPrimary : btnNavy}>
            {isLast ? "See my results" : "Next chapter"}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <p role="alert" className="min-h-4 text-xs font-medium text-crimson">
            {attempted && missing.length > 0 ? "Please answer both statements to continue." : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
