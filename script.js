// Auto update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// (Optional) Add smooth fade-in effect for sections
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden style for sections
document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease-out";
});
