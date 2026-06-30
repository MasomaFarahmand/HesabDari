
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const isActive = faq.classList.contains("active");

    faqs.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".answer").style.maxHeight = null;
    });

    if (!isActive) {
      faq.classList.add("active");
      const answer = faq.querySelector(".answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ===== Sidebar Toggle =====
// opens/closes the mobile sidebar menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");

  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  // lock body scroll when sidebar is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// closes the sidebar (used by links and overlay)
function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");

  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// close sidebar when pressing ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("active")) {
      closeMenu();
    }
  }
});