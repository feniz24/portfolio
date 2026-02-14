/**
 * Skills section tabs (Security / Cloud / Data)
 * switchTab is global so onclick="switchTab('sec')" in HTML works
 */
function switchTab(tabName) {
    document.querySelectorAll('.skill-content').forEach(function (el) {
        el.classList.add('hidden');
    });
    var contentEl = document.getElementById('content-' + tabName);
    if (contentEl) {
        contentEl.classList.remove('hidden');
        contentEl.classList.add('grid');
    }

    var buttons = document.querySelectorAll('button[id^="tab-"]');
    buttons.forEach(function (btn) {
        btn.className = 'hover-trigger px-6 py-2 rounded-full font-medium text-sm text-pro-muted hover:text-white transition-all duration-300';
    });

    var activeBtn = document.getElementById('tab-' + tabName);
    if (!activeBtn) return;
    var activeColor = 'bg-pro-primary text-white shadow-lg';
    if (tabName === 'cloud') activeColor = 'bg-pro-secondary text-white shadow-lg';
    if (tabName === 'data') activeColor = 'bg-pro-accent text-white shadow-lg';
    activeBtn.className = 'hover-trigger px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ' + activeColor;
}
