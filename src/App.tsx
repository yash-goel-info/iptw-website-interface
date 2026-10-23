import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { CostSection, GroupBand } from "./components/Cost";
import { Audience, WhyMatters } from "./components/Why";
import WalkAway, { Steps } from "./components/WalkAway";
import { FaqPreview, FinalCta, Footer } from "./components/Closing";
import HowItWorks from "./pages/HowItWorks";
import Certification from "./pages/Certification";
import Clients from "./pages/Clients";
import Compare from "./pages/Compare";
import Pricing from "./pages/Pricing";
import FaqPage from "./pages/FaqPage";
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import { AssessmentProvider } from "./assessment/AssessmentContext";

/**
 * - Restores scroll to top on route change (or scrolls to a target section
 *   when arriving from another page via a #anchor link).
 * - Intercepts all in-page #anchor clicks: smooth-scrolls if the section
 *   exists on the current page, otherwise navigates home and scrolls there.
 */
function ScrollManager() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = (state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }))
      );
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const a = t.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = (a.getAttribute("href") ?? "").slice(1);
      // let router links (#/route) and bare "#" pass through
      if (!id || id.startsWith("/")) return;
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else navigate("/", { state: { scrollTo: id } });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [navigate]);

  return null;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page min-h-screen overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <Shell>
      <main>
        <Hero />
        <CostSection />
        <GroupBand />
        <WhyMatters />
        <Audience />
        <WalkAway />
        <Steps />
        <FaqPreview />
        <FinalCta />
      </main>
    </Shell>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AssessmentProvider>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/assessment"
          element={
            <Shell>
              <Assessment />
            </Shell>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <Shell>
              <HowItWorks />
            </Shell>
          }
        />
        <Route
          path="/certification"
          element={
            <Shell>
              <Certification />
            </Shell>
          }
        />
        <Route
          path="/clients"
          element={
            <Shell>
              <Clients />
            </Shell>
          }
        />
        <Route
          path="/compare"
          element={
            <Shell>
              <Compare />
            </Shell>
          }
        />
        <Route
          path="/pricing"
          element={
            <Shell>
              <Pricing />
            </Shell>
          }
        />
        <Route
          path="/faq"
          element={
            <Shell>
              <FaqPage />
            </Shell>
          }
        />
        <Route
          path="/about"
          element={
            <Shell>
              <About />
            </Shell>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </AssessmentProvider>
    </HashRouter>
  );
}
