document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SMOOTH CURSOR MOVEMENT ---
    const cursor = document.querySelector('#custom-cursor');
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Use Lerp (0.15) for a "lazy" high-end studio feel
        posX += (mouseX - posX) * 0.15;
        posY += (mouseY - posY) * 0.15;
        
        cursor.style.left = posX + 'px';
        cursor.style.top = posY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // --- 2. CURSOR INTERACTIONS ---
    const links = document.querySelectorAll('a, .styled-img, .next-box');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '70px';
            cursor.style.height = '70px';
            cursor.style.backgroundColor = 'rgba(0,0,0,0.1)';
            cursor.style.border = '1px solid #000';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = '#000';
            cursor.style.border = 'none';
        });
    });

    // --- 3. SCROLL REVEAL EFFECT ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.15 });

    const items = document.querySelectorAll('.two-column-layout, .timeline-section, .divider');
    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(item);
    });
});