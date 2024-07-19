const EstadoSesion = require('./EstadoSesion');
const Bidding = require('./Bidding');

class Recepcion extends EstadoSesion {

  cambioEstado(sesion) {
    sesion.estado = new Bidding()
  }

  esRecepcion() {
    return true;
  }
}

module.exports = Recepcion;