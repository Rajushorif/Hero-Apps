# Copilot / Agent Instructions — Hero Market (Hero-Apps)

This repository is a small React + Vite single-page app (SPA) demo of an App Store.
Keep guidance short and concrete — focus on app structure, entry points, conventions, and common tasks.

Architecture & Big Picture
- Single-page React app using Vite. Entry: [src/main.jsx](src/main.jsx).
- Router and routes are defined in [src/App.jsx](src/App.jsx). Pages live in [src/pages](src/pages).
- Reusable UI lives in [src/components](src/components). Data is in [src/data/apps.json](src/data/apps.json).
- Styling is plain CSS (see [src/index.css](src/index.css) and [src/App.css](src/App.css)).
- Charts use `recharts` for reviews; routing uses `react-router-dom` v6.

Dev / Build / Scripts
- Install: `npm install`
- Dev server: `npm run dev` (uses `vite`)
- Build: `npm run build`; preview production build with `npm run preview`.
- Lint: `npm run lint` (ESLint config at the repo root).

Project-specific Patterns & Conventions
- Files use `.jsx` for React components and default exports for pages/components.
- Routes are added by editing `src/App.jsx` and adding a `<Route path="..." element={<MyPage/>} />`.
- Persisted installation state: the app stores installed apps in `localStorage` (see installation page logic and README). Search for `localStorage` to find read/write points.
- Data-driven UI: app list and details source from `src/data/apps.json`; modifying that file updates the catalog.
- Contribution/Git hint: README asks contributors to update the Contribution button URL in the header — check `src/components/Header.jsx`.

Integration Points & Dependencies
- External libs: `react`, `react-dom`, `react-router-dom`, `recharts`, `vite`.
- No backend/API — all data is local JSON + `localStorage`.

When Editing
- Preserve default exports and file naming. Add new components in `src/components` and pages in `src/pages`.
- Keep CSS file placement consistent (global styles in `src/index.css` or `src/App.css`; small component styles can go in the same folder).
- Update routes in `src/App.jsx` when adding pages.

Examples
- Add a route:

  1. Create `src/pages/NewPage.jsx` exporting default component.
  2. Edit `src/App.jsx` and add: `<Route path="/new" element={<NewPage/>} />`.

- Read/Write installed apps (search for `localStorage`): use `JSON.parse(localStorage.getItem('installed')||'[]')` and `localStorage.setItem('installed', JSON.stringify(...))`.

What NOT to change
- Do not replace Vite or routing setup unless adding explicit reasons. Keep `package.json` scripts intact to avoid breaking the dev flow.

Missing/Notable Items
- There is no CI config or automated tests present — prefer small, manual verification (dev server + build preview).
- No `.github/copilot-instructions.md` existed prior to this file — merge carefully if you add more guidance.

If you're unsure
- Search for the term you need (`localStorage`, `recharts`, `apps.json`, `Header`) to find concrete examples.
- Prefer small, incremental changes and verify with `npm run dev` and `npm run build`.

Questions for the maintainer
- Do you want tests or CI added? If yes, prefer GitHub Actions with `npm run build` + lint.

— End
