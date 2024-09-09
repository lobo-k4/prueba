class persona {
    
    constructor(nombre, edad ) {
    this.nombre = nombre
    this.edad = edad    
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre}`)
    }
    caminar(){
        console.log("hola puedo caminar")
    }
}
let persona1 = new persona("leandro", 21) 
persona1.saludar()

let persona2 = new persona("dennis", 21)
persona2.saludar()
