/* ============================================================
   Shared site chrome — nav, footer, theme, motion.
   Single source of truth: edit links here, not in six files.
   ============================================================ */

const NAV = [
  { href: "./index.html", label: "Home" },
  { href: "./about.html", label: "About" },
  { href: "./publications.html", label: "Publications" },
  { href: "./education.html", label: "Education" },
  { href: "./community.html", label: "Community" },
  { href: "./news.html", label: "News" },
];

const SOCIAL = {
  email: "millicentochieng950@gmail.com",
  scholar: "https://scholar.google.com/citations?user=cjJQnDIAAAAJ&hl=en",
  github: "https://github.com/millicentochieng",
  linkedin: "https://www.linkedin.com/in/millicent-ochieng-b8061a14b/",
  twitter: "https://twitter.com/iam_OchiengM",
  cv: "../assets/cv.pdf",
};

function renderNav() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(
    (n) =>
      `<a href="${n.href}"${n.href.endsWith(here) ? ' class="is-active"' : ""}>${n.label}</a>`
  ).join("");

  return `
  <header class="nav">
    <div class="wrap nav-in">
      <a class="brand" href="./index.html"><span class="mark">MO</span> Millicent Ochieng</a>
      <nav class="nav-links" id="navLinks">
        ${links}
        <a href="${SOCIAL.cv}" download="Millicent-Ochieng-CV.pdf">CV</a>
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
  const explore = NAV.filter((n) => n.label !== "Home")
    .map((n) => `<a href="${n.href}">${n.label}</a>`)
    .join("");

  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="brand" href="./index.html"><span class="mark">MO</span> Millicent Ochieng</a>
          <p style="margin-top:.9rem;max-width:36ch;font-size:.88rem;color:var(--ink-2)">
            Multilingual &amp; multicultural AI research. Microsoft Research Africa, Nairobi, Kenya.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          ${explore}
        </div>
        <div>
          <h4>Elsewhere</h4>
          <a href="mailto:${SOCIAL.email}">${SOCIAL.email}</a>
          <a href="${SOCIAL.scholar}">Google Scholar</a>
          <a href="${SOCIAL.github}">GitHub</a>
          <a href="${SOCIAL.linkedin}">LinkedIn</a>
          <a href="${SOCIAL.twitter}">Twitter</a>
          <a href="${SOCIAL.cv}" download="Millicent-Ochieng-CV.pdf">Download CV</a>
        </div>
      </div>
      <div class="copyright">
        <span>&copy; <span class="year"></span> Millicent Ochieng</span>
        <span class="mono">Nairobi, Kenya</span>
      </div>
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
  document.querySelectorAll(".year").forEach((el) => (el.textContent = new Date().getFullYear()));

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
