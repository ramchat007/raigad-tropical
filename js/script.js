/* ============================
RAIGAD TROPICAL MAIN SCRIPT
============================ */

/* ============================
1. FORT GATE & HERO MASTER TIMELINE
   (Fires on window load to ensure assets are ready)
============================ */
window.addEventListener("load", () => {
  // Register ScrollTrigger early
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const masterTl = gsap.timeline();

  // Open the Gates
  masterTl
    .to(".gate-left", { x: "-100%", duration: 1.8, ease: "power3.inOut" })
    .to(".gate-right", { x: "100%", duration: 1.8, ease: "power3.inOut" }, "<")
    .to("#fortIntro", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.getElementById("fortIntro").style.display = "none";
      },
    })
    // Animate Hero Text immediately after gates finish (no hardcoded delays needed!)
    .from(
      "#home h1",
      { y: 80, opacity: 0, duration: 1.2, ease: "power3.out" },
      "-=0.2",
    )
    .from("#home p", { y: 40, opacity: 0, duration: 1.2 }, "-=1")
    .from("#home a", { opacity: 0, y: 30, duration: 1, stagger: 0.2 }, "-=1");
});

/* ============================
2. DOM CONTENT LOADED (Scroll & Interactions)
============================ */
document.addEventListener("DOMContentLoaded", function () {
  /* ============================
    STICKY HEADER ON SCROLL
    ============================ */
  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* ============================
    MOBILE MENU SLIDE PANEL
    ============================ */
  const menuBtn = document.getElementById("menuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  let scrollPosition = 0;

  menuBtn.addEventListener("click", () => {
    scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
    mobileMenu.classList.remove("translate-x-full");
  });

  function closeMenu() {
    mobileMenu.classList.add("translate-x-full");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
  }

  closeMenuBtn.addEventListener("click", closeMenu);

  // Allow closing menu by clicking menu links
  document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ============================
    SCROLL ANIMATIONS
    ============================ */

  // ABOUT SECTION
  gsap.from("#about img", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    x: -100,
    opacity: 0,
    duration: 1.2,
  });

  gsap.from("#about h2", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    y: 60,
    opacity: 0,
    duration: 1,
  });

  gsap.from("#about p", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
  });

  // SERVICES CARDS
  gsap.from("#services .grid", {
    scrollTrigger: { trigger: "#services", start: "top 80%" },
    y: 60,
    opacity: 0,
    duration: 1,
  });

  // ACCOMMODATION CARDS
  gsap.from("#accommodation .rounded-xl", {
    scrollTrigger: { trigger: "#accommodation", start: "top 80%" },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });

  // CONTACT SECTION (Safety check added in case form is commented out in HTML)
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    gsap.from(contactForm, {
      scrollTrigger: { trigger: "#contact", start: "top 80%" },
      y: 80,
      opacity: 0,
      duration: 1,
    });
  }

  /* ============================
    PARALLAX HERO EFFECT
    ============================ */
  gsap.to("#home video", {
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    scale: 1.15,
    y: 80,
  });

  /* ============================
    JOURNEY STORY TEXT
    ============================ */
  gsap.utils.toArray(".journey-step h2").forEach((text) => {
    gsap.to(text, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: text,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  /* ============================
    GALLERY MASONRY ANIMATION
    ============================ */
  gsap.from(".gallery-masonry", {
    scrollTrigger: { trigger: "#gallery", start: "top 85%" },
    y: 60,
    opacity: 0,
    duration: 1,
  });

  /* ============================
    LIGHTBOX FUNCTIONALITY
    ============================ */
  const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");
  const nextBtn = document.querySelector(".lightbox-next");
  const prevBtn = document.querySelector(".lightbox-prev");

  let currentIndex = 0;

  function showImage(index) {
    lightbox.style.display = "flex";
    lightboxImg.src = galleryImages[index].src;

    gsap.fromTo(
      lightboxImg,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
    );
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) currentIndex = 0;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = galleryImages.length - 1;
    showImage(currentIndex);
  });

  // Handle closing via the close button
  closeBtn.addEventListener("click", () => {
    document.body.style.overflow = "auto"; // Restore scroll
    gsap.to(lightboxImg, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lightbox.style.display = "none";
      },
    });
  });

  // Fix: Clicking the dark background properly restores the body scroll
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeBtn.click();
    }
  });

  // Keyboard Navigation
  document.addEventListener("keydown", function (e) {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "Escape") closeBtn.click();
    }
  });

  // Touch Swipe Gestures
  let startX = 0;
  lightboxImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  lightboxImg.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) prevBtn.click();
    if (startX - endX > 50) nextBtn.click();
  });

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.replace("opacity-0", "opacity-100");
    } else {
      backToTop.classList.replace("opacity-100", "opacity-0");
    }
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      items.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
          gsap.from(item, { scale: 0.8, opacity: 0, duration: 0.4 });
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
