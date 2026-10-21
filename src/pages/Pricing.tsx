import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/shared";
import { Counter, Reveal, SectionHeading } from "../components/ui";
import { cn } from "../utils/cn";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    per: "",
    text: "A quick, instant self-check. A score, not a certificate — see roughly where you stand today.",
    cta: "Try it free",
    featured: false,
  },
  {
    name: "Gold",
    price: "[PRICE]",
    per: "/ yr",
    text: "Full multi-employee assessment, analyst-reviewed, star rating & certificate within 24 hours.",
    cta: "Get certified",
    featured: true,
  },
  {
    name: "Premium",
    price: "[PRICE]",
    per: "/ yr",
    text: "Everything in Gold, plus year-on-year analytics, trend narrative, and next-year targets.",
    cta: "Go Premium",
    featured: false,
  },
];

const features: [string, string, string, string][] = [
  ["Segments assessed", "6 (quick)", "6 (full)", "6 (full)"],
  ["Respondents", "1 (you)", "Your team", "Your team"],
  ["Analyst review", "—", "✓", "✓"],
  ["Certificate", "—", "✓", "✓"],
  ["Segment roadmap", "—", "✓", "✓"],
  ["Year-on-year dashboard", "—", "—", "✓"],
  ["Dedicated advisor", "—", "—", "✓"],
];

const questions = [
  {
    q: "What's the real difference between Gold and Premium?",
    a: "Gold gets you certified this year. Premium adds year-on-year tracking — trend analytics, what improved or declined, and specific targets for your next cycle. It's built for organizations that want to keep improving, not just certify once.",
  },
  {
    q: "Can we upgrade later?",
    a: "Yes — start Free, and upgrade to Gold or Premium whenever you're ready without redoing your company profile.",
  },
  {
    q: "Is our data kept confidential?",
    a: "Individual employee responses stay anonymous and are never shared with your organization directly — only aggregated results are. Benchmarking data sharing is opt-in and separately consented to.",
  },
  {
    q: "Do we need to recertify every year?",
    a: "Certifications are annual. Premium is specifically built to make that renewal cycle valuable rather than repetitive, by tracking your trajectory.",
  },
];

function Cell({ value, col }: { value: string; col: 0 | 1 | 2 }) {
  const isCheck = value === "✓";
  const isDash = value === "—";
  return (
    <div
      className={cn(
        "flex items-center justify-center px-4 py-4 text-sm",
        col === 1 && "bg-navy-50/50"
      )}
    >
      {isCheck ? (
        <CheckCircle2 className={cn("h-5 w-5", col === 2 ? "text-crimson" : "text-navy")} />
      ) : isDash ? (
        <span className="text-slate-300">—</span>
      ) : (
        <span className={cn("text-center font-medium", col === 1 ? "font-semibold text-navy" : "text-slate-600")}>
          {value}
        </span>
      )}
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Start free. Get certified when you're ready.{" "}
            <span className="text-gradient">Track it every year after.</span>
          </>
        }
      />

      {/* tiers */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2",
                  t.featured
                    ? "bg-gradient-to-br from-navy via-navy-700 to-navy-900 shadow-2xl shadow-navy/30 lg:scale-[1.04]"
                    : "bg-white ring-1 ring-slate-200/80 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)]"
                )}
              >
                {t.featured && (
                  <>
                    <div className="bg-grid-light absolute inset-0" />
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-crimson/40 blur-[80px]" />
                  </>
                )}
                <div className="relative">
                  <p
                    className={cn(
                      "text-sm font-bold uppercase tracking-[0.18em]",
                      t.featured ? "text-crimson-100" : i === 2 ? "text-crimson" : "text-navy"
                    )}
                  >
                    {t.name}
                  </p>
                  <p className="mt-4 flex items-baseline gap-1.5">
                    <span
                      className={cn(
                        "font-display text-5xl font-extrabold",
                        t.featured ? "text-white" : "text-ink"
                      )}
                    >
                      {t.price}
                    </span>
                    {t.per && (
                      <span className={cn("text-sm font-medium", t.featured ? "text-white/60" : "text-slate-400")}>
                        {t.per}
                      </span>
                    )}
                  </p>
                  <p
                    className={cn(
                      "mt-5 min-h-[84px] text-sm leading-relaxed",
                      t.featured ? "text-white/75" : "text-slate-600"
                    )}
                  >
                    {t.text}
                  </p>
                </div>
                <div className="relative mt-auto pt-8">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={cn(
                      "group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition",
                      t.featured
                        ? "bg-crimson text-white shadow-xl shadow-crimson/30 hover:bg-crimson-700"
                        : i === 2
                          ? "bg-navy text-white hover:bg-navy-700"
                          : "border-2 border-navy/15 text-navy hover:border-navy hover:bg-navy-50"
                    )}
                  >
                    {t.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* feature table */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="overflow-x-auto rounded-[2rem] bg-white ring-1 ring-slate-200/80">
              <div className="min-w-[620px]">
                <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-slate-100">
                  <div className="px-6 py-5" />
                  {["Free", "Gold", "Premium"].map((h, i) => (
                    <p
                      key={h}
                      className={cn(
                        "px-4 py-5 text-center font-display text-base font-bold",
                        i === 1 ? "bg-navy-50/50 text-navy" : "text-ink"
                      )}
                    >
                      {h}
                    </p>
                  ))}
                </div>
                {features.map(([label, a, b, c]) => (
                  <div key={label} className="grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center border-b border-slate-100 last:border-b-0">
                    <p className="px-6 py-4 text-sm font-semibold text-ink">{label}</p>
                    <Cell value={a} col={0} />
                    <Cell value={b} col={1} />
                    <Cell value={c} col={2} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* do the math */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Do the math on just <span className="text-crimson">one saved departure.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Replacing a single employee typically costs 50–200% of their annual salary in hiring, ramp-up, and lost
              productivity. If your certification and roadmap help you retain even one person you'd otherwise have lost
              this year, Gold has likely already paid for itself.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-700 to-navy-900 p-10 text-center shadow-2xl shadow-navy/30 sm:p-12">
              <div className="bg-grid-light absolute inset-0" />
              <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-crimson/40 blur-[90px]" />
              <p className="relative font-display text-6xl font-extrabold text-white sm:text-7xl">
                <Counter to={200} prefix="50–" suffix="%" duration={1800} />
              </p>
              <p className="relative mt-3 text-base font-medium text-white/70">
                of annual salary, per lost employee
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* pricing questions */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading eyebrow="Questions" tone="red" title="Pricing questions" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {questions.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 100}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,26,64,0.08)] hover:ring-transparent">
                  <p className="font-display text-lg font-bold leading-snug text-ink">{f.q}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
