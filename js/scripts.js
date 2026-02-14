// AOS
if (typeof AOS !== 'undefined' && document.querySelector('[data-aos]')) {
    AOS.init();
}

// Swiper
if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
        loop: true,
        pagination: { el: '.swiper-pagination' },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// GSAP
if (typeof gsap !== 'undefined' && document.querySelector('.item')) {
    gsap.from('.item', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
    });
}
