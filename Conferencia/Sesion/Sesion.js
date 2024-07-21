const Recepcion = require('./Estados/Recepcion.js');
class Sesion {
  constructor(tema, fechaLimite, seleccionador) {
    if (!tema) {
      throw new Error('El tema es requerido');
    }
    if (!fechaLimite) {
      throw new Error('La fecha limite es requerida');
    }
    if (!seleccionador) {
      throw new Error('El seleccionador es requerido');
    }
    this._tema = tema;
    this._articulos = [];
    this._estado = new Recepcion();
    this._fechaLimite = fechaLimite;
    this._seleccionador = seleccionador;
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

  esSesionRegular() {
    return false;
  }

  esSesionPoster() {
    return false;
  }

  esSesionWorkShop() {
    return false;
  }

  agregarArticulo(articulo) {
    this._articulos.push(articulo);
  }

  verificarFechaLimiteDeRecepcion() {
    if (new Date() > this._fechaLimite) {
      this._estado.cambioEstado(this);
    }
  }

  verificarRevisiones() {
    const articuloSinRevision = this._articulos.find(articulo => articulo.revisiones.length < 3);
    if (this._estado.esRevision() && !articuloSinRevision) {
      this._estado.cambioEstado(this);
    }
  }

  seleccionarArticulos() {
    return this._seleccionador.seleccionar(this._articulos);
  }

  cambiarMetodoSeleccion(metodo) {
    this._seleccionador = metodo
  }
}

module.exports = Sesion;