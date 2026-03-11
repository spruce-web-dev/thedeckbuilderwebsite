window.addEventListener("load", function () {
    document.querySelectorAll(".read-more-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".testimonial-card");
            card.classList.toggle("expanded");

            btn.textContent = card.classList.contains("expanded")
                ? "Read less"
                : "Read more";
        });
    });
});