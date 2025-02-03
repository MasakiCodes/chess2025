document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or nav links not found!");
    }
});
