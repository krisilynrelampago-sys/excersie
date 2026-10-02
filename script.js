
/* Welcome Message */
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Button Click Event
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Thank you for visiting our website!");
        });
    });

    // Mobile Navigation Toggle
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("#nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector("#back-to-top");

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});