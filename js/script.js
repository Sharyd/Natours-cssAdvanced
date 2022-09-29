const nav = document.querySelector(".navigation__nav");
const navBack = document.querySelector(".navigation__background");
const toggle = document.querySelector("#navi-toggle");
const navBtn = document.querySelector(".navigation__button");
const navIcon = document.querySelector(".navigation__icon");

nav.addEventListener("click", function (e) {
  if (e.target.classList.contains(nav)) {
    e.preventDefault();
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  closeMenu();
});

const closeMenu = function () {
  navBack.style.transform = "scale(0)";
  nav.style.opacity = "0";
  nav.style.width = "0";

  // root.style.setProperty("--pseudo-top, '0' ");
  // root.style.setProperty("--pseudo-transform,`rotate(0deg)`");

  // navBtn.style.top = "0";
  // navIcon.style.top = "0";
  // navBtn.style.transform = "rotate(-135deg)";
  // navBtn.style.transform = "rotate(-135deg)";
};
closeMenu();

toggle.addEventListener("click", function (e) {
  if (e.target.checked) {
    navBack.style.transform = "scale(80)";
    nav.style.opacity = "1";
    nav.style.width = "100%";
  } else if (e.target.checked === false) {
    navBack.style.transform = "scale(0)";
    nav.style.opacity = "0";
    nav.style.width = "0";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    navBack.style.transform = "scale(0)";
    nav.style.opacity = "0";
    nav.style.width = "0";
  }
});

// event listeners

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && nav.classList.contains("active")) {
    closeMenu();
  }
});
