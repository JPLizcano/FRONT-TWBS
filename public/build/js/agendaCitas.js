const abrirFormReg = () => {
  document.getElementById("Fecha").value = "";
  document.getElementById("Hora").value = "";
  document.getElementById("selServ").value = "0";
  document.getElementById("selBarb").value = "0";
  document.getElementById("Desc").value = "";
  document.getElementById("valTotAge").innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: ';
  let formAgg = document.getElementById("fondo");
  if (formAgg.style.display === "block") {
    formAgg.style.display = "none";
  } else {
    formAgg.style.display = "block";
  }
};
document.getElementById("btnAgg").addEventListener("click", abrirFormReg);
document.getElementById("canAgend").addEventListener("click", abrirFormReg);

const valServ = () => {
  let servicio = document.getElementById("selServ").value;
  let valTot = document.getElementById("valTotAge");
  if (servicio == "0") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $0';
  } else if (servicio == "1" || servicio == "2") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $15.000';
  } else if (servicio == "3") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $10.000';
  } else if (servicio == "4") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $20.000';
  } else if (servicio == "5" || servicio == "6") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $18.000';
  } else if (servicio == "7") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $25.000';
  }
};

const agendar = () => {
  const fecha = document.getElementById("Fecha").value;
  const hora = document.getElementById("Hora").value;
  const servicioSelect = document.getElementById("selServ");
  const servicio = servicioSelect.options[servicioSelect.selectedIndex].text;
  const barberoSelect = document.getElementById("selBarb");
  const barbero = barberoSelect.options[barberoSelect.selectedIndex].text;
  let desc = document.getElementById("Desc").value;
  if (fecha == "" && hora == "" && servicioSelect.value == "0" && barberoSelect.value == "0") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: "Ingrese datos en el formulario primero!",
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
      text: "Seleccione la hora!",
    });
  } else if (servicioSelect.value == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione un servicio!",
    });
  } else if (barberoSelect.value == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione un barbero!",
    });
  } else {
    if (desc == "") {
      desc = "Sin descripción.";
    }
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      title: "Cita agendada exitosamente!",
      html: `Fecha: ${fecha}<br>Hora: ${hora}<br>Servicio: ${servicio}<br>Barbero: ${barbero}<br>Descripción: ${desc}<br>${document.getElementById("valTotAge").textContent}`,
    });
    abrirFormReg();
  }
};

const abrirFormAct = () => {
  document.getElementById("Fecha2").value = "2023-10-20";
  document.getElementById("Hora2").value = "13:00";
  document.getElementById("selServ2").value = "1";
  document.getElementById("selBarb2").value = "2";
  document.getElementById("Desc2").value = "";
  valServ2();
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

const valServ2 = () => {
  let servicio = document.getElementById("selServ2").value;
  let valTot = document.getElementById("valTotAge2");
  if (servicio == "0") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $0';
  } else if (servicio == "1" || servicio == "2") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $15.000';
  } else if (servicio == "3") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $10.000';
  } else if (servicio == "4") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $20.000';
  } else if (servicio == "5" || servicio == "6") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $18.000';
  } else if (servicio == "7") {
    valTot.innerHTML = '<i class="fa fa-sack-dollar iconForm"></i>Valor total: $25.000';
  }
};

const actualizar = () => {
  const fecha = document.getElementById("Fecha2").value;
  const hora = document.getElementById("Hora2").value;
  const servicioSelect = document.getElementById("selServ2");
  const servicio = servicioSelect.options[servicioSelect.selectedIndex].text;
  const barberoSelect = document.getElementById("selBarb2");
  const barbero = barberoSelect.options[barberoSelect.selectedIndex].text;
  let desc = document.getElementById("Desc2").value;
  if (fecha == "" && hora == "" && servicioSelect.value == "0" && barberoSelect.value == "0") {
    Swal.fire({
      icon: "error",
      confirmButtonText: "Aceptar",
      text: "Ingrese datos en el formulario primero!",
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
      text: "Seleccione la hora!",
    });
  } else if (servicioSelect.value == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione un servicio!",
    });
  } else if (barberoSelect.value == "0") {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Seleccione un barbero!",
    });
  } else {
    if (desc == "") {
      desc = "Sin descripción.";
    }
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      title: "Cita actualizada exitosamente!",
      html: `Fecha: ${fecha}<br>Hora: ${hora}<br>Servicio: ${servicio}<br>Barbero: ${barbero}<br>Descripción: ${desc}<br>${document.getElementById("valTotAge2").textContent}`,
    });
    abrirFormAct();
  }
};
