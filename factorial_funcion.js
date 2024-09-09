function calcularFactorial(numero){
    let numero = 5
    let factorial = 1
    for (let i = 1; i <= numero; i++) {
        factorial *=i;      
    }
    console.log(`el factorial de ${numero} es: ${factorial}`)
}