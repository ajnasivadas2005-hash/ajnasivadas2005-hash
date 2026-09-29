// Mobile navigation menu

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Close mobile menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const navLinks = document.querySelector(".nav-links");

        navLinks.classList.remove("active");

    });

});


// Add shadow to navbar when scrolling

window.addEventListener("scroll", function() {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});
