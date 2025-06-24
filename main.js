document.addEventListener("DOMContentLoaded", () => {
  const foto = document.querySelector(".foto-sobremi");

  if (foto) {
    foto.addEventListener("mouseenter", () => {
      foto.src = "imag/yo-hover.webp";
    });

    foto.addEventListener("mouseleave", () => {
      foto.src = "imag/yo.webp";
    });
  }
});

let logo = document.querySelector(".logo");

gsap.from(logo,{
  x : -200,
  rotate : 90,
  duration : 2,
  delay : 0.5,
  ease : "back.out"
})

gsap.from("li", {
  y: -60,
  duration: 2,
  delay: 0.5,
  rotate : 25,
  ease: "back.out"
})