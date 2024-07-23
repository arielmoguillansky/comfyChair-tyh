const Bidding = require('../Conferencia/Sesion/Estados/Bidding');
const Recepcion = require('../Conferencia/Sesion/Estados/Recepcion');
const Revision = require('../Conferencia/Sesion/Estados/Revision');
const SesionRegular = require('../Conferencia/Sesion/SesionRegular');
const SeleccionadorCorteFijo = require('../Seleccionador/SeleccionadorCorteFijo');

let autor, sesion, articulo
const seleccionador = new SeleccionadorCorteFijo(50)
const fechaLimite = new Date(new Date().getTime() + 10 * 60000)

beforeEach(() => {
  sesion = new SesionRegular('Sesion 1', fechaLimite, seleccionador);
});

describe('Un estado', () => {
  it('debe pasar de Recepción a estado Bidding', () => {
    const estadoRecepcion = new Recepcion();
    estadoRecepcion.cambioEstado(sesion)
    expect(sesion.estado.esBidding()).toBeTruthy();
  });

  it('debe pasar de Bidding a estado Revisión', () => {
    const estadoRecepcion = new Bidding();
    estadoRecepcion.cambioEstado(sesion)
    expect(sesion.estado.esRevision()).toBeTruthy();
  });

  it('debe pasar de Revision a estado Selección', () => {
    const estadoRecepcion = new Revision();
    estadoRecepcion.cambioEstado(sesion)
    expect(sesion.estado.esSeleccion()).toBeTruthy();
  });
});
