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

// Main projects
const projects = [
  {
    title: "Jenny Pet Store",
    description:
      "Discover your perfect pet match with Jenny Store—adopt cats, dogs, and rabbits easily and safely online.",
    fullDescription:
      "Jenny Pet Online Store is a dynamic and user-friendly adoption platform that connects loving homes with healthy, vaccinated pets. Designed with responsive layouts, a fun pricing section, and engaging JavaScript features like hero animations and hamburger navigation, the site is a perfect example of practical frontend interactivity. Pets come with starter kits, star ratings, and users can explore various pet types.",

    tech: ["HTML", "CSS", "JavaScript"],
    featuredImage: "/media-files/Jenny-Img-Store.jpeg",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron/jenny-pet-store",
  },
  {
    title: "Typicode-Todos",
    description:
      "A responsive To-Do app powered by Typicode API with CRUD operations and sleek UI interactions.",
    fullDescription:
      "Typicode-Todos is a task management web application built with clean JavaScript and connected to the JSONPlaceholder API. Users can add, update, mark complete, and delete tasks in real time. The app utilizes modular JavaScript, custom styling, and mobile-first responsiveness.",
    tech: ["HTML", "Tailwind", "React"],
    featuredImage: "/media-files/Detail-Image.png",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron/typicode-todos",
  },
  {
    title: "Joke-Generator",
    description:
      "A user-friendly application that instantly generate hilarious jokes with a click—powered by JokeAPI for endless fun.",
    fullDescription:
      "The Joke Generator App fetches real-time jokes using an external API and displays them interactively. The UI features custom loaders, a typing effect during fetch, and styled quote boxes. With added features like dark mode, share-to-social options, and a history log, the app encourages user engagement. The project showcases event-driven JS, clean code organization, and a polished minimalist aesthetic.",
    tech: ["HTML", "Tailwind", "React"],
    featuredImage: "/media-files/Detail-Image.png",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron/joke-generator",
  },
  {
    title: "Flixx App",
    description:
      "A modern movie web app displaying trending films, genres, and search using The Movie DB API.",
    fullDescription:
      "Flixx App is a fully responsive movie discovery platform featuring up-to-date data from TMDB. Users can explore trending movies, genre-specific filters, and detailed film information via modals. Built with semantic HTML, grid-based layouts, and optimized JS, Flixx also includes features like theme toggling, search auto-suggestions, and favorites list via localStorage.",
    tech: ["HTML", "Tailwind", "React"],
    featuredImage: "/media-files/showcase-bg.jpg",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron/flixx-app",
  },
  {
    title: "Smart Transport",
    description:
      "A online law repository for global smart transportation policies—scraping and laws across countries. ",
    fullDescription:
      "Smart Transport is a modern, data-driven web app designed to serve as a centralized legal repository for smart transportation laws worldwide. The app scrapes, organizes, and displays legislation on autonomous vehicles, electric mobility, ride-sharing, and public transport innovation. Built with a focus on usability and structured content, it includes search and filter functionalities, country-based categorization, and modal views for in-depth law descriptions.",
    tech: ["HTML", "CSS", "JavaScript"],
    featuredImage: "/media-files/smart_transport.jpg",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron/smart_transport",
  },
  {
    title: "CodeRite",
    description:
      "Learn software development the right way—CodeRite offers guided learning paths for aspiring developers.",
    fullDescription:
      "CodeRite is a simulated learning platform focused on teaching software development skills through curated modules, interactive challenges, and mentorship features. The site includes lesson highlights, tech stack breakdowns, progress tracking indicators, and a call-to-action for joining coding cohorts. While static, the design represents scalable education platforms with real-world structure.",
    tech: ["HTML", "CSS", "JavaScript"],
    featuredImage: "/media-files/coderite_image.jpeg",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron",
  },
];

// Project Cards
const projectContainer = document.getElementById("projectFrame");
projects.forEach((project) => {
  const card = document.createElement("article");
  card.classList.add("card");

  const techList = project.tech.map((item) => `<li>${item}</li>`).join("");

  card.innerHTML = `
              <h3 class="card-title title">${project.title}</h3>
              <p>${project.description}</p>
              <ul class="categories frame">${techList}</ul>
              <button id="viewBtn" type="button">See project</button>
  `;

  projectContainer.appendChild(card);
});

// Project-Details
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalTitleDesktop = document.getElementById("modalTitleDesktop");
const modalTech = document.getElementById("categories");
const featuredImage = document.getElementById("featuredImage");
const projectDesc = document.getElementById("projectDesc");
const projectDescDesktop = document.getElementById("projectDescDesktop");
const modalLive = document.getElementById("modalLive");
const modalRepo = document.getElementById("modalRepo");
const hero = document.getElementById("hero");
const workMain = document.querySelector(".work-main");
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.setAttribute("data-index", index);
  card.addEventListener("click", function () {
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalTitleDesktop.textContent = project.title;
    featuredImage.src = project.featuredImage;
    projectDesc.innerHTML = project.fullDescription.replace(/\n/g, "<br><br>");
    projectDescDesktop.innerHTML = project.fullDescription.replace(
      /\n/g,
      "<br><br>"
    );
    modalLive.href = project.live;
    modalRepo.href = project.repo;

    modalTech.innerHTML = "";
    project.tech.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = tech;
      modalTech.appendChild(li);
    });
  });
});

// Get modal and blur body
const pageContent = document.getElementById("pageContent");
function openModal(index) {
  document.body.classList.add("modal-open");
  projectModal.style.display = "block";
  pageContent.classList.add("blurred");
  projectModal.classList.add("view-project");
  projectModal.scrollIntoView({ behavior: "smooth" });
}

function closeModal() {
  document.body.classList.remove("modal-open");
  projectModal.style.display = "none";
  pageContent.classList.remove("blurred");
  projectModal.classList.remove("view-project");
}

const viewProject = document
  .querySelectorAll("#viewBtn")
  .forEach((viewProject, index) => {
    viewProject.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(index);
    });
  });

const closeProjectIcon = document.getElementById("closeProject");
closeProjectIcon.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (
    projectModal.style.display === "block" &&
    !projectModal.contains(e.target) &&
    !e.target.closest(".card")
  ) {
    closeModal();
  }
});
