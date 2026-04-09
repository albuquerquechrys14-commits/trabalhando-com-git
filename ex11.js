const readline = require ('readline-sync')


let armazenamento = 20

let Baixado = readline.questionInt("Quantos GB foram baixados?: ")

let diferenca = armazenamento - Baixado

console.log (`você tem ${Baixado/armazenamento * 100}% do armazenamento ocupado.`)