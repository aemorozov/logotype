const burgerMenu = document.querySelector(".burger");
const closeButton = document.querySelector(".header-mobile-cross-img");
const background = document.querySelector(".background");
const mobileMenu = document.querySelector(".nav");

burgerMenu.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0%)";
  background.style.display = "block";
});

closeButton.addEventListener("click", () => {
  close();
});

background.addEventListener("click", () => {
  close();
});

function close() {
  mobileMenu.style.transform = "translateX(-100%)";
  background.style.display = "none";
}
