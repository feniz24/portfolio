/**
 * Mobile menu toggle and close on link click
 */
(function () {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');
    const icon = btn ? btn.querySelector('i') : null;

    if (!btn || !menu || !icon) return;

    btn.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        btn.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
        if (menu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Open menu');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
})();
