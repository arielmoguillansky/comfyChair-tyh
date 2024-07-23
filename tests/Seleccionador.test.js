const ArticuloRegular = require('../Articulo/ArticuloRegular');
const GestorDeRevisiones = require('../Conferencia/Sesion/GestionRevisiones');
const Revision = require('../Conferencia/Sesion/Revision');
const SeleccionadorCorteFijo = require('../Seleccionador/SeleccionadorCorteFijo');
const SeleccionadorMejores = require('../Seleccionador/SeleccionadorMejores');

let articulo1, articulo2, articulo3, articulo4, gestorDeRevisiones

beforeEach(() => {
  gestorDeRevisiones = new GestorDeRevisiones();
  articulo1 = new ArticuloRegular('Articulo Regular 1', 'archivo 1', 'resumen 1');
  articulo2 = new ArticuloRegular('Articulo Regular 2', 'archivo 2', 'resumen 2');
  articulo3 = new ArticuloRegular('Articulo Regular 3', 'archivo 3', 'resumen 3');
  articulo4 = new ArticuloRegular('Articulo Regular 4', 'archivo 4', 'resumen 4');
  revision1 = new Revision('Pesimo trabajo', -3);
  revision2 = new Revision('Mal trabajo', -2);
  revision3 = new Revision('Puede mejorar', -1);
  revision4 = new Revision('Correcto', 0);
  revision5 = new Revision('Buen trabajo', 1);
  revision6 = new Revision('Muy Buen trabajo', 2);
  revision7 = new Revision('Excelente trabajo', 3);
  gestorDeRevisiones.agregarRevision(articulo1, revision1)
  gestorDeRevisiones.agregarRevision(articulo1, revision2)
  gestorDeRevisiones.agregarRevision(articulo1, revision3)
  gestorDeRevisiones.agregarRevision(articulo2, revision5)
  gestorDeRevisiones.agregarRevision(articulo2, revision6)
  gestorDeRevisiones.agregarRevision(articulo2, revision7)
  gestorDeRevisiones.agregarRevision(articulo3, revision7)
  gestorDeRevisiones.agregarRevision(articulo3, revision7)
  gestorDeRevisiones.agregarRevision(articulo3, revision7)
  gestorDeRevisiones.agregarRevision(articulo4, revision1)
  gestorDeRevisiones.agregarRevision(articulo4, revision1)
  gestorDeRevisiones.agregarRevision(articulo4, revision1)
});

describe('Un seleccionador de corte fijo en 50%', () => {
  it('debe seleccionar la mitad de los articulos mejor puntuados', () => {
    const seleccionador = new SeleccionadorCorteFijo(50);
    const seleccionados = seleccionador.seleccionar([articulo1, articulo2, articulo3, articulo4]);
    expect(seleccionados).toHaveLength(2);
    expect(seleccionados).toEqual(expect.arrayContaining([articulo3, articulo2]));
  });
});

describe('Un seleccionador de mejores con puntaje mínimo', () => {
  it('debe seleccionar todos lo mejores artículos cuyos puntajes promedio superen el puntaje mínimo asignado', () => {
    const seleccionador = new SeleccionadorMejores(1);
    const seleccionados = seleccionador.seleccionar([articulo1, articulo2, articulo3, articulo4]);
    expect(seleccionados).toHaveLength(2);
    expect(seleccionados).toEqual(expect.arrayContaining([articulo3, articulo2]));
  });
});
