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
var win = 2;
var pole = {
  figrs: [],
  addfigr: function addfigr(figr) {
    this.figrs.push(figr);
    figurcount++;
  }
};
yacheiki = [2, 2, 2, 2, 2, 2, 2, 2, 2]; // yacheiki=[ -1, -1, 2, 
//           3, 4, 5, 
//           6, 7, 8];          
// yacheiki[0] = 0;

console.log(yacheiki);

function proverka() {
  if (yacheiki[0] == yacheiki[1] && yacheiki[0] == yacheiki[2] && yacheiki[0] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[0] == yacheiki[1] && yacheiki[0] == yacheiki[2] && yacheiki[0] == 1) {
    figurcount = 9;
    win = 1;
  }

  if (yacheiki[3] == yacheiki[4] && yacheiki[3] == yacheiki[5] && yacheiki[3] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[3] == yacheiki[4] && yacheiki[3] == yacheiki[5] && yacheiki[3] == 1) {
    figurcount = 9;
    win = 1;
  }

  if (yacheiki[6] == yacheiki[7] && yacheiki[6] == yacheiki[8] && yacheiki[6] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[6] == yacheiki[7] && yacheiki[6] == yacheiki[8] && yacheiki[6] == 1) {
    figurcount = 9;
    win = 1;
  }

  if (yacheiki[0] == yacheiki[3] && yacheiki[0] == yacheiki[6] && yacheiki[0] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[0] == yacheiki[3] && yacheiki[0] == yacheiki[6] && yacheiki[0] == 1) {
    figurcount = 9;
    win = 1;
  }

  if (yacheiki[1] == yacheiki[4] && yacheiki[1] == yacheiki[7] && yacheiki[1] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[1] == yacheiki[4] && yacheiki[1] == yacheiki[7] && yacheiki[1] == 1) {
    figurcount = 9;
    win = 1;
  }

  if (yacheiki[2] == yacheiki[5] && yacheiki[2] == yacheiki[8] && yacheiki[2] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[2] == yacheiki[5] && yacheiki[2] == yacheiki[8] && yacheiki[2] == 1) {
    figurcount = 9;
    win = 1;
  }

  if (yacheiki[0] == yacheiki[4] && yacheiki[0] == yacheiki[8] && yacheiki[0] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[0] == yacheiki[4] && yacheiki[0] == yacheiki[8] && yacheiki[0] == 1) {
    figurcount = 9;
    win = 1;
  }

  if (yacheiki[2] == yacheiki[4] && yacheiki[2] == yacheiki[6] && yacheiki[2] == 0) {
    figurcount = 9;
    win = 0;
  }

  if (yacheiki[2] == yacheiki[4] && yacheiki[2] == yacheiki[6] && yacheiki[2] == 1) {
    figurcount = 9;
    win = 1;
  }
}

function rtandklet() {
  var i;
  console.log(yacheiki);

  do {
    i = Math.floor(Math.random() * 10) - 1;
  } while (yacheiki[i - 1] != 2);

  return i;
} // const element = document.querySelector('.kletka1');  
// const rect = element.getBoundingClientRect();
// console.log( (rect.left + window.scrollY), (rect.top+ window.scrollX));


function krug() {
  var kl = rtandklet();
  console.log(kl, "kletks");

  if (yacheiki[kl - 1] == 2) {
    var img = document.createElement('img');
    img.src = 'styles/imgs/krug.png';
    shape = 1;

    if (kl == 1) {
      var element = document.querySelector('.kletka1');
      var rect = element.getBoundingClientRect();
      xPos = rect.left + window.scrollY;
      yPos = rect.top + window.scrollX;
      num = 1;
    }

    if (kl == 2) {
      var _element = document.querySelector('.kletka2');

      var _rect = _element.getBoundingClientRect();

      xPos = _rect.left + window.scrollY;
      yPos = _rect.top + window.scrollX;
      num = 1;
    }

    if (kl == 3) {
      var _element2 = document.querySelector('.kletka3');

      var _rect2 = _element2.getBoundingClientRect();

      xPos = _rect2.left + window.scrollY;
      yPos = _rect2.top + window.scrollX;
      num = 1;
    }

    if (kl == 4) {
      var _element3 = document.querySelector('.kletka4');

      var _rect3 = _element3.getBoundingClientRect();

      xPos = _rect3.left + window.scrollY;
      yPos = _rect3.top + window.scrollX;
      num = 1;
    }

    if (kl == 5) {
      var _element4 = document.querySelector('.kletka5');

      var _rect4 = _element4.getBoundingClientRect();

      xPos = _rect4.left + window.scrollY;
      yPos = _rect4.top + window.scrollX;
      num = 1;
    }

    if (kl == 6) {
      var _element5 = document.querySelector('.kletka6');

      var _rect5 = _element5.getBoundingClientRect();

      xPos = _rect5.left + window.scrollY;
      yPos = _rect5.top + window.scrollX;
      num = 1;
    }

    if (kl == 7) {
      var _element6 = document.querySelector('.kletka7');

      var _rect6 = _element6.getBoundingClientRect();

      xPos = _rect6.left + window.scrollY;
      yPos = _rect6.top + window.scrollX;
      num = 1;
    }

    if (kl == 8) {
      var _element7 = document.querySelector('.kletka8');

      var _rect7 = _element7.getBoundingClientRect();

      xPos = _rect7.left + window.scrollY;
      yPos = _rect7.top + window.scrollX;
      num = 1;
    }

    if (kl == 9) {
      var _element8 = document.querySelector('.kletka9');

      var _rect8 = _element8.getBoundingClientRect();

      xPos = _rect8.left + window.scrollY;
      yPos = _rect8.top + window.scrollX;
      num = 1;
    }

    img.style.position = 'absolute'; // img = document.querySelector('.figr');

    img.classList.add('figr'); // Позиция картинки там, где кликнули

    img.style.left = xPos + 'px';
    img.style.top = yPos + 'px';
    document.body.appendChild(img);
    pole.addfigr({
      kl: kl,
      shape: shape,
      x: xPos,
      y: yPos
    });
    yacheiki[kl - 1] = shape;
    console.log(pole.figrs[figurcount - 1]);
    console.log(figurcount);
    proverka();
    console.log(yacheiki);
  }
}

document.addEventListener('click', function (e) {
  if (figurcount < 9) {
    var targrtPole = [document.querySelector('.kletka1'), document.querySelector('.kletka2'), document.querySelector('.kletka3'), document.querySelector('.kletka4'), document.querySelector('.kletka5'), document.querySelector('.kletka6'), document.querySelector('.kletka7'), document.querySelector('.kletka8'), document.querySelector('.kletka9')]; // console.log(e.target); 
    // console.log(targrtPole); 

    if (e.target == targrtPole[0] || e.target == targrtPole[1] || e.target == targrtPole[2] || e.target == targrtPole[3] || e.target == targrtPole[4] || e.target == targrtPole[5] || e.target == targrtPole[6] || e.target == targrtPole[7] || e.target == targrtPole[8]) {
      for (var i = 0; i < 9; i++) {
        if (e.target == targrtPole[i]) {
          klet = i++;
        }
      }

      if (yacheiki[klet] == 2) {
        var element = document.querySelector('.main_section');
        var rect = element.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        console.log(rect.left, rect.top); // xPos = x + 510;
        // yPos = y - 45;

        xPos = rect.left + window.scrollY;
        yPos = rect.top + window.scrollX;

        if (e.target == targrtPole[0]) {
          var _element9 = document.querySelector('.kletka1');

          var _rect9 = _element9.getBoundingClientRect();

          xPos = _rect9.left + window.scrollY;
          yPos = _rect9.top + window.scrollX;
          num = 1;
        }

        if (e.target == targrtPole[1]) {
          var _element10 = document.querySelector('.kletka2');

          var _rect10 = _element10.getBoundingClientRect();

          xPos = _rect10.left + window.scrollY;
          yPos = _rect10.top + window.scrollX;
          num = 2;
        }

        if (e.target == targrtPole[2]) {
          var _element11 = document.querySelector('.kletka3');

          var _rect11 = _element11.getBoundingClientRect();

          xPos = _rect11.left + window.scrollY;
          yPos = _rect11.top + window.scrollX;
          num = 3;
        }

        if (e.target == targrtPole[3]) {
          var _element12 = document.querySelector('.kletka4');

          var _rect12 = _element12.getBoundingClientRect();

          xPos = _rect12.left + window.scrollY;
          yPos = _rect12.top + window.scrollX;
          num = 1;
        }

        if (e.target == targrtPole[4]) {
          var _element13 = document.querySelector('.kletka5');

          var _rect13 = _element13.getBoundingClientRect();

          xPos = _rect13.left + window.scrollY;
          yPos = _rect13.top + window.scrollX;
          num = 2;
        }

        if (e.target == targrtPole[5]) {
          var _element14 = document.querySelector('.kletka6');

          var _rect14 = _element14.getBoundingClientRect();

          xPos = _rect14.left + window.scrollY;
          yPos = _rect14.top + window.scrollX;
          num = 3;
        }

        if (e.target == targrtPole[6]) {
          var _element15 = document.querySelector('.kletka7');

          var _rect15 = _element15.getBoundingClientRect();

          xPos = _rect15.left + window.scrollY;
          yPos = _rect15.top + window.scrollX;
          num = 1;
        }

        if (e.target == targrtPole[7]) {
          var _element16 = document.querySelector('.kletka8');

          var _rect16 = _element16.getBoundingClientRect();

          xPos = _rect16.left + window.scrollY;
          yPos = _rect16.top + window.scrollX;
          num = 2;
        }

        if (e.target == targrtPole[8]) {
          var _element17 = document.querySelector('.kletka9');

          var _rect17 = _element17.getBoundingClientRect();

          xPos = _rect17.left + window.scrollY;
          yPos = _rect17.top + window.scrollX;
          num = 3;
        }

        var img = document.createElement('img');
        img.src = 'styles/imgs/krest.png';
        shape = 0; // крест
        // img.src = 'styles/imgs/krest.png';

        img.style.position = 'absolute'; // img = document.querySelector('.figr');

        img.classList.add('figr'); // Позиция картинки там, где кликнули

        img.style.left = xPos + 'px';
        img.style.top = yPos + 'px';
        document.body.appendChild(img);
        pole.addfigr({
          klet: klet,
          shape: shape,
          x: xPos,
          y: yPos
        });
        yacheiki[klet] = shape;
        console.log(yacheiki);
        console.log(pole.figrs[figurcount - 1]);
        console.log(figurcount);
        proverka();

        if (figurcount < 9) {
          setTimeout(krug, 1000);
        }
      } else {
        console.log("Выберите другую клетку");
      }

      if (figurcount == 9) {
        if (win == 0) {
          console.log("Победили крестики");
        }

        if (win == 1) {
          console.log("Победили нолики");
        }
      }
    } else {
      console.log("Нажмите на поле");
    }
  } else {
    console.log("Слишком много фигур");
  }
});
//# sourceMappingURL=codee.dev.js.map
