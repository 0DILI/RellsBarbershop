document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Optional: hide menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });
});
