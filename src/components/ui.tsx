import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "navy",
  className,
}: {
  children: ReactNode;
  tone?: "navy" | "red" | "light";
  className?: string;
}) {
  const tones = {
    navy: "bg-navy-50 text-navy ring-navy/10",
    red: "bg-crimson-50 text-crimson ring-crimson/10",
    light: "bg-white/10 text-white ring-white/20",
  };
  const dot = { navy: "bg-navy", red: "bg-crimson", light: "bg-crimson" };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ring-1",
        tones[tone],
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dot[tone])} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  tone = "navy",
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  tone?: "navy" | "red" | "light";
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "")}>
      <Eyebrow tone={light ? "light" : tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-5 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          light && "text-white"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-navy-100/80" : "text-slate-600")}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
