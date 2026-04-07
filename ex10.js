const readline = require ("readline-sync")


let livro = 300 

let leitor = readline.questionInt ("quantas páginas ja foram lidas? ")

let diferenca = livro - leitor


console.log ("--------LEITURA--------")

    console.log (`voce ja leu ${Math.round((leitor/livro) * 100)}% do livro, faltam ${diferenca} páginas para terminar!`)
