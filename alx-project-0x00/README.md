This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash# alx-project-0x00

A [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## 🚀 Getting Started

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

You can begin editing by modifying `pages/index.tsx`. Changes are reflected live.

## 🗂️ Project Structure

- `pages/` — Main app pages and API routes
  - `index.tsx` — Home page (`/`)
  - `landing.tsx` — Landing page (`/landing`)
  - `about.tsx` — About page (`/about`)
  - `api/hello.ts` — Example API route (`/api/hello`)
- `components/` — Reusable React components (e.g., `Card`, `Pill`)
- `interfaces/` — TypeScript interfaces and types
- `public/` — Static assets
- `styles/` — Global and component styles

## 🧭 Routing

This project uses the **Pages Router** in Next.js.  
Available routes:

- `/` — Home
- `/landing` — Landing Page
- `/about` — About Page

API routes are available under `/api/*`, e.g., `/api/hello`.

## 🧩 Components

- The **Card** component is imported and used in `pages/landing.tsx`.
- Multiple `<Card />` components are rendered to demonstrate reusability.
- Visit [http://localhost:3000/landing](http://localhost:3000/landing) to see them in action.

## 🖋️ Fonts

Uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to optimize and load [Geist](https://vercel.com/font).

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Interactive Next.js Tutorial](https://nextjs.org/learn-pages-router)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## 🚢 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment docs](https://nextjs.org/docs/pages/building-your-application/deploying) for more options.
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# alx-project-0x00

## Basic Routing

This project uses the **Pages Router** in Next.js.  
The following routes are currently available:

- `/` → Home Page (from `pages/index.tsx`)
- `/landing` → Landing Page (from `pages/landing.tsx`)
- `/about` → About Page (from `pages/about.tsx`)

### Running the Project
Start the development server:

```bash


### Using Components
- Imported the **Card** component into `landing.tsx`.
- Rendered `<Card />` under the page heading.
- Duplicated the Card multiple times to demonstrate reusability.
- Verified rendering at [http://localhost:3000/landing](http://localhost:3000/landing).
