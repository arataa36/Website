// Wait until the page is ready before running any code
document.addEventListener('DOMContentLoaded', function() {
    // --- Tab navigation: show/hide category sections ---
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.tab-section');

    function showSection(id) {
        sections.forEach(s => {
            const isTarget = s.id === id;
            s.classList.toggle('active', isTarget);
        });
        navButtons.forEach(b => b.classList.toggle('active', b.dataset.target === id));

        // Make sure the first animate-items inside the shown section become visible
        const targetSection = document.getElementById(id);
        if (targetSection) {
            const items = targetSection.querySelectorAll('.animate-item');
            items.forEach(it => it.classList.add('visible'));
            // Move focus for keyboard users
            targetSection.focus({preventScroll: true});
        }
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.dataset.target);
        });
        // allow keyboard activation
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });

    // set default visible section if none
    if (!document.querySelector('.tab-section.active')) {
        showSection('about');
    }

    // Find all elements that should fade in
    const animatedElements = document.querySelectorAll('.animate-item');
    
    // This checks if we can see an element on the screen
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // This makes elements fade in when you scroll to them
    function handleScroll() {
        animatedElements.forEach(element => {
            // If we can see the element, make it visible
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Check for elements when the page first loads
    handleScroll();
    
    // Check for elements whenever you scroll
    window.addEventListener('scroll', handleScroll);
    
    // Make headings grow when you hover over them
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        // When mouse moves over heading
        heading.addEventListener('mouseenter', () => {
            heading.style.transform = 'scale(1.1)'; // Make it 10% bigger
        });
        
        // When mouse leaves heading
        heading.addEventListener('mouseleave', () => {
            heading.style.transform = 'scale(1)';   // Return to normal size
        });
    });
});
