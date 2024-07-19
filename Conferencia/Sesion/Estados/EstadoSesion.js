class EstadoSesion {
  cambioEstado(sesion) {
    throw new Error('El método cambioEstado no está implementado');
  }

  esRecepcion() {
    return false;
  }

  esBidding() {
    return false;
  }

  esRevision() {
    return false;
  }

  esSeleccion() {
    return false;
  }
}

module.exports = EstadoSesion;