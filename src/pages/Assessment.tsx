import { useEffect, useRef } from "react";
import { useAssessment } from "../assessment/AssessmentContext";
import AssessmentProgress from "../assessment/AssessmentProgress";
import CompanyForm from "../assessment/CompanyForm";
import PlanSelection from "../assessment/PlanSelection";
import QuestionStep from "../assessment/QuestionStep";
import ResultsScreen from "../assessment/ResultsScreen";
import WelcomeScreen from "../assessment/WelcomeScreen";
import { STEP, chapterForStep } from "../assessment/data";

function CurrentStep({ step }: { step: number }) {
  const chapter = chapterForStep(step);
  if (chapter) return <QuestionStep key={chapter.chapter.id} chapter={chapter.chapter} index={chapter.index} />;
  switch (step) {
    case STEP.details:
      return <CompanyForm />;
    case STEP.welcome:
      return <WelcomeScreen />;
    case STEP.results:
      return <ResultsScreen />;
    default:
      return <PlanSelection />;
  }
}

export default function Assessment() {
  const { state } = useAssessment();
  const step = state.step;
  const stepRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0 });
    stepRef.current?.focus({ preventScroll: true });
  }, [step]);

  return (
    <main className="relative overflow-hidden pb-20 pt-[150px] lg:pt-[170px]">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute -left-40 top-0 h-[360px] w-[360px] rounded-full bg-navy/10 blur-[120px]" />
      <div className="absolute -right-40 top-24 h-[340px] w-[340px] rounded-full bg-crimson/10 blur-[120px]" />

      <div className="relative min-h-[640px] px-5 lg:px-8">
        <AssessmentProgress step={step} />
        <div ref={stepRef} tabIndex={-1} className="mt-10 outline-none lg:mt-14">
          <div key={step} className="animate-page">
            <CurrentStep step={step} />
          </div>
        </div>
      </div>
    </main>
  );
}
