# Poki Assignment: Pokémon Explorer

This project is a Pokémon Explorer web app built with [Next.js](https://nextjs.org) and TypeScript. It allows users to browse, search, and view detailed information about Pokémon, including abilities, stats, types, moves, and images. The UI is modern and responsive, featuring custom components and a color mode toggle.

## Features

- Browse a list of Pokémon with images
- Search Pokémon by name
- View detailed Pokémon info (abilities, stats, types, moves)
- Image carousel for Pokémon sprites
- Light/dark mode toggle

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm, yarn, pnpm, or bun

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Build and Start in Production (Recommended for Deployment)**

This will generate an optimized, static version of the app with dynamic routes pre-rendered and revalidated once a day (using Next.js ISR — Incremental Static Regeneration).

#### Steps to Build and Start:

```bash
# Step 1: Build the app for production
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

This compiles your project and pre-generates all static content.

```bash
# Step 2: Start the production server
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

- Will serve Serves static content (like the homepage and pokemon/[name] page)
- Will also Dynamically loads Pokémon detail pages when requested
- Rebuilds those dynamic pages every 24 hours as i set 24 hour timing (Next.js `revalidate`)

4. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to see the app.

5. **Start editing:**

   Modify `src/app/page.tsx` to update the main page. Changes auto-update as you edit.

## Project Structure

- `src/app/` — Main app pages and routes
- `src/components/` — UI components (cards, carousel, toggles)
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions (API, sprite extraction)
- `src/types/` — TypeScript types for Pokémon data
