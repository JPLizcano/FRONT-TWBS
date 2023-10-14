const rulInsumos = "http://localhost:8081/api/insumos";
let id = "123";

const listarRoles = async () => {
  let respuesta = "";
  let contenido = document.getElementById("tablaRoles");
  fetch(rulInsumos, {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listaRoles = data.configuraciones;
      datos = listaRoles.map(function (configuracion) {
        respuesta +=
          `<tr><td>${configuracion.rol}</td>` +
          `<td><button type="button" class="btn btnActivo" id="${configuracion.rol}" onclick="cambiarEstado('${configuracion.rol}')">${configuracion.estado}</button></td>` +
          `<td><a class="btnsConfi" id="btnMod" value=${configuracion.rol} onclick="abrirFormAct('${configuracion.rol}')"><i class="fa fa-user-pen"></i></a></td>` +
          `</tr>`;
        contenido.innerHTML = respuesta;
      });
      let botones = document.querySelectorAll("[type='button']");
      botones.forEach((boton) => {
        if (boton.textContent === "Inactivo") {
          boton.classList.remove("btnActivo");
          boton.classList.add("btnInactivo");
        }
      });
    });
};

const cambiarEstado = (idBoton) => {
  const boton = document.getElementById(idBoton);

  if (boton == document.querySelector(`[id="Admin"]`)) {
    Swal.fire({
      icon: "error",
      showConfirmButton: false,
      text: "El rol del Admin no se puede desactivar!",
      timer: 1200,
    });
  } else {
    if (boton.textContent == "Activo") {
      boton.textContent = "Inactivo";
      boton.classList.remove("btnActivo");
      boton.classList.add("btnInactivo");
    } else {
      boton.textContent = "Activo";
      boton.classList.remove("btnInactivo");
      boton.classList.add("btnActivo");
    }

    fetch(rulInsumos, {
      method: "GET",
      mode: "cors",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => resp.json())
      .then(function (data) {
        let listaPermisos = data.configuraciones;
        datos = listaPermisos.map(function (configuracion) {
          for (let i = 0; i < configuracion.rol.length; i++) {
            if (idBoton == configuracion.rol) {
              id = configuracion._id;
              asignar();
            }
            break;
          }
        });
      });

    function asignar() {
      let estados = {
        _id: id,
        rol: idBoton,
        estado: boton.textContent,
      };

      fetch(rulInsumos, {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify(estados),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((resp) => resp.json())
        .then((json) => {
          Swal.fire({
            icon: "success",
            showConfirmButton: false,
            text: `Cambio de estado exitoso.`,
            timer: 1200,
          });
        });
    }
  }
};

const abrirFormReg = () => {
  let cont = document.getElementById("fondo");
  if (cont.style.display === "block") {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
};
document.getElementById("btnAgg").addEventListener("click", abrirFormReg);
document.getElementById("canInsu").addEventListener("click", abrirFormReg);

const agregarRol = () => {
  const inpRol = document.getElementById("nuevoRol").value.charAt(0).toUpperCase() + document.getElementById("nuevoRol").value.slice(1).toLowerCase();
  const permisosSeleccionados = [];
  const checkboxes = document.querySelectorAll('input[name="roles"]');
  let existe = false;
  let marcado = false;
  fetch(rulInsumos, {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listaRoles = data.configuraciones;
      datos = listaRoles.map(function (configuracion) {
        for (let i = 0; i < configuracion.rol.length; i++) {
          if (inpRol.toLowerCase() == configuracion.rol.toLowerCase()) {
            existe = true;
          }
          break;
        }
      });
      validarDatos();
    });
  function validarDatos() {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        marcado = true;
        break;
      }
    }
    if (inpRol == "") {
      Swal.fire({
        icon: "warning",
        confirmButtonText: "Aceptar",
        text: "Ingrese un nombre para el rol primero.",
      });
    } else if (existe) {
      Swal.fire({
        icon: "error",
        confirmButtonText: "Aceptar",
        text: "Ya existe un rol con ese nombre.",
      });
    } else if (!marcado) {
      Swal.fire({
        icon: "warning",
        confirmButtonText: "Aceptar",
        text: "Debe seleccionar al menos un permiso.",
      });
    } else {
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          permisosSeleccionados.push(checkbox.value);
        }
      });
      const roles = {
        rol: inpRol,
        estado: "Activo",
        permisos: permisosSeleccionados,
      };
      fetch(rulInsumos, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(roles),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((resp) => resp.json())
        .then((json) => {
          if (json.msg == "Inserción exitosa.") {
            Swal.fire({
              icon: "success",
              showConfirmButton: false,
              text: json.msg,
              timer: 1200,
            });
          } else if ("Problemas al insertar.") {
            Swal.fire({
              icon: "error",
              showConfirmButton: false,
              text: json.msg,
              timer: 1200,
            });
          } else {
            Swal.fire({
              icon: "warning",
              showConfirmButton: false,
              text: json.msg,
              timer: 1200,
            });
          }
        });
      abrirFormReg();
    }
    listarRoles();
  }
};
document.getElementById("aggInsu").addEventListener("click", agregarRol);

const abrirFormAct = (Rol) => {
  let formAct = document.getElementById("fondo2");
  document.getElementById("cantL2").classList.add("labelActRol");
  document.getElementById("nomInsuL2").classList.add("labelActRol");
  document.getElementById("descL2").classList.add("labelActRol");
  document.getElementById("preUnitL2").classList.add("labelActRol");
  document.getElementById("stockMaxL2").classList.add("labelActRol");
  document.getElementById("stockMinL2").classList.add("labelActRol");

  if (formAct.style.display === "block") {
    formAct.style.display = "none";
  } else {
    formAct.style.display = "block";
  }
};
document.getElementById("btnMod").addEventListener("click", abrirFormAct);
document.getElementById("canInsu2").addEventListener("click", abrirFormAct);

const modificarRol = (Rol) => {
  const actNamRol = document.getElementById("actRol").value;
  Rol = actNamRol.charAt(0).toUpperCase() + actNamRol.slice(1).toLowerCase();
  const checkboxes = document.querySelectorAll('input[name="roles2"]');
  const permisosSeleccionados = [];
  let marcado = false;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      marcado = true;
      break;
    }
  }
  console.log(marcado);

  let existe = false;
  fetch(rulInsumos, {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      let listaRoles = data.configuraciones;
      datos = listaRoles.map(function (configuracion) {
        for (let i = 0; i < configuracion.rol.length; i++) {
          if (actNamRol.toLowerCase() == configuracion.rol.toLowerCase()) {
            existe = true;
          }
          break;
        }
      });
    });

  // if (existe) {
  //   Swal.fire({
  //     icon: "error",
  //     confirmButtonText: "Aceptar",
  //     text: "Ya existe un rol con ese nombre.",
  //   });
  // } else
  if (actNamRol.toLowerCase() == "admin") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: "El rol Admin no se puede asignar a otro usuario!",
    });
    abrirFormAct();
    return;
  } else if (actNamRol === "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese un nombre para el rol!",
    });
    return;
  } else if (!marcado) {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Debe seleccionar al menos un permiso.",
    });
    return;
  } else {
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        permisosSeleccionados.push(checkbox.id);
        console.log(permisosSeleccionados);
      }
    });

    let usuario = {
      _id: id,
      rol: Rol,
      permisos: permisosSeleccionados,
    };

    fetch(rulInsumos, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(usuario), //Convertir el objeto _usuario  a un JSON
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
      .then((json) => {
        json.msg; //Mensaje que retorna la API
      });

    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      text: "Rol actualizado correctamente...",
      timer: 1200,
    });
  }
  listarRoles();
  abrirFormAct();
};

const abrirFormRegHis = () => {
  let cont = document.getElementById("fondo3");
  if (cont.style.display === "block") {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
};
document.getElementById("btnAgg2").addEventListener("click", abrirFormRegHis);
document.getElementById("canInsu3").addEventListener("click", abrirFormRegHis);

const abrirFormActHis = () => {
  let cont = document.getElementById("fondo4");
  if (cont.style.display === "block") {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
};
document.getElementById("btnMod2").addEventListener("click", abrirFormActHis);
document.getElementById("canInsu4").addEventListener("click", abrirFormActHis);