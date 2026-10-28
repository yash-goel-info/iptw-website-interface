import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, LockKeyhole, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignInDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector<HTMLElement>("input")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Enter your work email and password to continue.");
      return;
    }
    setError("");
    onClose();
    navigate("/assessment");
  }

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-navy-900/35 px-5 py-8 backdrop-blur-sm" role="presentation" onMouseDown={onClose}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="sign-in-title" className="relative w-full max-w-md rounded-[1.75rem] bg-white p-7 shadow-2xl shadow-navy-900/20 sm:p-9" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-5 top-5 grid size-9 place-items-center rounded-full text-slate-400 transition hover:bg-navy-50 hover:text-navy" aria-label="Close sign in">
          <X className="size-4" />
        </button>
        <div className="mb-7 flex size-11 items-center justify-center rounded-2xl bg-navy-50 text-navy">
          <LockKeyhole className="size-5" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">IPTW member access</p>
        <h2 id="sign-in-title" className="mt-2 font-display text-3xl font-extrabold text-ink">Welcome back</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">Sign in to continue your assessment journey and pick up where you left off.</p>
        <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-xs font-semibold text-ink" htmlFor="sign-in-email">
            Work email
            <input id="sign-in-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal text-ink outline-none transition placeholder:text-slate-400 focus:border-navy focus:ring-4 focus:ring-navy/10" />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold text-ink" htmlFor="sign-in-password">
            Password
            <input id="sign-in-password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm font-normal tracking-[0.2em] text-ink outline-none transition placeholder:text-slate-400 focus:border-navy focus:ring-4 focus:ring-navy/10" />
          </label>
          {error && <p role="alert" className="text-sm font-medium text-crimson">{error}</p>}
          <button type="submit" className="group mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy px-5 text-sm font-bold text-white shadow-lg shadow-navy/20 transition hover:bg-navy-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25">
            Continue to assessment
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </button>
        </form>
        <p className="mt-5 text-center text-xs text-slate-400">Your assessment workspace is private and secure.</p>
      </div>
    </div>
  );
}
