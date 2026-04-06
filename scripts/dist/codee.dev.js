"use strict";

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// ctx.shadowBlur = 10;         
// ctx.shadowColor = '#679ef5';   
// ctx.fillStyle = "#679ef5";
// ctx.beginPath();
// ctx.arc(700, 950, 800, 0, Math.PI*2 ,true);
// ctx.closePath();
// ctx.fill();
document.addEventListener('click', function (e) {
  var rect = element.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  var xPos = x - 155;
  var yPos = y - 95;
  var img = document.createElement('img');
  img.src = 'styles/imgs/krest.png';
  img.style.position = 'absolute';
  img = document.querySelector('.figr'); // Позиция картинки там, где кликнули

  img.style.left = xPos + 'px';
  img.style.top = yPos + 'px';
  document.body.appendChild(img);
  console.log("ХУЙ");
});
//# sourceMappingURL=codee.dev.js.map
