const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".links li");

hamburger.addEventListener("click", () => {
  links.classList.toggle("open");
});
