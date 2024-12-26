


    document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll(".card");

        const revealCards = () => {
            const triggerPoint = window.innerHeight; // Trigger point is the bottom of the viewport
            cards.forEach((card) => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < triggerPoint) {
                    card.classList.add("show");
                }
            });
        };

        // Trigger the function on scroll and load
        window.addEventListener("scroll", revealCards);
        revealCards(); // Initial check
    });

