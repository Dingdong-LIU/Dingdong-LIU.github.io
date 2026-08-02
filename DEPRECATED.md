# Deprecated as of 3 August 2026

This branch is the frozen final state of my personal website as built on the
[academicpages](https://github.com/academicpages/academicpages.github.io)
template. It is kept for reference and as a rollback target. **It is no longer
maintained — do not add content here.**

The live site is now built from `master` using
[al-folio](https://github.com/alshedivat/al-folio), and published by the
"Deploy site" GitHub Actions workflow to the `gh-pages` branch.

| | |
| --- | --- |
| Deprecated on | 3 August 2026 |
| Last live | 3 August 2026, when GitHub Pages was repointed to `gh-pages` |
| Replaced by | `master` (al-folio), served from `gh-pages` |
| Also tagged | `academicpages-final` — same commit as this branch's starting point |

## Rolling back to this version

This branch is buildable by GitHub's built-in Jekyll, which is how the site was
published originally. So rolling back needs no force-push and no local work:

> **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**
> → branch **`academicpages-deprecated`**, folder **`/ (root)`** → **Save**

GitHub's legacy builder will rebuild this tree and serve it within a few minutes.
`master` and `gh-pages` are left untouched, so switching back to the current site
is the same operation in reverse — repoint Pages at `gh-pages`.

Note that the legacy builder **cannot** build the al-folio site on `master`: it
relies on plugins outside GitHub's allowlist and fails with
`Liquid syntax error: Unknown tag 'toc'`. That failure is expected and only
appears if Pages is pointed at `master` directly rather than at `gh-pages`.
