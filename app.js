//Importar librerías o paquetes
const express = require("express");
const path = require("path");
const hbs = require("hbs");

//Especificar la función a emplear
const app = express();

//Definir el puerto
const port = 8080;

//Directorio de páginas estáticas
app.use(express.static("public"));

//Configuración del directorio de las vistas hbs
app.set("views", path.join(__dirname + "/public"));

hbs.registerPartials(__dirname + "/public/partials");

//Interpretar hbs por el servidor
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/reg", (req, res) => {
  res.render("registro", {
    twbs: "The Warrior Barber Shop",
  });
});
app.get("/log", (req, res) => {
  res.render("ingresar", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/recu", (req, res) => {
  res.render("recuperar", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/ini", (req, res) => {
  res.render("inicio", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/iniclient", (req, res) => {
  res.render("inicioCliente", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/confi", (req, res) => {
  res.render("configuracion", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/usu", (req, res) => {
  res.render("usuarios", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/usuclient", (req, res) => {
  res.render("usuariosClient", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/usubarb", (req, res) => {
  res.render("usuariosBarb", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/insu", (req, res) => {
  res.render("insumos", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/prov", (req, res) => {
  res.render("proveedores", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/hisMov", (req, res) => {
  res.render("historiaDeMovimientos", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/empl", (req, res) => {
  res.render("empleados", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/cal", (req, res) => {
  res.render("calendario", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/age", (req, res) => {
  res.render("agenda", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/agend", (req, res) => { 
  res.render("agendaCitas", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/agendclient", (req, res) => { 
  res.render("agendaCitasClient", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/gastope", (req, res) => {
  res.render("gastOpe", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/citas", (req, res) => {
  res.render("historialCitas", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/clientes", (req, res) => {
  res.render("clientes", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/gestVentas", (req, res) => {
  res.render("gestionVentas", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("/servAten", (req, res) => {
  res.render("serviciosAtendidos", {
    twbs: "The Warrior Barber Shop",
  });
});

app.get("*", (req, res) => {
  res.render("404Client", {
    titulo: "Página no encontrada",
  });
});

app.listen(port, () => {
  console.log(`Escuchando por el puerto ${port}`);
});
