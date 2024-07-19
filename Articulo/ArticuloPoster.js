const Articulo = require('./Articulo.js');
class ArticuloPoster extends Articulo {
  constructor(titulo, archivo, fuentes) {
    super(titulo, archivo);
    this._fuentes = fuentes
  }

  get fuentes() {
    return this._fuentes;
  }

  set fuentes(fuentes) {
    this._fuentes = fuentes;
  }

  esArticuloPoster() {
    return true;
  }
}

module.exports = ArticuloPoster;