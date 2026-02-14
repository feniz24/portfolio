/**
 * Custom cursor (dot + outline) on desktop; respects reduced-motion
 */
(function () {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    function setCursorPos(x, y) {
        if (cursorDot && cursorOutline) {
            cursorDot.style.left = x + 'px';
            cursorDot.style.top = y + 'px';
            cursorOutline.style.left = x + 'px';
            cursorOutline.style.top = y + 'px';
        }
    }

    function moveCursor(e) {
        setCursorPos(e.clientX, e.clientY);
    }

    if (cursorDot && cursorOutline && window.matchMedia('(min-width: 768px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCursorPos(Math.round(window.innerWidth / 2), Math.round(window.innerHeight / 2));
    }

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', moveCursor);

    const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button');
    hoverTriggers.forEach(function (trigger) {
        trigger.addEventListener('mouseenter', function () {
            document.body.classList.add('hovering');
        });
        trigger.addEventListener('mouseleave', function () {
            document.body.classList.remove('hovering');
        });
    });
})();
