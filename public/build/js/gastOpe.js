const abrirFormReg = () => {
  let formAgg = document.getElementById("formulario");
  let fond = document.getElementById("fondo");
  if (formAgg.style.display === "block") {
    formAgg.style.display = "none";
    fond.style.display = "none";
  } else {
    formAgg.style.display = "block";
    fond.style.display = "block";
  }
  document.getElementById("tipoGasto").value = "";
  document.getElementById("descGast").value = "";
  document.getElementById("Fecha").value = "";
  document.getElementById("Hora").value = "";
  document.getElementById("Valor").value = "";
};
document.getElementById("btnAgg").addEventListener("click", abrirFormReg);
document.getElementById("cancelar").addEventListener("click", abrirFormReg);

const registrar = () => {
  const tipoGasto = document.getElementById("tipoGasto").value;
  let desc = document.getElementById("descGast").value;
  const fecha = document.getElementById("Fecha").value;
  const hora = document.getElementById("Hora").value;
  const valor = document.getElementById("Valor").value;
  if (tipoGasto == "" && fecha == "" && hora == "" && valor == "") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: `Ingrese datos en el formulario primero!`,
    });
  } else if (tipoGasto == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Ingrese un tipo de gasto!`,
    });
  } else if (fecha == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Seleccione una fecha!`,
    });
  } else if (hora == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Seleccione una hora!`,
    });
  } else if (valor == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Ingrese un valor!`,
    });
  } else {
    if (desc == "") {
      desc = "Sin descripción.";
    }
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      html: `Tipo de gasto: ${tipoGasto}<br>Fecha: ${fecha}<br>Hora: ${hora}<br>Descripción: ${desc}<br>Valor: $${valor}`,
    });
    abrirFormReg();
  }
};
document.getElementById("registrar").addEventListener("click", registrar);

const abrirFormAct = () => {
  document.getElementById("tipoGasto2").value = "Arriendo";
  document.getElementById("descGast2").value = "";
  document.getElementById("Fecha2").value = "2023-10-01";
  document.getElementById("Hora2").value = "13:00";
  document.getElementById("Valor2").value = "1000000";
  let formAgg = document.getElementById("formulario2");
  let fond = document.getElementById("fondo2");
  if (formAgg.style.display === "block") {
    formAgg.style.display = "none";
    fond.style.display = "none";
  } else {
    formAgg.style.display = "block";
    fond.style.display = "block";
  }
  document.getElementById("tipoGastoL2").classList.add("labelActRol");
  document.getElementById("valorL2").classList.add("labelActRol");
};
document.getElementById("cancelar2").addEventListener("click", abrirFormAct);

const actualizar = () => {
  const tipoGasto = document.getElementById("tipoGasto2").value;
  let desc = document.getElementById("descGast2").value;
  const fecha = document.getElementById("Fecha2").value;
  const hora = document.getElementById("Hora2").value;
  const valor = document.getElementById("Valor2").value;
  if (tipoGasto == "" && fecha == "" && hora == "" && valor == "") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: `Ingrese datos en el formulario primero!`,
    });
  } else if (tipoGasto == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Ingrese un tipo de gasto!`,
    });
  } else if (fecha == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Seleccione una fecha!`,
    });
  } else if (hora == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Seleccione una hora!`,
    });
  } else if (valor == "") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: `Ingrese un valor!`,
    });
  } else {
    if (desc == "") {
      desc = "Sin descripción.";
    }
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      html: `Tipo de gasto: ${tipoGasto}<br>Fecha: ${fecha}<br>Hora: ${hora}<br>Descripción: ${desc}<br>Valor: $${valor}`,
    });
  abrirFormAct();
  }
};
document.getElementById("actualizar").addEventListener("click", actualizar);
