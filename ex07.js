const readline = require ("readline-sync")


let media = 7

let aluno = readline.questionFloat ("Nota final do aluno: ")
let diferenca = media - aluno 

if (aluno >= 7) {
  console.log("aprovado.")

}else {
    console.log(`reprovado. Restou apenas ${diferenca} pontos para realização do proximo ano.`)
}