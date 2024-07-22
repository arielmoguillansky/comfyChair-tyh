const Usuario = require('../Usuario');

class Autor extends Usuario {
  constructor(nombre, apellido, afiliacion, email, contraseña) {
    super(nombre, apellido, afiliacion, email, contraseña);
  }

  asignarArticulo(articulo) {
    articulo.agregarAutor(this);
  }

  enviarArticulo(articulo, sesion) {
    sesion.verificarFechaLimiteDeRecepcion();
    if (sesion.estado.esRecepcion()) {
      if (!articulo.existeAutor()) {
        throw new Error('El articulo debe tener al menos un autor');
      }
      if (!articulo.existeTitulo()) {
        throw new Error('El articulo debe tener un titulo');
      }
      if (articulo.esArticuloRegular() && !articulo.resumenValido()) {
        throw new Error('El resumen del articulo debe tener menos de 300 caracteres');
      }
      sesion.agregarArticulo(articulo);
    } else {
      throw new Error('No se pueden agregar articulos en este estado');
    }
  }


  modificarArticulo(articulo, articuloActualizado, sesion) {
    sesion.verificarFechaLimiteDeRecepcion();
    if (sesion._estado.esRecepcion()) {
      const articuloEncontrado = sesion._articulos.find((articuloExistente, index) => {
        if (articuloExistente.titulo === articulo.titulo) {
          sesion._articulos[index].titulo = articuloActualizado.titulo;
          sesion._articulos[index].archivo = articuloActualizado.archivo;
          if (sesion._articulos[index].esArticuloRegular()) {
            sesion._articulos[index].resumen = articuloActualizado.resumen;
          }
          if (sesion._articulos[index].esArticuloPoster()) {
            sesion._articulos[index].fuentes = articuloActualizado.fuentes;
          }
          return articuloExistente;
        }
      });

      if (!articuloEncontrado) {
        throw new Error('El articulo no existe');
      }
    } else {
      throw new Error('No se pueden modificar articulos en este estado');
    }
  }

  esAutor() {
    return true;
  }
}

module.exports = Autor;