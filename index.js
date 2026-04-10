class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }


    saludar() {
        console.log("Hola, soy " + this.nombre);
    }
}


const persona1 = new Persona("Ana", 25);
persona1.saludar();
