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
  const input = document.querySelectorAll("input");
  const icons = document.getElementsByName("exclamation");
  const exclamation = document.querySelectorAll(".exclamationSign");

  const valNombreUsu = /^[A-Za-z0-9_.-]{5,20}$/;
  const valEmail = /^[\w\-._]+@[A-Za-z\d.-]{2,}\.[A-Za-z]{2,6}$/;
  const valNombre = /^[A-Za-z\s]{4,25}$/;
  const valApellidos = /^[A-Za-z\s]{3,25}$/;
  const valPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,25}$/; // Contiene al menos una letra mayúscula, Contiene al menos una letra minúscula, Contiene al menos un dígito, Tiene una longitud mínima de 8 caracteres y maxima de 25.

  exclamation.forEach((icon) => {
    icon.style.display = "none";
  });
  icons.forEach((icon) => {
    icon.style.color = "rgb(0, 0, 0)";
    icon.classList.remove("iconInvalid");
  });
  input.forEach((input) => {
    input.style.color = "rgb(0, 0, 0)";
    input.classList.remove("invalido");
  });

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
    exclamation.forEach((icon) => {
      if (icon.id == "nomUsuExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "nomUsuIco" || icon.id == "nomUsuExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "nomUsu") {
        input.classList.add("invalido");
      }
    });
  } else if (email.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese su correo...",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "emailExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "emailIco" || icon.id == "emailExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "email") {
        input.classList.add("invalido");
      }
    });
  } else if (nombre.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese su nombre...",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "nombreExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "nombreIco" || icon.id == "nombreExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "nombre") {
        input.classList.add("invalido");
      }
    });
  } else if (apellidos.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese sus apellidos...",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "apellidosExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "apellidosIco" || icon.id == "apellidosExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "apellidos") {
        input.classList.add("invalido");
      }
    });
  } else if (celular.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese su número de celular...",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "celularExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "celularIco" || icon.id == "celularExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "celular") {
        input.classList.add("invalido");
      }
    });
  } else if (password.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese una contraseña...",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "passExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "passIco" || icon.id == "passExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "pass") {
        input.classList.add("invalido");
      }
    });
  } else if (nombreUsuario.value != nombreUsuario.value.match(valNombreUsu)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Nombre de usuario inválido",
      text: 'Porfavor use datos válidos, puede usar de 5 a 20 caracteres que sean de la "a" a la "z", mayúsculas, minúsculas y números',
    });
    exclamation.forEach((icon) => {
      if (icon.id == "nomUsuExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "nomUsuIco" || icon.id == "nomUsuExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "nomUsu") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
    });
  } else if (email.value != email.value.match(valEmail)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Correo inválido",
      text: "Porfavor use un correo electrónico válido, ej: ejemplo@mail.com",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "emailExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "emailIco" || icon.id == "emailExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "email") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
    });
  } else if (nombre.value != nombre.value.match(valNombre)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Nombre inválido",
      text: 'Porfavor use datos válidos, puede usar de 4 a 25 caracteres que sean de la "a" a la "z", mayúsculas y minúsculas',
    });
    exclamation.forEach((icon) => {
      if (icon.id == "nombreExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "nombreIco" || icon.id == "nombreExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "nombre") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
    });
  } else if (apellidos.value != apellidos.value.match(valApellidos)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Apellidos inválidos",
      text: 'Porfavor use datos válidos, puede usar de 3 a 25 caracteres que sean de la "a" a la "z", mayúsculas y minúsculas',
    });
    exclamation.forEach((icon) => {
      if (icon.id == "apellidosExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "apellidosIco" || icon.id == "apellidosExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "apellidos") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
    });
  } else if (password.value != password.value.match(valPassword)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Contraseña inválida.",
      text: "La contraseña debe tener al menos una letra mayúscula, al menos una letra minúscula, al menos un número, mínimo 8 carácteres y máximo 25",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "passExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "passIco" || icon.id == "passExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "pass") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
    });
  } else if (celular.value.length < 14 || celular.value.length > 15) {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      title: "Datos de número de celular inválidos",
      text: "Ej: (123) 456-7890",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "celularExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "celularIco" || icon.id == "celularExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "celular") {
        input.classList.add("invalido");
      }
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
          if (json.msg == "El nombre de usuario ya está en uso por otro usuario.") {
            exclamation.forEach((icon) => {
              if (icon.id == "nomUsuExc") {
                icon.style.display = "flex";
              }
            });
            icons.forEach((icon) => {
              if (icon.id == "nomUsuIco" || icon.id == "nomUsuExc") {
                icon.style.color = "rgb(180, 0, 0)";
                icon.classList.add("iconInvalid");
              }
            });
            input.forEach((input) => {
              if (input.id == "nomUsu") {
                input.style.color = "rgb(180, 0, 0)";
                input.classList.add("invalido");
              }
            });
          } else if (json.msg == "El correo ya está en uso por otro usuario.") {
            exclamation.forEach((icon) => {
              if (icon.id == "emailExc") {
                icon.style.display = "flex";
              }
            });
            icons.forEach((icon) => {
              if (icon.id == "emailIco" || icon.id == "emailExc") {
                icon.style.color = "rgb(180, 0, 0)";
                icon.classList.add("iconInvalid");
              }
            });
            input.forEach((input) => {
              if (input.id == "email") {
                input.style.color = "rgb(180, 0, 0)";
                input.classList.add("invalido");
              }
            });
          } else if (json.msg == "El número de celular ya está en uso por otro usuario.") {
            exclamation.forEach((icon) => {
              if (icon.id == "celularExc") {
                icon.style.display = "flex";
              }
            });
            icons.forEach((icon) => {
              if (icon.id == "celularIco" || icon.id == "celularExc") {
                icon.style.color = "rgb(180, 0, 0)";
                icon.classList.add("iconInvalid");
              }
            });
            input.forEach((input) => {
              if (input.id == "celular") {
                input.style.color = "rgb(180, 0, 0)";
                input.classList.add("invalido");
              }
            });
          }
        }
      });
  }
};

const ingresar = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("pass");
  const input = document.querySelectorAll("input");
  const icons = document.getElementsByName("exclamation");
  const exclamation = document.querySelectorAll(".exclamationSign");

  const valEmail = /^[\w\-._]+@[A-Za-z\d.-]{2,}\.[A-Za-z]{2,6}$/;
  const valPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,25}$/; // Contiene al menos una letra mayúscula, Contiene al menos una letra minúscula, Contiene al menos un dígito, Tiene una longitud mínima de 8 caracteres y maxima de 25.

  exclamation.forEach((icon) => {
    icon.style.display = "none";
  });
  icons.forEach((icon) => {
    icon.style.color = "rgb(0, 0, 0)";
    icon.classList.remove("iconInvalid");
  });
  input.forEach((input) => {
    input.style.color = "rgb(0, 0, 0)";
    input.classList.remove("invalido");
  });

  if (email.value == "" && password.value == "") {
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
  } else if (email.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese su correo...",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "emailExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "emailIco" || icon.id == "emailExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "email") {
        input.classList.add("invalido");
      }
    });
  } else if (password.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese una contraseña...",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "passExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "passIco" || icon.id == "passExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "pass") {
        input.classList.add("invalido");
      }
    });
  } else if (email.value != email.value.match(valEmail)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Correo inválido",
      text: "Porfavor use un correo electrónico válido, ej: ejemplo@mail.com",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "emailExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "emailIco" || icon.id == "emailExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "email") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
    });
  } else if (password.value != password.value.match(valPassword)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Contraseña inválida.",
      text: "La contraseña debe tener al menos una letra mayúscula, al menos una letra minúscula, al menos un número, mínimo 8 carácteres y máximo 25",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "passExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "passIco" || icon.id == "passExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "pass") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
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
            if (email.value.toLowerCase() == usuario.correo.toLowerCase()) {
              if (password.value == usuario.password) {
                Swal.fire({
                  icon: "success",
                  showConfirmButton: false,
                  title: "Bienvenido",
                  text: "Ingresando...",
                  timer: 1000,
                });
                if (usuario.rol == "Admin") {
                  setTimeout(function () {
                    window.location = "/confi";
                  }, 1500);
                } else {
                  setTimeout(function () {
                    window.location = "/usuclient";
                  }, 1500);
                }
              } else {
                Swal.fire({
                  icon: "error",
                  confirmButtonText: "Aceptar",
                  title: "Contraseña incorrecta",
                  text: "Verifique su contraseña.",
                });
                exclamation.forEach((icon) => {
                  if (icon.id == "passExc") {
                    icon.style.display = "flex";
                  }
                });
                icons.forEach((icon) => {
                  if (icon.id == "passIco" || icon.id == "passExc") {
                    icon.style.color = "rgb(180, 0, 0)";
                    icon.classList.add("iconInvalid");
                  }
                });
                input.forEach((input) => {
                  if (input.id == "pass") {
                    input.style.color = "rgb(180, 0, 0)";
                    input.classList.add("invalido");
                  }
                });
              }
              existe = true;
              return;
            }
          }
          if (!existe) {
            console.log("no existe");
            Swal.fire({
              icon: "error",
              confirmButtonText: "Aceptar",
              title: "No existe un usuario registrado con ese correo",
              text: "Verifique su correo: " + email.value + ".",
            });
            exclamation.forEach((icon) => {
              if (icon.id == "emailExc") {
                icon.style.display = "flex";
              }
            });
            icons.forEach((icon) => {
              if (icon.id == "emailIco" || icon.id == "emailExc") {
                icon.style.color = "rgb(180, 0, 0)";
                icon.classList.add("iconInvalid");
              }
            });
            input.forEach((input) => {
              if (input.id == "email") {
                input.style.color = "rgb(180, 0, 1000)";
                input.classList.add("invalido");
              }
            });
          }
        });
      });
  }
};

$(document).ready(function () {
  $("input#nomUsu, input#email, input#nombre, input#apellidos, input#celular, input#pass").characterCounter();
});

const recuperar = () => {
  const email = document.getElementById("email");
  const input = document.querySelectorAll("input");
  const icons = document.getElementsByName("exclamation");
  const exclamation = document.querySelectorAll(".exclamationSign");

  const valEmail = /^[\w\-._]+@[A-Za-z\d.-]{2,}\.[A-Za-z]{2,6}$/;

  exclamation.forEach((icon) => {
    icon.style.display = "none";
  });
  icons.forEach((icon) => {
    icon.style.color = "rgb(0, 0, 0)";
    icon.classList.remove("iconInvalid");
  });
  input.forEach((input) => {
    input.style.color = "rgb(0, 0, 0)";
    input.classList.remove("invalido");
  });

  if (email.value == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese un correo primero!",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "emailExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "emailIco" || icon.id == "emailExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "email") {
        input.classList.add("invalido");
      }
    });
  } else if (email.value != email.value.match(valEmail)) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      title: "Correo inválido",
      text: "Porfavor use un correo electrónico válido, ej: ejemplo@mail.com",
    });
    exclamation.forEach((icon) => {
      if (icon.id == "emailExc") {
        icon.style.display = "flex";
      }
    });
    icons.forEach((icon) => {
      if (icon.id == "emailIco" || icon.id == "emailExc") {
        icon.style.color = "rgb(180, 0, 0)";
        icon.classList.add("iconInvalid");
      }
    });
    input.forEach((input) => {
      if (input.id == "email") {
        input.style.color = "rgb(180, 0, 0)";
        input.classList.add("invalido");
      }
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
            if (email.value.toLowerCase() == usuario.correo.toLowerCase()) {
              exclamation.forEach((icon) => {
                if (icon.id == "passExc") {
                  icon.style.display = "flex";
                }
              });
              icons.forEach((icon) => {
                if (icon.id == "passIco" || icon.id == "passExc") {
                  icon.style.color = "rgb(180, 0, 0)";
                  icon.classList.add("iconInvalid");
                }
              });
              input.forEach((input) => {
                if (input.id == "pass") {
                  input.style.color = "rgb(180, 0, 0)";
                  input.classList.add("invalido");
                }
              });
              return (existe = true);
            }
          }
          if (!existe) {
            Swal.fire({
              icon: "error",
              confirmButtonText: "Aceptar",
              title: "No existe un usuario registrado con ese correo",
              text: "Verifique su correo: " + email.value + ".",
            });
            exclamation.forEach((icon) => {
              if (icon.id == "emailExc") {
                icon.style.display = "flex";
              }
            });
            icons.forEach((icon) => {
              if (icon.id == "emailIco" || icon.id == "emailExc") {
                icon.style.color = "rgb(180, 0, 0)";
                icon.classList.add("iconInvalid");
              }
            });
            input.forEach((input) => {
              if (input.id == "email") {
                input.style.color = "rgb(180, 0, 0)";
                input.classList.add("invalido");
              }
            });
          } else {
            Swal.fire({
              icon: "success",
              showConfirmButton: false,
              title: "Recuperación exitosa",
              text: "Verifique su correo electrónico para continuar...",
              timer: 2000,
            });
            setTimeout(function () {
              window.location = "/";
            }, 2500);
          }
        });
      });
  }
};

const cancelar = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("pass");
  email.value = "";
  password.value = "";
  setTimeout(function () {
    window.location = "/";
  }, 500);
};
