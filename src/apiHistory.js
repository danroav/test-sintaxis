//window.open("http://www.google.com");
var buttonBack = document.getElementById("back");
buttonBack.onclick = function () {
  console.log("Se hizo back en el history");
  console.log(window.navigator);
  window.history.back();
};

var buttonAbrir = document.getElementById("abrir");
var nuevaVentana;
buttonAbrir.onclick = function () {
  nuevaVentana = window.open("index");
};

var buttonCerrar = document.getElementById("cerrar");
buttonCerrar.onclick = function () {
  if (nuevaVentana !== null) {
    nuevaVentana.close();
  }
};
