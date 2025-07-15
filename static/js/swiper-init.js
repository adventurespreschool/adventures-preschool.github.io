// Initialize Swiper carousel
document.addEventListener('DOMContentLoaded', function() {
    const heroSwiper = new Swiper('.hero-swiper', {
        // Basic settings
        loop: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination dots
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        
        // Responsive breakpoints
        breakpoints: {
            768: {
                spaceBetween: 30,
            },
            1024: {
                spaceBetween: 40,
            },
        },
        
        // Touch/swipe settings
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        
        // Accessibility
        a11y: {
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
        },
        
        // Keyboard navigation
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        
        // Mouse wheel
        mousewheel: {
            forceToAxis: true,
        },
    });
    
    // Pause autoplay on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            heroSwiper.autoplay.stop();
        });
        
        heroSection.addEventListener('mouseleave', () => {
            heroSwiper.autoplay.start();
        });
    }
});