/** 
 * As estruturas de Repetição, são estruturas que nos permitem repetir um código de uma maneira mais simples
*/
// while

let precoProduto = parseFloat(prompt('Qual o preço do produto?'))

while (isNaN(precoProduto)) {
    alert('O preço digitado é inválido. Por favor, informe o preço apenas com números (sem letras ou acentos)')
    precoProduto = parseFloat(prompt('Qual o preço do produto'))
}

const mensagem = `
Informe o tipo de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`
let tipoDePagamento = parseInt(prompt(mensagem))

while (tipoDePagamento <1 || tipoDePagamento >= 4) {
    alert('Por favor digite uma opção válida 1, 2 ou 3')
    prompt(mensagem)
}

if (tipoDePagamento == 1 || tipoDePagamento == 2) {
    const precoFinal = precoProduto * 0.9
    alert(`O preço final do pagamento é ${precoFinal} reais`)
} else if (tipoDePagamento == 3) {
    const parcelas = parseInt(prompt('Informe a quantidade de parcelas'))

    if (parcelas == 1) {
        const precoFinal = precoProduto * 0.85
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    } else if (parcelas == 2) {
        alert(`O preço final do pagamento é ${precoProduto} reais`) 
    } else {
        const precoFinal = precoProduto * 1.1
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    }
}