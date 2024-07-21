const Revisor = require('./Revisor');
const Autor = require('./Autor');
const Organizador = require('./Organizador');
const Conferencia = require('./Conferencia/Conferencia');
const Sesion = require('./Conferencia/Sesion/Sesion');
const ArticuloRegular = require('./Articulo/ArticuloRegular');
const EstrategiaInteres = require('./EstrategiaAsignacion');
const NivelInteres = require('./NivelInteres');
const Bidding = require('./Conferencia/Sesion/Estados/Bidding');
const EstadoRevision = require('./Conferencia/Sesion/Estados/Revision');
const Seleccion = require('./Conferencia/Sesion/Estados/Seleccion');
const ArticuloPoster = require('./Articulo/ArticuloPoster');
const AsignacionInteresPrimero = require('./EstrategiaAsignacion');
const GestorDeRevisiones = require('./GestionRevisiones');
const Revision = require('./Revision');
const SeleccionadorMejores = require('./Seleccionador/SeleccionadorMejores');

const revisor1 = new Revisor('Revisor 1', 'Uno', 'UPC', 'john@doe.com', '1234');
const revisor2 = new Revisor('Revisor 2', 'Dos', 'UPC', 'john@doe.com', '1234');
const revisor3 = new Revisor('Revisor 3', 'Tres', 'UPC', 'john@doe.com', '1234');
const revisor4 = new Revisor('Revisor 4', 'Cuatro', 'UPC', 'john@doe.com', '1234');
const autor1 = new Autor('Autor', 'Doe', 'UPC', 'john@doe.com', '1234');
const autor2 = new Autor('Autor 2', 'Doe', 'UPC', 'john@doe.com', '1234');
const autor3 = new Autor('Autor 3', 'Doe', 'UPC', 'john@doe.com', '1234');
const organizador = new Organizador('Organizador', 'Doe', 'UPC', 'john@doe.com', '1234');
const conferencia = new Conferencia('TYH 2024');
const articuloReg1 = new ArticuloRegular('Articulo 1', 'archivo 1', 'resumen 1');
const articuloRegMod = new ArticuloRegular('Articulo MOD', 'archivo MOD', 'resumen MOD');
const articuloReg2 = new ArticuloRegular('Articulo 2', 'archivo 2', 'resumen 2');
// const articuloPost1 = new ArticuloPoster('Articulo Poster 1', 'archivo 1', 'fuente 1');
const sesion1 = new Sesion('Sesion 1', new Date(new Date().getTime() + 10 * 60000));
const estrategiaAsignacion = new AsignacionInteresPrimero();
sesion1.verificarFechaLimite()

const nivelInteres = new NivelInteres();
const gestionarRevisiones = new GestorDeRevisiones();

// Creación
conferencia.agregarSesion(sesion1)
conferencia.agregarRevisor(revisor1)
conferencia.agregarRevisor(revisor2)
conferencia.agregarRevisor(revisor3)
conferencia.agregarRevisor(revisor4)
autor1.asignarArticulo(articuloReg1)
autor2.asignarArticulo(articuloReg1)
autor3.asignarArticulo(articuloReg2)
// autor3.asignarArticulo(articuloPost1)

// Recepción de artículos
console.log('Estado sesion:', sesion1.estado);
autor1.enviarArticulo(articuloReg1, sesion1);
// autor1.enviarArticulo(articuloReg2, sesion1);
// autor3.enviarArticulo(articuloPost1, sesion1);
autor1.modificarArticulo(articuloReg1, articuloRegMod, sesion1)

// Bidding
sesion1.estado = new Bidding();
console.log('Estado sesion:', sesion1.estado);
revisor1.expresarInteres(articuloReg1, nivelInteres.interesado(), sesion1);
revisor2.expresarInteres(articuloReg1, nivelInteres.quizas(), sesion1);
revisor3.expresarInteres(articuloReg1, nivelInteres.interesado(), sesion1);
// revisor1.expresarInteres(articuloReg2, nivelInteres.quizas(), sesion1);
// revisor2.expresarInteres(articuloReg2, nivelInteres.interesado(), sesion1);
// revisor3.expresarInteres(articuloReg2, nivelInteres.noInteresado(), sesion1);
// revisor4.expresarInteres(articuloReg1, nivelInteres.noInteresado(), sesion1);
// revisor1.expresarInteres(articuloPost1, nivelInteres.noInteresado(), sesion1);
// revisor2.expresarInteres(articuloPost1, nivelInteres.interesado(), sesion1);
// Modificacion de interes
// revisor1.expresarInteres(articuloReg1, nivelInteres.quizas(), sesion1);

// Asignación de artículos
estrategiaAsignacion.asignar(sesion1, conferencia.revisores);

// Revision
// sesion1.estado = new Revision();
const revision1 = new Revision('Muy bien', 1);
const revision2 = new Revision('Muy bien', 2);
revisor1.revisar(articuloReg1, revision1);
revisor2.revisar(articuloReg1, revision2);
revisor3.revisar(articuloReg1, revision2);

// Selección
// sesion1.estado = new Seleccion();
sesion1.verificarRevisiones();
// Cambiar metodo de seleccion
// sesion1.cambiarMetodoSeleccion(new SeleccionadorMejores(sesion1.articulos, 1));
console.log('Estado sesion:', sesion1.seleccionador);

