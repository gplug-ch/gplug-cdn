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
