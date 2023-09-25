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
