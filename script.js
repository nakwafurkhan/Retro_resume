// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Smoothly animate skills when they come into view
const skillElements = document.querySelectorAll('.skills .skill');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skill-visible');
            skillObserver.unobserve(entry.target);
        }
    });
}, options);

skillElements.forEach(skill => {
    skillObserver.observe(skill);
});
