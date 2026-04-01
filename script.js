document.addEventListener('DOMContentLoaded', () => {
    
    // --- REVELADO AL HACER SCROLL (FADE-IN) ---
    const observerOptions = { 
        threshold: 0.15 
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Seleccionamos los elementos que queremos que aparezcan con animación
    const itemsToReveal = document.querySelectorAll('.two-column-layout, .timeline-section, .divider');
    
    itemsToReveal.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
        revealObserver.observe(item);
    });

    console.log("FRAMA STUDIO: Site loaded successfully with system cursor.");
});