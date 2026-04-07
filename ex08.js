const readline = require ("readline-sync")



let idade = 18

let pessoa = readline.questionInt ("Informe a idade do baladeiro: ")

if (pessoa >= 18) {
console.log("pode passar para a balada, baladeiro.")

} else {
    console.log("Vá para casa, criança.")
}
