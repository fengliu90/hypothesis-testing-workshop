# ICML 2026 Workshop on Hypothesis Testing

A one-page academic workshop website built with Next.js App Router and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

From the project root, run:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3001` in your browser.

The app previews locally on port `3001`.
If port `3001` is already in use by this project, `npm run dev` will tell you to reuse the existing preview instead of starting a second server on another port.

Quick start:

```bash
npm install
npm run dev
```

## Production build

Build the site:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

The production server runs at `http://localhost:3001`.

## Deployment

### Vercel

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Keep the default framework preset as `Next.js`.
4. Leave the build command as `next build` or `npm run build`.
5. Leave the output directory blank so Vercel uses the default Next.js deployment flow.
6. Deploy. No additional environment variables are required for the current site.

Vercel notes:

- The site uses the Next.js App Router and deploys cleanly on Vercel without extra configuration.
- Metadata and the site icon are defined in `app/layout.tsx` and `app/icon.svg`.
- If you later add a real domain, update metadata as needed for canonical URLs and social previews.

### Static export

This site is also feasible to export as static files because the current app is fully static.

Build the static export:

```bash
npm run build:static
```

The exported files will be written to `out/`.

Static export notes:

- Static export is enabled only for the `build:static` script via `STATIC_EXPORT=true`.
- Standard Vercel deployment should continue using `npm run build`.
- If you host the `out/` directory on a static host, ensure it serves trailing-slash routes correctly.

### Self-hosted Node deployment

1. Install dependencies:

```bash
npm install
```

2. Build the application:

```bash
npm run build
```

3. Start the production server:

```bash
npm run start
```

## Project structure

- `app/`: App Router pages, layout, and global styles
- `app/icon.svg`: Simple site icon used for browser tabs and app metadata
- `components/`: Reusable UI components
- `data/workshop.ts`: Centralized workshop content, links, dates, and editable metadata

## Editing content

Most edits should happen in `data/workshop.ts`. That file includes the workshop copy, navigation labels, schedule, speakers, organizers, FAQ items, dates, venue, submission links, and maintenance comments for future updates.

Key content fields to update in `data/workshop.ts`:

- `links.submission`
- `links.openReview`
- `logistics.workshopDate`
- `logistics.venue`
- `sections.speakers.items[*].headshot`
- `sections.organizers.items[*].bio`

Headshot image folders:

- Speaker images can be placed in `public/speakers/`
- Organizer images can be placed in `public/organizers/`
- Example data value: `headshot: "/organizers/feng-liu.jpg"`

## Notes

- The site uses a single-page layout with anchored section navigation.
- Styling is intentionally restrained and easy to customize.
- Temporary values are marked as `TBA` until final workshop details are available.
