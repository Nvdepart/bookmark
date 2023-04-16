const toggleBtn = document.querySelector("#toggle");
const navList = document.querySelector(".nav_list");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
