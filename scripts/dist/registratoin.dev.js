"use strict";

var tabcontent;

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
} // formContainer.onsubmit = async (e) => {
//   e.preventDefault();
//   let response = await fetch('', {
//     method: 'POST',
//     body: new FormData(formContainer)
//   });
//   let result = await response.json();
//   alert(result.message);
// };


var name = document.getElementById("name");
var email = document.getElementById("email");
var psw = document.getElementById("psw");
var repitepsw = document.getElementById("repitepsw");

var check = function check() {
  psw !== repitepsw ? "Пароли не совпадают" : null;
};

var validation = function validation(psw, repitepsw) {
  if (psw.length < 8) {
    return alert("Длинна пароля не меенее 8 символов");
  }

  check();
  return null;
};

var registration = function registration(name, email, psw, repitepsw) {
  var error, body, response, data;
  return regeneratorRuntime.async(function registration$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          error = validation(psw, repitepsw);

          if (!error) {
            _context.next = 4;
            break;
          }

          console.log("Ошибка", error);
          return _context.abrupt("return");

        case 4:
          body = {
            name: name,
            psw: psw
          };
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch("/registration", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }));

        case 8:
          response = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(response.json());

        case 11:
          data = _context.sent;
          console.log(data);
          alert("ВЫ зарегались");
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](5);
          console.log("Ошибка", _context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 16]]);
};
//# sourceMappingURL=registratoin.dev.js.map
