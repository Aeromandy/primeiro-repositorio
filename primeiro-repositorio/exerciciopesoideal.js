const altura = parseFloat(prompt('Digite sua altura'))

const mensagem = `
Informe o gênero:
Digite 1 para homem
Digite 2 para mulher
`

const homemOuMulher = prompt(mensagem)

if (homemOuMulher == 1) {
    const pesoIdeal = (72.7 * altura) - 58
    alert('O seu peso ideal é ' +  pesoIdeal)
} else {
    const pesoIdeal = (68.1 * altura) - 44.7
    alert('O seu peso ideal é ' +  pesoIdeal)
}