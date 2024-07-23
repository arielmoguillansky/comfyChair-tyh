const ArticuloRegular = require('../Articulo/ArticuloRegular');
const GestorDeRevisiones = require('../Conferencia/Sesion/GestionRevisiones');
const Revision = require('../Conferencia/Sesion/Revision');

let gestorDeRevisiones

beforeEach(() => {
  gestorDeRevisiones = new GestorDeRevisiones();
  articulo = new ArticuloRegular('Articulo Regular', 'archivo', 'resumen');
  revision1 = new Revision('Pesimo trabajo', -3);
  revision2 = new Revision('Mal trabajo', -2);
  revision3 = new Revision('Puede mejorar', -1);
});

describe('Un gestor de revisiones', () => {
  it('debe agregar una revisión a un artículo', () => {
    gestorDeRevisiones.agregarRevision(articulo, revision1)
    expect(articulo.revisiones).toContain(revision1);
  });

  it('debe agregar un máximo de 3 revisiones a un artículo', () => {
    gestorDeRevisiones.agregarRevision(articulo, revision1)
    gestorDeRevisiones.agregarRevision(articulo, revision2)
    gestorDeRevisiones.agregarRevision(articulo, revision3)
    expect(() =>
      gestorDeRevisiones.agregarRevision(articulo, revision4)
    ).toThrow();
  });

  it('debe poder calcular el puntaje promedio de un artículo', () => {
    gestorDeRevisiones.agregarRevision(articulo, revision1)
    gestorDeRevisiones.agregarRevision(articulo, revision2)
    gestorDeRevisiones.agregarRevision(articulo, revision3)
    expect(articulo.puntajePromedio).toEqual(-2);
  });
});
