document.addEventListener("DOMContentLoaded", () => {
  const foto = document.querySelector(".foto-sobremi");

  if (foto) {
    foto.addEventListener("mouseenter", () => {
      foto.src = "imag/yo-hover.webp";
      gsap.from(foto,{
        rotate:5,
        x: 5,
        ease: "back.out",
      })
    });

    foto.addEventListener("mouseleave", () => {
      foto.src = "imag/yo.webp";
      gsap.from(foto,{
        rotate:0,
        x: 0,
        ease: "back.out",
      })
    });
  }
});

let logo = document.querySelector(".logo");


gsap.from(logo,{
  x : -200,
  duration : 2,
  delay : 0.5,
  ease : "back.out"
})

gsap.from("li", {
  x: 200,
  duration: 2,
  delay: 0.5,
  ease: "back.out",
})

gsap.registerPlugin(ScrollTrigger);

//animacion cajas con texto
gsap.from(".servicio",{
  y: 150,
  opacity: 0,
  duration: 1,
  scrollTrigger: ".servicio",
  })

gsap.from(".container-contenido",{
  y: 150,
  opacity: 0,
  duration: 1,
  scrollTrigger: ".container-contenido",
  })