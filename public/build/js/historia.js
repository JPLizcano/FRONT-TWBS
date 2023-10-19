const abrirFormReg = () => {
  document.getElementById("selMov").value = "0";
  document.getElementById("Fecha").value = "";
  document.getElementById("Hora").value = "";
  let cont = document.getElementById("fondo");
  if (cont.style.display === "block") {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
};
document.getElementById("btnAgg").addEventListener("click", abrirFormReg);
document.getElementById("cancelar").addEventListener("click", abrirFormReg);

const registrar = () => {
  let select = document.getElementById("selMov");
  const movimiento = select.options[select.selectedIndex].text;
  let fecha = document.getElementById("Fecha").value;
  let hora = document.getElementById("Hora").value;
  if (select.value == "0" && fecha == "" && hora == "") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: "Ingrese datos al formulario primero!",
    });
  } else if (select.value == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione un movimiento!",
    });
  } else if (fecha == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione una fecha!",
    });
  } else if (hora == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione una hora!",
    });
  } else {
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      title: "Movimiento registrado correctamente",
      html: `Tipo de movimiento: ${movimiento}<br>Fecha: ${fecha}<br>Hora: ${hora}`,
    });
    abrirFormReg();
  }
};
document.getElementById("registrar").addEventListener("click", registrar);

const abrirFormAct = () => {
  document.getElementById("selMov2").value = "1";
  document.getElementById("Fecha2").value = "2023-10-15";
  document.getElementById("Hora2").value = "12:00";
  let cont = document.getElementById("fondo2");
  if (cont.style.display === "block") {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
};
document.getElementById("btnMod").addEventListener("click", abrirFormAct);
document.getElementById("cancelar2").addEventListener("click", abrirFormAct);

const actualizar = () => {
  let select = document.getElementById("selMov2");
  const movimiento = select.options[select.selectedIndex].text;
  let fecha = document.getElementById("Fecha2").value;
  let hora = document.getElementById("Hora2").value;
  if (select.value == "0" && fecha == "" && hora == "") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: "Ingrese datos al formulario primero!",
    });
  } else if (select.value == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione un movimiento!",
    });
  } else if (fecha == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione una fecha!",
    });
  } else if (hora == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione una hora!",
    });
  } else {
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      title: "Movimiento actualizado correctamente",
      html: `Tipo de movimiento: ${movimiento}<br>Fecha: ${fecha}<br>Hora: ${hora}`,
    });
    abrirFormAct();
  }
};
document.getElementById("actualizar").addEventListener("click", actualizar);