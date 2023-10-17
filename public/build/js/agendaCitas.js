const abrirFormReg = () => {
  let formAgg = document.getElementById("fondo");
  if (formAgg.style.display === "block") {
    formAgg.style.display = "none";
  } else {
    formAgg.style.display = "block";
  }
};
document.getElementById("btnAgg").addEventListener("click", abrirFormReg);
document.getElementById("canAgend").addEventListener("click", abrirFormReg);

const agendar = () => {
  const fecha = document.getElementById("Fecha").value;
  const hora = document.getElementById("Hora").value;
  const servicio = document.getElementById("selServ").value;
  const barbero = document.getElementById("selBarb").value;
  const desc = document.getElementById("Desc").value;
  if (fecha == "" || hora == "" || servicio == "0" || barbero == "0") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: `Ingrese datos en el formulario primero!`,
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
      text: `Seleccione la hora!`,
    });
  } else {
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      text: `Cita agendada exitosamente!`,
    });
  }
};

const abrirFormAct = () => {
  let fondo = document.getElementById("fondo2");
  document.getElementById("descL2").classList.add("labelActRol");

  if (fondo.style.display === "block") {
    fondo.style.display = "none";
  } else {
    fondo.style.display = "block";
  }
};
document.getElementById("btnAct").addEventListener("click", abrirFormAct);
document.getElementById("canAgend2").addEventListener("click", abrirFormAct);
