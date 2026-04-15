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
var figurcount = 0;
var pole = {
  figrs: [],
  add: function add(figr) {
    this.figrs.push(figr);
    figurcount++;
  }
};
document.addEventListener('click', function (e) {
  if (figurcount < 9) {
    var targrtPole = document.querySelector('.imge'); // console.log(e.target); 
    // console.log(targrtPole);

    if (e.target == targrtPole) {
      var element = document.querySelector('.main_section');
      var rect = element.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var xPos = x - 95;
      var yPos = y - 45;
      var img = document.createElement('img');

      if (figurcount % 2 == 0) {
        img.src = 'styles/imgs/krest.png';
      } else {
        img.src = 'styles/imgs/krug.png';
      } // img.src = 'styles/imgs/krest.png';


      img.style.position = 'absolute'; // img = document.querySelector('.figr');

      img.classList.add('figr'); // Позиция картинки там, где кликнули

      img.style.left = xPos + 'px';
      img.style.top = yPos + 'px';
      document.body.appendChild(img);
      pole.add({
        id: figurcount,
        x: xPos,
        y: yPos
      });
      console.log(figurcount);
    } else {
      console.log("Нажмите на поле");
    }
  } else {
    console.log("Слишком много фигур");
  }
});
//# sourceMappingURL=codee.dev.js.map
