/**
 * operadores de comparacao
 * */
 
// true ou false

// igualdade

const msg = 'Eu sou uma mensagem'
const msg2 = 'Eu sou outra mensagem'

console.log(msg == msg2) // false

let a = 78
let b = '78'

console.log(a == b) // true

// idênticos
console.log(a === b) // false

// diferentes != compara apenas conteudo da variavel !== compara também o tipo

console.log(msg != msg2) // true
console.log(a != b) // false
console.log(a !== b)  // true

a = 56
b = 30
let c = 500
let d = 500

console.log(a > b) // true
console.log(c >= d) // true
console.log(3 > 6) // false
console.log(3 < 7.5) // true