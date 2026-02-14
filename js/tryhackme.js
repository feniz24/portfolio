/**
 * TryHackMe badge: toggle in card, lazy-load iframe, loading state
 */
(function () {
    const thmViewBadgeBtn = document.getElementById('thm-view-badge');
    const thmFlagLogo = document.getElementById('thm-flag-logo');
    const thmBadgeLogo = document.getElementById('thm-badge-logo');
    const thmBadgeIframe = document.getElementById('thm-badge-iframe');
    const thmBadgeLoading = document.getElementById('thm-badge-loading');

    if (thmBadgeIframe) {
        thmBadgeIframe.addEventListener('load', function () {
            if (thmBadgeLoading) thmBadgeLoading.style.display = 'none';
            thmBadgeIframe.style.opacity = '1';
        });
    }

    if (thmViewBadgeBtn && thmFlagLogo && thmBadgeLogo) {
        thmViewBadgeBtn.addEventListener('click', function () {
            const showingBadge = !thmBadgeLogo.classList.contains('hidden');
            if (showingBadge) {
                thmBadgeLogo.classList.add('hidden');
                thmFlagLogo.classList.remove('opacity-0');
                thmViewBadgeBtn.innerHTML = 'View badge <i class="fas fa-medal ml-2"></i>';
            } else {
                thmFlagLogo.classList.add('opacity-0');
                thmBadgeLogo.classList.remove('hidden');
                thmViewBadgeBtn.innerHTML = 'Hide badge <i class="fas fa-flag ml-2"></i>';
                if (thmBadgeIframe && thmBadgeIframe.dataset.src && !thmBadgeIframe.src) {
                    if (thmBadgeLoading) thmBadgeLoading.style.display = 'flex';
                    thmBadgeIframe.style.opacity = '0';
                    thmBadgeIframe.src = thmBadgeIframe.dataset.src;
                } else if (thmBadgeLoading) {
                    thmBadgeLoading.style.display = 'none';
                    thmBadgeIframe.style.opacity = '1';
                }
            }
        });
    }
})();
