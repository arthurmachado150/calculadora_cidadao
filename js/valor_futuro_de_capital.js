
function calcularValorFinal(numero_meses, taxa_juros_mensal, capital_atual){
    return capital_atual * (1 + (taxa_juros_mensal / 100)) ** numero_meses
}

let resposta = document.getElementById('resposta')

function principal(){

    let numero_meses = Number(document.getElementById('numero_meses').value)
    let taxa_juros_mensal = Number(document.getElementById('taxa_juros_mensal').value)
    let capital_atual = Number(document.getElementById('capital_atual').value)
    
    let valorFinal = calcularValorFinal(numero_meses, taxa_juros_mensal, capital_atual)

    console.log(`O valor obtido ao final é de: R$ ${valorFinal.toFixed(2)}`)
    resposta.innerHTML = ``
    resposta.innerHTML += `O valor obtido ao final é de: R$ ${valorFinal.toFixed(2)}`

}