const ArticuloRegular = require('../Articulo/ArticuloRegular');
const SesionRegular = require('../Conferencia/Sesion/SesionRegular');
const SeleccionadorCorteFijo = require('../Seleccionador/SeleccionadorCorteFijo');
const Autor = require('../Usuario/Autor/Autor');

let autor, sesion, articulo
const seleccionador = new SeleccionadorCorteFijo(50)
const fechaLimite = new Date(new Date().getTime() + 10 * 60000)

beforeEach(() => {
  autor = new Autor('Leo', 'Doe', 'UNLP', 'leo@doe.com', '1234')
  sesion = new SesionRegular('Sesion 1', fechaLimite, seleccionador);
  articulo = new ArticuloRegular('Articulo Regular 1', 'archivo 1', 'resumen 1');
});

describe('Un autor', () => {
  it('debe poder modificar un artículo durante el estado de recepción', () => {
    const articuloActualizado = new ArticuloRegular('Articulo MOD', 'archivo MOD', 'resumen MOD');
    autor.asignarArticulo(articulo);
    autor.enviarArticulo(articulo, sesion);
    autor.modificarArticulo(articulo, articuloActualizado, sesion);
    const articuloEsperado = {
      _titulo: 'Articulo MOD',
      _archivo: 'archivo MOD',
      _resumen: 'resumen MOD'
    };
    expect(sesion.articulos).toEqual(
      expect.arrayContaining([
        expect.objectContaining(articuloEsperado)
      ])
    );
  });

  it('debe poder enviar un artículo a una sesión es estado de recepción', () => {
    autor.asignarArticulo(articulo);
    autor.enviarArticulo(articulo, sesion);
    expect(sesion.articulos).toContain(articulo);
  });

});
