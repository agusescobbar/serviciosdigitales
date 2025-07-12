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
const text = new SplitType('#serviciosTitulo', {types: 'chars'});



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

gsap.from("#heading",{
  y: 150,
  opacity: 0,
  duration: 1,
  scrollTrigger: "#heading",
  })

gsap.from(".container-contenido",{
  y: 150,
  opacity: 0,
  duration: 2,
  scrollTrigger: ".container-contenido",
  })


//animacion del titulo principal
text.chars.forEach((char,index) => {
    
    let charst = gsap.timeline();
    
    
    charst.from(char, {
        y: gsap.utils.random(-150,150),
        x: gsap.utils.random(-250,250),
        rotate: gsap.utils.random(-180,180),
        scale: gsap.utils.random(-1,2),
        opacity: 0,
        duration: 1.5 ,
        ease: "back.out",
        delay : index * 0.01
    })
    charst.from(char, {
        color: `rgb(${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)})`,
        duration: 0.1,
    }, "-=.2")
  });