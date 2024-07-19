const EstadoSesion = require('./EstadoSesion');
const Seleccion = require('./Seleccion');

class Revision extends EstadoSesion {
  constructor() {
    super();
  }

  cambioEstado(sesion) {
    sesion.estado(new Seleccion())
  }

  esRevision() {
    return true;
  }
}

module.exports = Revision;