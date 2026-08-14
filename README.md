# gplug-cdn

CDN for the gplug EMS frontend assets, served via GitHub Pages.

## Layout

Each release version lives in its own directory at the repo root, mirroring the
frontend's `dist/` output (only `*.js`, `*.css` and `*.json` are published —
`lang.json` is the UI dictionary the app fetches at runtime):

```
v1.0.3/
  lang.json
  assets/
    index-jsm-ts8o.js
    index-BQCCUC7F.css
```

## URLs

Published files are available at:

```
https://gplug-ch.github.io/gplug-cdn/<version>/assets/<file>
```

Example:

```
https://gplug-ch.github.io/gplug-cdn/v1.0.3/assets/index-jsm-ts8o.js
https://gplug-ch.github.io/gplug-cdn/v1.0.3/assets/index-BQCCUC7F.css
```

An index of all published files is generated at the site root.

## Publishing a new version

Full device release (recommended) — from `ip5-fs26/ems/backend`:

```sh
make prod    # builds the .tapp with the CDN URLs baked in, then runs the
             # frontend deploy so the matching bundle lands here
```

The version comes from `ems/backend/VERSION.txt`; bump it first for a new
release. Frontend-only republish — from `ip5-fs26/ems/frontend`:

```sh
npm run build
npm run deploy    # scripts/deploy-gh-pages.sh — clones this repo, copies
                  # dist/<version>/ in, commits and pushes to main
```

The push triggers the `Deploy CDN assets to GitHub Pages` workflow, which
publishes the site automatically. Both paths need push access to this repo
(an authenticated `git`).

## One-time setup

In the GitHub repo: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.
