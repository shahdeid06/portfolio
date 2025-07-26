 const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      }, {
        threshold: 0.2
      });

      document.querySelectorAll(".section-title").forEach((el) => {
        observer.observe(el);
      });


  const projects = {
  html: {
    title: "HTML Project",
    description: "This project uses semantic HTML to create a clean and accessible layout.",
    image: "Screenshot 2025-07-26 033113.png",
    liveLink: "https://shahdeid06.github.io/Admin-panel/",
    codeLink: "https://github.com/shahdeid06/Admin-panel"
  },
  js: {
    title: "JavaScript Project",
    description: "A dynamic JavaScript app demonstrating interactivity and DOM manipulation.",
    image: "Screenshot 2025-07-26 033811.png",
    liveLink: "https://shahdeid06.github.io/To-do-list/",
    codeLink: "https://github.com/shahdeid06/To-do-list"
  },
  react: {
    title: "React Project",
    description: "A React app built using components, hooks, and state management.",
    image: "Screenshot 2025-07-26 033755.png",
    liveLink: "https://ecommerce-react-ijwp.vercel.app/",
    codeLink: "https://github.com/shahdeid06/Ecommerce-React"
  }
};

function showProject(type) {
  const card = document.getElementById("projectCard");
  const p = projects[type];

  card.innerHTML = `
    <img src="${p.image}" alt="${type} project image" class="w-full rounded-md mb-4">
    <h2 class="text-2xl font-bold mb-2">${p.title}</h2>
    <p class="mb-4">${p.description}</p>
    <div class="flex gap-4">
      <a href="${p.liveLink}" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Live Project</a>
      <a href="${p.codeLink}" target="_blank" class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">View Code</a>
    </div>
  `;
  card.style.opacity = 1;
}
    