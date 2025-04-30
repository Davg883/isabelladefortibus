document.addEventListener('DOMContentLoaded', () => {

    // --- Fade-in Animation on Scroll ---
    const fadeElements = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });

    // --- Hero Background Image ---
    // Set hero background from HTML inline style (already done in HTML generation)
    // const heroSection = document.getElementById('hero');
    // if (heroSection && heroSection.style.backgroundImage) {
    //     // Already set inline
    // } else if (heroSection) {
    //     // Fallback if needed, though inline is preferred from prompt
    //     heroSection.style.backgroundImage = "url('Public/Image/Arial view.png')";
    // }


    // --- Interactive 'Then & Now' Comparison Slider ---
    const slider = document.getElementById('comparisonSlider');
    const afterImage = document.querySelector('.after-image');

    if (slider && afterImage) {
        slider.addEventListener('input', (e) => {
            // Update the clip-path percentage based on slider value
            afterImage.style.clipPath = `polygon(${e.target.value}% 0, 100% 0, 100% 100%, ${e.target.value}% 100%)`;
        });
    }

    // --- Other Interactions (Placeholders/Examples) ---

    // Example: Hover effect for specific elements (can also be done purely in CSS)
    const hoverElements = document.querySelectorAll('.hover-effect-element');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Add a class or style on hover if needed beyond CSS :hover
        });
        el.addEventListener('mouseleave', () => {
            // Remove class or style
        });
    });

    // Example: Clickable detail reveal (if needed)
    // const clickableDetails = document.querySelectorAll('.clickable-detail');
    // clickableDetails.forEach(el => {
    //     el.addEventListener('click', () => {
    //         // Logic to reveal more info, e.g., toggle a class on a related element
    //         console.log('Detail clicked:', el.alt);
    //     });
    // });

});
