const ArticuloRegular = require('../Articulo/ArticuloRegular');
const Bidding = require('../Conferencia/Sesion/Estados/Bidding');
const EstadoRevision = require('../Conferencia/Sesion/Estados/Revision');
const Revision = require('../Conferencia/Sesion/Revision');
const SesionRegular = require('../Conferencia/Sesion/SesionRegular');
const SeleccionadorCorteFijo = require('../Seleccionador/SeleccionadorCorteFijo');
const Autor = require('../Usuario/Autor/Autor');
const NivelInteres = require('../Usuario/Revisor/NivelInteres');
const Revisor = require('../Usuario/Revisor/Revisor');

let autor, sesion, articulo
const seleccionador = new SeleccionadorCorteFijo(50)
const fechaLimite = new Date(new Date().getTime() + 10 * 60000)

beforeEach(() => {
  autor = new Autor('Leo', 'Doe', 'UNLP', 'leo@doe.com', '1234')
  revisor = new Revisor('Leo', 'Doe', 'UNLP', 'leo@doe.com', '1234')
  sesion = new SesionRegular('Sesion 1', fechaLimite, seleccionador);
  articulo = new ArticuloRegular('Articulo Regular 1', 'archivo 1', 'resumen 1');
  autor.asignarArticulo(articulo);
  autor.enviarArticulo(articulo, sesion);
  nivelInteres = new NivelInteres();
});

describe('Un revisor', () => {
  it('debe poder expresar interés en un articulo durante la etapa de bidding', () => {
    sesion.estado = new Bidding();
    revisor.expresarInteres(articulo, nivelInteres.interesado(), sesion);
    expect(articulo.intereses.get(revisor)).toContain(nivelInteres.interesado());
  });

  it('no debe poder expresar interés en un articulo durante otra etapa que no sea bidding', () => {
    sesion.estado = new EstadoRevision();
    expect(() => revisor.expresarInteres(articulo, nivelInteres.interesado(), sesion)).toThrow();
  });

  it('debe poder revisar artículo durante la etapa de revisión', () => {
    sesion.estado = new Revision();
    const revision = new Revision('Buen trabajo', 3);
    revisor.revisar(articulo, revision);
    expect(articulo.revisiones).toContain(revision);
  });
});
