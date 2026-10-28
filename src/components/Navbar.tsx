import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react";
import SignInDialog from "./SignInDialog";
import Logo from "./Logo";
import { cn } from "../utils/cn";

const links: [string, string][] = [
  ["How it works", "/how-it-works"],
  ["Certification", "/certification"],
  ["Clients", "/clients"],
  ["Compare", "/compare"],
  ["Pricing", "/pricing"],
  ["FAQ", "/faq"],
  ["About", "/about"],
];

function NavLink({ label, href, active, className, onClick }: { label: string; href: string; active?: boolean; className?: string; onClick?: () => void }) {
  const cls = cn(
    "whitespace-nowrap rounded-full transition",
    active ? "bg-navy-50 font-semibold text-navy" : "text-slate-700 hover:bg-navy-50 hover:text-navy",
    className
  );
  if (href.startsWith("/")) return <Link to={href} className={cls} onClick={onClick}>{label}</Link>;
  return (
    <a href={href} className={cls} onClick={onClick}>
      {label}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* announcement bar */}
      <div
        className={cn(
          "overflow-hidden bg-navy-900 text-white transition-all duration-300",
          scrolled ? "max-h-0" : "max-h-12"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-[13px]">
          <span className="whitespace-nowrap font-bold uppercase tracking-[0.14em] text-white/80">
            An Infomerics Group Company
          </span>
          <span className="hidden text-white/30 sm:inline">•</span>
          <span className="whitespace-nowrap text-white/80">
            Backed by Infomerics Rating — SEBI-registered, RBI-accredited
          </span>
        </div>
      </div>

      <nav
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-white/90 shadow-[0_8px_30px_rgba(15,26,64,0.08)] backdrop-blur-xl" : "bg-white/80 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          {/* brand lockup */}
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <div className="h-12 w-9 shrink-0 transition-transform duration-300 group-hover:-rotate-3 sm:h-14 sm:w-10">
              <Logo />
            </div>
            <div className="whitespace-nowrap leading-tight">
              <p className="font-display text-[14px] font-extrabold tracking-tight text-navy sm:text-[15px]">
                IPTW <span className="font-semibold text-slate-500">· Ideal Place to Work™</span>
              </p>
              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-crimson sm:text-[9.5px]">
                Workplace Certification
              </p>
            </div>
          </Link>

          {/* nav links */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {links.map(([label, href]) => (
              <li key={label}>
                <NavLink
                  label={label}
                  href={href}
                  active={href === pathname}
                  className="px-2.5 py-2 text-[13px] font-medium"
                />
              </li>
            ))}
          </ul>

          {/* actions */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#/certification"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-navy/20 bg-white px-4 py-2.5 text-[12.5px] font-semibold text-navy transition hover:border-navy hover:bg-navy-50 lg:inline-flex"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Verify certification
            </a>
            <button
              type="button"
              onClick={() => setSignInOpen(true)}
              className="hidden whitespace-nowrap rounded-full border border-navy/15 bg-white px-3.5 py-2.5 text-[13px] font-semibold text-navy transition hover:border-navy hover:bg-navy-50 md:inline-flex"
            >
              Sign in
            </button>
            <a
              href="#/assessment"
              className="group hidden items-center gap-2 whitespace-nowrap rounded-full bg-crimson px-5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-crimson/25 transition hover:bg-crimson-700 sm:inline-flex"
            >
              Start free assessment
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center whitespace-nowrap rounded-full bg-navy-50 text-navy xl:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 xl:hidden">
            {links.map(([label, href]) => (
              <NavLink
                key={label}
                label={label}
                href={href}
                active={href === pathname}
                onClick={() => setOpen(false)}
                className="block w-full rounded-xl px-4 py-3 text-left text-[15px] font-medium"
              />
            ))}
            <div className="mt-3 flex gap-3 px-1">
              <button
                type="button"
                onClick={() => { setOpen(false); setSignInOpen(true); }}
                className="rounded-full border border-navy/20 px-4 py-3 text-sm font-semibold text-navy"
              >
                Sign in
              </button>
              <a
                href="#/assessment"
                onClick={() => setOpen(false)}
                className="flex-1 whitespace-nowrap rounded-full bg-crimson px-5 py-3 text-center text-sm font-bold text-white"
              >
                Start free assessment
              </a>
              <a
                href="#/certification"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-navy/20 px-5 py-3 text-sm font-semibold text-navy"
              >
                <ShieldCheck className="h-4 w-4" /> Verify
              </a>
            </div>
          </div>
        )}
      </nav>
      <SignInDialog open={signInOpen} onClose={() => setSignInOpen(false)} />
    </header>
  );
}
