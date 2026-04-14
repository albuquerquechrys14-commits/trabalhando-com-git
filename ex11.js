const readline = require ('readline-sync')


let armazenamento = 20

let baixado = readline.questionInt("Quantos GB foram baixados?: ")

let diferenca = armazenamento - baixado

console.log (`você tem ${baixado/armazenamento * 100}% do armazenamento ocupado.`)