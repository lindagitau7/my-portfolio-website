// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeToggle.textContent = "☀️"; // sun icon
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙"; // moon icon
    localStorage.setItem("theme", "dark");
  }
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
