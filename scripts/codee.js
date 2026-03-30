const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.shadowBlur = 10;         
ctx.shadowColor = '#679ef5';   
ctx.fillStyle = "#679ef5";
ctx.beginPath();
ctx.arc(700, 950, 800, 0, Math.PI*2 ,true);
ctx.closePath();
ctx.fill();