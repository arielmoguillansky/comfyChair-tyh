const EstadoSesion = require('./EstadoSesion');
const Revision = require('./Revision');

class Bidding extends EstadoSesion {
  constructor() {
    super();
  }

  cambioEstado(sesion) {
    sesion.estado = new Revision()
  }

  esBidding() {
    return true;
  }
}

module.exports = Bidding;