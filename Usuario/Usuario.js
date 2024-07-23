class Usuario {
  constructor(nombre, apellido, afiliacion, email, contraseña) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._afiliacion = afiliacion;
    this._email = email;
    this._contraseña = contraseña;
  }
}

module.exports = Usuario;