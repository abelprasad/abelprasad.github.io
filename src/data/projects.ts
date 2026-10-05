export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  flagship?: boolean;
}

export const allProjects: Project[] = [
  {
    title: "SENTINEL",
    description: "Defense flight intelligence platform. Ingests live ADS-B aircraft data, builds behavioral baselines per entity, and scores deviations across altitude, speed, and heading — surfacing anomalies with LLM-generated summaries on a live map. JWT auth + RBAC. Shipped via GitHub Actions → Docker Hub → self-hosted server.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Angular", "Docker"],
    link: "https://github.com/abelprasad/sentinel",
    flagship: true
  },
  {
    title: "Scout",
    description: "Mission-agnostic AI agent framework running on my home server. Autonomous discover → score → notify loop with pluggable missions — point it at anything. Local LLM scoring via Ollama, Telegram digests, web dashboard.",
    tags: ["Python", "FastAPI", "Playwright", "Ollama", "SQLite"],
    link: "https://github.com/abelprasad/Scout"
  },
  {
    title: "DOGSRUN",
    description: "Shelter-to-rescue matching platform for a real nonprofit, live in production. 150+ dogs, shelter and rescue registration flows, 501(c)(3) approval pipeline, alert matching engine, admin portal. Hardened API — 45/45 tests passing.",
    tags: ["Next.js 15", "Supabase", "TypeScript", "Vercel"],
    link: "https://dogsrun.org"
  },
  {
    title: "Fillr",
    description: "AI job-application autofill as a Chrome extension. Detects 40+ field types across Greenhouse, Lever, Workday, Taleo, and LinkedIn — Groq-powered LLMs generate cover letters and custom answers grounded in your actual resume via PDF.js parsing.",
    tags: ["JavaScript", "Chrome MV3", "Groq", "PDF.js"],
    link: "https://github.com/abelprasad/fillr"
  },
  {
    title: "Mini-Pupper Robotics",
    description: "Senior capstone: secured a quadruped robot's control network with mTLS across microservices. MongoDB telemetry pipeline, Redis state layer, AprilTag detection with ROS 2 for autonomous maze navigation without GPS.",
    tags: ["ROS 2", "Python", "MongoDB", "Redis", "mTLS"]
  },
  {
    title: "FanTravels",
    description: "Full-stack app connecting pop-culture fandom with UNESCO World Heritage Sites. Check-ins, posts, badges, and PostGIS geolocation mapping.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "PostGIS"],
    link: "https://github.com/abelprasad/Fan-Travels"
  },
];
