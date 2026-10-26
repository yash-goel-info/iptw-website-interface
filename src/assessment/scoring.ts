import { CHAPTERS, SCALE, type Answers, type Chapter } from "./data";

/**
 * PROTOTYPE scoring configuration.
 * IPTW has not supplied official weights or answer mappings yet, so every
 * statement is weighted equally and each answer is mapped linearly from
 * 0% (Strongly disagree) to 100% (Strongly agree). Replace `weightFor` and
 * `RESULT_TIERS` with the approved methodology when available.
 */
export const SCORING_IS_PROTOTYPE = true;

const SCALE_MIN = SCALE[0].value;
const SCALE_MAX = SCALE[SCALE.length - 1].value;

const weightFor = (_statementId: string) => 1;

export interface ResultTier {
  minScore: number;
  headline: string;
  body: string;
}

/** Highest `minScore` first. Only the top tier copy was supplied by IPTW; the other tiers are neutral placeholders. */
export const RESULT_TIERS: ResultTier[] = [
  {
    minScore: 75,
    headline: "Wow — this is looking genuinely strong.",
    body: "Scores like this put you in good company. Let's see if it holds up when your whole team weighs in — that's where the real certification comes from.",
  },
  {
    minScore: 50,
    headline: "A solid foundation, with room to grow.",
    body: "There's real strength here and a few areas worth a closer look. Your whole team's responses are what turn this snapshot into a clear picture — that's where the real certification comes from.",
  },
  {
    minScore: 0,
    headline: "An honest starting point.",
    body: "Every strong workplace starts with a clear picture of where it stands today. Your whole team's responses are what turn this snapshot into a roadmap — that's where the real certification comes from.",
  },
];

export interface ChapterScore {
  chapter: Chapter;
  score: number;
}

export interface AssessmentResult {
  score: number;
  tier: ResultTier;
  strongest: ChapterScore;
  chapterScores: ChapterScore[];
}

function normalise(value: number) {
  return (value - SCALE_MIN) / (SCALE_MAX - SCALE_MIN);
}

function weightedAverage(ids: string[], answers: Answers) {
  let total = 0;
  let weights = 0;
  for (const id of ids) {
    const value = answers[id];
    if (value === undefined) continue;
    const w = weightFor(id);
    total += normalise(value) * w;
    weights += w;
  }
  return weights === 0 ? 0 : (total / weights) * 100;
}

export function computeResult(answers: Answers): AssessmentResult {
  const chapterScores: ChapterScore[] = CHAPTERS.map((chapter) => ({
    chapter,
    score: weightedAverage(
      chapter.statements.map((s) => s.id),
      answers
    ),
  }));

  const allIds = CHAPTERS.flatMap((c) => c.statements.map((s) => s.id));
  const score = Math.round(weightedAverage(allIds, answers));
  const tier = RESULT_TIERS.find((t) => score >= t.minScore) ?? RESULT_TIERS[RESULT_TIERS.length - 1];
  const strongest = chapterScores.reduce((best, cur) => (cur.score > best.score ? cur : best), chapterScores[0]);

  return { score, tier, strongest, chapterScores };
}
