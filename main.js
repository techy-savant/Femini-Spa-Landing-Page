//Menu Open Close
let menu = document.querySelector(".menu-icon");
let menuIcon = document.querySelector(".menu-icon i");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  menuIcon.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

//swiper
var swiper = new Swiper(".services-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Header
let header = document.querySelector('header');

window.addEventListener("scroll", () =>{
    header.classList.toggle("shadow", window.scrollY > 0);

});
// Loader

onload = () =>{
    const load = document.getElementById('loader');

    setTimeout(() =>{
        load.style.display = "none";
    },4000);
}

