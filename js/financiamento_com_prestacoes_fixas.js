
function calcularValorFinal(numero_meses, taxa_juros_mensal, valor_da_prestacao){
    return (((1 - (1 + (taxa_juros_mensal / 100)) ** -numero_meses)) / (taxa_juros_mensal / 100)) * valor_da_prestacao
}

let resposta = document.getElementById('resposta')

function principal(){

    let numero_meses = Number(document.getElementById('numero_meses').value)
    let taxa_juros_mensal = Number(document.getElementById('taxa_juros_mensal').value)
    let valor_da_prestacao = Number(document.getElementById('valor_da_prestacao').value)
    
    let valorFinanciado = calcularValorFinal(numero_meses, taxa_juros_mensal, valor_da_prestacao)

    console.log(`O valor financiado é de: R$ ${valorFinanciado.toFixed(2)}`)
    resposta.innerHTML = ``
    resposta.innerHTML += `O valor financiado é de: R$ ${valorFinanciado.toFixed(2)}`

}