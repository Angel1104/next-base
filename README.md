# praxis-next

Next.js base for hackathons — clone, install, run.

Includes [Praxis](https://github.com/Angel1104/praxis-core) skills pre-installed.
Connects to [praxis-fastapi](https://github.com/Angel1104/fastapi-base) on port 8000.

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

## Build your feature

```
/plan  describe what you want to build
/build <cr-id>
```

Or pass an architect brief:

```
/plan briefs/my-feature.md
```

## Stitch integration

Generate your UI at [stitch.withgoogle.com](https://stitch.withgoogle.com), export React + Tailwind,
paste the component into `app/` or `components/`, then use `/plan` to wire it to the backend.
