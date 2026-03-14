# Paperclip

Open-source orchestration platform for autonomous AI companies. Monorepo: server, ui, website, cli, packages.

## Commands

```bash
pnpm dev                    # Start server + ui (watch mode)
pnpm dev:once               # Start server + ui (one-shot)
pnpm build                  # Build all packages
pnpm typecheck              # TypeScript check all packages
pnpm test                   # Run vitest (watch)
pnpm test:run               # Run vitest (single pass)
pnpm test:e2e               # Playwright e2e tests
pnpm test:e2e:headed        # Playwright e2e (visible browser)
pnpm db:generate            # Generate Drizzle migrations
pnpm db:migrate             # Run pending migrations
pnpm db:backup              # Backup database
pnpm check:tokens           # Check for forbidden tokens in source
```

### Per-package

```bash
pnpm --filter @paperclipai/server dev     # Server only
pnpm --filter @paperclipai/ui dev         # UI only (Vite)
cd website && npm run dev                 # Website (Vite, separate npm)
```

### Release

```bash
pnpm release:preflight      # Pre-release checks
pnpm release:start          # Start release flow
pnpm release                # Publish release
pnpm release:github         # Create GitHub release
pnpm release:rollback       # Rollback latest release
pnpm changeset              # Create changeset for versioning
```

## Architecture

```
paperclip/
├── server/          # Node.js API server (@paperclipai/server)
│   └── src/         # Express + Drizzle ORM + adapter system
├── ui/              # React dashboard (@paperclipai/ui)
│   └── src/         # Vite + React 19 + Tailwind + Radix + TanStack Query
├── website/         # Marketing site (separate npm, not pnpm workspace)
│   └── src/         # Vite + React 19 + Tailwind v4
├── cli/             # CLI tool (paperclipai npm package)
│   └── src/         # Commander.js CLI
├── packages/        # Shared packages
│   ├── shared/      # Types, utils shared across server + ui
│   ├── db/          # Drizzle schema + migrations
│   ├── adapter-*/   # AI model adapters (claude, codex, cursor, opencode, pi, openclaw)
│   └── adapter-utils/
├── tests/e2e/       # Playwright end-to-end tests
├── scripts/         # Build, release, migration scripts
├── docs/            # Mintlify documentation site
└── docker/          # Docker configurations
```

## Conventions

- **Package manager:** pnpm v9+ for monorepo. Exception: `website/` uses npm standalone.
- **Language:** TypeScript strict mode everywhere. No `any` unless unavoidable.
- **Style:** Prettier defaults. No semicolons in some packages, check existing files.
- **Imports:** ESM only (`"type": "module"`). Use `import`, never `require`.
- **Node:** >=20 required.
- **Database:** Drizzle ORM. Migrations via `pnpm db:generate` then `pnpm db:migrate`.
- **UI components:** Radix UI primitives + CVA + clsx. Follow existing component patterns.
- **API:** Express routes in `server/src/`. TanStack Query for data fetching in UI.
- **Adapters:** Each AI model adapter is a separate package in `packages/adapter-*`. Implements a common interface from `adapter-utils`.
- **Changesets:** Use `pnpm changeset` for version bumps before release.

## Verification

After any code change, verify before declaring done:

- **Server changes:** `pnpm typecheck` passes, `pnpm test:run` passes
- **UI changes:** `pnpm typecheck` passes, dev server renders without console errors
- **Website changes:** `cd website && npm run build` succeeds
- **Schema changes:** `pnpm db:generate` produces clean migration, `pnpm db:migrate` applies
- **Adapter changes:** `pnpm test:run` passes, affected adapter package builds
- **All changes:** `pnpm check:tokens` passes (no forbidden tokens)
- **Before PR:** `pnpm build` succeeds across all packages

## Compact Instructions

When context is limited, prioritize:
1. Run the relevant test command before saying "done"
2. Check TypeScript types compile
3. Never commit `.env`, credentials, or secrets
4. Keep adapter interface stable; add, don't break

## gstack

Use `/browse` from gstack for all web browsing and QA. Never use `mcp__claude-in-chrome__*` tools.

Available skills: `/plan-ceo-review`, `/plan-eng-review`, `/review`, `/ship`, `/browse`, `/qa`, `/setup-browser-cookies`, `/retro`
