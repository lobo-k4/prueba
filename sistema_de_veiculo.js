class veiculo {
    constructor(marca, modelo, año) {
        this.marca = marca
        this.modelo =modelo
        this.año = año
    }

    informacion(){
        console.log("auto Nissan Versa 2023 sedan es confieble y comodo")
    }
    ensender(){
        console.log("el auto esta ensendido")
    }
}

class auto extends veiculo{
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

class motocibleta extends veiculo {
    constructor(marca, modelo, año, numPuertas, tipoManillar) {
        super(marca, modelo, año, numPuertas, tipoManillar)
        this.tipoManillar = tipoManillar
    }
    encerder(){
        console.log("el motocibleta esta encendido")
    }
    hacerCaballito(){
        console.log("la motocicleta esta haciendo caballito pelibroso")
    }
}

let v1 = new veiculo("nissan", 2023)
v1.informacion()
let a1 = new auto("nissan", 2023)
a1.tocarBocina()
a1.encender()
let m1 = new motocicleta("kawazaki ninja", "364", 2021)
m1.hacerCaballito()
m1.encender()
