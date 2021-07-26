const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

ctx.beginPath();
ctx.arc(240, 350, 65, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();

ctx.beginPath();
ctx.arc(240, 350, 65, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 350);
ctx.lineTo(480, 350);
ctx.strokeStyle = "red";
ctx.stroke();