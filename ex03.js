const readline = require ('readline-sync')


let nickname = readline.question ("Informe o Seu Nome de Jogador: ")
let jogoFavorito = readline.question ("Jogo favorito do usuario: ")
let pontuacao = readline.questionInt ("Pontuacao Atual do jogador: ")


console.log ("===========PERFIL DE JOGADOR=========")

console.log (`O nickname do Jogador é: ${nickname}`)
console.log (`O jogo Favorito do Jogador é: ${jogoFavorito}`)
console.log (`Pontuacao Atual do Jogador: ${pontuacao}`)


