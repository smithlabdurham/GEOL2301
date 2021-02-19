var canvas2 = document.getElementById('paint2');
var ctx2 = canvas2.getContext('2d');
 
var sketch2 = document.getElementById('sketch2');
var sketch_style2 = getComputedStyle(sketch2);
canvas2.width = 600;
canvas2.height = 300;

var mouse = {x: 0, y: 0};
 
/* Mouse Capturing Work */
canvas2.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.getBoundingClientRect().left - window.pageXOffset;
  mouse.y = e.pageY - this.getBoundingClientRect().top - window.pageYOffset;
}, false);

/* Drawing on Paint App */
ctx2.lineJoin = 'round';
ctx2.lineCap = 'round';
ctx2.lineWidth = '4';

ctx2.strokeStyle = "#56b4e911";
function getColor2(colour){
  ctx2.strokeStyle = colour;
  ctx2.lineWidth = '4';
}
function getSize2(size){ctx2.lineWidth = size;}          

canvas2.addEventListener('mousedown', function(e) {
    ctx2.beginPath();
    ctx2.moveTo(mouse.x, mouse.y);
 
    canvas2.addEventListener('mousemove', onPaint2, false);
}, false);
 
canvas2.addEventListener('mouseup', function() {
    canvas2.removeEventListener('mousemove', onPaint2, false);
}, false);
 
var onPaint2 = function() {
    ctx2.lineTo(mouse.x, mouse.y);
    ctx2.stroke();
};

/* Clearing canvas */
function clearCanvas2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}