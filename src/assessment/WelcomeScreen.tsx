import { ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { useAssessment } from "./AssessmentContext";
import { STEP } from "./data";
import { btnPrimary, btnSecondary } from "./styles";

export default function WelcomeScreen() {
  const { state, goTo } = useAssessment();
  const company = state.details.companyName.trim();

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy-50 text-navy ring-1 ring-navy/10">
        <Layers className="h-7 w-7" />
      </div>
      <p className="mt-5 text-sm font-semibold text-slate-600">Welcome, {company}</p>
      <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
        This isn&apos;t a survey.
        <br />
        <span className="text-gradient">It&apos;s a mirror.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
        Six short chapters, written the way a thoughtful colleague would ask them. Every answer shapes the report you get
        back.
      </p>
      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <button type="button" onClick={() => goTo(STEP.firstChapter)} className={btnPrimary}>
          I&apos;m ready — let&apos;s begin
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
        <Link to="/" className={btnSecondary}>
          Not now
        </Link>
      </div>
      <button
        type="button"
        onClick={() => goTo(STEP.details)}
        className="mt-6 rounded-full text-sm font-semibold text-slate-500 underline-offset-4 transition hover:text-navy hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
      >
        Edit my details
      </button>
      <p className="mt-3 text-xs text-slate-400">Your answers stay on this page until you close it.</p>
    </div>
  );
}
