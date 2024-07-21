const Seleccionador = require('./Seleccionador');

class SeleccionadorMejores extends Seleccionador {
  constructor(puntajeMinimo) {
    super();
    this.puntajeMinimo = puntajeMinimo;
  }

  seleccionar(articulos) {
    return articulos.filter(articulo => articulo.puntajePromedio > this.puntajeMinimo);
  }
}

module.exports = SeleccionadorMejores;
