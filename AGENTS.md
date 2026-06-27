# Agent Guide

## Project Overview

- Eduup is a course marketplace / learning management platform built with Next.js App Router.
- Core roles are `USER`, `INSTRUCTOR`, and `ADMIN`.
- Students browse approved courses, manage wishlist/cart, checkout through Stripe, and watch enrolled course videos.
- Instructors create courses, upload videos/assets, and manage their own course catalog.
- Admin users manage courses, students, categories, coupons, partners, testimonials, homepage course placement, and approval-style workflows.

## Tech Stack

- Framework: Next.js 16 with React 19 and JavaScript.
- Routing: App Router under `src/app`, with locale-prefixed routes under `src/app/[lang]`.
- Database: Prisma ORM with MySQL, schema in `prisma/schema.prisma`.
- Auth: NextAuth v4 with Prisma adapter, credentials, Google, and GitHub providers.
- Payments: Stripe Payment Intents.
- Media: Cloudinary via `next-cloudinary`.
- Client state: Zustand stores in `src/store`.
- Styling: Bootstrap plus project CSS in `src/app/styles`.
- i18n: locales `en`, `de`, `ar`, `hi`; dictionaries in `src/dictionaries`.

## Important Paths

- `src/app/[lang]`: localized pages and page-level UI.
- `src/app/api`: API route handlers for auth, courses, admin, checkout, users, progress, reviews, favourites, and coupons.
- `src/actions`: server-side data access helpers used by pages/components.
- `src/components`: reusable UI grouped by feature area.
- `src/libs/prismadb.js`: singleton Prisma client.
- `src/proxy.js`: locale redirect proxy/middleware-style entry.
- `src/store/cart.js`: cart state.
- `src/store/coupon.js`: coupon discount state.
- `prisma/schema.prisma`: domain model and enums.

## Local Commands

- Install dependencies: `npm install`.
- Run dev server: `npm run dev`.
- Build production app: `npm run build`.
- Start production server: `npm run start`.
- Lint: `npm run lint`.
- Generate Prisma client after schema changes: `npx prisma generate`.

## Data Model Notes

- `User` owns courses, favourites, enrolments, earnings, progress, and reviews.
- `Course` belongs to a user/instructor and category, and has videos, assets, favourites, enrolments, earnings, progress, and reviews.
- `Enrolment` tracks order number, payment ID, payment status, and course access.
- `Progress` links user, course, and video completion.
- `Coupon`, `Partner`, `Testimonial`, and `Category` back admin-managed content.

## Coding Conventions

- Use the `@/` alias for imports from `src`.
- Keep route params handling consistent with existing App Router code (`const { id } = await params` appears throughout).
- Prefer server components/actions for database reads; use client components only for interactivity, browser APIs, forms, Zustand, or NextAuth client calls.
- Preserve the existing file naming style: many page components use `page.js`, feature forms use `CreateForm.jsx`, `UpdateForm.jsx`, or descriptive component names.
- Keep CSS class usage aligned with the existing Bootstrap/project CSS approach rather than introducing a new styling system.
- When adding user-facing text, consider dictionary/i18n impact for `en`, `de`, `ar`, and `hi`.

## Security And Access-Control Notes

- Do not add secrets to source files. Use `.env` or deployment environment variables.
- Treat currently configured auth, Stripe, Cloudinary, GitHub, and Google values as sensitive if encountered.
- Several API handlers currently check only for an authenticated user, while admin/instructor access is often enforced in UI components. When modifying protected actions, add server-side role/ownership checks at the API/action layer.
- For instructor-owned resources, verify the current user owns the course/video/asset before update/delete operations.
- For admin APIs, require `currentUser.role === "ADMIN"` before mutation.
- Avoid trusting client-provided prices, course IDs, or payment status; re-read authoritative course/payment data server-side when practical.

## Known Improvement Areas

- Move any hardcoded secrets from `next.config.mjs` into environment variables.
- Review API authorization for admin and instructor routes.
- Improve validation in course create/edit/video routes; existing `forEach` validation does not return early.
- Consider unique, collision-resistant order numbers for enrolments.
- Check payment finalization flow against Stripe webhooks for stronger payment integrity.
- Add tests before larger refactors; this repository currently does not show an established test suite.

## Working Guidance

- Make focused, minimal changes and avoid broad rewrites unless requested.
- Run the most specific validation available after edits; for broad changes, use `npm run lint` and/or `npm run build` if dependencies and environment are ready.
- Do not commit, branch, or push unless the user explicitly asks.
- Before database/schema changes, inspect both `prisma/schema.prisma` and existing API/actions that depend on the affected models.
