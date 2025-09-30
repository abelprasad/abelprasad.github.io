# Abel Prasad Portfolio Website

## Project Overview

Build a clean, modern portfolio website using vanilla HTML, CSS, and minimal JavaScript. The site should be a static single-page application showcasing professional work, skills, and background.

## Design Reference

The design should be inspired by the provided screenshots with these key elements:

- Clean, minimalist aesthetic with soft pastel color palette
- Left sidebar navigation with profile section
- Large, bold typography for headlines
- Colorful accent words in the hero section (purple and teal/green)
- Card-based project showcase with soft gradient backgrounds
- Smooth scrolling between sections
- Professional yet modern appearance

## Color Palette

- Background: Light gray/off-white (#f5f5f5 or similar)
- Sidebar: White (#ffffff)
- Card backgrounds: Soft gradients
  - Light blue: #e8f0ff to #d4e4ff
  - Mint green: #d4f5e9 to #b8f0d8
  - Soft pink: #ffe8f5 to #ffd4eb
  - Light yellow: #fff8d4 to #ffebb8
- Accent purple: #8b7dff or #9b8dff
- Accent teal/green: #00d9a3 or #00c896
- Text primary: #1a1a1a or #2d2d2d
- Text secondary: #666666

## File Structure

```
/
├── index.html
├── styles.css
└── script.js (minimal)
```

## Content Structure

### Sidebar (Fixed Left Navigation)

- Profile image placeholder (circular)
- Name: "Abel Prasad"
- Subtitle: "Engineer • Product-driven builder"
- Navigation menu:
  - Work
  - About
  - Services
  - Contact
- Social links (Email, GitHub, LinkedIn) as icon buttons
- "Download Résumé" CTA button (dark, prominent)

### Main Content Area

#### Hero Section (PORTFOLIO)

**Headline:**

```
Building clean, fast web experiences.
Shipping real products with [clarity] and [taste].
```

- "clarity" in purple color
- "taste" in teal/green color
- Subtext: "Focused on React/Node, data-driven features, and delightful details. Open to Summer 2026 internships & freelance collaborations."

#### Selected Work Section

**Title:** "Selected Work" with "More on GitHub" link

**Projects (4 cards in 2x2 grid):**

1. **Sathika Boutique** (Light blue gradient card)

   - Tech: React • Stripe
   - Description: "E-commerce with cart, search, and checkout. Designed for clarity and speed."

2. **Parking Spot Tracker** (Mint green gradient card)

   - Tech: Node • MongoDB
   - Description: "Campus-wide availability dashboard with alerts and lightweight API."

3. **Card Counting Trainer** (Soft pink gradient card)

   - Tech: Flask • React
   - Description: "Interactive trainer that quizzes running counts and next-card predictions."

4. **Spotify Smart Shuffle** (Light yellow gradient card)
   - Tech: Python • API
   - Description: "Improves shuffle by weighting energy/tempo; exports curated queues."

#### What I Do Section

**Title:** "What I do"

Three cards in a row:

1. **Product-first Engineering**

   - "Ship fast, validate early, iterate with data."

2. **Full-stack Web**

   - "React, Node/Express, REST APIs, MongoDB."

3. **Polished UX**
   - "Motion, micro-interactions, accessibility."

#### About Section

**Title:** "About"

**Content:**
"I'm Abel — a builder who learns by shipping. I focus on dependable, fast web apps with crisp UX. Recently: e-commerce flows, dashboards, and music tooling. AWS Cloud Practitioner certified."

#### Contact Section

**Title:** "Let's build something"

**Subtext:** "Email me or say hi on LinkedIn."

**Buttons:**

- "Email Abel" (primary CTA, dark button)
- "LinkedIn" (secondary)
- "GitHub" (secondary)

**Footer:**
"© 2025 Abel Prasad"

## Technical Requirements

### HTML Structure

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Implement smooth scroll anchors for navigation
- Include meta tags for responsive design and SEO
- Use appropriate heading hierarchy (h1, h2, h3)
- Add aria labels for accessibility

### CSS Requirements

- Use CSS Grid for main layout (sidebar + content area)
- Use CSS Grid for project cards (2x2 responsive grid)
- Use Flexbox for navigation, card internals, and button groups
- Implement nested CSS structure for organization
- Create smooth gradient backgrounds for project cards
- Add hover effects on interactive elements:
  - Cards: subtle lift and shadow
  - Buttons: color change or scale
  - Links: underline or color change
- Use CSS variables for colors and spacing
- Make fully responsive:
  - Desktop (1200px+): sidebar + content side-by-side
  - Tablet (768px-1199px): sidebar collapses to top
  - Mobile (<768px): single column, hamburger menu
- Use modern fonts (consider system font stack or Google Fonts like Inter, Manrope, or similar)

### JavaScript Requirements (Minimal)

- Smooth scroll behavior for navigation links
- Active section highlighting in navigation
- Optional: Simple fade-in animations on scroll
- Optional: Mobile menu toggle functionality
- Keep total JS under 100 lines

### Design Details

- Use consistent spacing (8px grid system)
- Card border radius: 16px or 20px
- Subtle shadows on cards (soft, not harsh)
- Typography:
  - Hero headline: Large (48-64px), bold, high contrast
  - Section titles: Medium-large (32-40px), bold
  - Body text: 16-18px, comfortable line height (1.6-1.8)
  - Use consistent font weights (400 for body, 600-700 for headings)
- Generous white space
- Clean, minimal aesthetic

### Accessibility

- Proper color contrast ratios
- Focus states for keyboard navigation
- Alt text for images
- Semantic HTML structure
- ARIA labels where appropriate

### Performance

- Optimize images (if any)
- Minimize CSS and JS if possible
- Use system fonts or load web fonts efficiently
- No external dependencies or frameworks

## Additional Notes

- The sidebar should feel like a persistent profile card
- Project cards should be visually distinct with different gradient backgrounds
- Keep the design clean and uncluttered
- Focus on readability and visual hierarchy
- The site should feel modern, professional, and welcoming
- Color accents (purple and teal) should be used sparingly but effectively

## Resume Data to Include

**Education:**

- Penn State University, Abington, PA
- B.A. in Computer Science, Expected May 2026
- Coursework: Discrete Mathematics, Data Structures and Algorithms
- Certifications: AWS AI Practitioner [in-progress]

**Skills:**

- AI/ML: NumPy, Pandas, TensorFlow, Transformers, RAG, MCP, Agentic AI
- Programming: Python, Java, JavaScript, C++
- Front-end: HTML, CSS, JavaScript, React, Vite
- Back-end: Node.js, Express.js, REST APIs, FastAPI
- Tools: GitHub, Linux, SQL, MongoDB, Docker
- Cloud: AWS EC2, S3, RDS, Azure, GCP

**Experience:**

- Sathika Boutique Website (Jun 2023 – Aug 2023)
- Freelance Front-End Developer
- Developed responsive e-commerce site using React with shopping cart and product listing

**Contact:**

- Email: abelprasad4@gmail.com
- Phone: (215) 827-7756
- LinkedIn: https://www.linkedin.com/in/abel-prasad/

## Implementation Priority

1. Create HTML structure with all content
2. Build CSS with mobile-first approach
3. Implement responsive layout
4. Add hover effects and transitions
5. Add minimal JavaScript for smooth interactions
6. Test across devices and browsers
7. Optimize and polish

## Success Criteria

- Clean, professional appearance matching reference design
- Fully responsive across all device sizes
- Fast loading time
- Accessible and semantic HTML
- Smooth, polished user experience
- Easy to maintain and update
