const EstadoSesion = require('./EstadoSesion');

class Seleccion extends EstadoSesion {
  constructor() {
    super();
  }

  esSeleccion() {
    return true;
  }
}

module.exports = Seleccion;