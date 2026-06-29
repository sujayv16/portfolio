function initAnimations() {
  if (window.AOS) {
    window.AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }

  const reveals = document.querySelectorAll(".reveal, .stagger-item");
  if (!reveals.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.16 },
  );

  reveals.forEach((element) => observer.observe(element));

  const tiltElement = document.getElementById("tilt");
  if (!tiltElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let frame = null;

  const resetTilt = () => {
    tiltElement.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  tiltElement.addEventListener("mousemove", (event) => {
    const bounds = tiltElement.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 10;
    const rotateX = (0.5 - y / bounds.height) * 10;

    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      tiltElement.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
  });

  tiltElement.addEventListener("mouseleave", resetTilt);
  tiltElement.addEventListener("blur", resetTilt);
}

document.addEventListener("portfolio:components-loaded", initAnimations);
