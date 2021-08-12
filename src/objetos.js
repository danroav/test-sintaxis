class User {
  constructor(name, password, email) {
    var clave = "frasePrivada"; //privado al constructor
    this.name = name; //publica
    this._password = password; //publica
    this.password_ = "321"; //publica
    this.email = email; //publica
    var otroPrivado = function () {
      console.log("otroPrivado");
    };
    var privado = function () {
      console.log("realmente esto es privado");
    };
    this.privado = function () {
      console.log("Acceso Publico a un metodo privado");
      privado();
    };

    this.desdeDentro = function () {
      console.log("Accediendo a variable publica");
      console.log(" variable publica name:" + this.name);
      console.log("Accediendo a variable privada");
    };
  }

  desdeAfuera() {
    console.log("Accediendo a variable publica");
    console.log(" variable publica name:" + this.name);
    console.log("Accediendo a variable privada");
  }
}

var daniel = new User("daniel", "d1no", "a.b@c");
daniel.desdeDentro();
console.log(daniel);
daniel.desdeAfuera();
class UsuarioRegistrado extends User {
  constructor(name, password, email) {
    super(name, password, email);
    this._fechaRegistro = 123;
  }

  desdeAfuera(otro) {
    console.log(this._fechaRegistro + otro);
  }
}

var diego = new UsuarioRegistrado("diego", "dtr", "b.c.f");
diego.desdeAfuera("mensaje");

export { User, diego, daniel };
