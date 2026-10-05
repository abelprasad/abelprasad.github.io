export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
}

export const allExperience: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Ascensus",
    location: "Dresher, PA",
    period: "Jul 2026 — Present",
    bullets: [
      "Full-stack engineer on the Application Development team.",
      "Shipping production software while completing a B.S. in Computer Science at Penn State Abington (Dec 2026)."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "DOGSRUN",
    period: "Feb 2026 — Jun 2026",
    bullets: [
      "Rebuilt the shelter portal from scratch on Next.js 15 and Supabase — migrated 150+ PG County dogs with enriched profiles and zero downtime.",
      "Shipped a digest-based alert system across intake, rescue matching, and adoptions wired into Supabase realtime.",
      "Hardened the API with a full Playwright test suite — 45/45 passing across auth, org approval flows, and alert delivery."
    ]
  }
];
