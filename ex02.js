//Importando a Biblioteca
const readline = require ('readline-sync')

let nome = readline.question ("Informe o seu nome:")
let nomeDoPrato = readline.question ("Informe o nome do prato: ")
let valorDoPrato = readline.questionFloat('Informe o valor do prato: ')



console.log ("==============RESUMO DO PEDIDO==============")

console.log (`O nome do Cliente é: ${nome}`)
console.log (`o nome do prato escolhido é: ${nomeDoPrato}`)
console.log (`O valor do Prato escolhido é: ${valorDoPrato}`)

