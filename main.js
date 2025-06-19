document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Optional: hide menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!toggleBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    });
  }

  // --- Background Music Autoplay ---
  const music = document.getElementById("bg-music");

  if (music) {
    const playMusic = () => {
      music.play().catch(() => {
        // Wait for any user interaction (safer than only click)
        const resumeAudio = () => {
          music.play();
          document.removeEventListener("click", resumeAudio);
          document.removeEventListener("touchstart", resumeAudio);
        };

        document.addEventListener("click", resumeAudio, { once: true });
        document.addEventListener("touchstart", resumeAudio, { once: true });
      });
    };

    playMusic();
  }
});
