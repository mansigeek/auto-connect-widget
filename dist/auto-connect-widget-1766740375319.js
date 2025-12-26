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

.ac-4b20ef70 {
    background-color:#425c8f;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a468dc87 {
    background-color:#415b90;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f4737411 {
    background-color:#3d588f;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1c925cbd {
    background-color:#3b5891;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-fd356767 {
    background-color:#395793;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d6fb651e {
    background-color:#365696;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-28b30d2a {
    background-color:#32559a;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-0ec9c899 {
    background-color:#2c53a0;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1864c1a8 {
    background-color:#2550a7;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1c1e358a {
    background-color:#1d4eaf;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a8c8793c {
    background-color:#1048b7;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-cf35e63b {
    background-color:#0643bc;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-deae642f {
    background-color:#0042c7;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-596cffcd {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f4cc4e1f {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#5c667a;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e7a46967 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#626b7f;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-847ec36f {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#677083;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d9b60cca {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#6d7588;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e678e5fe {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#767d8f;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b452c232 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#7b8393;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-dd31dfbe {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#848b9a;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ddab6776 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#8d93a0;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-37520591 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#9ca1ab;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-935b63a7 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#a5a9b1;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-61d7606f {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#babcbf;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-121daa53 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#c7c7c7;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b6beb961 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#d4d4d4;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3a7808a6 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#e0e0e0;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3fb21f43 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ededed;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-bade29a0 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#f7f7f7;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-489886e8 {
    background-color:#0046d1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}
`;

  // Inject HTML
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div id="auto-connect-preview-root"><div class="ac-489886e8"><h4 class="ac-3ea1708e">Card Title</h4><p class="ac-6b5c8d0e">This is a preview card. Styles applied here will be exported exactly the same into WordPress. All styles are dynamically generated CSS classes and are completely WordPress-safe.</p></div></div>`;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
})();