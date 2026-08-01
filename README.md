# Dingdong-LIU.github.io

My personal academic website, live at <https://Dingdong-LIU.github.io>.

Built with [Jekyll](https://jekyllrb.com/) using the
[al-folio](https://github.com/alshedivat/al-folio) theme.

## Running it locally

Docker is the supported path — the theme needs native gems (`mini_racer`,
`jekyll-scholar`, ImageMagick) that are painful to build against a system Ruby.

```bash
docker compose up
```

Then open <http://localhost:8080>. The server watches the working tree and
live-reloads, so edits show up without restarting — except changes to
`_config.yml`, which restart Jekyll automatically but take a few seconds.

To stop it: `docker compose down`.

## Where the content lives

| What | Where |
| --- | --- |
| Bio, photo, homepage | `_pages/about.md`, `assets/img/prof_pic.jpg` |
| Publications | `_bibliography/papers.bib` |
| News / activities | `_news/` (one short `.md` per item) |
| CV | `_data/cv.yml` |
| Venue badge colors | `_data/venues.yml` |
| Co-author homepage links | `_data/coauthors.yml` |
| Site-wide settings, social links | `_config.yml` |

`mythesis_LoP.bib` is the raw export from my reference manager. The site renders
`_bibliography/papers.bib`, which is the same data plus al-folio display fields
(`abbr`, `selected`, `pdf`, `poster`, `html`, `bibtex_show`).

Pages for `blog`, `projects`, `teaching`, and `repositories` exist but are
hidden from the navbar via `nav: false` in their front matter. Flip that to
`nav: true` to enable one.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and pushes the result to the `gh-pages` branch. GitHub Pages serves from
`gh-pages` — don't commit to that branch by hand.

The previous [academicpages](https://github.com/academicpages/academicpages.github.io)
version of this site is preserved at the `academicpages-final` tag.
