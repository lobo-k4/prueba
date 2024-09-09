class persona {
    constructor(nombre, edad) {
        this.nombre=persona
        this.edad=edad
    }
    saludar(){
        console.log("hola soy una persona")
    }
}

class docente extends persona {
    constructor(nombre, edad, paciencia) {
        super(nombre=persona)
        this.paciencia =paciencia
    }
    enseñar(){
        console.log("estoy enseñando")
    }
    saludar(){
        console.log("hola estudiantes")
    }
}
class estudiante extends persona{
    constructor(nombre,edad, flojera) {
        super(nombre, edad)
        this.flojera = flojera
    }

    investigar(){
        console.log("estoy invrestigando")
    }
}

let p1 = new persona("juan", 20)
p1.saludar()

let d1=new docente("jordy", 29, true)
d1.saludar()

let es = new estudientes ("estudiante" , 32, true)
