import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, Building2, Layers, MessageSquareText, Star, UserSearch, Users } from "lucide-react";
import { Eyebrow, Reveal } from "../components/ui";
import { cn } from "../utils/cn";

const steps = [
  {
    n: "01",
    icon: Building2,
    title: "Tell us who you are",
    text: "Company name, size, industry, and which certification track fits you (Standard, Startup, Remote, Women-Friendly, or Facilities). Two minutes, and it tunes everything that follows.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Choose your depth",
    text: "Free gives you a quick, personal self-check. Gold and Premium open the full, six-segment assessment — built to be answered by your team, not just one person, because a certification is only as credible as who it's based on.",
  },
  {
    n: "03",
    icon: Users,
    title: "Bring your team in",
    text: "For Gold and Premium, you'll get a shareable link to invite employees. Every response is anonymous — we recommend at least 15 for a statistically credible rating. You can track completion as it comes in.",
  },
  {
    n: "04",
    icon: MessageSquareText,
    title: "Answer, in your own words",
    text: "Six short chapters, written like a thoughtful colleague would ask them — not a compliance form. Optional open-text prompts let analysts pick up nuance a 1-5 scale can't.",
  },
  {
    n: "05",
    icon: UserSearch,
    title: "Our analysts review it — within 24 hours",
    text: "Every response is read by a person, not just scored by an algorithm. We check each segment against its certification floor before anything is issued.",
  },
  {
    n: "06",
    icon: Award,
    title: "Get your rating, certificate, and roadmap",
    text: "A star rating, a full segment breakdown, and a prescriptive path to your next star — not just a number to frame on the wall.",
  },
];

const faqs = [
  {
    q: "Does one person have to answer for the whole company?",
    a: "Only on the Free tier. Gold and Premium are built on real, anonymous responses from your team — that's what makes the certificate credible.",
  },
  {
    q: "Why isn't the certified rating instant?",
    a: "Because a rating that means something needs a human to actually read the answers. Instant scoring is fine for a free self-check — it's not fine for a certificate you'll put in front of candidates.",
  },
];

function Timeline() {
  const fillRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<boolean[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      const passed = Math.min(Math.max(trigger - r.top, 0), r.height);
      if (fillRef.current) fillRef.current.style.height = `${(passed / r.height) * 100}%`;
      setActive(
        stepRefs.current.map((el) => !!el && el.getBoundingClientRect().top < trigger)
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="relative mx-auto mt-20 max-w-4xl">
      {/* track */}
      <div ref={trackRef} className="absolute bottom-7 left-7 top-7 w-[3px] overflow-hidden rounded-full bg-slate-100">
        <div ref={fillRef} className="w-full rounded-full bg-gradient-to-b from-navy via-navy to-crimson transition-[height] duration-200 ease-out" />
      </div>

      <div className="space-y-6">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          const on = active[i];
          return (
            <div
              key={s.n}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="relative grid grid-cols-[56px_1fr] items-start gap-4 sm:gap-6"
            >
              {/* node */}
              <div
                className={cn(
                  "z-10 grid h-14 w-14 place-items-center rounded-full bg-white font-display text-base font-extrabold ring-2 transition-all duration-500",
                  on
                    ? last
                      ? "scale-110 bg-crimson text-white ring-crimson shadow-xl shadow-crimson/30"
                      : "scale-110 bg-navy text-white ring-navy shadow-xl shadow-navy/30"
                    : "text-navy ring-slate-200"
                )}
              >
                {s.n}
              </div>

              {/* card */}
              <Reveal delay={60}>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 sm:p-8",
                    last
                      ? "bg-gradient-to-br from-navy via-navy-700 to-navy-900 text-white shadow-2xl shadow-navy/30"
                      : "bg-white ring-1 ring-slate-200/80 hover:shadow-[0_25px_50px_rgba(15,26,64,0.10)] hover:ring-transparent"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition duration-500 group-hover:scale-x-100",
                      i % 2 ? "bg-crimson" : "bg-navy"
                    )}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={cn("font-display text-xl font-bold sm:text-2xl", last ? "text-white" : "text-ink")}>
                      {s.title}
                    </h3>
                    <div
                      className={cn(
                        "hidden h-12 w-12 shrink-0 place-items-center rounded-2xl transition duration-300 sm:grid",
                        last
                          ? "bg-white/10 text-crimson-100 ring-1 ring-white/15"
                          : "bg-navy-50 text-navy group-hover:bg-navy group-hover:text-white"
                      )}
                    >
                      <s.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                  </div>
                  <p className={cn("mt-3 max-w-2xl leading-relaxed", last ? "text-white/75" : "text-slate-600")}>
                    {s.text}
                  </p>
                  {last && (
                    <div className="mt-5 flex items-center gap-1.5">
                      {[...Array(5)].map((_, st) => (
                        <Star
                          key={st}
                          className={cn(
                            "h-5 w-5",
                            st < 4 ? "fill-amber-400 text-amber-400" : "fill-white/25 text-white/25"
                          )}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="animate-page min-h-screen overflow-x-hidden">
      <section className="relative overflow-hidden pb-10 pt-[160px] lg:pt-[185px]">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_78%)]" />
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-navy/15 blur-[120px]" />
        <div className="absolute -right-40 top-32 h-[400px] w-[400px] rounded-full bg-crimson/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            From your first click to a certificate that{" "}
            <span className="text-gradient">means something.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
            No black box, no two-week wait to even start. Here's exactly what happens, in order.
          </p>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <Timeline />
      </section>

      <section className="bg-slate-50 py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Common questions</h2>
          </Reveal>
          <div className="mt-10 space-y-5">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 100}>
                <div className="group rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,26,64,0.08)] hover:ring-transparent sm:p-8">
                  <p className="font-display text-lg font-bold text-ink">{f.q}</p>
                  <p className="mt-2.5 leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-5 py-20 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-navy-700 to-navy-900 px-8 py-14 text-center sm:px-16">
            <div className="bg-grid-light absolute inset-0" />
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-crimson/40 blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-crimson/30 blur-[100px]" />
            <div className="animate-spin-slow absolute -right-14 -top-14 h-48 w-48 rounded-full border-2 border-dashed border-white/10" />
            <div className="relative flex justify-center">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group inline-flex items-center gap-2 rounded-full bg-crimson px-10 py-4.5 text-base font-bold text-white shadow-xl shadow-crimson/30 transition hover:bg-crimson-700"
              >
                Start your free assessment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
