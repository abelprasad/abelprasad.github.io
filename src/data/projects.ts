export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const allProjects: Project[] = [
  {
    title: "SENTINEL",
    description: "Defense-focused flight intelligence platform. Ingests live ADS-B data, correlates aircraft with threat databases, and visualizes airspace activity on an interactive map. Built for real operational use cases in defense and airspace monitoring.",
    tags: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "Groq", "Docker"],
    link: "https://sentinel.abelprasad.dev/public"
  },
  {
    title: "DOGSRUN",
    description: "Dog Shelter & Rescue Unification Network — nonprofit platform connecting shelters and rescues across the country. Features 501(c)(3) org approval flows, 150+ PG County dogs with enriched profiles, real-time alert system, full admin portal, and a hardened API with 45/45 security tests passing.",
    tags: ["Next.js 15", "Supabase", "Resend", "Vercel", "Sentry"],
    link: "https://dogsrun.org"
  },
  {
    title: "Scout",
    description: "Self-hosted multi-agent internship detection and outreach system. Crawls GitHub internship repos, scores 2,700+ listings against a custom rubric (location, stack, title, AI focus), delivers a ranked daily digest via HTML email and Telegram, and auto cold-emails high-scoring companies via Gmail SMTP with resume attached.",
    tags: ["FastAPI", "SQLite", "Playwright", "Ollama", "Python"],
    link: "https://github.com/abelprasad"
  },
  {
    title: "Fillr",
    description: "AI-powered Chrome extension that automates job applications with one-click autofill. Features intelligent field detection across 40+ types, AI-generated cover letters and custom answers using Groq/Llama, application tracking, and privacy-first local storage.",
    tags: ["Chrome Extension", "JavaScript", "Groq AI", "Manifest V3"],
    link: "https://github.com/abelprasad/fillr"
  },
  {
    title: "Mini-Pupper Robotics",
    description: "Capstone robotics project securing a quadruped robot's control network with mTLS across all microservices. Built a MongoDB telemetry pipeline and Redis state layer for real-time sensor inspection, and integrated AprilTag detection with a ROS2 Python control layer for autonomous maze navigation without GPS.",
    tags: ["ROS2", "Python", "MongoDB", "Redis", "mTLS"],
    link: "https://github.com/abelprasad"
  },
  {
    title: "FanTravels",
    description: "Full-stack web app connecting pop-culture fandom with UNESCO World Heritage Sites. Features user check-ins, posts, badges, and geolocation mapping with PostGIS.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "PostGIS", "Tailwind"],
    link: "https://github.com/abelprasad/Fan-Travels"
  },
];
