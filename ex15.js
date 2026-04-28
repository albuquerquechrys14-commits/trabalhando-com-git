const readline = require ('readline-sync')

console.log ("===========CONSUMO DE CALORIAS=========")

let limiteDiario = 2000

let calorias = readline.questionInt ("Quantas calorias foram consumidas no dia?: ")
let percentual = (calorias / limiteDiario) * 100
console.log ("")
console.log ("===========RESULTADO DO DIA===========")

if (calorias <= limiteDiario) {
    console.log (`Você está dentro do limite.`)
} else {
    console.log (`Você ultrapassou ${percentual.toFixed(2)}% do limite.`)
}