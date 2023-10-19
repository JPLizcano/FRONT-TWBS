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
  document.getElementById("selProv").value = "0";
  document.getElementById("Cant").value = "";
  document.getElementById("nomInsu").value = "";
  document.getElementById("Desc").value = "";
  document.getElementById("preUnit").value = "";
  document.getElementById("stockMax").value = "";
  document.getElementById("stockMin").value = "";
  document.getElementById("valTotInsu").innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: ';
  let cont = document.getElementById("fondo");
  if (cont.style.display === "block") {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
};
document.getElementById("btnAgg").addEventListener("click", abrirFormReg);
document.getElementById("canInsu").addEventListener("click", abrirFormReg);

const valTot = () => {
  let cant = document.getElementById("Cant").value;
  let unit = document.getElementById("preUnit").value;
  let total = cant * unit;
  document.getElementById("valTotInsu").innerHTML = `<i class="fa fa-sack-dollar iconForm"></i>Valor total: $${total}`;
};

const agregarInsumo = () => {
  let provSel = document.getElementById("selProv");
  const prov = provSel.options[provSel.selectedIndex].text;
  let cant = document.getElementById("Cant").value;
  let nomInsu = document.getElementById("nomInsu").value;
  let desc = document.getElementById("Desc").value;
  let unit = document.getElementById("preUnit").value;
  let max = document.getElementById("stockMax").value;
  let min = document.getElementById("stockMin").value;
  if (provSel.value == "0" && cant == "" && nomInsu == "" && unit == "") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: "Ingrese datos al formulario primero!",
    });
  } else if (provSel.value == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione un proveedor!",
    });
  } else if (cant == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese una cantidad!",
    });
  } else if (nomInsu == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese el nombre de un insumo!",
    });
  } else if (unit == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Ingrese un precio unitario!",
    });
  } else {
    if (desc == "") {
      desc = "Sin descripción.";
    }
    if (max == "") {
      max = "10";
    }
    if (min == "") {
      min = "2";
    }
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      title: "Insumos agregados correctamente.",
      html: `Proveedor: ${prov}<br>Cantidad: ${cant}<br>Nombre del insumo: ${nomInsu}<br>Precio unitario: $${unit}<br>Descripción: ${desc}<br>Total: ${document.getElementById("valTotInsu").textContent}`,
    });
    abrirFormReg();
  }
};
document.getElementById("aggInsu").addEventListener("click", agregarInsumo);

const abrirFormAct = (Rol) => {
    document.getElementById("selProv2").value = "0";
    document.getElementById("Cant2").value = "";
    document.getElementById("nomInsu2").value = "";
    document.getElementById("Desc2").value = "";
    document.getElementById("preUnit2").value = "";
    document.getElementById("stockMax2").value = "";
    document.getElementById("stockMin2").value = "";
    document.getElementById("valTotInsu2").innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: ';
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

const valTot2 = () => {
    let cant = document.getElementById("Cant2").value;
    let unit = document.getElementById("preUnit2").value;
    let total = cant * unit;
    document.getElementById("valTotInsu2").innerHTML = `<i class="fa fa-sack-dollar iconForm"></i>Valor total: $${total}`;
  };
  
  const actualizarInsumo = () => {
    let provSel = document.getElementById("selProv2");
    const prov = provSel.options[provSel.selectedIndex].text;
    let cant = document.getElementById("Cant2").value;
    let nomInsu = document.getElementById("nomInsu2").value;
    let desc = document.getElementById("Desc2").value;
    let unit = document.getElementById("preUnit2").value;
    let max = document.getElementById("stockMax2").value;
    let min = document.getElementById("stockMin2").value;
    if (provSel.value == "0" && cant == "" && nomInsu == "" && unit == "") {
      Swal.fire({
        icon: "error",
        confirmButtonText: "Aceptar",
        text: "Ingrese datos al formulario primeroa!",
      });
    } else if (provSel.value == "0") {
      Swal.fire({
        icon: "warning",
        confirmButtonText: "Aceptar",
        text: "Seleccione un proveedor!",
      });
    } else if (cant == "") {
      Swal.fire({
        icon: "warning",
        confirmButtonText: "Aceptar",
        text: "Ingrese una cantidad!",
      });
    } else if (nomInsu == "") {
      Swal.fire({
        icon: "warning",
        confirmButtonText: "Aceptar",
        text: "Ingrese el nombre de un insumo!",
      });
    } else if (unit == "") {
      Swal.fire({
        icon: "warning",
        confirmButtonText: "Aceptar",
        text: "Ingrese un precio unitario!",
      });
    } else {
      if (desc == "") {
        desc = "Sin descripción.";
      }
      if (max == "") {
        max = "10";
      }
      if (min == "") {
        min = "2";
      }
      Swal.fire({
        icon: "success",
        confirmButtonText: "Aceptar",
        title: "Insumos agregados correctamente.",
        html: `Proveedor: ${prov}<br>Cantidad: ${cant}<br>Nombre del insumo: ${nomInsu}<br>Precio unitario: $${unit}<br>Descripción: ${desc}<br>Total: ${document.getElementById("valTotInsu2").textContent}`,
      });
      abrirFormAct();
    }
  };
  document.getElementById("actInsu").addEventListener("click", actualizarInsumo);