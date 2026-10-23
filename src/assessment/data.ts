export type PlanId = "free" | "gold" | "premium";

export interface Plan {
  id: PlanId;
  label: string;
  title: string;
  description: string;
  available: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "free",
    label: "Free",
    title: "Quick self-check",
    description: "6 quick questions, just you. Instant score, no certificate.",
    available: true,
  },
  {
    id: "gold",
    label: "Gold",
    title: "Get certified",
    description: "Full team assessment. Rating & certificate in 24 hours.",
    available: false,
  },
  {
    id: "premium",
    label: "Premium",
    title: "Certify & track yearly",
    description: "Everything in Gold, plus year-on-year trend analytics.",
    available: false,
  },
];

export const COMPANY_SIZES = ["1–50", "51–250", "251–1000", "1000+"] as const;

export const INDUSTRIES = [
  "Financial services & BFSI",
  "Technology & IT services",
  "Manufacturing",
  "Healthcare",
  "Other",
] as const;

export interface CompanyDetails {
  companyName: string;
  companySize: string;
  industry: string;
  name: string;
  role: string;
  email: string;
  storageConsent: boolean;
  benchmarkConsent: boolean;
}

export const INITIAL_DETAILS: CompanyDetails = {
  companyName: "",
  companySize: COMPANY_SIZES[0],
  industry: INDUSTRIES[0],
  name: "",
  role: "",
  email: "",
  storageConsent: false,
  benchmarkConsent: false,
};

/* ---------- journey structure ---------- */

export const TOTAL_STEPS = 10;

export const STEP = {
  plan: 1,
  details: 2,
  welcome: 3,
  firstChapter: 4,
  results: 10,
} as const;

export const STEP_LABELS: Record<number, string> = {
  1: "Choose a plan",
  2: "Your details",
  3: "Welcome",
  10: "Your score",
};

/* ---------- questions ---------- */

export const SCALE = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
] as const;

export const QUESTION_INTRO = "Two quick questions per topic — real answers, not a formality. About 3 minutes total.";

export interface Statement {
  id: string;
  text: string;
}

export interface Chapter {
  id: string;
  tabLabel: string;
  topic: string;
  heading: string;
  statements: [Statement, Statement];
}

export const CHAPTERS: Chapter[] = [
  {
    id: "leadership",
    tabLabel: "Leadership",
    topic: "Leadership & Trust",
    heading: "Let's talk about the people steering the ship.",
    statements: [
      { id: "leadership-1", text: "When leadership makes a tough call, I understand why." },
      { id: "leadership-2", text: "I trust leadership to do the right thing, even when no one's watching." },
    ],
  },
  {
    id: "growth",
    tabLabel: "Growth",
    topic: "Growth & Development",
    heading: "Now, where you're headed from here.",
    statements: [
      { id: "growth-1", text: "I can clearly see how to grow here, not just what to do next." },
      { id: "growth-2", text: "The company invests real time and budget in building my skills." },
    ],
  },
  {
    id: "compensation",
    tabLabel: "Compensation",
    topic: "Compensation & Fairness",
    heading: "The part everyone thinks about but few discuss openly.",
    statements: [
      { id: "compensation-1", text: "I understand how pay decisions are made here." },
      { id: "compensation-2", text: "I believe I'm paid fairly relative to my peers here." },
    ],
  },
  {
    id: "culture",
    tabLabel: "Culture",
    topic: "Culture & Belonging",
    heading: "Do you feel like you belong here, not just tolerated?",
    statements: [
      { id: "culture-1", text: "I can raise a disagreement here without fear of consequences." },
      { id: "culture-2", text: "I feel like I genuinely belong here, not just tolerated." },
    ],
  },
  {
    id: "worklife",
    tabLabel: "Work-life",
    topic: "Work-Life & Wellbeing",
    heading: "Sustainable, not just survivable.",
    statements: [
      { id: "worklife-1", text: "I can take time off or log off without guilt or backlash." },
      { id: "worklife-2", text: "My workload is sustainable most weeks, not just some." },
    ],
  },
  {
    id: "innovation",
    tabLabel: "Innovation",
    topic: "Innovation & Autonomy",
    heading: "Last one — ownership, not just execution.",
    statements: [
      { id: "innovation-1", text: "I have real say in how I do my work, not just what I do." },
      { id: "innovation-2", text: "When something I try fails, it's treated as learning, not blame." },
    ],
  },
];

export type Answers = Record<string, number>;

export function chapterForStep(step: number): { chapter: Chapter; index: number } | null {
  const index = step - STEP.firstChapter;
  const chapter = CHAPTERS[index];
  return chapter ? { chapter, index } : null;
}
