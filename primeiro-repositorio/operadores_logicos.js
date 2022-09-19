// * Operador E:
// média precisa ser maior ou igual a 7 E preciso ter no mínimo 80% de presença
const media = (7 + 10 + 10) / 3
const presenca = 0.7

console.log(media >= 7 && presenca >= 0.8) // false
// se a primeira condição é falsa o sistema nem testa a segunda condição

// * Operador OU:
/**
 * V V -> V
 * V F -> V
 * V F -> V
 * F F -> F
 */

console.log(4 > 7 || 3 < 2) // F
console.log(5 > 3.5 || 7 > 8) // V

// Operador NOT
/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3 

// essa afirmação é falsa ou seja no resultado será verdadeiro

console.log(!resultado)

if (!logado) {
    console.log('Você não pode acessar o meu site!')
}
