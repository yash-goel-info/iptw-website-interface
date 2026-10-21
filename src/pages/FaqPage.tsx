import { useState } from "react";
import { ArrowRight, ChevronDown, CreditCard, Lock, Rocket, Scale } from "lucide-react";
import { PageHero } from "../components/shared";
import { Reveal, useInView } from "../components/ui";
import { cn } from "../utils/cn";

const groups = [
  {
    title: "Getting started",
    icon: Rocket,
    items: [
      [
        "Do I need to talk to sales to try this?",
        "No — the Free self-check is entirely self-serve. Gold and Premium can also be started self-serve, or you can talk to our team first if you're evaluating for a larger rollout.",
      ],
      [
        "Does one person answer for the whole company?",
        "Only on Free. Gold and Premium are built on real, anonymous responses from your team via an invite link — that's what makes the certificate credible.",
      ],
      [
        "How many employees need to respond?",
        "We recommend at least 15 anonymous responses for a statistically credible rating, though the platform will accept fewer.",
      ],
    ],
  },
  {
    title: "Methodology & scoring",
    icon: Scale,
    items: [
      [
        "Why isn't the certified rating instant?",
        "Because a rating that means something needs a human to read the answers. Instant scoring is fine for a free self-check — not for a certificate you'll put in front of candidates.",
      ],
      [
        "What's the \"floor rule\"?",
        "Your overall star rating is set by your lowest-scoring segment, not an average. It's what keeps a 5★ certification meaningful — no single strong segment can hide four weak ones.",
      ],
      [
        "Can our free-tier score be wrong?",
        "The Free score is deliberately a generous, single-respondent preview — not an audited figure. Treat it as a directional starting point, not a certified result.",
      ],
    ],
  },
  {
    title: "Pricing & plans",
    icon: CreditCard,
    items: [
      [
        "What's the real difference between Gold and Premium?",
        "Gold certifies you this year. Premium adds year-on-year tracking — trend analytics and specific targets for your next cycle.",
      ],
      ["Can we upgrade later?", "Yes, at any time, without redoing your company profile."],
      [
        "Do we recertify every year?",
        "Certifications are annual. Premium is built specifically to make that renewal valuable rather than repetitive.",
      ],
    ],
  },
  {
    title: "Privacy & data",
    icon: Lock,
    items: [
      [
        "Can our leadership see individual employee answers?",
        "No. Individual responses stay anonymous — leadership only sees aggregated, segment-level results.",
      ],
      [
        "Is our data shared with anyone else?",
        "Only if you separately opt in to anonymized, aggregated benchmarking during onboarding. It's off by default.",
      ],
    ],
  },
];

function FaqItem({ q, a, first = false }: { q: string; a: string; first?: boolean }) {
  const [open, setOpen] = useState(first);
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={cn(
        "reveal overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(15,26,64,0.06)]",
        inView && "is-visible"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[15px] font-bold text-ink sm:text-base">{q}</span>
        <span
          className={cn(
            "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
            open ? "rotate-180 bg-crimson text-white" : "bg-navy-50 text-navy"
          )}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Everything else you were <span className="text-gradient">about to ask.</span>
          </>
        }
      />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-12 px-5 lg:px-8">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 80}>
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-xl",
                    gi % 2 ? "bg-crimson-50 text-crimson" : "bg-navy-50 text-navy"
                  )}
                >
                  <g.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h2 className="text-xl font-extrabold sm:text-2xl">{g.title}</h2>
              </div>
              <div className="mt-5 space-y-3">
                {g.items.map(([q, a], i) => (
                  <FaqItem key={q} q={q} a={a} first={gi === 0 && i === 0} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* still have a question */}
        <Reveal delay={100}>
          <div className="mx-auto mt-20 max-w-3xl px-5 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold">Still have a question?</h2>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-9 py-4 text-base font-bold text-white shadow-xl shadow-navy/25 transition hover:bg-navy-700"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
