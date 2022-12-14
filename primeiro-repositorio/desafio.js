/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10% 
*/

/* -> Métodos de pagamento
    * Dinheiro
    * Cheque
    * Cartão
*/

const precoProduto = parseFloat(prompt('Qual o preço do produto?'))
const mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento em cartão
`
const tipoDePagamento = prompt(mensagem)

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