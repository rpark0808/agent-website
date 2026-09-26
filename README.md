# Rochan Park — FIFA Football Agent

A one-page site for Rochan Park, a newly certified FIFA football agent. It is for players who do not already have an agent: they can read how he represents them and send an enquiry.

He represents players and helps them pursue club opportunities. The site does not claim that he hires players.

The contact form has no backend. Submitting it opens the visitor’s email app with the name, age, position, current club or free agent, and message filled in.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Build

```bash
npm run build
npm run preview
```

`npm run build` typechecks and writes a static site to `dist/`. Preview serves that folder at [http://127.0.0.1:4318](http://127.0.0.1:4318).

## Publish on GitHub Pages

This is a static Vite build, meant as a starting point for a GitHub Pages **project site** (`https://<user>.github.io/<repository>/`).

### The `base` setting

`vite.config.ts` sets:

```ts
base: './',
```

A relative base makes CSS, JavaScript, and the favicon load on a project site without hard-coding the repository name. Leave it as `./` unless you have a reason to change it.

To use an absolute base instead, set it to the repository name with leading and trailing slashes, then build again:

```ts
base: '/your-repository-name/',
```

That value is the path segment only, not the full `github.io` URL. A user site published at `https://<user>.github.io/` should use `base: '/'`.

### Deploy with GitHub Actions

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Merge the site to the `main` branch.

`.github/workflows/pages.yml` installs dependencies, runs `npm run build`, and deploys `dist/`.

### Deploy the `dist` folder yourself

```bash
npm run build
```

Upload the contents of `dist/` to GitHub Pages, or push that folder to a `gh-pages` branch. Build with the `base` value above before you upload.

## Personalize before you share it

Edit `src/site.ts`. It holds the name, role, email, phone, location, photo, and social links.

- **Email** — replace `hello@example.com` with the address players should use.
- **Phone** — add a number, or leave it empty to hide it.
- **Location** — add a city or region, or leave it empty to hide it.
- **Photo** — add an image to `public/` and set `photo` to that path, for example `"/portrait.jpg"`. Leave it empty until you have a photo you want to use. The site does not show a stand-in portrait.
- **Socials** — paste full profile URLs, or leave them empty to hide those links.

Do not add a license number, club names, statistics, or testimonials unless they are real.
