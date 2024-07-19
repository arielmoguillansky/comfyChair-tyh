const Recepcion = require('./Estados/Recepcion.js');
class Sesion {
  constructor(tema, fechaLimite) {
    this._tema = tema;
    this._articulos = [];
    this._estado = new Recepcion();
    this._fechaLimite = fechaLimite;
  }

  get fechaLimite() {
    return this._fechaLimite;
  }

  get estado() {
    return this._estado;
  }

  set estado(estado) {
    this._estado = estado;
  }

  get tema() {
    return this._tema;
  }

  set tema(tema) {
    this._tema = tema;
  }

  get articulos() {
    return this._articulos;
  }

  recibirArticulo(articulo) {
    this.verificarFechaLimite();
    if (this._estado.esRecepcion()) {
      if (!articulo.existeAutor()) {
        throw new Error('El articulo debe tener al menos un autor');
      }
      if (!articulo.existeTitulo()) {
        throw new Error('El articulo debe tener un titulo');
      }
      if (articulo.esArticuloRegular() && !articulo.resumenValido()) {
        throw new Error('El resumen del articulo debe tener menos de 300 caracteres');
      }
      this._articulos.push(articulo);
    } else {
      throw new Error('No se pueden agregar articulos en este estado');
    }
  }

  verificarFechaLimite() {
    if (new Date() > this._fechaLimite) {
      this._estado.cambioEstado(this);
    }
  }
}

module.exports = Sesion;