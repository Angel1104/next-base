# praxis-next

Next.js base for hackathons — clone, install, run.

Includes [Praxis](https://github.com/Angel1104/praxis-core) skills pre-installed.
Connects to [praxis-fastapi](https://github.com/Angel1104/praxis-fastapi) on port 8000.

## Quickstart

```bash
git clone https://github.com/Angel1104/next-base.git
cd next-base
cp .env.local.example .env.local
npm install
npm run dev
```

App: http://localhost:3000

Start the FastAPI backend first — the app fetches from `http://localhost:8000`.

## What's included

- Next.js 15 App Router + TypeScript + Tailwind CSS
- `lib/api.ts` — fetch wrapper pointing to FastAPI
- `lib/items.ts` — example resource (get/create items)
- `app/page.tsx` — working UI connected to the backend
- `stitch/` — drop Stitch exports here
- `briefs/` — drop architect briefs here

## Build your feature

**Plain description:**
```
/plan  I want to add a dashboard page
/build <cr-id>
```

**From an architect brief:**
```
/plan  briefs/dashboard.md
/build <cr-id>
```

## Stitch integration

1. Design your screen at [stitch.withgoogle.com](https://stitch.withgoogle.com)
2. Download the ZIP — contains `code.html`, `DESIGN.md`, and a screenshot
3. Extract into `stitch/<screen-name>/`
4. Run:
```
/plan  convert stitch/<screen-name> to a Next.js page
/build <cr-id>
```

Praxis reads `DESIGN.md` for the design system, `code.html` for structure and Tailwind
tokens, and converts everything into proper TSX components wired to your project.

## Project structure

```
app/               ← Next.js App Router pages
lib/
  api.ts           ← base fetch wrapper (reads NEXT_PUBLIC_API_URL)
  items.ts         ← example resource client
stitch/            ← Stitch export folders go here
briefs/            ← architect plan briefs go here
specs/cr/          ← Praxis CR files (auto-managed)
.claude/skills/    ← Praxis skills (plan, build, help)
```
