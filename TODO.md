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

**The real constraint is your own published work,** and that was already true
before the lapse. DIS 2024 (Jul 2024) and CHI 2025 (Apr 2025) describe the
scaffolding approach. The US gives a 12-month grace period for an inventor's own
disclosures, and both of those windows have now closed. Europe and China have
essentially no grace period, so those jurisdictions were barred from the day each
paper published. Worth asking OKT to confirm what the papers do and don't cover
versus the claims that were drafted.

**There may still be a window — ask about this first.** 37 CFR 1.78(b) allows a
*delayed* benefit claim to a provisional, filed up to **14 months** from the
provisional's filing date, via petition asserting the delay was unintentional
plus a fee. Fourteen months from 30 July 2025 is roughly **30 September 2026** —
about two months out. If HKUST/CUHK still want this, that route needs starting
now, not in September.

**Most likely explanation:** OKT's Technology Review Committee met around March
2026 and decided not to pursue. That is a normal outcome and it was the
universities' call, not yours — the application is co-assigned to HKUST and CUHK.
Worth confirming so you know which it was.

**Nothing on the site changes.** The CV says "US Provisional Patent Application,
filed with the USPTO" with the number and date. That is accurate permanently — a
filed provisional stays a filed provisional. Just don't describe it as pending or
as likely to issue.

- [ ] Email OKT: was a non-provisional/PCT filed, or was it dropped?
- [ ] If dropped but still wanted, ask about the 37 CFR 1.78(b) restoration
      petition before ~30 Sep 2026
- [ ] If something *was* filed, send me the new application number and I'll
      update the CV entry

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

### Dean's List / Google Hash Code

- [ ] Still listed under CV awards. Keep, or drop as too junior now that you have
      stronger entries?

      **My suggestion: drop both.** You have a best-paper award at RO-MAN, three
      years of RedBird, and a full PGS. Undergraduate Dean's List and a 2020
      programming-contest placing sit oddly beside those on a CV aimed at faculty
      and industry-research hiring, and the "2018 - 2022" and "2020" rows drag the
      awards list back six years for no gain. Say the word and I'll remove them —
      it's the last two entries in the `Honors and Awards` block of `_data/cv.yml`.
      Keeping them costs nothing either; this is taste, not correctness.

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
