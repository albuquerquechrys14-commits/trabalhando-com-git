const readline = require ("readline-sync")

let objetivo = 40
let horasEstudadas = readline.questionFloat("informe quantas horas estudadas: ")
let diferenca = horasEstudadas - objetivo

if (horasEstudadas >= objetivo) {

    console.log("voce conseguiu bater sua meta de estudos, boa sorte na prova!")
    console.log(`voce estudou mais que o esperado! ${diferenca} horas a mais.`)
} else {
    console.log(`Pelo menos você estudou, teve diferenca de ${Math.abs (diferenca)} da meta planejada, boa sorte na prova!`)
}