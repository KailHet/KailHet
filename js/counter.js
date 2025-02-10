document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const animateCounter = (element) => {
        const target = +element.dataset.target;
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = current;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        requestAnimationFrame(updateCounter);
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    counters.forEach(counter => observer.observe(counter));
});