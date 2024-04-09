document.querySelectorAll('.overlay').forEach(function(overlay) {
    overlay.addEventListener('mouseover', function() {
        overlay.style.opacity = 0;
    });

    overlay.addEventListener('mouseleave', function() {
        overlay.style.opacity = 1;
    });
});

