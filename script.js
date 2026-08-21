const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function setMenu(open) {
  if (!mobileMenu || !menuButton) return;

  mobileMenu.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  mobileMenu.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(!mobileMenu.classList.contains("open"));
});

mobileLinks.forEach(link => {
  link.addEventListener("click", () => setMenu(false));
});

const sections = [...document.querySelectorAll("main section[id]")];
const desktopLinks = [...document.querySelectorAll(".desktop-nav a[data-section]")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      desktopLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.dataset.section === entry.target.id
        );
      });
    });
  }, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}
