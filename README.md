# Next.js App Router Playground

A minimal Next.js App Router project to understand modern Next.js concepts without unnecessary complexity.

This project focuses on how Next.js thinks, not on UI or features.

---

## Purpose of This Project

This repository helps you learn:
• App Router file structure
• Server Components vs Client Components
• File-based routing
• Dynamic routes ([id])
• Loading and error boundaries
• Async-first routing behavior (Next.js 15+)

It intentionally avoids:
• Authentication
• Databases
• State management libraries
• Styling complexity

---

## Tech Stack

• Next.js (App Router)
• TypeScript
• React Server Components

---

## Project Structure

```
app/
├─ layout.tsx # Root layout (persistent UI)
├─ page.tsx # Home page (Server Component)
├─ loading.tsx # Global loading state
├─ error.tsx # Global error boundary (Client Component)
└─ products/
├─ page.tsx # Products list page
└─ [id]/
└─ page.tsx # Dynamic product detail page
components/
└─ ProductCard.tsx # Example Client Component
```

---

## Key Concepts Demonstrated

1. App Router

Routing is based on the file system. No route configuration files are used.

2. Server Components (Default)

All pages are Server Components unless explicitly marked with "use client".

3. Client Components

Client Components are used only when interactivity is required.

'use client'

4. Dynamic Routing

The [id] folder maps directly to dynamic routes such as /products/1.

In modern Next.js versions, route params are async and must be awaited.

5. Loading and Error Boundaries
   • loading.tsx renders automatically during suspense
   • error.tsx must be a Client Component

---

## Getting Started

1. Install Dependencies

```bash
npm install
```

2. Start Development Server

```bash
npm run dev
```

The app will run on:

```bash
http://localhost:3000
```

(If the port is busy, Next.js will automatically use another port.)

---

How to Test the App

Open the following routes in the browser:
• / → Home page
• /products → Products list
• /products/1 → Product detail page

Verify:
• Header persists across routes
• Dynamic route works for any ID
• No client-side data fetching is used

---

Common Gotchas Covered
• error.tsx must be a Client Component
• loading.tsx must default-export a React component
• Route params are async in newer Next.js versions
• Avoid unnecessary "use client"

---

## Next Steps

This project is intended to be extended gradually. Suggested additions:
• Server Actions
• Form handling
• Authentication middleware
• API routes
• Caching strategies

Add one concept at a time to keep the mental model clear.

---

License

MIT
