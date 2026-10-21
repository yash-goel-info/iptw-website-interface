import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-[160px] lg:pt-[190px]">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_78%)]" />
      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-navy/15 blur-[120px]" />
      <div className="absolute -right-40 top-32 h-[400px] w-[400px] rounded-full bg-crimson/10 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">{title}</h1>
        {sub && <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">{sub}</p>}
      </div>
    </section>
  );
}

export function CtaBanner({ title }: { title?: ReactNode }) {
  return (
    <section id="cta" className="px-5 py-20 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-navy-700 to-navy-900 px-8 py-14 text-center sm:px-16">
          <div className="bg-grid-light absolute inset-0" />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-crimson/40 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-crimson/30 blur-[100px]" />
          <div className="animate-spin-slow absolute -right-14 -top-14 h-48 w-48 rounded-full border-2 border-dashed border-white/10" />
          <div className="relative flex flex-col items-center gap-9">
            {title && (
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">{title}</h2>
            )}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center gap-2 rounded-full bg-crimson px-10 py-4 text-base font-bold text-white shadow-xl shadow-crimson/30 transition hover:bg-crimson-700"
            >
              Start your free assessment
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
