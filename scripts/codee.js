// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// ctx.shadowBlur = 10;         
// ctx.shadowColor = '#679ef5';   
// ctx.fillStyle = "#679ef5";
// ctx.beginPath();
// ctx.arc(700, 950, 800, 0, Math.PI*2 ,true);
// ctx.closePath();
// ctx.fill();



let figurcount = 0 ;
let pole = {
  figrs: [],
  addfigr(figr) {
    this.figrs.push(figr);
    figurcount++;
  },
  
}
yacheiki=[ 2, 2, 2, 
          2, 2, 2, 
          2, 2, 2];

// yacheiki=[ -1, -1, 2, 
//           3, 4, 5, 
//           6, 7, 8];          
// yacheiki[0] = 0;
console.log(yacheiki);
function proverka(){
  if((yacheiki[0]==yacheiki[1])&&(yacheiki[0]==yacheiki[2])&&(yacheiki[0]==0)) {console.log('крестики1');}
  if((yacheiki[0]==yacheiki[1])&&(yacheiki[0]==yacheiki[2])&&(yacheiki[0]==1)) {console.log('нолики1');}
  
  if((yacheiki[3]==yacheiki[4])&&(yacheiki[3]==yacheiki[5])&&(yacheiki[3]==0)) {console.log('крестики2');}
  if((yacheiki[3]==yacheiki[4])&&(yacheiki[3]==yacheiki[5])&&(yacheiki[3]==1)) {console.log('нолики2');}

  if((yacheiki[6]==yacheiki[7])&&(yacheiki[6]==yacheiki[8])&&(yacheiki[6]==0)) {console.log('крестики3');}
  if((yacheiki[6]==yacheiki[7])&&(yacheiki[6]==yacheiki[8])&&(yacheiki[6]==1)) {console.log('нолики3');}


  if((yacheiki[0]==yacheiki[3])&&(yacheiki[0]==yacheiki[6])&&(yacheiki[0]==0)) {console.log('крестики4');}
  if((yacheiki[0]==yacheiki[3])&&(yacheiki[0]==yacheiki[6])&&(yacheiki[0]==1)) {console.log('нолики4');}
  
  if((yacheiki[1]==yacheiki[4])&&(yacheiki[1]==yacheiki[7])&&(yacheiki[1]==0)) {console.log('крестик5');}
  if((yacheiki[1]==yacheiki[4])&&(yacheiki[1]==yacheiki[7])&&(yacheiki[1]==1)) {console.log('нолики5');}

  if((yacheiki[2]==yacheiki[5])&&(yacheiki[2]==yacheiki[8])&&(yacheiki[2]==0)) {console.log('крестики6');}
  if((yacheiki[2]==yacheiki[5])&&(yacheiki[2]==yacheiki[8])&&(yacheiki[2]==1)) {console.log('нолики6');}

    
  if((yacheiki[0]==yacheiki[4])&&(yacheiki[0]==yacheiki[8])&&(yacheiki[0]==0)) {console.log('крестик7');}
  if((yacheiki[0]==yacheiki[4])&&(yacheiki[0]==yacheiki[8])&&(yacheiki[0]==1)) {console.log('нолики7');}

  if((yacheiki[2]==yacheiki[4])&&(yacheiki[2]==yacheiki[6])&&(yacheiki[2]==0)) {console.log('крестики8');}
  if((yacheiki[2]==yacheiki[4])&&(yacheiki[2]==yacheiki[6])&&(yacheiki[2]==1)) {console.log('нолики8');}
}
// const element = document.querySelector('.kletka1');  
// const rect = element.getBoundingClientRect();
// console.log( (rect.left + window.scrollY), (rect.top+ window.scrollX));

document.addEventListener('click', function(e) {
  if(figurcount<9)
    {
    const targrtPole = [document.querySelector('.kletka1'), document.querySelector('.kletka2'), 
                        document.querySelector('.kletka3'), document.querySelector('.kletka4'), 
                        document.querySelector('.kletka5'), document.querySelector('.kletka6'),
                        document.querySelector('.kletka7'), document.querySelector('.kletka8'),
                        document.querySelector('.kletka9')];

    // console.log(e.target); 
    // console.log(targrtPole); 
      
      if((e.target == targrtPole[0])||(e.target == targrtPole[1])||(e.target == targrtPole[2])
        ||(e.target == targrtPole[3])||(e.target == targrtPole[4])||(e.target == targrtPole[5])
        ||(e.target == targrtPole[6])||(e.target == targrtPole[7])||(e.target == targrtPole[8]))
        {
          
          const element = document.querySelector('.main_section');  
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;   
          console.log( rect.left, rect.top);
          // xPos = x + 510;
          // yPos = y - 45;
          xPos = rect.left + window.scrollY;
          yPos = rect.top+ window.scrollX;

          if(e.target == targrtPole[0]){ 
            const element = document.querySelector('.kletka1');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 1;}

          if(e.target == targrtPole[1]){ 
            const element = document.querySelector('.kletka2');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 2;}

          if(e.target == targrtPole[2]){ 
            const element = document.querySelector('.kletka3');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 3;}

        if(e.target == targrtPole[3]){ 
            const element = document.querySelector('.kletka4');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 1;}

          if(e.target == targrtPole[4]){ 
            const element = document.querySelector('.kletka5');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 2;}

          if(e.target == targrtPole[5]){ 
            const element = document.querySelector('.kletka6');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 3;}

          if(e.target == targrtPole[6]){ 
            const element = document.querySelector('.kletka7');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 1;}

          if(e.target == targrtPole[7]){ 
            const element = document.querySelector('.kletka8');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 2;}

          if(e.target == targrtPole[8]){ 
            const element = document.querySelector('.kletka9');  
            const rect = element.getBoundingClientRect();
            xPos = rect.left + window.scrollY;  yPos = rect.top+ window.scrollX; num = 3;}

      
          let img = document.createElement('img');

          if(figurcount%2 == 0){ img.src = 'styles/imgs/krest.png'; shape = 0} // крест
          else { img.src = 'styles/imgs/krug.png'; shape = 1} // круг

          // img.src = 'styles/imgs/krest.png';
          img.style.position = 'absolute';
          // img = document.querySelector('.figr');
          img.classList.add('figr'); 
          // Позиция картинки там, где кликнули
          img.style.left = xPos + 'px'; 
          img.style.top = yPos + 'px';
        

          for(let i=0; i<9; i++)
          {
            if(e.target == targrtPole[i]){klet = i++;}
          }

          document.body.appendChild(img);
          pole.addfigr({
            klet,
            shape,
            x: xPos,
            y: yPos,
          });
          yacheiki[klet] = shape;
          console.log(pole.figrs[figurcount-1]);
          console.log(figurcount);
          proverka();
            if(figurcount==9)
          {
            console.log(yacheiki);
          }
        }

      else{console.log("Нажмите на поле")}
  }
  else{
  console.log("Слишком много фигур")
  }
});








