const ArticuloRegular = require('../Articulo/ArticuloRegular');
const ArticuloPoster = require('../Articulo/ArticuloPoster');
const Sesion = require('../Conferencia/Sesion/Sesion');
const SesionPoster = require('../Conferencia/Sesion/SesionPoster');
const SesionRegular = require('../Conferencia/Sesion/SesionRegular');
const SeleccionadorCorteFijo = require('../Seleccionador/SeleccionadorCorteFijo');
const Revisor = require('../Usuario/Revisor/Revisor');
const SesionWorkshop = require('../Conferencia/Sesion/SesionWorkshop');
const SeleccionadorMejores = require('../Seleccionador/SeleccionadorMejores');

let revisor, sesion, articulo
const seleccionador = new SeleccionadorCorteFijo(50)
const fechaLimite = new Date(new Date().getTime() + 10 * 60000)
const fechaLimitePasada = new Date(new Date().getTime() - 10 * 60000)
describe('Una sesión', () => {
  it('debe tener por defecto el estado Recepcion', () => {
    sesion = new Sesion('Sesion 1', fechaLimite, seleccionador);
    const estado = sesion.estado;
    expect(estado.esRecepcion()).toBeTruthy();
  });

  it('debe poder agregar un revisor', () => {
    revisor = new Revisor('Carlos', 'Rodriguez', 'UNLP', 'carlos@mail.com', '1234');
    sesion.agregarRevisor(revisor);
    expect(sesion.revisores).toHaveLength(1);
    expect(sesion.revisores).toContain(revisor);
  });

  it('debe poder actualizar el estado a bidding si se supera la fecha limite de recepcion', () => {
    sesion = new Sesion('Sesion 1', fechaLimitePasada, seleccionador);
    sesion.verificarFechaLimiteDeRecepcion();
    const estado = sesion.estado;
    expect(estado.esBidding()).toBeTruthy();
  });

  it('debe poder cambiar el método de selección', () => {
    sesion = new Sesion('Sesion 1', fechaLimitePasada, seleccionador);
    const seleccionadorMejores = new SeleccionadorMejores(1)
    sesion.cambiarMetodoSeleccion(seleccionadorMejores);
    expect(sesion.seleccionador).toEqual(seleccionadorMejores);
  });
});

describe('Una sesión regular', () => {
  it('debe recibir articulos regulares', () => {
    sesion = new SesionRegular('Sesion Regular 1', fechaLimite, seleccionador);
    articulo = new ArticuloRegular('Articulo Regular 1', 'archivo 1', 'resumen 1');
    sesion.agregarArticulo(articulo);
    expect(sesion.articulos).toContain(articulo);
  });

  it('no debe recibir articulos posters', () => {
    sesion = new SesionRegular('Sesion Regular 1', fechaLimite, seleccionador);
    articulo = new ArticuloPoster('Articulo Poster 1', 'archivo 1', 'fuente 1');
    expect(() => sesion.agregarArticulo(articulo)).toThrow();
  });

});

describe('Una sesión poster', () => {
  it('debe recibir articulos posters', () => {
    sesion = new SesionPoster('Sesion Poster 1', fechaLimite, seleccionador);
    articulo = new ArticuloPoster('Articulo Poster 1', 'archivo 1', 'fuente 1');
    sesion.agregarArticulo(articulo);
    expect(sesion.articulos).toContain(articulo);

  });

  it('no debe recibir articulos regulares', () => {
    sesion = new SesionPoster('Sesion Poster 1', fechaLimite, seleccionador);
    articulo = new ArticuloRegular('Articulo Regular 1', 'archivo 1', 'resumen 1');
    expect(() => sesion.agregarArticulo(articulo)).toThrow();
  });

});

describe('Una sesión workshop', () => {
  it('debe recibir articulos posters y regulares', () => {
    sesion = new SesionWorkshop('Sesion Workshop 1', fechaLimite, seleccionador);
    articuloP = new ArticuloPoster('Articulo Poster 1', 'archivo 1', 'fuente 1');
    articuloR = new ArticuloRegular('Articulo Regular 1', 'archivo 1', 'resumen 1');
    sesion.agregarArticulo(articuloR);
    sesion.agregarArticulo(articuloP);
    expect(sesion.articulos).toEqual(expect.arrayContaining([articuloR, articuloP]));
  });
});
