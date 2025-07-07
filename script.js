const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});
