export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const allExperience: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Ascensus",
    period: "Jul 2026 – Present",
    bullets: [
      "Full-stack engineer on the Application Development team in Dresher, PA, working across the stack while completing a CS degree at Penn State Abington.",
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "DOGSRUN",
    period: "Oct 2025 – Present",
    bullets: [
      "Rebuilt the shelter portal from scratch on Next.js 15 and Supabase, replacing a Power Pages/Dataverse implementation — migrated 150+ PG County dogs with enriched profiles and kept zero downtime.",
      "Shipped a digest-based alert system across dog intake, rescue matching, and adoptions wired directly into Supabase realtime — orgs get notified instantly without polling.",
      "Hardened the API with a full Playwright test suite — 45/45 passing across auth, org approval flows, and alert delivery."
    ]
  },
  {
    role: "Software Engineer",
    company: "Scout — Autonomous Internship Agent",
    period: "Dec 2025 – Present",
    bullets: [
      "Built a self-hosted multi-agent system that automatically finds, scores, and tracks internship postings — LLM planning handles goal decomposition, Playwright handles scraping, FastAPI + SQLite handle everything else.",
      "Cut manual review time by 80% by rewriting the scoring engine with role/skill keyword matching and negative filters — went from skimming 50+ noisy results daily to a tight shortlist of relevant postings.",
      "Delivers a ranked digest every morning via HTML email and Telegram with each posting's score, match rationale, and apply link — nothing slips through across the boards it monitors."
    ]
  }
];
