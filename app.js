const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
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