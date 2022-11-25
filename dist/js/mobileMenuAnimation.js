const burgerMenu = document.querySelector(".burger"),
  closeButton = document.querySelector(".header-mobile-cross-img"),
  background = document.querySelector(".background"),
  mobileMenu = document.querySelector(".nav");
function close() {
  (mobileMenu.style.transform = "translateX(-100%)"),
    (background.style.display = "none");
}
burgerMenu.addEventListener("click", () => {
  (mobileMenu.style.transform = "translateX(0%)"),
    (background.style.display = "block");
}),
  closeButton.addEventListener("click", () => {
    close();
  }),
  background.addEventListener("click", () => {
    close();
  });
