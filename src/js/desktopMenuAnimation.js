const menu = document.querySelector(".nav");
const yMass = [0, 1];

document.addEventListener("scroll", () => {
  mass();
  moveMenu();
});

function mass() {
  yMass.unshift(window.pageYOffset);
  yMass.splice(2, 1);
}

function moveMenu() {
  if (
    window.pageYOffset >= 200 &&
    yMass[0] > yMass[1] &&
    window.outerWidth > 799
  ) {
    menu.style.transform = "translateY(-500%)";
    menu.style.transition = ".4s ease";
    menu.style.transitionProperty = "transform";
  } else if (window.outerWidth > 799) menu.style.transform = "translateY(0%)";
}
