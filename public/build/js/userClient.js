const urlUsuarios = "http://localhost:8081/api/usuario";
let user = "JuanP69";

const listarUsuarios = async () => {
  let respuesta = "";
  let contenido = document.getElementById("infoUsu");
  fetch(urlUsuarios, {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listarUsuarios = data.usuarios;
      datos = listarUsuarios.map(function (usuario) {
        console.log(usuario.nombreUsu)
        if (usuario.nombreUsu == user) {
          respuesta = `<tr>
          <td>${usuario.nombreUsu}</td>
          <td>${usuario.nombre}</td>
          <td>${usuario.apellidos}</td>
          <td>${usuario.correo}</td>
          <td>${usuario.celular}</td>
          </tr>`;
          contenido.innerHTML = respuesta;
        }
      });
    });
};

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

const abrirFormAct = (Usu) => {
  Usu = user;
  let formAct = document.getElementById("formulario2");
  let fondo = document.getElementById("fondo2");
  document.getElementById("corL2").classList.add("labelActRol");
  document.getElementById("numCelL2").classList.add("labelActRol");
  document.getElementById("passL2").classList.add("labelActRol");
  document.getElementById("usuL2").classList.add("labelActRol");
  document.getElementById("Correo2").value = "";
  document.getElementById("numCel2").value = "";
  document.getElementById("Pass2").value = "";
  document.getElementById("Usu2").value = Usu;

  if (formAct.style.display === "block") {
    formAct.style.display = "none";
    fondo.style.display = "none";
  } else {
    formAct.style.display = "block";
    fondo.style.display = "block";
  }

  fetch(urlUsuarios, {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listaPermisos = data.usuarios;

      datos = listaPermisos.map(function (usuario) {
        for (let i = 0; i < usuario.nombreUsu.length; i++) {
          if (Usu == usuario.nombreUsu) {
            document.getElementById("Correo2").value = usuario.correo;
            document.getElementById("numCel2").value = usuario.celular;
            document.getElementById("Pass2").value = usuario.password;
            break;
          }
        }
      });
    });
};
document.getElementById("btnAgg").addEventListener("click", abrirFormAct);
document.getElementById("canUsu2").addEventListener("click", abrirFormAct);

const modificarUsu = () => {
  const Email = document.getElementById("Correo2").value.charAt(0).toUpperCase() + document.getElementById("Correo2").value.slice(1).toLowerCase();
  const Pass = document.getElementById("Pass2").value;
  const Cel = document.getElementById("numCel2").value;
  const valEmail = /^[\w\-._]+@[A-Za-z\d.-]{2,}\.[A-Za-z]{2,6}$/;
  const valPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,25}$/; // Contiene al menos una letra mayúscula, Contiene al menos una letra minúscula, Contiene al menos un dígito, Tiene una longitud mínima de 8 caracteres y maxima de 25.

  let existeEmail = false;
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
          if (Email.toLowerCase() == usuario.correo.toLowerCase()) {
            existeEmail = true;
            return;
          } else {
            existeEmail = false;
          }
        }
      });
    });
  console.log(existeEmail);
  if (existeEmail) {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: "Ya existe ese correo.",
    });
  }

  if (Email == "" && Pass == "" && Cel == "" && Sel == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Llene el formulario primero!",
    });
  } else if (Email == "" || Email != Email.match(valEmail)) {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Correo inválido, ejemplo de correo válido: ejemplo@gmail.com",
    });
  } else if (Email.length > 40 || Email.length < 12) {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "El máximo de caracteres para el correo es de 40 y el mínimo es de 12!",
    });
  } else if (Cel == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Número de celular inválido!",
    });
  } else if (Cel.length < 10) {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese un número válido!",
    });
  } else if (Pass == "" || Pass != Pass.match(valPass)) {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Datos de la contraseña inválidos",
      text: "debe contener al menos una letra mayúscula, al menos una letra minúscula, al menos un dígito, mínimo 8 caracteres y máximo 25",
    });
  } else if (Pass.length > 25 || Pass.length < 8) {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "El máximo de caracteres para la contraseña es de 25 y el mínimo es de 8!",
    });
  } else {
    const usuario = {
      nombreUsu: document.getElementById("Usu2").value,
      correo: Email,
      password: Pass,
      celular: Cel,
    };

    fetch(urlUsuarios, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(usuario),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.msg == "Modificación exitosa") {
          Swal.fire({
            icon: "success",
            showConfirmButton: false,
            text: json.msg,
            timer: 1500,
          });
          listarEmpleados();
          abrirFormReg();
        } else {
          Swal.fire({
            icon: "warning",
            confirmButtonText: "Aceptar",
            text: json.msg,
          });
        }
      });
    abrirFormAct();
    listarUsuarios();
  }
};

