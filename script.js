document.addEventListener('DOMContentLoaded', () => {
    
    const cursor = document.getElementById('custom-cursor');

    // --- MOUSE TRACKING ---
    document.addEventListener('mousemove', (e) => {
        window.requestAnimationFrame(() => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    });

    // --- HOVER INTERACTIONS ---
    const interactives = document.querySelectorAll('a, button, .next-box, .styled-img');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
    });

    // --- SCROLL REVEAL ---
    const revealElements = document.querySelectorAll('.two-column-layout, .divider');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(el);
    });
});