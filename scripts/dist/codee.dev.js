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
  addfigr: function addfigr(figr) {
    this.figrs.push(figr);
    figurcount++;
  },
  yacheiki: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  add: function add(figr, num) {
    this.yacheiki[num].push(figr);
  }
};
document.addEventListener('click', function (e) {
  if (figurcount < 9) {
    var targrtPole = [document.querySelector('.kletka1'), document.querySelector('.kletka2'), document.querySelector('.kletka3'), document.querySelector('.kletka4'), document.querySelector('.kletka5'), document.querySelector('.kletka6'), document.querySelector('.kletka7'), document.querySelector('.kletka8'), document.querySelector('.kletka9')]; // console.log(e.target); 
    // console.log(targrtPole); 

    if (e.target == targrtPole[0] || e.target == targrtPole[1] || e.target == targrtPole[2] || e.target == targrtPole[3] || e.target == targrtPole[4] || e.target == targrtPole[5] || e.target == targrtPole[6] || e.target == targrtPole[7] || e.target == targrtPole[8]) {
      var element = document.querySelector('.main_section');
      var rect = element.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      xPos = x + 510;
      yPos = y - 45;

      if (e.target == targrtPole[0]) {
        xPos = 660;
        yPos = 185;
        num = 1;
      }

      if (e.target == targrtPole[1]) {
        xPos = 870;
        yPos = 185;
        num = 2;
      }

      if (e.target == targrtPole[2]) {
        xPos = 1060;
        yPos = 185;
        num = 3;
      }

      if (e.target == targrtPole[3]) {
        xPos = 660;
        yPos = 375;
        num = 4;
      }

      if (e.target == targrtPole[4]) {
        xPos = 870;
        yPos = 375;
        num = 5;
      }

      if (e.target == targrtPole[5]) {
        xPos = 1060;
        yPos = 375;
        num = 6;
      }

      if (e.target == targrtPole[6]) {
        xPos = 660;
        yPos = 575;
        num = 7;
      }

      if (e.target == targrtPole[7]) {
        xPos = 870;
        yPos = 575;
        num = 8;
      }

      if (e.target == targrtPole[8]) {
        xPos = 1060;
        yPos = 575;
        num = 9;
      }

      var img = document.createElement('img');

      if (figurcount % 2 == 0) {
        img.src = 'styles/imgs/krest.png';
        shape = 0;
      } // крест
      else {
          img.src = 'styles/imgs/krug.png';
          shape = 1;
        } // круг
      // img.src = 'styles/imgs/krest.png';


      img.style.position = 'absolute'; // img = document.querySelector('.figr');

      img.classList.add('figr'); // Позиция картинки там, где кликнули

      img.style.left = xPos + 'px';
      img.style.top = yPos + 'px';

      for (var i = 0; i < 9; i++) {
        if (e.target == targrtPole[i]) {
          klet = i++;
        }
      }

      document.body.appendChild(img);
      pole.addfigr({
        klet: klet,
        shape: shape,
        x: xPos,
        y: yPos
      });
      pole.add();
      console.log(pole.figrs[figurcount - 1]);
      console.log(figurcount);
    } else {
      console.log("Нажмите на поле");
    }
  } else {
    console.log("Слишком много фигур");
  }
});
//# sourceMappingURL=codee.dev.js.map
