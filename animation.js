


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
    

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                const startPosition = window.pageYOffset;
                const targetPosition = targetElement.getBoundingClientRect().top;
                const duration = 5000; // Duration in milliseconds (5 seconds)
                const startTime = performance.now();
    
                function animateScroll(currentTime) {
                    const timeElapsed = currentTime - startTime;
                    const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
    
                    window.scrollTo(0, run);
    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                }
    
                function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
    
                requestAnimationFrame(animateScroll);
            }
        });
    });
    