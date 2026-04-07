const readline = require ("readline-sync")



let valorDoFrete = 100
let comprador = readline.questionFloat("Qual o Preço total da compra?: ")
let diferenca = valorDoFrete - comprador

if (comprador > 100) {
  console.log("Parabens, você tem direito a um frete Gratis por compras acima de R$100!")

}else {
    console.log(`ainda faltam R$${diferenca} para conseguir um frete grátis.`)
}