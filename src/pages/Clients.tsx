import { Image as ImageIcon } from "lucide-react";
import { CtaBanner, PageHero } from "../components/shared";
import { Reveal, SectionHeading } from "../components/ui";
import { cn } from "../utils/cn";

const quotes = [
  "“Most people leaders want fewer, better surveys — and none of the existing certifications give a roadmap, just a badge.”",
  "“A certification tied to a rating agency's rigor is more credible to our board than a marketing-led badge.”",
  "“Getting employees to actually finish a survey is the real bottleneck, not designing the questions.”",
];

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Founding cohort"
        title={
          <>
            We're early — and that's an advantage for the{" "}
            <span className="text-gradient">organizations who join first.</span>
          </>
        }
        sub="IPTW's revamped certification is new. Rather than pad this page with names that aren't real yet, here's the honest picture: we're onboarding our founding cohort now, and every one of them shapes the methodology going forward."
      />

      {/* logo placeholders */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-slate-200 bg-white text-slate-400 transition duration-300 hover:border-navy/30 hover:text-navy/60">
                  <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
                  <span className="text-sm font-medium">[Client logo]</span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div className="group flex h-40 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-crimson/30 bg-crimson-50/40 text-crimson transition duration-300 hover:-translate-y-1 hover:bg-crimson-50">
                <ImageIcon className="h-8 w-8 opacity-60 transition group-hover:scale-110" strokeWidth={1.5} />
                <span className="font-display text-base font-bold">Your logo here?</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="mt-8 text-center text-sm text-slate-400">
              Logos appear here as founding-cohort certifications complete — nothing placeholder stays past launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* early conversations */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What we're hearing"
            tone="red"
            title="What early conversations are telling us"
            sub="Not client testimonials — we don't have those yet, and won't fabricate them. This is what HR and people leaders consistently raise when we describe the model."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal key={i} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,26,64,0.10)] hover:ring-transparent">
                  <div
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-2xl text-xl",
                      i % 2 ? "bg-crimson-50" : "bg-navy-50"
                    )}
                  >
                    💬
                  </div>
                  <blockquote className="mt-5 flex-1 font-display text-lg font-semibold leading-relaxed text-ink">
                    {q}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Recurring theme, early discovery conversations
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Want to be one of the names on this page?" />
    </>
  );
}
