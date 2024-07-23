const Articulo = require('./Articulo.js');
class ArticuloRegular extends Articulo {
  constructor(titulo, archivo, resumen) {
    super(titulo, archivo);
    if (resumen.length > 300) {
      throw new Error('El resumen del articulo debe tener menos de 300 caracteres');
    }
    this._resumen = resumen
  }

  get resumen() {
    return this._resumen;
  }

  set resumen(resumen) {
    this._resumen = resumen;
  }

  esArticuloRegular() {
    return true;
  }
}

module.exports = ArticuloRegular;