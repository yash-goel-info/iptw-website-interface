import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from "react";
import { INITIAL_DETAILS, STEP, TOTAL_STEPS, type Answers, type CompanyDetails, type PlanId } from "./data";

interface State {
  step: number;
  plan: PlanId | null;
  details: CompanyDetails;
  answers: Answers;
}

type Action =
  | { type: "goTo"; step: number }
  | { type: "selectPlan"; plan: PlanId }
  | { type: "updateDetails"; patch: Partial<CompanyDetails> }
  | { type: "answer"; id: string; value: number }
  | { type: "reset" };

const initialState: State = {
  step: STEP.plan,
  plan: null,
  details: INITIAL_DETAILS,
  answers: {},
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "goTo":
      return { ...state, step: Math.min(Math.max(action.step, STEP.plan), TOTAL_STEPS) };
    case "selectPlan":
      return { ...state, plan: action.plan, step: action.plan === "gold" ? STEP.goldPlan : STEP.details };
    case "updateDetails":
      return { ...state, details: { ...state.details, ...action.patch } };
    case "answer":
      return { ...state, answers: { ...state.answers, [action.id]: action.value } };
    case "reset":
      return initialState;
  }
}

interface AssessmentContextValue {
  state: State;
  goTo: (step: number) => void;
  selectPlan: (plan: PlanId) => void;
  updateDetails: (patch: Partial<CompanyDetails>) => void;
  answer: (id: string, value: number) => void;
  reset: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

/** Lives above the router so progress survives leaving the page ("Not now") within the same session. */
export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const goTo = useCallback((step: number) => dispatch({ type: "goTo", step }), []);
  const selectPlan = useCallback((plan: PlanId) => dispatch({ type: "selectPlan", plan }), []);
  const updateDetails = useCallback((patch: Partial<CompanyDetails>) => dispatch({ type: "updateDetails", patch }), []);
  const answer = useCallback((id: string, value: number) => dispatch({ type: "answer", id, value }), []);
  const reset = useCallback(() => dispatch({ type: "reset" }), []);

  const value = useMemo(
    () => ({ state, goTo, selectPlan, updateDetails, answer, reset }),
    [state, goTo, selectPlan, updateDetails, answer, reset]
  );

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used within AssessmentProvider");
  return ctx;
}
