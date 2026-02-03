# MarkingLab

AI-powered grading UI built with React, Vite, TypeScript, Tailwind CSS, and shadcn-ui.

---

## Table of contents

- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Development notes](#development-notes)
- [Testing & linting](#testing--linting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Quick start

Prerequisites: Node.js (v16+), npm or your preferred package manager.

```sh
# Clone
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 (or the port Vite reports) to view the app.

---

## Available scripts

- `npm run dev` — Start the Vite dev server
- `npm run build` — Build the production bundle
- `npm run build:dev` — Build in development mode
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint
- `npm run test` — Run tests via Vitest

---

## Project structure

- `src/` — Application source
  - `assets/` — Images and static assets (favicon now points to `src/assets/logo.png`)
  - `components/` — Reusable components (shadcn-ui style primitives)
  - `hooks/` — Custom React hooks
  - `lib/` — Utility functions
  - `pages/` — Route pages
  - `test/` — Test utilities and examples
- `public/` — Static files served at the site root (contains `favicon.ico`)
- `index.html` — App entry and meta tags

---

## Development notes

- Styling: Tailwind CSS (see `tailwind.config.ts`) and `@tailwindcss/typography` plugin are included.
- UI primitives: This repo includes shadcn-style components under `src/components/ui`.
- Routing: `react-router-dom` is used for client-side routes.
- Data fetching & state: `@tanstack/react-query` is available for async data.

Favicon: an explicit link in `index.html` points to `/src/assets/logo.png` (you can replace or add sizes and formats in `public/` for wider compatibility).

---

## Testing & linting

- Tests are run with `vitest` (`npm run test`).
- Use `npm run lint` to run ESLint across the codebase.

---

## Deployment

Build the project with `npm run build` and deploy the generated `dist` folder to your hosting platform (Vercel, Netlify, GitHub Pages, etc.). Configure environment variables and custom domains via your provider.

---

## Contributing

1. Fork the repository and create a feature branch.
2. Run tests and linting locally before submitting a PR.
3. Open a pull request with a clear description of your changes.

---