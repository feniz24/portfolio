/**
 * Section reveal animation on scroll (respects prefers-reduced-motion)
 */
(function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        document.querySelectorAll('.section-reveal').forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    const revealSections = document.querySelectorAll('.section-reveal');
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0 });

    revealSections.forEach(function (section) {
        observer.observe(section);
    });
})();
