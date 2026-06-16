/* ---------------------------------------------------------
   NEO‑TOKYO HOLOGRAM — NAVIGATION SCRIPT
   Handles: Mobile Menu Toggle + Neon Animation
--------------------------------------------------------- */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Neon pulse animation on open
  menuBtn.classList.toggle("active");
});

