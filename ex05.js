const readline = require ("readline-sync")



let bolso = 500
let dinheiro = readline.questionFloat ("Quanto você conseguiu guardar nesse mes?: ")
let diferenca = bolso - dinheiro

if (dinheiro >= 500){
    console.log ("Parabens, voce economizou!")
    console.log ("Parabens! Meta Diaria atingida, Até o proximo mes!")
    console.log (`Você passou ${Math.abs (diferenca)} reais da meta!`)
}else {
    console.log ("nao desiste, proximo mes vamos conseguir!")
    console.log (`Voce esta quase lá! Restam: ${500 - dinheiro}`)
}