const readline = require ('readline-sync')

console.log("==============AULAS DO CURSO DE PROGRAMAÇÃO==============")

let totalAulas = readline.questionInt ("Qual é o total de aulas no curso?: ")
let AulasAssistidas = readline.questionInt ("Quantas aulas você assistiu?: ")

let percentual = (AulasAssistidas / totalAulas) * 100
let diferenca = totalAulas - AulasAssistidas

console.log ("")
console.log ("===========SISTEMA===========")
console.log ("Se estiver abaixo de 50% -> você ainda está no começo do curso.")
console.log ("entre 50% e 100% -> você está avançando bem!")
console.log ("Se chegou a 100% -> Parabéns! Curso concluído!")

console.log ("")
console.log ("===========RESULTADO===========")
if (percentual < 50) {
    console.log (`Você ainda está no começo do curso. Você assistiu ${percentual.toFixed(2)}% das aulas.`)
} else if (percentual < 100) {
    console.log (`Você está avançando bem! Você assistiu ${percentual.toFixed(2)}% das aulas.`)
} else {
    console.log (`Parabéns! Curso concluído! Você assistiu 100% das aulas.`)
}