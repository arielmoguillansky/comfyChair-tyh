const Usuario = require('../Usuario');

class Organizador extends Usuario {
  constructor(nombre, apellido, afiliacion, email, contraseña) {
    super(nombre, apellido, afiliacion, email, contraseña);
  }

  esOrganizador() {
    return true;
  }
}

module.exports = Organizador;