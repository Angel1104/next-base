# praxis-next

Next.js base project for hackathons. Pre-configured with Praxis skills.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Connects to FastAPI backend at http://localhost:8000

## Run

```bash
cp .env.local.example .env.local
npm install
npm run dev
```

App runs at http://localhost:3000

## Structure

```
app/               ← Next.js App Router pages
  page.tsx         ← home page (example: list + create items)
  layout.tsx       ← root layout
lib/
  api.ts           ← base fetch wrapper (reads NEXT_PUBLIC_API_URL)
  items.ts         ← example resource client (get, create)
briefs/            ← architect plan briefs (input to /plan)
specs/cr/          ← Praxis CR files (output of /plan, updated by /build)
.claude/skills/    ← Praxis skills (plan, build, help)
```

## Praxis skills

```
/plan  describe what you want to build
/build <cr-id>
/help
```

## Conventions

- All API calls go through lib/api.ts — never fetch directly
- One file per resource in lib/ (items.ts, users.ts, ...)
- Client components use "use client" directive
- Env vars for the frontend must be prefixed with NEXT_PUBLIC_
