class vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca
        this.modelo =modelo
        this.año = año
    }
    informacion(){
        console.log(`marca: ${this.marca}, modelo: ${this.modelo}, Año: ${this.año}`)
    }
    encender(){
        console.log("el auto esta encendido")
    }
}
class auto extends vehiculo{
    constructor(marca, modelo, año, numPuertas) {
        super(marca, modelo, año, numPuertas)
        this.numPuertas=numPuertas
    }
    encender(){
        console.log("el auto esta encendido")
    }
    tocarBocina(){
        console.log("el auto esta tocando bocina")
    }
}
class motocicleta extends vehiculo {
    constructor(marca, modelo, año, tipoManillar) {
        super(marca, modelo, año)
        this.tipoManillar = tipoManillar
    }
    encerder(){
        console.log("la moto esta encendido")
    }
    hacerCaballito(){
        console.log("la moto esta haciendo caballito peligroso")
    }
}
let v1 = new vehiculo("Genérica", "Modelo A", 2020);
v1.informacion()
v1.encender()
let a1 = new auto("Toyota", "Corolla", 2021, 4);
a1.informacion()
a1.encender()
a1.tocarBocina()
let m1 = new motocicleta("Yamaha", "MT-07", 2022);
m1.informacion()
m1.encerder()
m1.hacerCaballito()
