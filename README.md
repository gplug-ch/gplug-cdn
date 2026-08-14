# gplug-cdn

CDN for the gplug EMS frontend assets, served via GitHub Pages.

## Layout

Each release version lives in its own directory at the repo root, mirroring the
frontend's `dist/` output (only `*.js` and `*.css` are published):

```
v1.0.3/
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

1. Build the frontend (`ip5-fs26/ems/frontend`): `npm run build`
2. Copy the versioned output into this repo:

   ```sh
   rsync -a --include='*/' --include='*.js' --include='*.css' --exclude='*' \
     ../ip5-fs26/ems/frontend/dist/vX.Y.Z/ vX.Y.Z/
   ```

3. Commit and push to `main` — the `Deploy CDN assets to GitHub Pages`
   workflow publishes the site automatically.

## One-time setup

In the GitHub repo: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.
