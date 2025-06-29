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
    title: "JennyPet Online Store",
    subtitle: "Adopt adorable pets at a good price",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups  required. Has been the industry's standard.",
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",

    tech: ["HTML", "CSS", "JavaScript"],
    featuredImage: "/media-files/Detail-Image.png",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron",
  },
  {
    title: "Typicode-Todos",
    subtitle: "Priority is the fuel of time management",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups  required. Has been the industry's standard.",
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    tech: ["HTML", "Tailwind", "React"],
    featuredImage: "/media-files/Detail-Image.png",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron",
  },
  {
    title: "Joke-Generator",
    subtitle: "Laugh out the stress with our little joke app",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups  required. Has been the industry's standard.",
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    tech: ["HTML", "Tailwind", "React"],
    featuredImage: "/media-files/Detail-Image.png",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron",
  },
  {
    title: "Flixx App",
    subtitle: "Watch any movie of your choice on Flixx",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups  required. Has been the industry's standard.",
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    tech: ["HTML", "Tailwind", "React"],
    featuredImage: "/media-files/Detail-Image.png",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron",
  },
  {
    title: "GreenTech",
    subtitle: "Protect our ecosystem via GreenTech solutions",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups  required. Has been the industry's standard.",
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    tech: ["HTML", "CSS", "JavaScript"],
    featuredImage: "/media-files/Detail-Image.png",
    live: "https://www.live-link.com",
    repo: "https://github.com/Stevieron",
  },
  {
    title: "CodeRite",
    subtitle: "Learn software development at CodeRite",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups  required. Has been the industry's standard.",
    fullDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tech: ["HTML", "CSS", "JavaScript"],
    featuredImage: "/media-files/Detail-Image.png",
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
    modalTitle.textContent = project.subtitle;
    modalTitleDesktop.textContent = project.subtitle;
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

// View Project-Details
const viewProject = document
  .querySelectorAll("#viewBtn")
  .forEach((viewProject) => {
    viewProject.addEventListener("click", function (e) {
      e.preventDefault();
      projectModal.classList.toggle("view-project");
      projectModal.scrollIntoView({ behavior: "smooth" });
      hero.classList.add("blur");
      workMain.classList.add("blur");
    });
  });

const closeProjectIcon = document.getElementById("closeProject");
closeProjectIcon.addEventListener("click", function () {
  projectModal.classList.remove("view-project");
  hero.classList.remove("blur");
  workMain.classList.remove("blur");
});

//   const portfolio = document.getElementById("portfolio");
// projects.forEach((eachProject) => {
//   const projectDetail = document.createElement("article");
//   const techList = eachProject.tech.map((item) => `<li>${item}</li>`).join("");
//   projectDetail.className = "project-details";
//   projectDetail.innerHTML = `
//     <article class="detail-title">
//                 <h3 class="sub title">Multi-Post Stories</h3>
//                 <h3 class="sub desktop">${eachProject.subtitle}</h3>
//                 <img id="closeProject" src="/media-files/Detail-Cancel-Menu.png" alt="Menu Icon" />
//               </article>
//               <ul class="categories project">${techList}</ul>
//             <article class="info">
//                 <img src=${eachProject.featuredImage} alt="Detail Image" class="project-img" />
//                 <div class="text-cta">
//                     <p class="project-info">
//                       Lorem Ipsum is simply dummy text of the printing and typesetting
//                       industry. Lorem Ipsum has been the industry's standard dummy text
//                       ever since the 1500s, when an unknown printer took a galley of
//                       type and scrambled it to make a type specimen book. It has
//                       survived not only five centuries, but also the leap into
//                       electronic typesetting, remaining essent
//                     </p>
//                     <p class="project-info desktop">${eachProject.fullDescription}</p>
//                     <article class="cta-detail">
//                       <button class="btn-detail">
//                         See live <a href="${eachProject.live}"><img src="/media-files/Detail-Icon-Link.png" alt="Link Icon" /></a>
//                       </button>
//                       <button class="btn-detail">
//                         See source <a href="${eachProject.repo}"><img src="/media-files/Detail-Icon-GitHub.png" alt="GitHub Icon" /></a>
//                       </button>
//                 </article>
//                 </div>
//             </article>
//   `;
//   console.log(projectDetail.innerHTML);
//   portfolio.appendChild(projectDetail);
// });
