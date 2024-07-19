const Articulo = require('./Articulo.js');
class ArticuloRegular extends Articulo {
  constructor(titulo, archivo, resumen) {
    super(titulo, archivo);
    this._resumen = resumen
  }

  esArticuloRegular() {
    return true;
  }

  resumenValido() {
    return this._resumen.length < 300;
  }
}

module.exports = ArticuloRegular;