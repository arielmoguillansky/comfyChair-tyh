const Articulo = require('./Articulo.js');
class ArticuloPoster extends Articulo {
  constructor(titulo, archivo, fuentes) {
    super(titulo, archivo);
    this._fuentes = fuentes
  }

  esArticuloPoster() {
    return true;
  }
}

module.exports = ArticuloPoster;