const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const navList = document.querySelector(".nav_list");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  navList.classList.toggle("nav_list-show");
});
/* hamburger.forEach((element) => {
  element.addEventListener("click", () => {
    //element.classList.toggle();

    menu.classList.toggle("nav_list-show");
  });
}); 
hamburger.addEventListener("click", () => {
  hamburger.src = "./images/icon-close.svg";
  menu.classList.toggle("nav_list-show");
});*/
