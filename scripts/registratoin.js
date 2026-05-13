var  tabcontent;
function openForm(evt, cityName) {
  var i, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabbutton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function closeForm() {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}


// formContainer.onsubmit = async (e) => {
//   e.preventDefault();
  
//   let response = await fetch('', {
//     method: 'POST',
//     body: new FormData(formContainer)
//   });

//   let result = await response.json();

//   alert(result.message);
// };
const name = document.getElementById("name");
const email = document.getElementById("email");
const psw = document.getElementById("psw");
const repitepsw = document.getElementById("repitepsw");

const check =()=>{
  psw !== repitepsw ? "Пароли не совпадают" : null;
}

const validation = (psw, repitepsw) =>{
  if(psw.length<8){return alert("Длинна пароля не меенее 8 символов");}
  check();
  return null;
}

const registration = async(name, email, psw, repitepsw)=>{
  const error = validation(psw, repitepsw);
  if(error){console.log(
    "Ошибка", error);
    return
  }

  const body ={
    name: name,
    psw: psw
  };

  try{
    const response = await fetch("/registration", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(body),
    });  

    const data = await response.json();
    console.log(data);
    alert("ВЫ зарегались");
  }
  catch(error){
    console.log("Ошибка", error);
  }
};