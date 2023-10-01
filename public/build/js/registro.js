const urlRoles = "https://api-twbs.onrender.com/api/configuracion";
const urlUsuarios = "https://api-twbs.onrender.com/api/usuario";

const validarCelu = (cel) => {
  const celuInp = document.getElementById(cel);
  let valor = celuInp.value;
  valor = valor.replace(/[^\d]/g, "");

  if (valor.length >= 1 && valor.length <= 3) {
    valor = `(${valor}`;
  } else if (valor.length >= 4 && valor.length <= 6) {
    valor = `(${valor.slice(0, 3)}) ${valor.slice(3)}`;
  } else if (valor.length >= 7) {
    valor = `(${valor.slice(0, 3)}) ${valor.slice(3, 6)}-${valor.slice(6, 10)}`;
  }
  celuInp.value = valor;
};

const ingresar = () => {
  const nombreUsuario = document.getElementById("nomUsu");
  const email = document.getElementById("email");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const celular = document.getElementById("celular");
  const password = document.getElementById("pass");
  const exclamation = document.querySelectorAll(".exclamationSign");
  const label = document.querySelectorAll("label");
  const input = document.querySelectorAll("input");
  const icons = document.querySelectorAll("i");

  const valNombreUsu = /^[a-zA-Z0-9]{4,15}$/;
  const valEmail = /^[a-zA-Z0-9]+@[a-zA-Z]{4,8}\.[a-zA-Z]{2,4}$/;
  const valNombre = /^[a-zA-Z\s]{4,15}$/;
  const valApellidos = /^[a-zA-Z\s]{3,20}$/;
  const valPassword = /^[a-zA-Z0-9]{8,15}$/;

  if (nombreUsuario.value === "" && email.value == "" && nombre.value == "" && apellidos.value == "" && celular.value == "" && password.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Debe llenar el formulario primero...",
    });
    exclamation.forEach((icon) => {
      icon.style.display = "flex";
    });
    icons.forEach((icon) => {
      icon.style.color = "rgb(180, 0, 0)";
      icon.classList.add("iconInvalid");
    });
    input.forEach((input) => {
      input.classList.add("invalido");
    });
  } else if (nombreUsuario.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese un nombre de usuario...",
    });
  } else if (email.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese su correo...",
    });
  } else if (nombre.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese su nombre...",
    });
  } else if (apellidos.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese sus apellidos...",
    });
  } else if (celular.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese su número de celular...",
    });
  } else if (password.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese una contraseña...",
    });
  } else if (nombreUsuario.value != nombreUsuario.value.match(valNombreUsu)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Nombre de usuario inválido",
      text: 'Porfavor use datos válidos, puede usar de 4 a 15 caracteres que sean de la "a" a la "z", mayúsculas, minúsculas y números',
    });
  } else if (email.value != email.value.match(valEmail)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Correo inválido",
      text: "Porfavor use un correo electrónico válido, ej: ejemplo@mail.com",
    });
  } else if (nombre.value != nombre.value.match(valNombre)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Nombre inválido",
      text: 'Porfavor use datos válidos, puede usar de 4 a 15 caracteres que sean de la "a" a la "z", mayúsculas y minúsculas',
    });
  } else if (apellidos.value != apellidos.value.match(valApellidos)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Apellidos inválidos",
      text: 'Porfavor use datos válidos, puede usar de 3 a 20 caracteres que sean de la "a" a la "z", mayúsculas y minúsculas',
    });
  } else if (password.value != password.value.match(valPassword)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Contraseña inválida",
      text: 'Porfavor use una contraseña válida, puede usar de 8 a 15 caracteres que sean de la "a" a la "z", mayúsculas, minúsculas y números',
    });
  } else {
    const Usuario = {
      nombreUsu: nombreUsuario.value,
      correo: email.value.charAt(0).toUpperCase() + document.getElementById("email").value.slice(1).toLowerCase(),
      nombre: nombre.value.charAt(0).toUpperCase() + document.getElementById("nombre").value.slice(1).toLowerCase(),
      apellidos: apellidos.value.charAt(0).toUpperCase() + document.getElementById("apellidos").value.slice(1).toLowerCase(),
      celular: celular.value,
      password: password.value,
      rol: "Cliente",
    };
    fetch(urlUsuarios, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(Usuario),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.msg == "Usuario creado.") {
          Swal.fire({
            icon: "success",
            showConfirmButton: false,
            text: json.msg,
            timer: 1500,
          });
          setTimeout(function () {
            window.location = "log";
          }, 500);
        } else {
          Swal.fire({
            icon: "warning",
            confirmButtonText: "Aceptar",
            text: json.msg,
          });
        }
      });
  }
};

$(document).ready(function () {
  $("input#nomUsu, input#email, input#nombre, input#apellidos, input#celular, input#pass").characterCounter();
});

const cancelar = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("pass");
  email.value = "";
  password.value = "";
  setTimeout(function () {
    window.location = "/";
  }, 500);
};
