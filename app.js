const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const authButtons = document.querySelector(".auth-buttons")

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    authButtons.classList.toggle("active")

    if (navLinks.classList.contains("active")) {

        menuToggle.textContent = "✕";

    } else {

        menuToggle.textContent = "☰";

    }



});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector(".faq-icon").textContent = "+";
        });

        if (!isActive) {
            item.classList.add("active");
            item.querySelector(".faq-icon").textContent = "−";
        }

    });

});