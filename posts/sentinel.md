---
title: "SENTINEL: Building a Defense Flight Intelligence Platform as a CS Student"
excerpt: "Why I built a live ADS-B threat correlation platform on a server under my desk — and what it has to do with Lockheed Martin."
date: 2026-06-24
tags: ["SENTINEL", "Defense", "Java", "Self-Hosted"]
---

ADS-B data is public. Every commercial flight, most general aviation aircraft, and more military platforms than you'd expect broadcast their position continuously. You can pull live global airspace data for free, right now, from a handful of open aggregators. What almost nobody does is build real infrastructure to do something useful with it.

That gap is SENTINEL.

## Why I Built This

I'm targeting defense — Lockheed Martin, Raytheon, Northrop Grumman. These companies hire differently than a SaaS startup. They're not looking for someone who can scaffold a Next.js app and wire up Stripe. They want engineers who think in systems, who understand operational context, and who can build software that matters in high-stakes environments.

A portfolio of CRUD apps and web dashboards doesn't differentiate you there. What gets attention is a student who ships operational tooling in the same problem space — before the interview, before the internship, before anyone told them to.

SENTINEL is that proof of work. It's not a tutorial project. It's not a toy. It runs live, ingests real data, and does something non-trivial with it.

## What SENTINEL Does

At its core, SENTINEL is an airspace intelligence platform. It ingests live ADS-B position data, correlates every aircraft against threat classification data, and renders the result on an interactive map with real-time updates. When an aircraft of interest enters a monitored region, the system flags it for operator review.

The correlation layer is where most of the interesting work happens. ADS-B hands you position and identity — tail numbers, ICAO hex codes, altitude, velocity. SENTINEL takes that stream and connects it against a classification database to surface what's actually worth watching. That means handling high-frequency updates, deduplicating noisy data, and resolving aircraft identity across multiple concurrent feeds without falling behind.

The platform also includes AI-assisted analysis through Groq. Operators can query the system in natural language — ask about airspace patterns over a region, request a summary of flagged activity, get contextual analysis based on live data. It's not autonomous decision-making; it's a force multiplier for human operators working through a lot of information quickly.

## The Stack

Java 21, Spring Boot, Angular, PostgreSQL, Docker. The backend handles ingestion, correlation logic, and the REST API. The Angular frontend renders the live map and operator interface. PostgreSQL stores everything — aircraft records, correlation results, historical tracks.

The whole thing runs on a homelab server in my room, publicly accessible through a Cloudflare Tunnel. No cloud bill, no managed infrastructure, no vendor between me and the machine.

The self-hosting is intentional. Defense systems don't run on Vercel. They run on hardware someone controls, often in environments with strict networking constraints. Operating your own server — dealing with uptime, networking, TLS, deployment pipelines — builds intuition you can't get from deploying to a PaaS. I wanted that intuition before I ever step foot in a contractor environment.

## Where It's Going

The current version handles live ingestion, aircraft correlation, the interactive map, and AI-assisted analysis. It works. The next phase expands the threat correlation coverage and starts building toward pattern-of-life analysis — tracking aircraft behavior over time, not just at a single point.

Defense hiring moves slowly. A platform like this doesn't close a job offer. But it changes the conversation in an interview. Instead of explaining what I could build, I can show something that already runs — something that reflects real engineering judgment in a domain these companies care about.

If you want to see it live: [sentinel.abelprasad.dev/public](https://sentinel.abelprasad.dev/public)
