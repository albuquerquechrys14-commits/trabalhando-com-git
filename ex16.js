const readline = require ('readline-sync')

console.log ("===========USO DIARIO DO CELULAR=========")
let limiteDiario = 4

let horas = readline.questionInt ("Quantas horas você usou o celular hoje?: ")
let percentual = (horas / limiteDiario) * 100
console.log ("")
console.log ("===========RESULTADO DO DIA===========")

if (horas <= limiteDiario) {
    console.log (`Você está dentro do limite.`)
} else {
    console.log (`Você ultrapassou ${percentual.toFixed(2)}% do limite.`)
}