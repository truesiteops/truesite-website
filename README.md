# TrueSite Website Package

This is a deploy-ready Next.js version of the TrueSite homepage preview.

## What is included
- Next.js app router setup
- Homepage based on the exact preview design
- `public/logo.png` already added
- Free-hosting compatible with Vercel

## Deploy to Vercel
1. Create a GitHub account if you do not already have one.
2. Upload this folder to a new GitHub repository.
3. Go to Vercel and import the GitHub repository.
4. Click Deploy.

## Run locally
```bash
npm install
npm run dev
```

## Important edits to make before going live
### 1. Replace the button links in `app/page.tsx`
Search for:
- `Book a Site Visit`
- `View Sample Deliverables`
- `Schedule a Call`
- `Request Sample Gallery`

Update the `href` values with your real links such as your Calendly or portfolio gallery.

### 2. Add your real project photos
This build currently keeps the same homepage design you approved. The next best upgrade is adding a portfolio section with real TrueSite work.

### 3. Update metadata
Open `app/layout.tsx` and update the title and description if you want to improve SEO.

## Recommended next additions
- Portfolio section
- Contact form
- Service area section for Naples, Fort Myers, Cape Coral, Estero, Bonita Springs
- SEO copy targeting construction drone documentation searches
