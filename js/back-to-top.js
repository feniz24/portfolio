/**
 * Back-to-top button: show after scrolling one viewport, smooth scroll on click
 */
(function () {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    function toggleBackToTop() {
        const show = window.scrollY > window.innerHeight;
        backToTop.setAttribute('aria-hidden', !show);
    }

    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
