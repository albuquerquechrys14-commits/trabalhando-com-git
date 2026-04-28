const readline = require ('readline-sync')


console.log ("===========LIMITE DE INTERNET=========")
console.log ("")
let plano = readline.questionFloat ("qual o total de dados disponiveis (em GB)?: ")
let utilizado = readline.questionFloat ("Qunato já foi utilizado?: ")

let percentual = (utilizado / plano) * 100
let diferenca = plano - utilizado
console.log ("")
console.log ("===========SISTEMA===========")

console.log ("Se estiver abaixo de 80% -> uso dentro do limite")
console.log ("Se estiver entre 80% e 100% -> atenção: voce está se aproximando do limite.")
console.log ("Se estiver acima de 100% -> limite excedido")
console.log ("")
console.log ("===========RESULTADO===========")
if (percentual < 80) {
    console.log (`Uso dentro do limite. Você utilizou ${percentual.toFixed(2)}% do seu plano.`)
} else if (percentual <= 100) {
    console.log (`Atenção: você está se aproximando do limite. Você utilizou ${percentual.toFixed(2)}% do seu plano.`)
} else {
    console.log (`Limite excedido. Você utilizou ${percentual.toFixed(2)}% do seu plano.`)
}