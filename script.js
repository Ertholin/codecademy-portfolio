document.querySelectorAll('.overlay').forEach(function(overlay) {
    overlay.addEventListener('mouseover', function() {
        overlay.style.opacity = 0;
    });

    overlay.addEventListener('mouseleave', function() {
        overlay.style.opacity = 1;
    });
});


var monCanvas = document.getElementById('dessin');
var ctx = monCanvas.getContext('2d');

ctx.lineWidth = 5;
ctx.fillStyle = "#FDAD52";
ctx.strokeStyle = "#FFFFFF";

ctx.beginPath();

ctx.arc(153, 53, 50, 0, Math.PI*2, true);

ctx.fill();
ctx.stroke();
