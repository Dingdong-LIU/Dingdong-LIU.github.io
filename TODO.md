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

### Talks, interns, thesis status

- [ ] **Talks** — title, venue, date, invited vs. conference
- [ ] **Past interns** — names, dates, what they worked on, where they went
- [ ] **Thesis / job market** — defense date, and whether to say you're on the market

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

All six first/co-first-author papers now have thumbnails:

- [x] `liuCoNarrate2026` — UIST 2026 (`uist-2026-conarrate.jpg`)
- [x] `liuDissectingInteractionGulfs` — TOCHI (`tochi-2026-ncd.jpg`)
- [x] `liuScaffoldedTurnsAndLogicalConversationsDesigning2025` — CHI '25 (`chi-2025-paf.jpg`)
- [x] `shenDynamicPromptingImproves2025` — RO-MAN '25 (`roman-2025-turntaking.jpg`)
- [x] `shenHumanoidRobotDialogueSystemArchitecture2024` — RO-MAN '24 (`roman-2024-patientinterview.png`)
- [x] `liuExploringScaffoldingTechniques2024` — DIS '24 (`dis-2024-scaffolding.png`)
- [ ] remaining co-authored papers (CHI '26, CHI '25 InsightBridge, TVCG, CHI '23,
      DIS '22, CSCW '22) — optional, they render fine without

Note: `chi-2025-paf.jpg` is 2.4 MB as a source file. The site only ever serves the
27 KB webp, so there's no visitor-facing cost, but git keeps that 2.4 MB forever.
Worth downscaling the source to ~1400px before it's pushed if you care about repo
size — say the word and I'll do it.

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
