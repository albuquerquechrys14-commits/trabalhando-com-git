const readline = requie ("readline-sync")


let livro = 300 

let leitor = readline.questionInt ("quantas páginas ja foram lidas? ")

let diferenca = livro - leitor

if (leitor >= 300) {
    console.log ("voce terminou o livro, parabens!")
} else {
    console.log (`voce ja leu ${Math.round((leitor/livro) * 100)}% do livro, faltam ${diferenca} páginas para terminar!`)
}