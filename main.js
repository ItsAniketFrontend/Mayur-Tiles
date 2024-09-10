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


$(document).ready(function() {
    $("#news-sliderr").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
    });
});

$(document).ready(function() {
    $("#news-sliderrr").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
    });
});

$(document).ready(function() {
    $("#news-sliderrrr").owlCarousel({
        items : 2,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
    });
});