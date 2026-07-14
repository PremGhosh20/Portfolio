# Prem Shrikant Ghosh — Developer Portfolio

A premium, recruiter-focused developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and GSAP. Designed to showcase professional experience, projects, skills, and achievements with world-class animations and interactions.

**Live Demo:** [https://premghosh.github.io/Portfolio/](https://premghosh.github.io/Portfolio/)

---

## Features

- **Premium UI/UX** — Glassmorphism, gradients, and micro-interactions inspired by Vercel, Stripe, and Linear
- **Smooth Animations** — Framer Motion, GSAP, AOS, Typed.js, and Lenis smooth scrolling
- **Interactive Elements** — Command palette (Ctrl+K), animated cursor, tilt cards, magnetic buttons
- **Dark/Light Mode** — Theme toggle with persistent preference
- **GitHub Integration** — Live repository data via GitHub REST API
- **Contact Form** — EmailJS integration with validation and toast notifications
- **SEO Optimized** — Open Graph, Twitter Cards, structured data, sitemap, robots.txt
- **Fully Responsive** — Mobile-first design with accessible navigation
- **GitHub Pages Ready** — One-command deployment with gh-pages

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 19, Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion, GSAP, AOS, Typed.js |
| 3D | Three.js, React Three Fiber |
| Scroll | Lenis, React Scroll |
| Icons | React Icons |
| Contact | EmailJS |
| Deploy | gh-pages |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/premghosh/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) in your browser.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_USERNAME=premghosh
```

---

## Project Structure

```
src/
├── animations/       # Framer Motion variants
├── components/       # Reusable UI components
│   ├── effects/      # Background effects (particles, 3D)
│   └── ui/           # Button, Card, Badge, Toast
├── constants/        # Site data and content
├── hooks/            # Custom React hooks
├── layouts/          # Page layouts
├── pages/            # Route pages
├── sections/         # Portfolio sections
├── styles/           # Global CSS
└── utils/            # Helper functions
public/
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── resume.pdf        # Add your resume here
```

---

## Customization

### Update Personal Information

Edit `src/constants/index.js` to update:

- Name, email, social links
- Experience, projects, education
- Skills, certifications, achievements
- GitHub username

### Add Resume

Place your resume PDF at `public/resume.pdf`.

### Change Base Path

If deploying to a different GitHub Pages URL, update:

1. `vite.config.js` — `base` property
2. `package.json` — `homepage` field
3. `src/main.jsx` — `BrowserRouter basename`

---

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

Create a repository named `Portfolio` on GitHub.

### Step 2: Push Code

```bash
git init
git add .
git commit -m "Initial commit: Premium developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git push -u origin main
```

### Step 3: Deploy

```bash
npm run deploy
```

This builds the project and pushes the `dist` folder to the `gh-pages` branch.

### Step 4: Enable GitHub Pages

1. Go to **Settings → Pages** in your repository
2. Set **Source** to `Deploy from a branch`
3. Select branch: `gh-pages`, folder: `/ (root)`
4. Save

Your site will be live at `https://YOUR_USERNAME.github.io/Portfolio/`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Performance

- Code splitting with manual chunks (vendor, motion, three)
- Lazy-loaded 404 page
- Optimized animations with `will-change` and GPU acceleration
- Intersection Observer for scroll-triggered animations
- Passive event listeners for scroll performance

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Prem Shrikant Ghosh**
