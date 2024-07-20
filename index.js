document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  let isOpen = false;

  const tl = gsap.timeline({ paused: true });
  tl.to(".website-content", {
    duration: 2,
    ease: "power4.inOut",
    clipPath: "polygon(50% 50%,50% 50%,50% 50%,50% 50%)",
    scale: 0.5,
  });

  tl.to(
    ".row",
    {
      duration: 3,
      left: "0%",
      ease: "power4.inOut",
      stagger: 0.1,
    },
    "-=2.5"
  );

  toggle.addEventListener("click", function () {
    if (isOpen) {
      tl.reverse();
    } else {
      tl.play();
    }
    isOpen = !isOpen;
  });
});
