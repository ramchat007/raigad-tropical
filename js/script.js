/* ============================
RAIGAD TROPICAL MAIN SCRIPT
============================ */
document.addEventListener("DOMContentLoaded", function () {
  /* GSAP REGISTER SCROLLTRIGGER */

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

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
MOBILE MENU SLIDE PANEL FIX
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

  closeMenuBtn.addEventListener("click", closeMenu);

  function closeMenu() {
    mobileMenu.classList.add("translate-x-full");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollPosition);
  }

  /* ============================
HERO TEXT ANIMATION
============================ */

  gsap.from("#home h1", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 2,
  });

  gsap.from("#home p", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    delay: 2,
  });

  gsap.from("#home a", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 2,
    stagger: 0.2,
  });

  /* ============================
SCROLL ANIMATIONS
============================ */

  /* ABOUT SECTION */

  gsap.from("#about img", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },

    x: -100,
    opacity: 0,
    duration: 1.2,
  });

  gsap.from("#about h2", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },

    y: 60,
    opacity: 0,
    duration: 1,
  });

  gsap.from("#about p", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
  });

  /* SERVICES CARDS */
  gsap.from("#services .grid", {
    scrollTrigger: {
      trigger: "#services",
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
  });
  /* ACCOMMODATION CARDS */

  gsap.from("#accommodation .rounded-xl", {
    scrollTrigger: {
      trigger: "#accommodation",
      start: "top 80%",
    },

    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });

  /* CONTACT SECTION */

  gsap.from("#contact form", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },

    y: 80,
    opacity: 0,
    duration: 1,
  });

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
    delay: 2,
    y: 80,
  });

  /* ============================
FORT GATE INTRO ANIMATION
============================ */

  window.addEventListener("load", () => {
    const tl = gsap.timeline();

    tl.to(".gate-left", {
      x: "-100%",
      duration: 1.8,
      ease: "power3.inOut",
    })

      .to(
        ".gate-right",
        {
          x: "100%",
          duration: 1.8,
          ease: "power3.inOut",
        },
        "<",
      )

      .to("#fortIntro", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document.getElementById("fortIntro").style.display = "none";
        },
      });
  });

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

    if (currentIndex >= galleryImages.length) {
      currentIndex = 0;
    }

    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = galleryImages.length - 1;
    }

    showImage(currentIndex);
  });

  closeBtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    gsap.to(lightboxImg, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lightbox.style.display = "none";
      },
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  gsap.from(".gallery-masonry", {
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
  });

  document.addEventListener("keydown", function (e) {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") {
        nextBtn.click();
      }

      if (e.key === "ArrowLeft") {
        prevBtn.click();
      }

      if (e.key === "Escape") {
        closeBtn.click();
      }
    }
  });

  let startX = 0;

  lightboxImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  lightboxImg.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) {
      prevBtn.click();
    }

    if (startX - endX > 50) {
      nextBtn.click();
    }
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
});
