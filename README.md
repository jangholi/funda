# Funda app with Nuxt

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Further improvements

- Use Nuxt image to optimize images in gallery
- Use swiper for gallery
- Improve layout and styles
- Integrate google maps
- Add more components (Button, Features table, etc)
- Remove extra keys from `/api/detail/:id` response
- Add CI config to run lint and tests
- Comply SEO and Accessibility

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

Copy `.env.example` to `.env` and set `FUNDA_API_KEY`

```ini
FUNDA_API_KEY=<KEY>
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Tests

Run unit tests:

```bash
pnpm run test
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
