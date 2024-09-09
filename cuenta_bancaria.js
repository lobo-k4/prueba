class cuenta_bancaria {
    constructor(propietario, saldo) {
        this.propietario = propietario
        this.saldo = saldo
    }
    retirardinero(cantidad){
        if (cantidad > this.saldo) {
            console.log("fondos insuficientes.")
            return;
        }
        this.saldo-=cantidad;
        console.log(`retiraste ${cantidad}, nuevo saldo: $${this.saldo}`)
    }
    depositardinero(cantidad){
        if (cantidad <= 0) {
            console.log("la cantidad a depociatar debe ser mayor a 0")
            return;
            this.saldo+=cantidad;
            console.log(`depocitaste $${cantidad}, nuevo saldo: $${this.saldo}`)
    }
    consultarsaldo();{
        console.log(`el saldo actual de ${propietario} es: $${this.saldo}`)
        return this.saldo

    }
  }    
}