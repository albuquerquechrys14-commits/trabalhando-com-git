const readline = require ("readline-sync")


console.log ("META DIARIA PRA CAMINHADA E VIRAR UM RAMON DINO")

let meta = 10000
let caminhada = readline.questionInt ("Quantos passos dados?: ")
let diferenca = meta - caminhada

if (caminhada >= 10000){
    console.log ("🎉🎉🎉🎉🎉Uau! O proximo Usain Bolt!🎉🎉🎉🎉🎉")
    console.log ("Parabens! Meta Diaria atingida, Até amanha!")
    console.log (`Você passou ${Math.abs (diferenca)} passos da meta!`)
}else {
    console.log ("💤💤💤💤💤Aguenta ai, Brócolis é o segredo!💤💤💤💤💤")
    console.log (`Voce esta quase lá! Restam: ${10000 - caminhada}`)
}
    