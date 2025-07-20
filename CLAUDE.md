# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Maheswari Manoharan's personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The portfolio showcases professional experience, certifications, skills, and contact information.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build static export for Azure deployment
npm run export

# Run linting
npm run lint

# Start production server (after build)
npm run start
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Azure Static Web Apps via GitHub Actions

### Project Structure
```
app/
├── components/         # UI components
│   ├── Header.tsx     # Navigation header with mobile menu
│   ├── Hero.tsx       # Landing section with name and social links
│   ├── About.tsx      # Professional summary
│   ├── Experience.tsx # Work experience and education
│   ├── Certifications.tsx # Professional certifications
│   ├── Skills.tsx     # Technical skills by category
│   ├── Contact.tsx    # Contact information
│   └── Footer.tsx     # Site footer
├── data/
│   └── portfolio.ts   # Central data store for portfolio content
├── layout.tsx         # Root layout with metadata
├── page.tsx          # Home page that assembles all components
└── globals.css       # Global styles and Tailwind imports

.github/workflows/
└── azure-deploy.yml   # GitHub Actions workflow for Azure deployment
```

### Key Design Patterns

1. **Component-Based Architecture**: Each section is a separate component for maintainability
2. **Centralized Data**: All portfolio content is stored in `app/data/portfolio.ts`
3. **Static Export**: Configured for static site generation with `output: 'export'`
4. **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
5. **Smooth Scrolling**: Anchor-based navigation with CSS smooth scroll

### Deployment Configuration

- **Next.js Config**: Static export enabled with unoptimized images for Azure
- **Azure Config**: `staticwebapp.config.json` handles routing and caching
- **GitHub Actions**: Automated deployment on push to main branch

### Important Notes

- The portfolio data in `app/data/portfolio.ts` contains the professional information
- All components are client-side rendered where needed (Header uses 'use client')
- The site is optimized for static hosting with no server-side features
- Images are unoptimized to work with static export