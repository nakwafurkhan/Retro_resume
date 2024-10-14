// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

const sectionOptions = {
    root: null,
    threshold: 0.1,
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, sectionOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Smoothly animate skills when they come into view
const skillsContainer = document.querySelector('.skills');
const skillElements = document.querySelectorAll('.skills .skill');

if (skillsContainer && skillElements.length > 0) {
    const skillOptions = {
        root: null,
        threshold: 0.1,
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsContainer.classList.add('skill-visible');
                skillElements.forEach(skill => skill.classList.add('skill-visible'));
                skillObserver.unobserve(entry.target);
            }
        });
    }, skillOptions);

    skillObserver.observe(skillsContainer);
}
