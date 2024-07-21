const Seleccionador = require('./Seleccionador');

class SeleccionadorCorteFijo extends Seleccionador {
  constructor(porcentajeAceptacion) {
    super();
    if (!porcentajeAceptacion) {
      throw new Error('El porcentaje de aceptación es requerido');
    }
    this.porcentajeAceptacion = porcentajeAceptacion;
  }

  seleccionar(articulos) {
    // Ordenar artículos por puntaje en orden descendente
    articulos.sort((a, b) => b.puntajePromedio - a.puntajePromedio);

    const cantidadAceptar = Math.ceil((this.porcentajeAceptacion / 100) * articulos.length);
    return articulos.slice(0, cantidadAceptar);
  }
}

module.exports = SeleccionadorCorteFijo;
