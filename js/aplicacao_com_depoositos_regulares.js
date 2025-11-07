
function calcularValorFinal(numero_meses, taxa_juros_mensal, valor_deposito_regular){
    return (1 + (taxa_juros_mensal / 100)) * (((1 + (taxa_juros_mensal / 100)) ** numero_meses - 1) / (taxa_juros_mensal / 100)) * valor_deposito_regular
}

let resposta = document.getElementById('resposta')

function principal(){

    let numero_meses = Number(document.getElementById('numero_meses').value)
    let taxa_juros_mensal = Number(document.getElementById('taxa_juros_mensal').value)
    let valor_deposito_regular = Number(document.getElementById('valor_deposito_regular').value)
    
    let valorFinal = calcularValorFinal(numero_meses, taxa_juros_mensal, valor_deposito_regular)

    console.log(`O valor obtido ao final é de: R$ ${valorFinal.toFixed(2)}`)
    resposta.innerHTML = ``
    resposta.innerHTML += `O valor obtido ao final é de: R$ ${valorFinal.toFixed(2)}`

}