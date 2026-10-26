import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Eyebrow } from "../components/ui";
import { useAssessment } from "./AssessmentContext";
import { COMPANY_SIZES, INDUSTRIES, STEP, type CompanyDetails } from "./data";
import { validateDetails } from "./validation";
import { btnPrimary, cardSurface } from "./styles";
import { cn } from "../utils/cn";

const controlClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition focus:outline-none focus:ring-4";

function controlState(hasError: boolean) {
  return hasError
    ? "border-crimson focus:border-crimson focus:ring-crimson/20"
    : "border-slate-200 hover:border-slate-300 focus:border-navy focus:ring-navy/15";
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold text-slate-700">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-crimson">
          {error}
        </p>
      )}
    </div>
  );
}

export default function CompanyForm() {
  const { state, updateDetails, goTo } = useAssessment();
  const d = state.details;
  const formRef = useRef<HTMLFormElement>(null);
  const [touched, setTouched] = useState<Partial<Record<keyof CompanyDetails, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validateDetails(d);
  const errorFor = (key: keyof CompanyDetails) => (submitted || touched[key] ? errors[key] : undefined);
  const touch = (key: keyof CompanyDetails) => setTouched((t) => ({ ...t, [key]: true }));

  const textProps = (key: "companyName" | "name" | "role" | "email") => ({
    id: key,
    value: d[key],
    onChange: (e: { target: { value: string } }) => updateDetails({ [key]: e.target.value }),
    onBlur: () => touch(key),
    "aria-invalid": errorFor(key) ? true : undefined,
    "aria-describedby": errorFor(key) ? `${key}-error` : undefined,
    className: cn(controlClass, controlState(!!errorFor(key))),
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      goTo(STEP.welcome);
      return;
    }
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
  };

  return (
    <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <div className="lg:pt-6">
        <Eyebrow>Before we begin</Eyebrow>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] sm:text-5xl">Let&apos;s start with the basics.</h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
          Two minutes, and it&apos;s how everything that follows gets built around your team, not just your industry
          average.
        </p>
        <button
          type="button"
          onClick={() => goTo(STEP.plan)}
          className="mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-navy transition hover:text-crimson focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
        >
          <ArrowLeft className="h-4 w-4" />
          Change plan
        </button>
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate className={cn(cardSurface, "p-6 sm:p-8")}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="companyName" label="Company name" error={errorFor("companyName")}>
            <input type="text" autoComplete="organization" placeholder="e.g. Meridian Textiles" {...textProps("companyName")} />
          </Field>

          <Field id="companySize" label="Company size" error={errorFor("companySize")}>
            <div className="relative">
              <select
                id="companySize"
                value={d.companySize}
                onChange={(e) => updateDetails({ companySize: e.target.value })}
                onBlur={() => touch("companySize")}
                className={cn(controlClass, controlState(!!errorFor("companySize")), "appearance-none pr-10")}
              >
                {COMPANY_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </Field>

          <Field id="industry" label="Industry" error={errorFor("industry")} className="sm:col-span-2">
            <div className="relative">
              <select
                id="industry"
                value={d.industry}
                onChange={(e) => updateDetails({ industry: e.target.value })}
                onBlur={() => touch("industry")}
                className={cn(controlClass, controlState(!!errorFor("industry")), "appearance-none pr-10")}
              >
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </Field>

          <Field id="name" label="Your name" error={errorFor("name")}>
            <input type="text" autoComplete="name" placeholder="Full name" {...textProps("name")} />
          </Field>

          <Field id="role" label="Role" error={errorFor("role")}>
            <input type="text" autoComplete="organization-title" placeholder="e.g. Head of HR" {...textProps("role")} />
          </Field>

          <Field id="email" label="Work email" error={errorFor("email")} className="sm:col-span-2">
            <input type="email" autoComplete="email" placeholder="you@company.com" {...textProps("email")} />
          </Field>
        </div>

        <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
          <div>
            <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-snug text-slate-700">
              <input
                type="checkbox"
                checked={d.storageConsent}
                onChange={(e) => updateDetails({ storageConsent: e.target.checked })}
                onBlur={() => touch("storageConsent")}
                aria-invalid={errorFor("storageConsent") ? true : undefined}
                aria-describedby={errorFor("storageConsent") ? "storageConsent-error" : undefined}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
              />
              <span>I consent to Ideal storing our responses to generate this assessment and future re-assessments.</span>
            </label>
            {errorFor("storageConsent") && (
              <p id="storageConsent-error" className="mt-1.5 pl-7 text-xs font-medium text-crimson">
                {errors.storageConsent}
              </p>
            )}
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-snug text-slate-700">
            <input
              type="checkbox"
              checked={d.benchmarkConsent}
              onChange={(e) => updateDetails({ benchmarkConsent: e.target.checked })}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
            />
            <span>I consent to anonymized, aggregated data being used for industry benchmarking (optional).</span>
          </label>
        </div>

        <button type="submit" className={cn(btnPrimary, "mt-7 w-full py-4")}>
          Continue to your journey
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
        <p className="mt-4 text-center text-xs font-medium text-slate-500">No spam, no cold calls. Just your certification path.</p>
      </form>
    </div>
  );
}
