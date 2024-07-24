window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (scrollTop > elementTop - windowHeight + 100) {
            element.classList.add('visible');
        }
    });
});