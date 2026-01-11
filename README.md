# Granimals Landing Page

A responsive landing page for Granimals - a physiotherapy and rehabilitation service platform.

## Project Overview

This is a responsive landing page for Granimals based on the provided Figma design. The task involves converting the design into a pixel-perfect, responsive web page using Next.js and Tailwind CSS.

## Features

- Responsive design (mobile, tablet, desktop)
- Hero section with promotional messaging and stats
- Treatment categories showcase
- Multi-step consultation booking form
- Video and chat testimonials with mobile slider
- Sticky mobile CTA for easy booking access

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Fonts

- Plus Jakarta Sans (primary) - used as an alternative since Glimer font was not available
- Poppins (headings)
- Manrope (body text)

## Development Notes

- Focused on layout and elements positioning to match the design
- Used Plus Jakarta Sans as the closest alternative to Glimer font family

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── BecomeGranimal.tsx
│   ├── Testimonials.tsx
│   ├── Footer.tsx
│   └── MobileCTA.tsx
└── public/
    └── images/
```
