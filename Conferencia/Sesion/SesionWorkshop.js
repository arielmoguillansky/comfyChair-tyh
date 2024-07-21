const Sesion = require('./Sesion');

class SesionWorkshop extends Sesion {
  agregarArticulo(articulo) {
    super.agregarArticulo(articulo);
  }

  esSesionWorkshop() {
    return true;
  }
}

module.exports = SesionWorkshop;
