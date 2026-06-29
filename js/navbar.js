function initNavbar() {
  const nav = document.getElementById("siteNav");
  const menu = document.getElementById("siteMenu");
  const toggle = document.querySelector(".nav-toggle");
  const links = Array.from(document.querySelectorAll(".site-nav__link"));

  if (!nav || !menu || !toggle) {
    return;
  }

  const setOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("is-open"));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        setOpen(false);
      }
    });
  });

  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true },
  );

  const sections = links
    .map((link) => document.getElementById(link.dataset.section || link.getAttribute("href")?.replace("#", "")))
    .filter(Boolean);

  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const activeId = entry.target.id;
          links.forEach((link) => {
            const sectionId = link.dataset.section || link.getAttribute("href")?.replace("#", "");
            link.classList.toggle("is-active", sectionId === activeId);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));
  }
}

document.addEventListener("portfolio:components-loaded", initNavbar);
