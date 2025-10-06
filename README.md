# SoilAid Website

This repository contains the source code for the SoilAid Technologies website

## Overview

The SoilAid Technologies website is our digital front door. It showcases our mission, products, and impact in waste management and regenerative agriculture, and also acting as a point of contact for customers, partners, and investors.

## Built With

- Next.js
- React

## Prerequisites

- Node.js v18+
- npm or yarn

## Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`

## Environment Variables

Create a `.env.local` file with:

- `NEXT_PUBLIC_API_URL=https://api.soilaid.tech`

## Branching

- `main` → production-ready code
- `staging` → integration/testing environment
- `develop` → buffer branch to staging
- `feature/*` → individual tasks or features and bug fixes
- `hotfix/*` → Urgent fixes for production

## Contributing

1. Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
2. Ensure linting passes: `npm run lint`
3. Write test for new features
4. PRs must be reviewed before merging
5. Use clear branch names, e.g. `feature/add-navbar` or `hotfix/fix-hero-image`.

## Running Tests

`npm run test`

## License

Private- Internal Use Only
