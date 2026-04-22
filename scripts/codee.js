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
  add(figr) {
    this.figrs.push(figr);
    figurcount++;
  },
}



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
        const xPos = x - 95;
        const yPos = y - 45;

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
        pole.add({
          klet,
          shape,
          x: xPos,
          y: yPos,
        });
        console.log(pole.figrs[figurcount-1])
        console.log(figurcount);
      }
    else{console.log("Нажмите на поле")}
    
  }
  else{console.log("Слишком много фигур")}
});







