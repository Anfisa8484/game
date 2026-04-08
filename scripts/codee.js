// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// ctx.shadowBlur = 10;         
// ctx.shadowColor = '#679ef5';   
// ctx.fillStyle = "#679ef5";
// ctx.beginPath();
// ctx.arc(700, 950, 800, 0, Math.PI*2 ,true);
// ctx.closePath();
// ctx.fill();

let i=0; 
do
{
  document.addEventListener('click', function(e) {

      const element = document.querySelector('.main_section'); 
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPos = x - 95;
      const yPos = y - 45;

      let img = document.createElement('img');
      // if(i%2 == 0){ img.src = 'styles/imgs/krest.png';}
      // else { img.src = 'styles/imgs/krest.png';}
      img.src = 'styles/imgs/krest.png';
      img.style.position = 'absolute';
      // img = document.querySelector('.figr');
      img.classList.add('figr'); 
      // Позиция картинки там, где кликнули
      img.style.left = xPos + 'px'; 
      img.style.top = yPos + 'px';
      document.body.appendChild(img);
      console.log(i);
      if (true) return; 
    }, { once: true });
    i++;
}while(i<9)
