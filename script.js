// ==================== SMOOTH SCROLL & ACTIVE NAVIGATION ====================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add smooth scroll behavior to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== ACTIVE SECTION HIGHLIGHTING ====================

// Intersection Observer for active section highlighting
const sections = document.querySelectorAll('section[id]');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// ==================== FADE-IN ANIMATION ON SCROLL ====================

// Add fade-in class to elements when they enter viewport
const fadeElements = document.querySelectorAll('.project-card, .service-card');

const fadeObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, fadeObserverOptions);

// Initialize fade elements with hidden state
fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// ==================== MOBILE MENU TOGGLE (Optional Enhancement) ====================

// This is a basic implementation - can be enhanced if needed
// Currently the design uses a simple responsive layout without a hamburger menu
