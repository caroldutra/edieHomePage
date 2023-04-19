const navButton = document.querySelector(".toggle-nav-bar");
const navBar = document.querySelector(".nav-bar");

navButton.addEventListener("click", function () {
  navBar.classList.toggle("show-links");
});
