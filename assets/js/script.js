/* ==========================================================
   Sebastian Orjuela — Portfolio Scripts
   Vanilla JS · No dependencies
   ========================================================== */

(function () {
  "use strict";

  /* ─── Navbar: scroll styling & active link ─────────────── */
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll(".section, .hero");
  const navLinks = document.querySelectorAll(".navbar__link");

  function onScroll() {
    // Add 'scrolled' class to navbar after 50px
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    // Highlight the nav link that corresponds to the current section
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load

  /* ─── Mobile menu toggle ────────────────────────────────── */
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      menu.classList.remove("open");
    });
  });

  /* ─── Scroll-reveal (Intersection Observer) ─────────────── */
  const fadeElements = document.querySelectorAll(".fade-up");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  fadeElements.forEach((el) => revealObserver.observe(el));
})();