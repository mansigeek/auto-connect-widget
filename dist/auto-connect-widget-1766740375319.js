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

.ac-b8ab6a77 {
    background-color:#335599;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8ffebbfd {
    background-color:#345598;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-36e49afc {
    background-color:#36589b;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e2b3e913 {
    background-color:#3a5b9c;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-110ae14c {
    background-color:#3c5b9a;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-9be25572 {
    background-color:#4363a3;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-264de8ff {
    background-color:#4966a2;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-84507b33 {
    background-color:#4d69a3;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-61941789 {
    background-color:#546fa6;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-61066c8f {
    background-color:#5b75a9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3d7b8901 {
    background-color:#607aaf;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d475a707 {
    background-color:#647daf;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-04c3be41 {
    background-color:#6980b0;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-86a00ee1 {
    background-color:#788eba;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-08b9b99a {
    background-color:#8194bb;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-0c3fb9ec {
    background-color:#889abf;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ec8e82ca {
    background-color:#8d9dbf;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-4d0f77d8 {
    background-color:#90a0c1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-791923cb {
    background-color:#97a6c3;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3e4324fc {
    background-color:#9dabc8;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-578c1f60 {
    background-color:#a1aec9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-dc188a04 {
    background-color:#a2afc8;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-7628ab7e {
    background-color:#a6b2c9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-2bf6a0b2 {
    background-color:#aebad0;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-fdb4d1e0 {
    background-color:#afbad0;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-02677c6f {
    background-color:#afbacf;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-af9e0655 {
    background-color:#b3bdd0;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-8d5ed542 {
    background-color:#b3bdd1;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-5433df49 {
    background-color:#bcc5d7;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-18ad9931 {
    background-color:#bfc8d9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-fedd21c4 {
    background-color:#bec7da;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f0726d1e {
    background-color:#c4cdde;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-51799ae0 {
    background-color:#cad2e2;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-de6ae6a1 {
    background-color:#d1d8e6;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b6f9a5c4 {
    background-color:#d6ddea;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1d56edc8 {
    background-color:#d5ddeb;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e104789b {
    background-color:#d8dfee;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-26dfcc71 {
    background-color:#dce2ef;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-357b2dff {
    background-color:#dee5f2;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-cf8ce62c {
    background-color:#e1e8f4;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-e86ddeea {
    background-color:#e5eaf5;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-3e45d6e4 {
    background-color:#e7edf9;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-84a0d2c8 {
    background-color:#ecf2fd;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ef5b19fd {
    background-color:#f0f5ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-ada45129 {
    background-color:#ebf1ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d1c6d86e {
    background-color:#e5eeff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-67bdd09e {
    background-color:#d6e4ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-bacb8620 {
    background-color:#c7daff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-000f66ff {
    background-color:#b8cfff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1398a422 {
    background-color:#adc9ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-bc695264 {
    background-color:#9ebeff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-9f5f1606 {
    background-color:#8fb4ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-021170d9 {
    background-color:#85adff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-09ef1654 {
    background-color:#7aa7ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-585e045f {
    background-color:#70a0ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d323f125 {
    background-color:#6b9cff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b1d297e1 {
    background-color:#6196ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-72330755 {
    background-color:#5c92ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-456f7139 {
    background-color:#528bff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-f6be3d7f {
    background-color:#4785ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-5ae43fca {
    background-color:#4281ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b387b0c7 {
    background-color:#387aff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-1ef36363 {
    background-color:#3377ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-d5552fa1 {
    background-color:#2e74ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-70f04063 {
    background-color:#2970ff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-694cb348 {
    background-color:#246dff;border:none;border-radius:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-b5889ae7 {
    background-color:#246dff;border:none;border-radius:1px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-090a4817 {
    background-color:#246dff;border:none;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}

.ac-4f5e962d {
    background-color:#246dff;border:none;border-radius:100px;box-shadow:0 1px 2px rgba(0,0,0,0.05);color:#ffffff;font-family:inherit;max-width:28rem;padding:16px;transition:all 150ms ease;
}
`;

  // Inject HTML
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div id="auto-connect-preview-root"><div class="ac-4f5e962d"><h4 class="ac-3ea1708e">Card Title</h4><p class="ac-6b5c8d0e">This is a preview card. Styles applied here will be exported exactly the same into WordPress. All styles are dynamically generated CSS classes and are completely WordPress-safe.</p></div></div>`;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
})();