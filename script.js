/* ============================================================
   FAMRA STUDIO — Interaction System
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SCROLL REVEAL SYSTEM ---
    // Detecta elementos con la clase .reveal y los activa al entrar en el viewport
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85; // Se activa al 85% de la pantalla

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add('visible');
            }
        });
    };

    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- 2. ACTIVE NAVIGATION SYSTEM ---
    // Resalta el enlace actual en el menú basándose en la URL del archivo
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.site-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    console.log("FAMRA Studio System: Active & Clean");
});