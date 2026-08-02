# Website TODO

Tracked in git so I keep my progress. Excluded from the built site via `_config.yml`.

---

## ⚠️ Time-sensitive: the provisional patent has hit its 12-month limit

The USPTO filing receipt states plainly:

> "It will not be examined for patentability and **will become abandoned not later
> than twelve months after its filing date**."

Filing date **30 July 2025** → the 12-month window closed **30 July 2026**.
HKUST's own record confirms it: **Maximum Term: 30/7/2026**, Lapse Date blank,
Status still "Filed", no publication or patent number.

**Unless a non-provisional (or PCT) application claiming priority was filed on or
before 30 July 2026, the provisional has now lapsed.** Check with the Office of
Knowledge Transfer. Their email said the Technology Review Committee would meet
"around eight months from the filing date" (≈ March 2026) with the filing decision
made afterwards — so this should have been decided already.

This does not change what's on the site (it correctly says "US Provisional Patent
Application, filed"), but it changes what you'd say in interviews, and whether a
follow-on filing needs chasing **now**.

- [ ] Confirm with OKT whether a non-provisional/PCT was filed
- [ ] If yes, send me the new application number and I'll update the CV entry

---

## Needs your input

### Job-market banner — update it after the defense

The front page opens with:

> 🎓 **On the job market.** Defending my Ph.D. thesis in August 2026 and
> graduating in November 2026. I'm looking for research positions in HCI and
> human–agent interaction.

Deliberately written in months, not exact dates, so it stays true either side of
10 August. Two follow-ups:

- [ ] **After 10 Aug 2026** — swap "Defending my Ph.D. thesis in August 2026" for
      "Defended my Ph.D. thesis in August 2026". One line in `_pages/about.md`.
- [ ] Decide whether to say "research positions" or name industry labs explicitly.
      Right now it reads as open to both.
- [ ] Consider a News item for the defense once it's done.

**To remove the banner entirely** (once you've accepted an offer): open
`_pages/about.md` and delete everything between

```
<!-- ===== JOB-MARKET BANNER — delete this whole block ... ===== -->
```

and

```
<!-- ===== END JOB-MARKET BANNER ===== -->
```

inclusive — 6 lines, right under the front matter. Nothing else depends on it;
the `.status-banner` styling stays in `_sass/_base.scss` if you ever want it back
for another announcement.

### Talks and interns

- [ ] **Talks** — title, venue, date, invited vs. conference
- [ ] **Past interns** — names, dates, what they worked on, where they went

### Small decisions still open

- [ ] **Dean's List / Google Hash Code** — still listed under CV awards. Keep, or drop
      as too junior now that you have stronger entries?
- [ ] **UIST wording** — currently "Conditionally accepted" everywhere, since final
      notification is after 8 Aug 2026. Tell me once it's final and I'll change it
      to "Accepted" / "To appear" and add the DOI.
- [ ] **TOCHI anonymization** — I removed the venue name and the `abbr` badge; title
      and full author list are still shown. If you want stronger anonymization
      (hiding the title too, or dropping the entry until acceptance), say so.

---

## Your manual work

### Publication preview images

Drop images in `assets/img/publication_preview/`, then add to the entry in
`_bibliography/papers.bib`:

```bibtex
preview = {chi25-scaffolded-turns.png},
```

**No need to resize.** `imagemagick` is enabled in `_config.yml` and auto-generates
480/800/1400px webp variants at build time; the thumbnail slot requests 200px, so
the browser picks the smallest. Drop in full-resolution exports and let the build
scale them. Any aspect ratio works — wide teaser figures look best.

Entries without `preview` render fine without a thumbnail, so add them incrementally.

**Done — all 12 papers have thumbnails.** Nothing outstanding here.

Two notes for when you add more:

- Use `.jpg` or `.png`. PDFs cannot be `<img>` sources and are not in
  `imagemagick.input_formats`, so they silently render as a broken image.
  `sips -s format png in.pdf --out out.png` converts them (ImageMagick in the
  container can't — it has no Ghostscript).
- Don't hand-resize. Sources are downscaled to 1600px and PNGs quantized to 256
  colors on commit; the site serves 480/800/1400px webp regardless.

### PDFs

`assets/pdf/` has DIS24 (+ poster), RO-MAN 24, RO-MAN 25, and the CV.
Missing PDFs for the CHI and CSCW papers — add them and I'll wire up `pdf = {...}`.

---

## Deployment (not started — nothing pushed yet)

All work is on the local `al-folio` branch. `master` and the live site are
untouched. `academicpages-final` tags the old site.

When ready:

1. Push the `al-folio` branch
2. GitHub → Settings → Actions → General → Workflow permissions → **Read and write**
3. GitHub → Actions → "Deploy site" → Run workflow on `al-folio` → creates `gh-pages`
4. GitHub → Settings → Pages → Deploy from branch → **`gh-pages`**
5. Merge `al-folio` → `master`

Steps 2-4 are browser-only.

---

## Ideas

### Publication filter tags

Filter the publications page by topic or venue using pill buttons. The styling
already exists as `.tag-pills` in `_sass/_base.scss` (originally written for the
about page, kept for this). Sketch:

- Add a `tags` field to entries in `_bibliography/papers.bib`, e.g.
  `tags = {conversational-agents, health}`.
- Render a `<ul class="tag-pills">` of the distinct tags above the list in
  `_pages/publications.md`.
- Filter client-side by toggling a class on each `<li class="row">`. The page
  already loads jQuery, and `_includes/bib_search.liquid` does something similar
  for the search box — worth reading first.

Venue badges (`abbr`) could drive a second filter row the same way.

---

## Quick reference — where to tune things

| What | Where |
| --- | --- |
| Page width | `max_width` in `_config.yml` (marked `PAGE WIDTH`) |
| Browser tab icon | `icon` in `_config.yml` (marked `BROWSER TAB ICON`) |
| Contact icon size | `_sass/_base.scss`, marked `ICON SIZE` (max ~1.6rem before wrapping) |
| Address block size | `_sass/_base.scss`, `.profile .more-info` `font-size` |
| Thumbnail box ratio | `_sass/_base.scss`, `ol.bibliography li .preview` `aspect-ratio` |
| Zoom inset | `margin` in `assets/js/zoom.js` |
| News items on homepage | `announcements.limit` in `_config.yml` |

---

## Optional / later

- Hidden pages (`nav: false` in their front matter): `blog`, `projects`,
  `teaching`, `repositories`. Flip to `nav: true` to enable any.
- `_data/coauthors.yml` — add frequent co-authors' homepages to link their names
  in the bibliography. Template is in the file.
- `mythesis_LoP.bib` is your generator's output and is excluded from the build.
  The site renders `_bibliography/papers.bib`. New entries need copying across
  plus the al-folio fields (`abbr`, `selected`, `pdf`, `html`, `bibtex_show`).
  Worth deciding whether to point the generator straight at `papers.bib`.
- Address block font size lives in `_sass/_base.scss` under `.profile .more-info`
  (`font-size: 0.75rem`). Tune that one value if it still reads too small or large.

---

## Done

- Nav and headings capitalized; profile photo swapped; CV PDF download link
- CV rebuilt from the PDF: internships, funded projects, patent, teaching,
  reviewing, honors
- Author lists filled in for UIST and TOCHI; TOCHI venue anonymized
- All guessed news dates replaced with your corrections
- Google Scholar and LinkedIn wired into `_config.yml`
- Patent news item added
- Patent PDFs gitignored — this repo is public, and a filing receipt carrying the
  attorney docket, confirmation number, and power-of-attorney details should not
  be published. They're also in `_config.yml`'s exclude list. Delete both entries
  if you disagree.
