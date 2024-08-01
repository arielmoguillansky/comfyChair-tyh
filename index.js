const Revisor = require("./Usuario/Revisor/Revisor");
const Autor = require("./Usuario/Autor/Autor");
const Conferencia = require("./Conferencia/Conferencia");
const ArticuloRegular = require("./Articulo/ArticuloRegular");
const NivelInteres = require("./Usuario/Revisor/NivelInteres");
const Bidding = require("./Conferencia/Sesion/Estados/Bidding");
const AsignacionInteresPrimero = require("./Conferencia/Sesion/EstrategiaAsignacion");
const Revision = require("./Conferencia/Sesion/Revision");
const SeleccionadorCorteFijo = require("./Seleccionador/SeleccionadorCorteFijo");
const SeleccionadorMejores = require("./Seleccionador/SeleccionadorMejores");
const SesionRegular = require("./Conferencia/Sesion/SesionRegular");

const revisor1 = new Revisor("Revisor 1", "Uno", "UPC", "john@doe.com", "1234");
const revisor2 = new Revisor("Revisor 2", "Dos", "UPC", "john@doe.com", "1234");
const revisor3 = new Revisor(
  "Revisor 3",
  "Tres",
  "UPC",
  "john@doe.com",
  "1234"
);
const revisor4 = new Revisor(
  "Revisor 4",
  "Cuatro",
  "UPC",
  "john@doe.com",
  "1234"
);
const autor1 = new Autor("Autor", "Doe", "UPC", "john@doe.com", "1234");
const autor2 = new Autor("Autor 2", "Doe", "UPC", "john@doe.com", "1234");
const autor3 = new Autor("Autor 3", "Doe", "UPC", "john@doe.com", "1234");
const conferencia = new Conferencia("TYH 2024");
const articuloReg1 = new ArticuloRegular(
  "Articulo 1",
  "archivo 1",
  "resumen 1"
);
const articuloRegMod = new ArticuloRegular(
  "Articulo MOD",
  "archivo MOD",
  "resumen MOD"
);
const articuloReg2 = new ArticuloRegular(
  "Articulo 2",
  "archivo 2",
  "resumen 2"
);
const sesion1 = new SesionRegular(
  "Sesion 1",
  new Date(new Date().getTime() + 10 * 60000),
  new SeleccionadorCorteFijo(50)
);
const estrategiaAsignacion = new AsignacionInteresPrimero();
sesion1.verificarFechaLimiteDeRecepcion();

const nivelInteres = new NivelInteres();

// Creación
conferencia.agregarSesion(sesion1);
sesion1.agregarRevisor(revisor1);
sesion1.agregarRevisor(revisor2);
sesion1.agregarRevisor(revisor3);
sesion1.agregarRevisor(revisor4);
autor1.asignarArticulo(articuloReg1);
autor2.asignarArticulo(articuloReg1);
autor3.asignarArticulo(articuloReg2);

// Recepción de artículos
console.log("Estado sesion:", sesion1.estado);
autor1.enviarArticulo(articuloReg1, sesion1);
autor1.enviarArticulo(articuloReg2, sesion1);
autor1.modificarArticulo(articuloReg1, articuloRegMod, sesion1);

// Bidding
sesion1.estado = new Bidding();
console.log("Estado sesion:", sesion1.estado);
revisor1.expresarInteres(articuloReg1, nivelInteres.interesado(), sesion1);
revisor2.expresarInteres(articuloReg1, nivelInteres.quizas(), sesion1);
revisor3.expresarInteres(articuloReg1, nivelInteres.interesado(), sesion1);
revisor1.expresarInteres(articuloReg2, nivelInteres.quizas(), sesion1);
revisor2.expresarInteres(articuloReg2, nivelInteres.interesado(), sesion1);
revisor3.expresarInteres(articuloReg2, nivelInteres.noInteresado(), sesion1);

// Modificacion de interes
// revisor1.expresarInteres(articuloReg1, nivelInteres.quizas(), sesion1);

// Asignación de artículos
estrategiaAsignacion.asignar(sesion1);

// Revision
const revision1 = new Revision("bien", 2);
const revision2 = new Revision("Muy bien", 3);
const revision3 = new Revision("Mal", -2);
const revision4 = new Revision("Muy mal", -3);
const revision5 = new Revision("neutro", 0);
const revision6 = new Revision("mejor", 1);
revisor1.revisar(articuloReg1, revision1);
revisor2.revisar(articuloReg1, revision2);
revisor3.revisar(articuloReg1, revision3);
revisor1.revisar(articuloReg2, revision6);
revisor2.revisar(articuloReg2, revision5);
revisor3.revisar(articuloReg2, revision4);

// Selección
sesion1.verificarRevisiones();

// Cambiar metodo de seleccion
sesion1.cambiarMetodoSeleccion(new SeleccionadorMejores(0));
console.log("Estado sesion:", sesion1.seleccionarArticulos());
