const menu = document.querySelector(".nav"),
  yMass = [0, 1];
function mass() {
  yMass.unshift(window.pageYOffset), yMass.splice(2, 1);
}
function moveMenu() {
  200 <= window.pageYOffset && yMass[0] > yMass[1] && 799 < window.outerWidth
    ? ((menu.style.transform = "translateY(-500%)"),
      (menu.style.transition = ".4s ease"),
      (menu.style.transitionProperty = "transform"))
    : 799 < window.outerWidth && (menu.style.transform = "translateY(0%)");
}
document.addEventListener("scroll", () => {
  mass(), moveMenu();
});
