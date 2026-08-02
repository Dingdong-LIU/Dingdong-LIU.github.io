module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // purgecss only sees classes that appear in the built HTML/JS, so anything
  // added to the DOM at runtime by a CDN-hosted library looks unused and gets
  // deleted. medium-zoom is loaded from jsDelivr (see third_party_libraries in
  // _config.yml) and applies `medium-zoom-image--opened` / `medium-zoom-overlay`
  // itself, so our overrides in _base.scss were being stripped in production
  // only — the zoomed image reverted to the thumbnail's 3:2 box on the live
  // site while looking correct locally. Keep the whole family.
  safelist: [/^medium-zoom/],
};
