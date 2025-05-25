const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});
