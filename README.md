# longhornlifesciences.com

Jekyll site for Longhorn Life Sciences, Inc. Deployed by GitHub Actions
(`.github/workflows/pages.yml`) on push to `main`.

## Local preview

```sh
bundle install                 # Ruby version pinned in .ruby-version
bundle exec jekyll serve       # http://localhost:4000
```

## Where things live

- `_data/home.yml` holds all home-page copy (hero, mission, story timeline, team, advisors, contact).
- `_data/navigation.yml` holds the nav links.
- `_includes/sections/` holds one include per home-page section.
- `_sass/` holds the styles. `_sass/brand/_tokens.scss` mirrors `_brand/tokens.css`.
- `_brand/` holds the brand handoff source of truth (tokens.json, design rules). Jekyll doesn't build it.
- The contact form posts to Formspree (`formspree_form_path` in `_config.yml`).
