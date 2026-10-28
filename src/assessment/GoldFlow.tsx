import { FormEvent, useState } from "react";
import { Check, CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";
import { useAssessment } from "./AssessmentContext";
import { btnNavy, btnSecondary } from "./styles";

export default function GoldFlow({ stage }: { stage: "plan" | "checkout" | "success" }) {
  const { goTo } = useAssessment();
  const [checkoutStage, setCheckoutStage] = useState(stage === "plan" ? "plan" : stage);

  if (checkoutStage === "plan") {
    return (
      <section className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full bg-gold-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-700">Confirm your plan</span>
        <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Let&apos;s get your team certified and tracked year over year.</h1>
        <div className="mt-12 grid gap-5 text-left md:grid-cols-2">
          <button type="button" onClick={() => setCheckoutStage("checkout")} className="group rounded-2xl border-2 border-navy bg-white p-7 text-left shadow-[0_20px_50px_rgba(15,26,64,0.08)] transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/20">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">Gold</p>
            <p className="mt-4 font-display text-2xl text-ink">Get certified</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Full team assessment, star rating, and certificate within 24 hours.</p>
            <span className="mt-6 inline-flex text-sm font-bold text-navy">Continue with Gold →</span>
          </button>
          <div className="rounded-2xl bg-navy p-7 text-left shadow-[0_20px_50px_rgba(15,26,64,0.22)]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Premium</p>
            <p className="mt-4 font-display text-2xl text-white">Certify &amp; track</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">Everything in Gold, plus year-on-year analytics and targets.</p>
            <span className="mt-6 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80">Coming soon</span>
          </div>
        </div>
      </section>
    );
  }

  if (checkoutStage === "checkout") {
    return <GoldCheckout onComplete={() => setCheckoutStage("success")} onBack={() => setCheckoutStage("plan")} />;
  }

  return (
    <section className="mx-auto flex max-w-lg flex-col items-center text-center">
      <div className="grid size-16 place-items-center rounded-full border-2 border-navy text-navy"><Check className="size-8" /></div>
      <h1 className="mt-7 font-display text-4xl font-extrabold text-ink">You&apos;re on Gold.</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">Payment confirmed. Next, invite your team — your certification is based on their answers, not just yours.</p>
      <button type="button" onClick={() => goTo(2)} className={`${btnNavy} mt-7`}>Continue to your assessment →</button>
    </section>
  );
}

function GoldCheckout({ onComplete, onBack }: { onComplete: () => void; onBack: () => void }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!name || number.replace(/\s/g, "").length < 12 || !expiry || !cvc) { setError("Please complete all payment fields."); return; }
    onComplete();
  }
  return (
    <section className="mx-auto max-w-3xl">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-7 text-left shadow-[0_20px_50px_rgba(15,26,64,0.08)] ring-1 ring-slate-200/80 sm:p-8">
        <div className="flex items-center justify-between"><h1 className="font-display text-2xl text-ink">Checkout</h1><ShieldCheck className="size-5 text-navy" /></div>
        <p className="mt-2 text-sm text-slate-500">Gold certification · ₹[PRICE] / year</p>
        <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
          <Field label="Name on card" value={name} onChange={setName} placeholder="As it appears on card" />
          <Field label="Card number" value={number} onChange={setNumber} placeholder="4242 4242 4242 4242" />
          <div className="grid grid-cols-2 gap-4"><Field label="Expiry" value={expiry} onChange={setExpiry} placeholder="MM / YY" /><Field label="CVC" value={cvc} onChange={setCvc} placeholder="123" /></div>
          {error && <p className="text-sm font-medium text-crimson" role="alert">{error}</p>}
          <button type="submit" className={`${btnNavy} mt-2 w-full`}><CreditCard className="size-4" /> Confirm &amp; subscribe</button>
        </form>
        <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-400"><LockKeyhole className="size-3" /> Prototype checkout — no real payment is processed.</p>
      </div>
      <button type="button" onClick={onBack} className={`${btnSecondary} mx-auto mt-6 flex`}>Back to plans</button>
    </section>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  return <label className="flex flex-col gap-2 text-xs font-semibold text-ink">{label}<input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-11 rounded-xl border border-slate-200 px-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-navy focus:ring-4 focus:ring-navy/10" /></label>;
}
