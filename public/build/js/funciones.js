// function toggleSidebar() { (para mobil)
//   let sidebar = document.getElementById("sidebar");
//   let menu = document.getElementById("menu-toggle");
//   if (sidebar.style.translate === "0px") {
//     sidebar.style.translate = "-200px";
//     menu.style.marginLeft = "0px";
//     menu.style.rotate = "0deg";
//     document.getElementById("menu-toggle").innerHTML =
//       '<i class="fa fa-bars"></i>';
//   } else {
//     sidebar.style.translate = "0px";
//     menu.style.marginLeft = "195px";
//     menu.style.transition = "0.5s";
//     menu.style.rotate = "180deg";
//     document.getElementById("menu-toggle").innerHTML =
//       '<i class="fa fa-bars"></i>';
//   }
// }
// document.getElementById("menu-toggle").addEventListener("click", toggleSidebar);

const compra = () => {
  let flecha = document.getElementById("flecha");
  if (flecha.style.rotate === "-180deg") {
    flecha.style.rotate = "0deg";
  } else {
    flecha.style.rotate = "-180deg";
    flecha.style.transition = "0.5s";
  }
};
document.getElementById("compra").addEventListener("click", compra);

$(document).ready(function () {
  $("#compra").click(function () {
    $("#comUl").slideToggle(500);
    $("#comUl").show();
  });
});

$(document).click(function (event) {
  if (!$(event.target).closest("#compra").length && !$(event.target).closest("#comUl").length) {
    if ($("#comUl").is(":visible")) {
      document.getElementById("flecha").style.rotate = "0deg";
      $("#comUl").hide();
    }
  }
});

const servicio = () => {
  let flecha = document.getElementById("flecha2");
  if (flecha.style.rotate === "-180deg") {
    flecha.style.rotate = "0deg";
  } else {
    flecha.style.rotate = "-180deg";
    flecha.style.transition = "0.5s";
  }
};
document.getElementById("servicio").addEventListener("click", servicio);

$(document).ready(function () {
  $("#servicio").click(function () {
    $("#servUl").slideToggle(500);
    $("#servUl").show();
  });
});

$(document).click(function (event) {
  if (!$(event.target).closest("#servicio").length && !$(event.target).closest("#servUl").length) {
    if ($("#servUl").is(":visible")) {
      document.getElementById("flecha2").style.rotate = "0deg";
      $("#servUl").hide();
    }
  }
});

const venta = () => {
  let flecha = document.getElementById("flecha3");
  if (flecha.style.rotate === "-180deg") {
    flecha.style.rotate = "0deg";
  } else {
    flecha.style.rotate = "-180deg";
    flecha.style.transition = "0.5s";
  }
};
document.getElementById("venta").addEventListener("click", venta);

$(document).ready(function () {
  $("#venta").click(function () {
    $("#venUl").slideToggle(500);
    $("#venUl").show();
  });
});

$(document).click(function (event) {
  if (!$(event.target).closest("#venta").length && !$(event.target).closest("#venUl").length) {
    if ($("#venUl").is(":visible")) {
      document.getElementById("flecha3").style.rotate = "0deg";
      $("#venUl").hide();
    }
  }
});

$(document).ready(function () {
  $(
    "input#nuevoRol, input#actRol, input#Usu, input#Correo, input#Nombre, input#Apellidos, input#numCel, input#Pass, input#Usu2, input#Correo2, input#Nombre2, input#Apellidos2, input#numCel2, input#Pass2, input#porceGana, input#porceGana2, input#tipoGasto, input#descGast, input#Valor, input#tipoGasto2, input#descGast2, input#Valor2, input#Cant, input#nomInsu, input#Desc, input#preUnit, input#stockMax, input#stockMin, input#Cant2, input#nomInsu2, input#Desc2, input#preUnit2, input#stockMax2, input#stockMin2, input#nomProv, input#nomCont, input#nomCont2"
  ).characterCounter();
});

// $(document).ready(function () {
//   $(".datepicker").datepicker();
// }); para hacer el selector de fecha con materialize

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
