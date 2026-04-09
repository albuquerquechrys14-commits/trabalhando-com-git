const readline = require ("readline-sync")


let livro = 300 
console.log("-------------------------------")
console.log("|------------BIBLIOTECA---------|")
console.log("--------------------------------")
let cliente = readline.question ("qual o livro que alugou? ")
console.log ("                   ")
console.log("|------------LIVRO---------|")

let leitor = readline.questionInt ("quantas páginas ja foram lidas? ")

let diferenca = livro - leitor

console.log("                            ")

console.log ("--------LEITURA--------")

    console.log (`você ja leu ${Math.round((leitor/livro) * 100)}% do livro, faltam ${diferenca} páginas para terminar!`)
