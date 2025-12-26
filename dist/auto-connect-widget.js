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

.ac-6bce8611 {
    background-color:#f1f4f2;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e1e14e4d {
    background-color:#20e981;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ccd0399a {
    background-color:#147b46;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7ffea571 {
    background-color:#137743;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-13d07526 {
    background-color:#147141;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-dc50a6b2 {
    background-color:#146c3e;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-5d16e224 {
    background-color:#146139;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-62af1a47 {
    background-color:#145d37;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1ed45643 {
    background-color:#134e2f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d60de6f3 {
    background-color:#14432b;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-91fc9a28 {
    background-color:#113623;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-efdb6688 {
    background-color:#102d1e;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-dd6b614c {
    background-color:#0d2117;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-2ad8bda1 {
    background-color:#09150f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-542693bf {
    background-color:#070e0a;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7aec0ca1 {
    background-color:#030705;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-018cc994 {
    background-color:#020303;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-9f30f9c5 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#111827;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c7a076a1 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#7786a6;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-cdd16a36 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#7d8aa6;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8b56a168 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#8490a9;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-35df0d96 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#8e98af;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-2e0c95b6 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#9ba4b5;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e1adc45a {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#a9afbc;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d8110d73 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#bdc0c7;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-dc4b3e82 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#cececf;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f27e972a {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#d6d6d6;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-cb8b6468 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#d9d9d9;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1805226b {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#e6e6e6;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-009e448b {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ededed;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1fb08392 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#f5f5f5;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-222b7833 {
    background-color:#000000;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-6fc7e164 {
    background-color:#ae5b5b;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-6d3e0c71 {
    background-color:#ab5959;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a66fca4f {
    background-color:#ad5858;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8fc73bc9 {
    background-color:#ae5656;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7035aba8 {
    background-color:#ad5252;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c1cbdd91 {
    background-color:#b05454;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-98962379 {
    background-color:#b04f4f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a5e0f8c3 {
    background-color:#b54f4f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-08557900 {
    background-color:#b74e4e;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b39c5642 {
    background-color:#b94b4b;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-eea3effa {
    background-color:#ba4a4a;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-93556b47 {
    background-color:#be4b4b;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e317f617 {
    background-color:#c14949;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-865fe73e {
    background-color:#c34646;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-88bd7a66 {
    background-color:#c44040;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b9cd23bb {
    background-color:#c83c3c;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-798133a4 {
    background-color:#c83737;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3bcf2f7d {
    background-color:#c93636;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-80fd5beb {
    background-color:#cc3333;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-2cd833b3 {
    background-color:#cd3737;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3c773774 {
    background-color:#cc3838;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-6ff67388 {
    background-color:#c84141;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a2e11fcc {
    background-color:#c84646;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ec770dcf {
    background-color:#c74848;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-93be06b1 {
    background-color:#c44a4a;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ff3e43a2 {
    background-color:#c24c4c;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-be814cc2 {
    background-color:#bf4f4f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-074a9dd2 {
    background-color:#bd5151;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c3ba525a {
    background-color:#b95050;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-c30312a7 {
    background-color:#b45555;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-df77775f {
    background-color:#b15959;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e6229e28 {
    background-color:#a65959;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-9969261c {
    background-color:#a55f5f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-685d9eea {
    background-color:#9b5f5f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-6ddd9613 {
    background-color:#986161;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-2d99d9c5 {
    background-color:#946161;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-70a2cf61 {
    background-color:#906060;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d852941c {
    background-color:#8f6161;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7f70df2b {
    background-color:#8c6363;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-bea4d850 {
    background-color:#8a6666;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ddf344e0 {
    background-color:#836363;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d2208b4e {
    background-color:#836767;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-4ddad299 {
    background-color:#826868;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-0a6fc755 {
    background-color:#846c6c;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7b926c07 {
    background-color:#816e6e;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3a5b34df {
    background-color:#837272;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3b93ec2f {
    background-color:#7f7171;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-be8b9d9b {
    background-color:#817474;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1a879884 {
    background-color:#7f7676;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-17842ac4 {
    background-color:#817979;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8a37a5a0 {
    background-color:#7f7a7a;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f25622e2 {
    background-color:#838181;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-36d132f6 {
    background-color:#868383;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-49758bef {
    background-color:#8a8a8a;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-89793954 {
    background-color:#8f8f8f;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-cba62555 {
    background-color:#919191;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7da13dad {
    background-color:#949494;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-09b72adb {
    background-color:#969696;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-2f3e20bc {
    background-color:#999999;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-cc41a795 {
    background-color:#9e9e9e;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8aa2c2ea {
    background-color:#a3a3a3;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ee0e7a42 {
    background-color:#a8a8a8;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1a084098 {
    background-color:#adadad;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3804fbec {
    background-color:#b5b5b5;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-62946172 {
    background-color:#bfbfbf;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-9d690a70 {
    background-color:#c7c7c7;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ae80300a {
    background-color:#d6d6d6;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-a89e271c {
    background-color:#dedede;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8cd1110b {
    background-color:#e8e8e8;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-896330ad {
    background-color:#ededed;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-0b40d522 {
    background-color:#f2f2f2;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ff827d92 {
    background-color:#fafafa;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-026eafae {
    background-color:#ffffff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-bfda5d6b {
    background-color:#d6a9a9;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-4ef84ae4 {
    background-color:#c0a5a5;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-287e76bc {
    background-color:#8e2929;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}
`;

  // Inject HTML
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div id="auto-connect-preview-root"><div class="ac-287e76bc"><h4 class="ac-3ea1708e">Card Title</h4><p class="ac-6b5c8d0e">This is a preview card. Styles applied here will be exported exactly the same into WordPress. All styles are dynamically generated CSS classes and are completely WordPress-safe.</p></div></div>`;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
})();