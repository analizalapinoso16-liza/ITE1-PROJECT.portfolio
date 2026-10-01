// ==========================================
// ANA LZA'S ITE 1 PORTFOLIO
// JavaScript
// ==========================================


// ==========================================
// 1. DARK / LIGHT MODE
// ==========================================

const body = document.body;
const themeToggle = document.getElementById("themeToggle");

// Get saved theme from browser
const savedTheme = localStorage.getItem("portfolio-theme");

// Apply saved dark mode
if (savedTheme === "dark") {
    body.classList.add("dark");
}


// Change moon/sun icon
function updateThemeIcon() {
    if (!themeToggle) return;

    if (body.classList.contains("dark")) {
        themeToggle.textContent = "☀";
        themeToggle.title = "Switch to light mode";
    } else {
        themeToggle.textContent = "☾";
        themeToggle.title = "Switch to dark mode";
    }
}

updateThemeIcon();


// Toggle dark/light mode
themeToggle?.addEventListener("click", function () {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("portfolio-theme", "dark");
    } else {
        localStorage.setItem("portfolio-theme", "light");
    }

    updateThemeIcon();

    showToast(
        body.classList.contains("dark")
            ? "Dark mode enabled 🌙"
            : "Light mode enabled ☀️"
    );
});



// ==========================================
// 2. MOBILE NAVIGATION
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Open / close mobile menu
menuToggle?.addEventListener("click", function () {

    navLinks?.classList.toggle("open");

    if (navLinks?.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks?.classList.remove("open");

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});



// ==========================================
// 3. CURRENT YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent = currentYear;

}



// ==========================================
// 4. BACK TO TOP BUTTON
// ==========================================

const backTop = document.getElementById("backTop");


// Show button when scrolling
window.addEventListener("scroll", function () {

    if (!backTop) return;

    if (window.scrollY > 350) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


// Scroll smoothly to top
backTop?.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



// ==========================================
// 5. WELCOME MESSAGE
// ==========================================

const welcomeButton = document.getElementById("welcomeBtn");

welcomeButton?.addEventListener("click", function () {

    showToast(
        "Welcome to Anaiza's ITE 1 Portfolio! ✨"
    );

});



// ==========================================
// 6. SHOW / HIDE INFORMATION
// ==========================================

const skillsButton = document.getElementById("skillsBtn");
const skillMessage = document.getElementById("skillMessage");


skillsButton?.addEventListener("click", function () {

    if (!skillMessage) return;

    skillMessage.classList.toggle("show");


    if (skillMessage.classList.contains("show")) {

        skillsButton.textContent = "Hide my learning goal";

    } else {

        skillsButton.textContent = "Show my learning goal";

    }

});



// ==========================================
// 7. PROJECT CARD BUTTONS
// ==========================================

const projectLinks = document.querySelectorAll("[data-demo]");


projectLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const projectName = link.getAttribute("data-demo");

        showToast(
            projectName +
            " link is ready. Replace # with your actual activity link."
        );

    });

});



// ==========================================
// 8. CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");


contactForm?.addEventListener("submit", function (event) {

    // Prevent page from refreshing
    event.preventDefault();


    // Get the user's name
    const nameInput = document.getElementById("name");

    const userName = nameInput
        ? nameInput.value.trim()
        : "there";


    // Show success message
    showToast(
        "Thank you, " +
        (userName || "there") +
        "! Your message was submitted. 💜"
    );


    // Clear the form
    contactForm.reset();

});



// ==========================================
// 9. TOAST NOTIFICATION
// ==========================================

const toast = document.getElementById("toast");


function showToast(message) {

    if (!toast) return;


    // Put message inside toast
    toast.textContent = message;


    // Show toast
    toast.classList.add("show");


    // Clear previous timer
    clearTimeout(window.toastTimer);


    // Hide after 3 seconds
    window.toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, 3000);

}



// ==========================================
// 10. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", function (event) {

    if (!navLinks || !menuToggle) return;


    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navLinks.classList.contains("open")
    ) {

        navLinks.classList.remove("open");

        menuToggle.textContent = "☰";

    }

});



// ==========================================
// 11. ESCAPE KEY CLOSES MOBILE MENU
// ==========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks?.classList.remove("open");

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    }

});



// ==========================================
// 12. SIMPLE PAGE LOAD MESSAGE
// ==========================================

window.addEventListener("load", function () {

    console.log(
        "Anaiza's ITE 1 Portfolio loaded successfully! 💻✨"
    );

});