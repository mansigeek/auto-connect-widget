(function () {
  const WIDGET_ID = "auto-connect-widget";

  // Avoid mounting twice
  if (document.getElementById(WIDGET_ID)) return;

  const mount = document.createElement("div");
  mount.id = WIDGET_ID;
  document.body.appendChild(mount);

  const shadow = mount.attachShadow({ mode: "open" });

  // Inject styles
  const style = document.createElement("style");
  style.textContent = `.ac-3ea1708e {
    font-size:18px;font-weight:600;margin-bottom:0.5rem;
}
.ac-6b5c8d0e {
    font-size:14px;line-height:1.6;opacity:0.9;
}
.ac-29ada5a2 {
    background-color:#2667e8;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}`;

  // Inject HTML
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div id="auto-connect-preview-root" bis_skin_checked="1"><div class="ac-29ada5a2" bis_skin_checked="1"><h4 class="ac-3ea1708e">Card Title</h4><p class="ac-6b5c8d0e">This is a preview card. Styles applied here will be exported exactly the same into WordPress. All styles are dynamically generated CSS classes and are completely WordPress-safe.</p></div></div>`;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
})();