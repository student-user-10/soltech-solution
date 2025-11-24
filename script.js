document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = toggleBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 2. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    // 3. WhatsApp Form Handler (Global)
    window.sendWhatsapp = function(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('[name="name"]').value;
        const phone = form.querySelector('[name="phone"]').value;
        const msg = form.querySelector('[name="message"]').value;
        
        const text = `*New Solar Inquiry*%0AName: ${name}%0APhone: ${phone}%0AMessage: ${msg}`;
        const number = "919754985336"; // Soltech Number
        
        // Check if mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile 
            ? `whatsapp://send?phone=${number}&text=${text}`
            : `https://web.whatsapp.com/send?phone=${number}&text=${text}`;
            
        window.open(url, '_blank');
    }
});
