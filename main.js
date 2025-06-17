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