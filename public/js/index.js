const body = document.querySelector("body");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const navOverlay = document.querySelector(".nav-overlay");
const links = document.querySelectorAll(".nav-link");
const navLinks = document.querySelector(".nav-links");
const applyLink = document.querySelector("#apply-link");
const media = window.matchMedia("(width < 56.25em)");

const openMobileMenu = () => {
  btnOpen.setAttribute("aria-expanded", "true");
  body.classList.add("no-scroll");
};

const closeMobileMenu = () => {
  btnOpen.setAttribute("aria-expanded", "false");
  body.classList.remove("no-scroll");
};

const setupNav = (e) => {
  if (e.matches) {
    // console.log("Is mobile");

    // delaying the weird transition in the css transition property until after display block has been added.
    setTimeout(() => {
      navLinks.style.display = "block";
      navOverlay.style.display = "block";
    }, 500);
  } else {
    // console.log("Is desktop");

    navLinks.style.display = "";
  }
};

setupNav(media);

// Event listeners
btnOpen.addEventListener("click", openMobileMenu);

btnClose.addEventListener("click", closeMobileMenu);

links.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

applyLink.addEventListener("click", closeMobileMenu);

media.addEventListener("change", (e) => {
  // console.log(`window.matchMedia change = ${+e.matches}`);
  setupNav(e);
});
