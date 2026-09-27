/* ============================================================
   Shared site chrome — nav, footer, theme, motion.
   Single source of truth: edit links here, not in six files.
   ============================================================ */

const NAV = [
  { href: "./index.html", label: "Home" },
  { href: "./about.html", label: "About" },
  { href: "./publications.html", label: "Publications" },
  { href: "./community.html", label: "Community" },
  { href: "./news.html", label: "News" },
  { href: "./cv.html", label: "CV" },
];

const SOCIAL = {
  email: "millicentochieng950@gmail.com",
  scholar: "https://scholar.google.com/citations?user=cjJQnDIAAAAJ&hl=en",
  github: "https://github.com/millicentochieng",
  linkedin: "https://www.linkedin.com/in/millicent-ochieng-b8061a14b/",
  cv: "../assets/cv.pdf",
};

const ICON = {
  cv:
    "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
  scholar:
    "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 1 0 0-14z",
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  email:
    "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
};

function icon(name) {
  return `<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${ICON[name] || ""}"/></svg>`;
}

function renderNav() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(
    (n) =>
      `<a href="${n.href}"${n.href.endsWith(here) ? ' class="is-active"' : ""}>${n.label}</a>`
  ).join("");

  return `
  <header class="nav">
    <div class="wrap nav-in">
      <nav class="nav-links" id="navLinks">
        ${links}
      </nav>
      <div style="display:flex;gap:.5rem;align-items:center">
        <button class="icon-btn" id="themeToggle" aria-label="Toggle dark mode" title="Toggle theme">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <button class="icon-btn nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const links = [
    ["mailto:" + SOCIAL.email, "Email", "email"],
    [SOCIAL.scholar, "Google Scholar", "scholar"],
    [SOCIAL.github, "GitHub", "github"],
    [SOCIAL.linkedin, "LinkedIn", "linkedin"],
  ]
    .map(
      ([href, label, key]) =>
        `<a href="${href}" aria-label="${label}" title="${label}">${icon(key)}</a>`
    )
    .join("");

  return `
  <footer class="footer footer--min">
    <div class="wrap copyright">
      <span>&copy; 2021&ndash;present Millicent Ochieng.</span>
      <span class="footer-social">${links}</span>
    </div>
  </footer>`;
}

function initChrome() {
  const navMount = document.getElementById("site-nav");
  const footMount = document.getElementById("site-footer");
  if (navMount) navMount.outerHTML = renderNav();
  if (footMount) footMount.outerHTML = renderFooter();

  // theme — localStorage can throw in private/blocked contexts, so guard everything
  const root = document.documentElement;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* non-fatal */ } },
  };
  const prefersDark = () => {
    try { return window.matchMedia("(prefers-color-scheme: dark)").matches; } catch { return false; }
  };

  const saved = store.get("theme");
  if (saved) root.setAttribute("data-theme", saved);
  else if (prefersDark()) root.setAttribute("data-theme", "dark");

  const tt = document.getElementById("themeToggle");
  if (tt)
    tt.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store.set("theme", next);
    });

  // mobile nav
  const nt = document.getElementById("navToggle");
  const nl = document.getElementById("navLinks");
  if (nt && nl)
    nt.addEventListener("click", () => {
      const open = nl.classList.toggle("open");
      nt.setAttribute("aria-expanded", String(open));
    });

  // year

  // reveal on scroll — degrade to visible if unsupported
  const reveals = document.querySelectorAll(".reveal");
  if (typeof IntersectionObserver === "function") {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  try { initChrome(); } catch (err) { console.error("chrome init failed:", err); }
});
