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

.ac-06879c89 {
    background-color:#f3f4f6;border:none;border-radius:1px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-215393d5 {
    background-color:#f3f4f6;border:none;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f8d06d40 {
    background-color:#f3f4f6;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-4cd212d5 {
    background-color:#194294;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1aec9722 {
    background-color:#1a4499;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c59ddc80 {
    background-color:#19449a;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3744f13b {
    background-color:#19459f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-80e81782 {
    background-color:#1748ab;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-28be8e31 {
    background-color:#164ab1;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-72364bdc {
    background-color:#134ec3;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f44ff761 {
    background-color:#124fca;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-941d6ee0 {
    background-color:#0e51d8;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-68ee7975 {
    background-color:#0c52df;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ea31a4e8 {
    background-color:#0654ef;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-650d0c60 {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-9b3e1688 {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#637aab;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-14d93f3b {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#687dac;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a74d0430 {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#7a8eb8;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b22f4da7 {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#8697bb;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-79a3256d {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#99a8c7;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a1a2bd10 {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#adb8d2;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-452c441f {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#c8cfdf;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-70e1fdb2 {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#dde1e9;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8d7426ef {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#fcfcfc;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b76f6e3e {
    background-color:#0055ff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}
`;

  // Inject HTML
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div id="auto-connect-preview-root"><div class="ac-b76f6e3e"><h4 class="ac-3ea1708e">Card Title</h4><p class="ac-6b5c8d0e">This is a preview card. Styles applied here will be exported exactly the same into WordPress. All styles are dynamically generated CSS classes and are completely WordPress-safe.</p></div></div>`;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
})();