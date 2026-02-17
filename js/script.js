// Cinematic scroll animation

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

document
  .querySelectorAll(".animate-fade")
  .forEach((el) => observer.observe(el));

// WhatsApp booking

function bookRoom(room) {
  const msg = `Hello, I want to book ${room}`;

  window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`);
}

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  document.querySelectorAll("video").forEach((el) => {
    el.style.transform = `translateY(${scrolled * 0.2}px)`;
  });
});
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.classList.add(
      "bg-white",
      "bg-opacity-80",
      "backdrop-blur-lg",
      "shadow-lg",
    );

    header.classList.remove("text-white");
  } else {
    header.classList.remove(
      "bg-white",
      "bg-opacity-80",
      "backdrop-blur-lg",
      "shadow-lg",
    );
  }
});

const header = document.getElementById("header");
const logo = document.getElementById("logo");
const navLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".mobile-link");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

/* Mobile menu toggle */

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

/* Scroll color change */

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("backdrop-blur-lg", "bg-white/80", "shadow-lg");

    logo.classList.replace("text-white", "text-gray-900");

    menuBtn.classList.replace("text-white", "text-gray-900");

    navLinks.forEach((link) => {
      link.classList.replace("text-white", "text-gray-900");
      link.classList.replace("hover:text-amber-300", "hover:text-amber-600");
    });
  } else {
    header.classList.remove("backdrop-blur-lg", "bg-white/80", "shadow-lg");

    logo.classList.replace("text-gray-900", "text-white");

    menuBtn.classList.replace("text-gray-900", "text-white");

    navLinks.forEach((link) => {
      link.classList.replace("text-gray-900", "text-white");
      link.classList.replace("hover:text-amber-600", "hover:text-amber-300");
    });
  }
});
