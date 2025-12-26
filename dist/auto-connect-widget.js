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
  style.textContent = `
.ac-30551297 {
    background-color:#f3f4f6;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3ea1708e {
    font-size:18px;font-weight:600;margin-bottom:0.5rem;
}

.ac-6b5c8d0e {
    font-size:14px;line-height:1.6;opacity:0.9;
}

.ac-590e4034 {
    background-color:#274582;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-273a3c8e {
    background-color:#284786;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-cc9f2c94 {
    background-color:#27498b;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a3bbfddd {
    background-color:#284b8f;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c2171d5b {
    background-color:#274a91;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-09ecf900 {
    background-color:#25488e;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-623e90b6 {
    background-color:#254993;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-2e4ae301 {
    background-color:#234b9a;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-06479dd8 {
    background-color:#224ca0;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-74c4836f {
    background-color:#204fac;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-aa73c200 {
    background-color:#1b4db1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-0400a208 {
    background-color:#1b50bb;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-5c91711f {
    background-color:#1650c5;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c3699823 {
    background-color:#1251ce;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-69d3655d {
    background-color:#0f50d2;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-420bc5e5 {
    background-color:#0d51d9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-6eaa2d86 {
    background-color:#0951e1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1a76828c {
    background-color:#0752e9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c9889d35 {
    background-color:#0455f6;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-5e180b16 {
    background-color:#0154f9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-fbabddef {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3679951f {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#455c8c;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-18b37781 {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#495f8d;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-4e9fc68d {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#516794;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-033e87ba {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#5c719d;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c7c101ad {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#6e81aa;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8d018036 {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#7c8db1;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ca464796 {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#8f9dbd;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-5aa26933 {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#a1afce;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f7fe65ec {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#b7c3dc;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b16b577a {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ced6e9;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-44ca7ac5 {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#dfe5f1;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7dbd47d7 {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#fafcff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-931fda20 {
    background-color:#0055ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}
`;

  // Inject HTML
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div id="auto-connect-preview-root"><div class="ac-931fda20"><h4 class="ac-3ea1708e">Card Title</h4><p class="ac-6b5c8d0e">This is a preview card. Styles applied here will be exported exactly the same into WordPress. All styles are dynamically generated CSS classes and are completely WordPress-safe.</p></div></div>`;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
})();