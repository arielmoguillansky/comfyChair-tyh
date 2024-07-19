class Usuario {
  constructor(nombre, apellido, afiliacion, email, contraseña) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._afiliacion = afiliacion;
    this._email = email;
    this._contraseña = contraseña;
  }

  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get afiliacion() {
    return this._afiliacion;
  }

  get email() {
    return this._email;
  }

}

module.exports = Usuario;