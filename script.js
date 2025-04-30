document.addEventListener('DOMContentLoaded', () => {

    // Fade-in animation on scroll
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target);
            }
            // Optional: remove class if element scrolls out of view
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Placeholder for Parallax effect (if more advanced than CSS background-attachment: fixed is needed)

    // Interactive Hotspots Logic
    const hotspots = document.querySelectorAll('.hotspot');

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', (event) => {
            // Prevent click from propagating to document listener if added later
            event.stopPropagation();

            // Close other active hotspots
            hotspots.forEach(otherHotspot => {
                if (otherHotspot !== hotspot) {
                    otherHotspot.classList.remove('active');
                }
            });

            // Toggle active state for the clicked hotspot
            hotspot.classList.toggle('active');
        });
    });

    // Optional: Close hotspots if clicking outside
    document.addEventListener('click', () => {
        hotspots.forEach(hotspot => {
            hotspot.classList.remove('active');
        });
    });


    // Placeholder for Timeline interactivity

});
