export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  flagship?: boolean;
}

export const allProjects: Project[] = [
  {
    title: "SENTINEL",
    description: "Defense flight intelligence platform. Ingests live ADS-B aircraft data, builds behavioral baselines per entity, and scores deviations across altitude, speed, and heading \u2014 surfacing anomalies with LLM summaries on a live map. JWT auth + RBAC. Shipped via GitHub Actions \u2192 Docker Hub \u2192 self-hosted server.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "Angular", "Docker"],
    link: "https://github.com/abelprasad/sentinel",
    flagship: true
  },
  {
    title: "Scout",
    description: "Mission-agnostic agent framework running on my home server. Generic discover \u2192 score \u2192 notify pipeline with pluggable missions \u2014 point it at anything. Local LLM scoring via Ollama, Telegram digests, web dashboard.",
    tags: ["Python", "FastAPI", "Playwright", "Ollama", "SQLite"],
    link: "https://github.com/abelprasad/Scout"
  },
  {
    title: "DOGSRUN",
    description: "Shelter-to-rescue matching platform for a real nonprofit, live in production. 150+ dogs, shelter and rescue registration flows, 501(c)(3) approval pipeline, alert matching engine, admin portal. Hardened API \u2014 45/45 tests passing.",
    tags: ["Next.js 15", "Supabase", "TypeScript", "Vercel"],
    link: "https://dogsrun.org"
  },
  {
    title: "Fillr",
    description: "AI job-application autofill as a Chrome extension. Detects 40+ field types across Greenhouse, Lever, Workday, Taleo, and LinkedIn \u2014 generates cover letters and custom answers grounded in your actual resume.",
    tags: ["JavaScript", "Chrome MV3", "Groq", "PDF.js"],
    link: "https://github.com/abelprasad/fillr"
  },
  {
    title: "Mini-Pupper Robotics",
    description: "Senior capstone: secured a quadruped robot's control network with mTLS across microservices. MongoDB telemetry pipeline, Redis state layer, AprilTag detection with ROS 2 for autonomous maze navigation without GPS.",
    tags: ["ROS 2", "Python", "MongoDB", "Redis", "mTLS"],
    link: "https://github.com/abelprasad"
  },
  {
    title: "FanTravels",
    description: "Full-stack app connecting pop-culture fandom with UNESCO World Heritage Sites. Check-ins, posts, badges, and PostGIS geolocation mapping.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "PostGIS"],
    link: "https://github.com/abelprasad/Fan-Travels"
  },
];
