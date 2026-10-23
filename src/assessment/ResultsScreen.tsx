import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PartyPopper, Sparkles } from "lucide-react";
import { Counter, Eyebrow } from "../components/ui";
import { useAssessment } from "./AssessmentContext";
import { STEP } from "./data";
import { SCORING_IS_PROTOTYPE, computeResult } from "./scoring";
import { btnPrimary, btnSecondary, cardSurface } from "./styles";

export default function ResultsScreen() {
  const { state, goTo, reset } = useAssessment();
  const result = useMemo(() => computeResult(state.answers), [state.answers]);
  const isTopTier = result.tier.minScore >= 75;

  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow>Your quick self-check</Eyebrow>

      <p
        className="text-gradient mt-6 font-display text-7xl font-extrabold leading-none sm:text-8xl"
        aria-label={`Your score: ${result.score} percent`}
      >
        <Counter to={result.score} suffix="%" duration={1400} />
      </p>

      <h1 className="mt-8 flex flex-wrap items-center justify-center gap-3 text-2xl font-extrabold leading-tight sm:text-3xl">
        {isTopTier && <PartyPopper className="h-7 w-7 shrink-0 text-crimson" aria-hidden />}
        {result.tier.headline}
      </h1>
      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-600">{result.tier.body}</p>

      <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-slate-500">
        A quick, single-respondent preview — not an audited rating or certificate. The real IPTW certification is built from
        your whole team&apos;s anonymous responses, analyst-reviewed.
      </p>

      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-crimson-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-crimson ring-1 ring-crimson/10">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Strongest: {result.strongest.chapter.topic}
        </span>
      </div>

      {SCORING_IS_PROTOTYPE && (
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Prototype scoring · weights not final
        </p>
      )}

      <div className={`${cardSurface} mx-auto mt-8 max-w-xl rounded-3xl p-6 text-left`}>
        <p className="font-display text-base font-bold text-ink">Want to know if this holds up across your whole team?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Gold gets you a real, certified rating within 24 hours — built from your team&apos;s actual answers, not just
          yours.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <Link to="/pricing" className={btnPrimary}>
          Lock in the real certification — Gold
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
        <Link to="/" className={btnSecondary}>
          Maybe later
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
        <button
          type="button"
          onClick={() => goTo(STEP.firstChapter)}
          className="rounded-full text-navy underline-offset-4 transition hover:text-crimson hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
        >
          Review my answers
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-full text-slate-500 underline-offset-4 transition hover:text-navy hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
        >
          Start over
        </button>
      </div>
    </div>
  );
}
