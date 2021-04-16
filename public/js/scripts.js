let menuIcon = document.querySelector(".menu");
let navLinks = document.querySelector(".nav-links");

const showHideNavLinks = function() {
    navLinks.classList.toggle("block");
}

menuIcon.addEventListener("click", showHideNavLinks);