const Sesion = require('../Conferencia/Sesion/Sesion');
const Revisor = require('../Usuario/Revisor/Revisor');

let revisor, sesion, conferencia

describe('Una sesión', () => {
  it('debe tener por defecto el estado Recepcion', () => {
    sesion = new Sesion('Sesion 1', new Date(new Date().getTime() + 10 * 60000));
    const estado = sesion.estado;
    expect(estado.esRecepcion()).toBeTruthy();
  });

  it('debe poder actualizar el estado a bidding si se supera la fecha limite de recepcion', () => {
    sesion = new Sesion('Sesion 1', new Date(new Date().getTime() - 10 * 60000));
    sesion.verificarFechaLimiteDeRecepcion();
    const estado = sesion.estado;
    expect(estado.esBidding()).toBeTruthy();
  });

});
