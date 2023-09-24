$(document).ready(function () {
  $(
    "input#nuevoRol, input#actRol, input#Usu, input#Correo, input#Nombre, input#Apellidos, input#numCel, input#Pass, input#Usu2, input#Correo2, input#Nombre2, input#Apellidos2, input#numCel2, input#Pass2, input#porceGana"
  ).characterCounter();
});

$(document).ready(function () {
  $("select").formSelect();
});

let currentUrl = window.location.pathname;
// Obtén todas las etiquetas 'a' en el menú de navegación
let navLinks = document.querySelectorAll("nav ul li a");
// Itera a través de los enlaces del menú
navLinks.forEach(function (link) {
  // Obtén la URL del enlace
  var linkUrl = link.getAttribute("href");

  // Compara la URL actual con la URL del enlace
  if (currentUrl == linkUrl) {
    // Si coinciden, agrega la clase 'active' al enlace
    link.classList.add("activo");
  }
});
