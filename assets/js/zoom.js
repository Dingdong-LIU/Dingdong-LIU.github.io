// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    // Without a margin the zoomed image runs to the edges of the viewport, which
    // makes wide teaser figures overwhelming. This insets it so it reads as a
    // panel on top of the page rather than a takeover.
    margin: 48,
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  // medium-zoom closes on click, scroll or Escape, but shows no affordance for
  // any of it. Add an explicit close button for the duration of the zoom.
  var closeButton = document.createElement("button");
  closeButton.className = "medium-zoom-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close image");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    medium_zoom.close();
  });

  medium_zoom.on("open", function () {
    document.body.appendChild(closeButton);
  });
  medium_zoom.on("close", function () {
    if (closeButton.parentNode) {
      closeButton.parentNode.removeChild(closeButton);
    }
  });
});
