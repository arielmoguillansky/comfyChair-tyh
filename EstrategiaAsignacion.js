const NivelInteres = require('./NivelInteres');
const nivelInteres = new NivelInteres();

class AsignacionInteresPrimero {
  asignar(sesion, revisores) {
    let asignaciones = new Map();
    const articulos = sesion.articulos;

    if (revisores.length < 3) {
      throw new Error('Se necesitan al menos 3 revisores para asignar articulos');
    }

    revisores.forEach(revisor => {
      asignaciones.set(revisor, []);
    });

    // Asignar revisores a artículos
    articulos.forEach(articulo => {
      let interesados = [];
      let quizas = [];
      let noInteresados = [];

      if (!articulo.intereses.size) {
        throw new Error(`El articulo ${articulo.titulo} debe tener al menos un interes`);
      }

      articulo.intereses.forEach((interes, revisor) => {
        switch (interes) {
          case nivelInteres.interesado():
            interesados.push(revisor);
            break;
          case nivelInteres.quizas():
            quizas.push(revisor);
            break;
          case nivelInteres.noInteresado():
            noInteresados.push(revisor);
            break;
          default:
            noInteresados.push(revisor);
            break;
        }
      });
      let asignados = this.asignarRevisores(articulo, interesados, quizas, noInteresados, asignaciones);

      asignaciones.set(articulo, asignados);
    });

    sesion.estado.cambioEstado(sesion)
    return asignaciones;
  }

  asignarRevisores(articulo, interesados, quizas, noInteresados, asignaciones) {
    let asignados = [];
    const maxRevisores = 3;
    // Asignar primero a los interesados
    asignados.push(...this.seleccionarRevisores(articulo, interesados, asignaciones, maxRevisores - asignados.length));

    // Asignar luego a los quizas
    if (asignados.length < maxRevisores) {
      asignados.push(...this.seleccionarRevisores(articulo, quizas, asignaciones, maxRevisores - asignados.length));
    }

    // // Asignar finalmente a los no interesados
    if (asignados.length < maxRevisores) {
      asignados.push(...this.seleccionarRevisores(articulo, noInteresados, asignaciones, maxRevisores - asignados.length));
    }

    return asignados;
  }

  seleccionarRevisores(articulo, candidatos, asignaciones, maxSeleccion) {
    let seleccionados = [];

    candidatos.forEach(revisor => {
      if (asignaciones.get(revisor).length < 3 && seleccionados.length < maxSeleccion) {
        seleccionados.push(revisor);
        asignaciones.get(revisor).push(articulo);
      }
    });
    return seleccionados;
  }
}

module.exports = AsignacionInteresPrimero;