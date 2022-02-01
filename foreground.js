"use strict";

(async function () {
  let prevHref = null;
  function update() {
    if (window.location.href === prevHref) return;
    prevHref = window.location.href;
    console.log("url changed", prevHref, "->", window.location.href);
    if (!/\/files/.test(window.location.href)) return;
    const url = new URL(window.location.href);
    if (url.searchParams.get("w") !== "1") {
      url.searchParams.set("w", "1");
      window.location.href = url.toString();
    }
  }

  requestAnimationFrame(() =>
    new MutationObserver(update).observe(document.body, { childList: true })
  );
  update();
})();
