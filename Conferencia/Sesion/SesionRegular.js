const Sesion = require('./Sesion');

class SesionRegular extends Sesion {
  agregarArticulo(articulo) {
    if (!articulo.esArticuloRegular()) {
      throw new Error('Solo se permiten artículos regulares en esta sesión.');
    }
    super.agregarArticulo(articulo);
  }

  esSesionRegular() {
    return true;
  }
}

module.exports = SesionRegular;
