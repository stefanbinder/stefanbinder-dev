# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Cloudflare Workers Deployment

This application is configured for deployment to Cloudflare Workers.

#### Environment Variables

For local development, create a `.dev.vars` file in the root directory:

```bash
cp .dev.vars.example .dev.vars
# Edit .dev.vars and add your Gemini API key
```

For production, set environment variables using Wrangler:

```bash
npx wrangler secret put API_KEY
```

#### Deploy to Production

To build and deploy directly to production:

```bash
npm run deploy
```

#### Deploy a Preview

To deploy a preview URL for testing:

```bash
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively:

```bash
npx wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
