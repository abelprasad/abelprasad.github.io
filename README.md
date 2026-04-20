# abelprasad.github.io

Personal portfolio and blog. Built with React, TypeScript, Tailwind CSS, and Vite. Deployed via GitHub Pages.

## Stack

- React + TypeScript
- Tailwind CSS
- Vite
- React Router
- Marked (blog markdown rendering)
- Groq API (AI assistant)

## Development

```bash
npm install
npm run dev
```

Requires a `.env.local` with:

```
VITE_GROQ_API_KEY=your_key_here
```

## Blog

Posts live in `/posts/*.md` with frontmatter:

```markdown
---
title: "Post Title"
date: "2026-04-20"
tags: ["AI", "Projects"]
excerpt: "One sentence summary shown on the card."
---

Post content here...
```

Add a file, push, and it deploys automatically.
