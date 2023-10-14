const urlUsuarios = "http://localhost:8081/api/usuario";

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

const registrar = () => {
  const nombreUsuario = document.getElementById("nomUsu");
  const email = document.getElementById("email");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const celular = document.getElementById("celular");
  const password = document.getElementById("pass");
  const exclamation = document.querySelectorAll(".exclamationSign");
  const input = document.querySelectorAll("input");
  const icons = document.querySelectorAll("i");

  const valNombreUsu = /^[A-Za-z0-9_.-]{5,20}$/;
  const valEmail = /^[\w\-._]+@[A-Za-z\d.-]{2,}\.[A-Za-z]{2,6}$/;
  const valNombre = /^[A-Za-z\s]{4,25}$/;
  const valApellidos = /^[A-Za-z\s]{3,25}$/;
  const valPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,25}$/; // Contiene al menos una letra mayúscula, Contiene al menos una letra minúscula, Contiene al menos un dígito, Tiene una longitud mínima de 8 caracteres y maxima de 25.

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
      text: 'Porfavor use datos válidos, puede usar de 5 a 20 caracteres que sean de la "a" a la "z", mayúsculas, minúsculas y números',
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
      text: 'Porfavor use datos válidos, puede usar de 4 a 25 caracteres que sean de la "a" a la "z", mayúsculas y minúsculas',
    });
  } else if (apellidos.value != apellidos.value.match(valApellidos)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Apellidos inválidos",
      text: 'Porfavor use datos válidos, puede usar de 3 a 25 caracteres que sean de la "a" a la "z", mayúsculas y minúsculas',
    });
  } else if (password.value != password.value.match(valPassword)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Contraseña inválida.",
      text: "La contraseña debe tener al menos una letra mayúscula, al menos una letra minúscula, al menos un número, mínimo 8 carácteres y máximo 25",
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

const ingresar = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const exclamation = document.querySelectorAll(".exclamationSign");
  const input = document.querySelectorAll("input");
  const icons = document.querySelectorAll("i");

  const valEmail = /^[\w\-._]+@[A-Za-z\d.-]{2,}\.[A-Za-z]{2,6}$/;
  const valPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,25}$/; // Contiene al menos una letra mayúscula, Contiene al menos una letra minúscula, Contiene al menos un dígito, Tiene una longitud mínima de 8 caracteres y maxima de 25.

  if (email == "" && password == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Debe ingresar sus datos primero...",
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
  } else if (email == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese un correo...",
    });
  } else if (password == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese una contraseña...",
    });
  } else if (email != email.match(valEmail)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Correo inválido",
      text: "Porfavor use un correo electrónico válido, ej: ejemplo@mail.com",
    });
  } else if (password != password.match(valPassword)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Contraseña inválida.",
      text: "La contraseña debe tener al menos una letra mayúscula, al menos una letra minúscula, al menos un número, mínimo 8 carácteres y máximo 25",
    });
  } else {
    let existe = false;
    fetch(urlUsuarios, {
      method: "GET",
      mode: "cors",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => resp.json())
      .then(function (data) {
        let listaUsuarios = data.usuarios;
        datos = listaUsuarios.map(function (usuario) {
          for (let i = 0; i < usuario.correo.length; i++) {
            if (email.toLowerCase() == usuario.correo.toLowerCase()) {
              if (password == usuario.password) {
                Swal.fire({
                  icon: "success",
                  showConfirmButton: false,
                  title: "Bienvenido",
                  text: "Ingresando...",
                  timer: 1000,
                });
                if (usuario.rol == "Admin") {
                  setTimeout(function () {
                    window.location = "/ini";
                  }, 1500);
                } else {
                  setTimeout(function () {
                    window.location = "/iniclient";
                  }, 1500);
                }
              } else {
                Swal.fire({
                  icon: "error",
                  confirmButtonText: "Aceptar",
                  title: "Contraseña incorrecta",
                  text: "Verifique su contraseña.",
                });
              }
              return (existe = true);
            }
          }
          if (!existe) {
            Swal.fire({
              icon: "error",
              confirmButtonText: "Aceptar",
              text: "Ese correo no está registrado",
            });
          }
        });
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
