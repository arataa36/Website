// Wait until the page is ready before running any code
document.addEventListener('DOMContentLoaded', function() {
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