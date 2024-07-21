const Sesion = require('./Sesion');

class SesionPoster extends Sesion {
  agregarArticulo(articulo) {
    if (!articulo.esArticuloPoster()) {
      throw new Error('Solo se permiten posters en esta sesión.');
    }
    super.agregarArticulo(articulo);
  }

  esSesionPoster() {
    return true;
  }
}

module.exports = SesionPoster;
