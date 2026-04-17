// class Auto {
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


// const miAuto = new Auto("Ford", "Fiesta");


// miAuto.acelerar();
// console.log(miAuto.velocidad);




class CuentaBancaria {
    #saldo;
    #historial = new Array();

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }


    depositar(monto) {
        if (monto <= 0) {
            throw new Error("Monto inválido")  ;
        }
        this.#saldo += monto;
        this.#historial.push("deposita");
        console.log("monto actual " + monto);
    }


    retirar(monto) {
        if (monto > this.#saldo) {
            throw new Error("Fondos insuficientes");
        } else if(monto>100000){ 
            throw new Error("Limite alcanzado");
        } else{
        this.#saldo -= monto;
                this.#historial.push("retira");
        console.log("monto actual " + monto);
        }
    }


    gethistorial() {
        return this.#historial;
    }

    getSaldo() {
        return this.#saldo;
    }
}

const cuentafer = new CuentaBancaria("fernando", 14000 )
cuentafer.depositar(14000);
cuentafer.retirar(7000);
console.log(cuentafer.getSaldo())
console.log(cuentafer.saldoInicial);
console.log(cuentafer.gethistorial());















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