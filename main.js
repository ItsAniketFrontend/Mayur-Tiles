// Navbar-Background Color Change on Scroll
window.onscroll = function() {
    changeNavbarBackground();
};

function changeNavbarBackground() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust the scroll value to your needs
        navbar.style.backgroundColor = "#2B2B2B"; // New background color
    } else {
        navbar.style.backgroundColor = "transparent"; // Initial background color
    }
}
