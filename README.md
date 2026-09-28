# Sukkyun Lewis Lee — FIFA Agent

A one-page site for Sukkyun Lewis Lee, a licensed FIFA agent (License ID: 202412-9540) and a lawyer in the USA and Canada. He represents highly talented young male and female professional and semi-professional football players.

The contact form has no backend. Submitting it opens the visitor’s email app with name, age, nationality, position, current or previous club, free-agent status, and message filled in. Enquiries go to ltp.crew.sports@gmail.com.

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

Edit `src/site.ts`. It holds the name, role, license, email, phone, location, photo, and social links.

- **Email** — enquiries go to `ltp.crew.sports@gmail.com`.
- **Phone** — add a number, or leave it empty to hide it.
- **Location** — add a city or region, or leave it empty to hide it.
- **Photo** — add an image to `public/` and set `photo` to that path, for example `"/portrait.jpg"`. Leave it empty until you have a photo you want to use. The site does not show a stand-in portrait. The header uses the LTP Crew Sports logo.
- **Socials** — paste full profile URLs, or leave them empty to hide those links.
