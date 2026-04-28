const readline = require ('readline-sync')

console.log ("===========META DE VENDAS=========")

let metaDiaria = 5000
let vendaDiaria = readline.questionFloat ("valor total faturado no dia (R$): ")
let percentual = (vendaDiaria / metaDiaria) * 100
let diferenca = metaDiaria - vendaDiaria

console.log ("")
console.log ("===========RESULTADO DO DIA===========")
if (vendaDiaria < metaDiaria) {
    console.log (`O mercado não atingiu a meta diária. Faltou ${percentual.toFixed(2)}%.`)
}else {
    console.log (`Parabéns! O mercado atingiu a meta diária. Você bateu (ou excedeu) a meta em ${percentual.toFixed(2)}%.`)
}