const ArticuloPoster = require('../Articulo/ArticuloPoster');
const ArticuloRegular = require('../Articulo/ArticuloRegular');
const SesionRegular = require('../Conferencia/Sesion/SesionRegular');
const SesionPoster = require('../Conferencia/Sesion/SesionPoster');
const SeleccionadorCorteFijo = require('../Seleccionador/SeleccionadorCorteFijo');
const Autor = require('../Usuario/Autor/Autor');
const Bidding = require('../Conferencia/Sesion/Estados/Bidding');

let autor, sesion, articulo
const seleccionador = new SeleccionadorCorteFijo(50)
const fechaLimite = new Date(new Date().getTime() + 10 * 60000)

beforeEach(() => {
  autor = new Autor('Leo', 'Doe', 'UNLP', 'leo@doe.com', '1234')
  sesion = new SesionRegular('Sesion 1', fechaLimite, seleccionador);
  sesionP = new SesionPoster('Sesion 2', fechaLimite, seleccionador);
  articulo = new ArticuloRegular('Articulo Regular 1', 'archivo 1', 'resumen 1');
  articuloP = new ArticuloPoster('Articulo Poster 1', 'archivo 1', 'fuentes 1');
});

describe('Un autor', () => {
  it('debe poder modificar artículos durante el estado de recepción', () => {
    const articuloActualizado = new ArticuloRegular('Articulo Regular MOD', 'archivo MOD', 'resumen MOD');
    const articulPoActualizado = new ArticuloPoster('Articulo Poster MOD', 'archivo MOD', 'fuentes MOD');
    autor.asignarArticulo(articulo);
    autor.asignarArticulo(articuloP);
    autor.enviarArticulo(articulo, sesion);
    autor.enviarArticulo(articuloP, sesionP);
    autor.modificarArticulo(articulo, articuloActualizado, sesion);
    autor.modificarArticulo(articuloP, articulPoActualizado, sesionP);
    const articuloEsperado = {
      _titulo: 'Articulo Regular MOD',
      _archivo: 'archivo MOD',
      _resumen: 'resumen MOD'
    };
    const articuloPesperado = {
      _titulo: 'Articulo Poster MOD',
      _archivo: 'archivo MOD',
      _fuentes: 'fuentes MOD'
    };
    expect(sesion.articulos).toEqual(
      expect.arrayContaining([
        expect.objectContaining(articuloEsperado)
      ])
    );
    expect(sesionP.articulos).toEqual(
      expect.arrayContaining([
        expect.objectContaining(articuloPesperado)
      ])
    );
  });

  it('debe poder enviar un artículo a una sesión en estado de recepción', () => {
    autor.asignarArticulo(articulo);
    autor.enviarArticulo(articulo, sesion);
    expect(sesion.articulos).toContain(articulo);
  });

  it('no debe poder enviar un artículo a una sesión en estado distinto a recepción', () => {
    sesion.estado = new Bidding();
    autor.asignarArticulo(articulo);
    expect(() => autor.enviarArticulo(articulo, sesion)).toThrow();
  });

  it('no debe poder enviar un artículo a una sesión si no tiene asignado un artículo', () => {
    expect(() => autor.enviarArticulo(articulo, sesion)).toThrow();
  });

  it('no debe poder modificar un artículo a una sesión en estado distinto a recepción', () => {
    const articuloModificado = new ArticuloRegular('Articulo Modificado 1', 'archivo 1', 'resumen 1');
    sesion.estado = new Bidding();
    autor.asignarArticulo(articulo);
    expect(() => autor.modificarArticulo(articulo, articuloModificado, sesion)).toThrow();
  });

  it('no debe poder modificar un artículo inexistente', () => {
    const articuloModificado = new ArticuloRegular('Articulo Modificado 1', 'archivo 1', 'resumen 1');
    const articuloInexistente = new ArticuloRegular('Articulo inexistente', 'archivo 2', 'resumen 2');
    expect(() => autor.modificarArticulo(articuloInexistente, articuloModificado, sesion)).toThrow();
  });

});
