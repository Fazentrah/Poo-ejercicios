class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }


    acelerar() {
        this.velocidad += 10;
    }


    frenar() {
        this.velocidad -= 10;
    }
}


const miAuto = new Auto("Ford", "Fiesta");


miAuto.acelerar();
console.log(miAuto.velocidad);