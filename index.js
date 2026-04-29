// class Autos {
//     constructor(marca, modelo) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.velocidad = 0;
//     }


//     acelerar() {
//         this.velocidad += 10;
//     }


//     frenar() {
//         this.velocidad -= 10;
//     }
// }


// const miAutos = new Autos("Ford", "Fiesta");


// miAutos.acelerar();
// console.log(miAutos.velocidad);




// class CuentaBancaria {
//     #saldo;
//     #historial = new Array();

//     constructor(titular, saldoInicial) {
//         this.titular = titular;
//         this.#saldo = saldoInicial;
//     }


//     depositar(monto) {
//         if (monto <= 0) {
//             throw new Error("Monto inválido")  ;
//         }
//         this.#saldo += monto;
//         this.#historial.push("deposita");
//         console.log("monto actual " + monto);
//     }


//     retirar(monto) {
//         if (monto > this.#saldo) {
//             throw new Error("Fondos insuficientes");
//         } else if(monto>100000){ 
//             throw new Error("Limite alcanzado");
//         } else{
//         this.#saldo -= monto;
//                 this.#historial.push("retira");
//         console.log("monto actual " + monto);
//         }
//     }


//     gethistorial() {
//         return this.#historial;
//     }

//     getSaldo() {
//         return this.#saldo;
//     }
// }

// const cuentafer = new CuentaBancaria("fernando", 14000 )
// cuentafer.depositar(14000);
// cuentafer.retirar(7000);
// console.log(cuentafer.getSaldo())
// console.log(cuentafer.saldoInicial);
// console.log(cuentafer.gethistorial());















// class usuario{

// #contraseña;

//     constructor (nombre, clave){
//         this.nombre = nombre
//         this.#contraseña = clave
//     }

//     VerTamaño(pass){
//     if (pass.length<=8) {
//         throw new Error("La contraseña es muy corta, la cantidad minima de caracteres es 8");
//     }
//     this.#contraseña=pass

//     }


//     validarPass (pass) {

//     if (pass == this.#contraseña) {
//         console.log("Contraseña correcta, bienvenido")
//     } else {
//         throw new Error("Contraseña incorrecta");
//     }
//     }

//     contranueva(nueva) {

//     if (nueva == this.#contraseña){
//     this.#contraseña = ("Nueva contraseña"); 
//     } else {
//     throw new Error("Contraseña incorrecta");
//     }

//     }  
//     getUsuario(){
//         return this.#contraseña;
//     }
// }

// const miUsuario= new usuario(
//     "Juan", "Holaquetal"
// )

// miUsuario.VerTamaño("Holaquetal")
// console.log(miUsuario.getUsuario())





// class Producto{
// #precio

//     constructor (nombre, precio){
//         this.nombre = nombre
//         this.#precio = precio
//     }
//     setPrecio(valor){
//         if (valor>0) {
//             this.#precio= valor
//         }else{
//     throw new Error("valor incorrecto");
//         }

//     }

//     getPrecio(){
//         return this.#precio
//     }
// }

// const NuevoProducto=new Producto("Papitas", 2000)

// NuevoProducto.setPrecio(2500)

// console.log(NuevoProducto.getPrecio())



// class Animal {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }

// class gato extends Animal{
//     constructor(nombre, edad, raza) {
//         super (nombre, edad),
//         this.raza = raza;
//     }
//             hacerSonido() {
//         console.log("Miau");
//     }
    

// }

// class perro extends Animal{
//     constructor(nombre, edad, raza) {
//         super (nombre, edad),
//         this.raza = raza;
//     }
//     hacerSonido() {
//         console.log("Guau guau");
//     }

// }

// const MiGato = new gato("Mushu", 2, "Atigrado")
// const MiPerro = new perro("Firu", 3, "labrador")

// console.log(MiGato.nombre);
// console.log(MiPerro.nombre);



// class Vehiculo {
//     constructor(marca, modelo){
//     this.modelo = modelo;
//     this.marca = marca;
//     }
//     mostrarInfo(marca, modelo){
//     console.log(this.marca, this.modelo);
//     }

// }

// class Auto extends Vehiculo{
//     constructor(marca, modelo){
//         super (marca, modelo);
//     }

//     mostrarInfo(){
//         return super.mostrarInfo();
//     }
// }

// class Moto extends Vehiculo{
//     constructor(marca, modelo){
//         super (marca, modelo);
//     }

//     mostrarInfo(){
//         return super.mostrarInfo();
//     }
// }




// const miAuto = new Auto ("Ford", "Falcon")
// const miMoto = new Moto ("tornado", 150)

// miAuto.mostrarInfo();
// miMoto.mostrarInfo();










// class Empleado {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }


//     calcularSueldo() {
//         throw new Error("Debe implementarse en subclases");
//     }
// }


// class EmpleadoFullTime extends Empleado {
//     constructor(nombre, salario) {
//         super(nombre);
//         this.salario = salario;
//     }


//     calcularSueldo() {
//         return this.salario;
//     }
// }


// class EmpleadoPorHora extends Empleado {
//     constructor(nombre, horas, valorHora) {
//         super(nombre);
//         this.horas = horas;
//         this.valorHora = valorHora;
//     }


//     calcularSueldo() {
//         return this.horas * this.valorHora;
//     }
// }

// const miEmpleado = new EmpleadoFullTime("javier", 400000)
// const miEmpleadoHora = new EmpleadoPorHora ("dario",48,4500)

// console.log(miEmpleado.calcularSueldo());
// console.log(miEmpleadoHora.calcularSueldo());




// class Usuario {
// constructor(nombre, email) {
//     this.nombre = nombre;
//     this.email = email;
// }

// iniciarSesion() {
//     console.log(" Usuario:" + this.nombre );
// }

// verPerfil() {
//     console.log("Usuario " + this.nombre + " - Email: " + this.email);
// }
// }

// class Admin extends Usuario {
// constructor(nombre, email) {
//     super(nombre, email);
// }

// eliminarUsuario(usuario) {
//     console.log(this.nombre + " elimino a " + usuario.nombre);
// }
// }

// class Invitado extends Usuario {
// constructor(nombre) {
//     super(nombre, "sin email");
// }

// verContenido() {
//     console.log(this.nombre + " ingreso como invitado");
// }
// }

// const user1 = new Usuario("Fabrizio", "gomezfabrizio6@gmail.com");
// const admin1 = new Admin("Carlos", "admin@gmail.com");
// const invitado1 = new Invitado("Visitante");

// user1.iniciarSesion();
// admin1.eliminarUsuario(user1);
// invitado1.verContenido();




// class Persona {
// constructor(nombre) {
//     this.nombre = nombre;
// }

// presentarse() {
//     console.log("Hola, soy " + this.nombre);
// }
// }

// class Alumno extends Persona {
//     constructor(nombre) {
//     super(nombre);
// }

//     presentarse() {
//     console.log("Hola, soy el alumno " + this.nombre);
// }

//     estudiar() {
//     console.log(this.nombre + " estudia");
// }
// }

// class Profesor extends Persona {
//     constructor (nombre) {
//         super(nombre);
//     }

//     presentarse() {
//     console.log("Hola, soy el profesor " + this.nombre);
// }

//     enseñar() {
//     console.log(this.nombre + " enseña x materia");
// }
// }

// const alumno1 = new Alumno("Fabrizio");
// const profesor1 = new Profesor("Gamal");

// alumno1.presentarse();
// alumno1.estudiar();

// profesor1.presentarse();
// profesor1.enseñar();





// class Producto {
//     constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
// }

//     calcularPrecioFinal() {
//     return this.precio;
// }
// }

// class ProductoFisico extends Producto {
//     constructor(nombre, precio, costoEnvio) {
//     super(nombre, precio);
//     this.costoEnvio = costoEnvio;
// }
// }

// class ProductoDigital extends Producto {
//     constructor(nombre, precio, descuento) {
//     super(nombre, precio);
//     this.descuento = descuento;
// }

//     calcularPrecioFinal() {
//     if (this.descuento) {
//      return this.precio - (this.precio * this.descuento / 100);
//     }
//     return this.precio;
// }
// }


// const producto1 = new ProductoFisico("Zapatillas", 10000, 500000);
// const producto2 = new ProductoDigital("Juego en Steam", 8000, 50);

// console.log("Producto físico:", producto1.calcularPrecioFinal());
// console.log("Producto digital:", producto2.calcularPrecioFinal());


class Notificacion {
    enviar(mensaje) {
    console.log("Enviando notificación: " + mensaje);
    }
}

class Email extends Notificacion {
    enviar(mensaje) {
    console.log("Nuevo Mail: " + mensaje);
    }
}

class SMS extends Notificacion {
    enviar(mensaje) {
    console.log("Tiene un Mensaje: " + mensaje);
    }
}

class Push extends Notificacion {
    enviar(mensaje) {
    console.log("Alerta: " + mensaje);
    }
}

const noti = [new Email(), new SMS(), new Push()];

noti.forEach(a => a.enviar("Hola "));




class Figura {
    calcularArea() {
    return 0;
    }
}

class Circulo extends Figura {
    constructor(radio) {
    super();
    this.radio = radio;
    }

    calcularArea() {
    return Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Figura {
    constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
    }

    calcularArea() {
    return this.base * this.altura;
}
}

const radio = 6;
const base = 8;
const altura = 9;

const figuras = [new Circulo(radio),new Rectangulo(base, altura)];

figuras.forEach(a => {console.log("Area:", a.calcularArea());});