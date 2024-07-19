const Usuario = require('./Usuario');

class Revisor extends Usuario {
  constructor(nombre, apellido, afiliacion, email, contraseña) {
    super(nombre, apellido, afiliacion, email, contraseña);
  }

  esRevisor() {
    return true;
  }

  expresarInteres(articulo, interes, sesion) {
    if (!sesion.estado.esBidding()) {
      throw new Error('No se puede expresar interes en este estado');
    }
    articulo.agregarInteres(this, interes);
  }
}

module.exports = Revisor;