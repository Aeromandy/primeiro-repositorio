/* Funções são blocos de construção fundamentais em JavaScript. Uma função é u procedimento do Java Script - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar essa função, você deve defini-la em algum lugar no escopo do qual você quise chamar
 */

/* Parâmetros são valores que passamos para funções, para que elas utilizem esses valores dentro delas */

// passar um valor como parâmetro para mostrá-lo dentro do alert
function cumprimentar(mensagem, repetir = 2) {
    for (let i = 1; i <= repetir; i++) {
        alert(mensagem)
    }
}

function soma(n1, n2) {
    return(n1 + n2) // retorna o resultado da execução daquela função, qualquer coisa colocada depois do return não será executada
}

let resultado = soma(4,7)
console.log(`O valor da variável resultado é ${resultado}`)

/* cumprimentar('Olá, mundo')
cumprimentar('Eu gosto muito do JavaScript')
cumprimentar('JavaScrip sola o C#') */

/**
 * Crie uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

function esg(a, b, c) {
    const delta = b ** 2 -4 * a * c
    const raizDelta = Math.sqrt(delta)
    const x1 = (-b + raizDelta) / (2 * a)
    const x2 = (-b - raizDelta) / (2 * a)

    return [x1, x2]
}

console.log(esg(1, -1, -12)) // [4, -3]
