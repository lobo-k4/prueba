var nombre // Declaracion de la variable
nombre = "Leandro Dennis" // asignacion de un valor a la variable 

var apellido = "Montaño Vargas"
var edad = 21
var hoy = new Date()
var docente = true
var persona =[nombre, apellido, edad, hoy]


//console.log(persona)

/*if (docente == true) {
    console.log("hola docente")
} else {
    console.log("hola estudiante")
}*/

switch (docente) {
    case true:
        console.log("hola docente")
        break;
        
        case false:
            console.log("hola estudiante")

    default:
        console.log("hola aun no se que rol tienes")
        break;
} 