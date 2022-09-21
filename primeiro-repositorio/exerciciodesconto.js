const quantidadeLitros = prompt("Por favor, digite a quantidade de litros")
const mensagem = `
Informe o método de pagamento:
Digite A para Álcool
Digite G para Gasolina
`
const tipoCombustivel = prompt(mensagem)

if (tipoCombustivel == "A") {
    if (quantidadeLitros > 25) {
        const precoFinal = quantidadeLitros * 1.9 * 0.96;
        alert(`O total a ser pago é de ${precoFinal} `)
    } else {
        const precoFinal = quantidadeLitros * 1.9 * 0.98;
        alert(`O total a ser pago é de ${precoFinal} `)
    }
} else {
    if (quantidadeLitros > 25) {
        const precoFinal = quantidadeLitros * 2.7 * 0.95;
        alert(`O total a ser pago é de ${precoFinal} `)
    } else {
        const precoFinal = quantidadeLitros * 2.7 * 0.97;
        alert(`O total a ser pago é de ${precoFinal} `)
    }
}
