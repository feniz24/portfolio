/**
 * Hero section typewriter effect
 */
(function () {
    const textElement = document.getElementById('typewriter');
    const lines = [
        '> Initializing SOC Environment...',
        '> User: Thant Htet Oo @ Feniz',
        '> Role: Junior SOC Analyst',
        '> Education: MSc Cyber Security',
        '> Status: Ready to Deploy...'
    ];

    var lineIndex = 0;
    var charIndex = 0;

    function typeWriter() {
        if (!textElement) return;
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                var content = '';
                for (var i = 0; i < lineIndex; i++) {
                    content += lines[i] + '<br>';
                }
                content += lines[lineIndex].substring(0, charIndex + 1);
                content += '<span class="cursor-blink">_</span>';
                textElement.innerHTML = content;
                charIndex++;
                setTimeout(typeWriter, 30);
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 500);
            }
        }
    }

    window.addEventListener('load', typeWriter);
})();
