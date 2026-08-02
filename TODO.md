# Website TODO

Tracked in git so I keep my progress. Excluded from the built site via `_config.yml`.

---

## ⚠️ Time-sensitive: the provisional patent lapsed on 30 July 2026

You confirmed no non-provisional or PCT was filed. **I am not a patent attorney —
everything below needs confirming with HKUST's Office of Knowledge Transfer (OKT)
and the named attorney on the receipt (SAM YIP).** Treat it as a checklist for
that conversation, not as advice.

**Where things stand.** Provisional 63/854,195, filed 30 July 2025, expired of its
own accord on 30 July 2026. A provisional never becomes a patent — it is a
12-month placeholder that reserves a priority date. Nothing was abandoned by
mistake; the placeholder simply ran out.

**What was lost.** The 30 July 2025 priority date. Any future filing gets its own,
later date.

**What was *not* lost.** Provisionals are never published. This one has no
publication number and no patent number, so it has not entered the public record
and does not become prior art against you or anyone else. The invention was not
disclosed by the filing itself.

**Novelty is intact — this is the important part.** The paper describing the
patented content is the TOCHI manuscript, which is still under review with no
associate editor assigned, so it is unpublished. Nothing in the public record
discloses the invention. That means a fresh filing is still possible; it would
simply carry a 2026 priority date instead of 30 July 2025.

**The TOCHI publication date is now the real deadline.** The moment that paper
publishes, Europe and China are barred outright (no grace period), and the US
grace clock starts running. Review is slow and acceptance is months away, so
there is runway — but the timing is not yours to control, and an accepted paper
can move to production faster than expected.

**Do not post a preprint** — arXiv, ResearchGate, a lab page, the thesis if it
goes into a public repository — until this is settled. Any of those counts as a
publication and closes the same doors.

**There may be a better option than a fresh filing — ask about this first.**
37 CFR 1.78(b) allows a *delayed* benefit claim to a provisional, filed up to
**14 months** from the provisional's filing date, via petition asserting the
delay was unintentional plus a fee. Fourteen months from 30 July 2025 is roughly
**30 September 2026** — about two months out. That route recovers the original
July 2025 priority date, which a fresh filing cannot. If HKUST and CUHK still
want this, it needs starting now.

**Most likely explanation for the lapse:** OKT's Technology Review Committee met
around March 2026 and decided not to pursue. That is a normal outcome and it was
the universities' call, not yours — the application is co-assigned to HKUST and
CUHK. Worth confirming so you know which it was.

**Nothing on the site changes.** The CV says "US Provisional Patent Application,
filed with the USPTO" with the number and date. That is accurate permanently — a
filed provisional stays a filed provisional. Just don't describe it as pending or
as likely to issue.

- [ ] Email OKT this week. Tell them (a) the provisional lapsed 30 Jul 2026,
      (b) the TOCHI manuscript is still unpublished so novelty is intact, and
      (c) ask whether the drop was deliberate or an oversight.
- [ ] If it is still wanted, ask specifically about the 37 CFR 1.78(b)
      restoration petition before ~30 Sep 2026, versus filing fresh before TOCHI
      publishes.
- [ ] Hold off on any public preprint of the TOCHI paper until OKT answers.
- [ ] If something does get filed, send me the application number and I'll update
      the CV entry.

---

## Needs your input

### Job-market banner — update it after the defense

Wording is settled. The front page now opens with:

> 🎓 **On the job market.** Defending my Ph.D. thesis in August 2026 and
> graduating in November 2026. I'm looking for research positions in HCI and
> human–agent interaction, **in academia and industry labs alike**.

Deliberately written in months, not exact dates, so it stays true either side of
10 August. Two follow-ups:

- [ ] **After 10 Aug 2026** — swap "Defending my Ph.D. thesis in August 2026" for
      "Defended my Ph.D. thesis in August 2026". One line in `_pages/about.md`.
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

### PDFs (leave it as it is for now)

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
| CV date column width | `_sass/_cv.scss`, marked `DATE COLUMN WIDTH` (9rem; shrink it and long dates wrap to two lines) |
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

- **Production-only CSS bug caught before launch.** The deploy workflow runs
  `purgecss`, which deletes any class it can't find in the built HTML/JS.
  medium-zoom is loaded from a CDN and adds `medium-zoom-image--opened` at
  runtime, so our override was stripped in production only — zoomed images would
  have gone back to being squashed into the thumbnail's 3:2 box on the live site
  while still looking correct locally. Added `safelist: [/^medium-zoom/]` to
  `purgecss.config.js` and verified against a real production build + purge.
- **Removed `assets/jupyter/blog.ipynb`**, a leftover al-folio demo notebook.
  `_posts/` is empty and nothing referenced it.
- **Verified the GitHub Actions build locally** on Ruby 3.2.2 (what CI uses,
  versus Ruby 4.0 in the dev container) — clean build, exit 0.
- **CV date badges collided with entry titles.** Upstream pinned the date column
  to an inline `width: 75px` while the badge is `white-space: nowrap`, so any
  value longer than a bare year ("Jan 2026 - Apr 2026") overflowed into the title.
  The column is now `col-md-auto` with a fixed 9rem width set in `.cv-date`
  (`_sass/_cv.scss`) — fixed rather than auto so the date rail stays aligned down
  the page, and 9rem rather than a grid fraction because `col-md-3` reserved 237px
  for a badge that needs ~140px. Badges are also allowed to wrap, so nothing can
  overflow even if a future date string is longer. Also fixed upstream's
  `cl-sm-2` / `cl-sm-10` typos.
- **Undergraduate-era material folded down.** Dean's List, Google Hash Code, the
  Kerry Holdings scholarship, and the Algo Trading placing are now one
  "2018 - 2022 — *Undergraduate:* …" row under Honors and Awards instead of four
  separate rows. The Roger King Center RA moved out of Research Experience into a
  renamed **Undergraduate Experience** section (was "Other Experience"), alongside
  the Algo Trading team lead and the Wuhan YCIG internship. Research Experience is
  now just Tsinghua and MSRA. Leadership was left as its own section — say the
  word if you want it folded in too, it is the same era.
- **CV page was silently rendering Albert Einstein.** `_config.yml`'s
  `jekyll_get_json` block loaded the template's demo `assets/json/resume.json`
  into `site.data.resume`, and `_layouts/cv.liquid` checks that *before* falling
  back to `_data/cv.yml` — so every edit I made to your CV data was being
  discarded at build time. Commented out the block (with a note explaining why)
  and deleted the demo JSON. `/cv/` now renders `_data/cv.yml`.
- **Talks and Presentations** section added to `_data/cv.yml`, newest first:
  HKUST CSE summer camp (Jul 2026, invited), 中央美术学院 Beijing (Jun 2026,
  invited, hosted by Yanjun Lyu), HHME 2025 Dalian (Aug 2025, 交流论文),
  CHI 2025 Yokohama (Apr 2025), DIS 2024 Copenhagen (Jul 2024, poster).
- **Interns** — resolved: MSRA and Tsinghua are your own research positions, and
  both were already in the CV under `Research Experience` with supervisors and
  project summaries. Nothing to add.
- Job-market banner wording finalized ("in academia and industry labs alike").
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
