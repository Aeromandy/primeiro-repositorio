alert('Código Funcionando')  // Mostra a mensagem para o usuário
const nomeUsuario = prompt('Olá, usuário, qual é o seu nome?') // mostra a mensagem e recebe a resposta

let num = Number(prompt('Olá, ' + nomeUsuario + 'Digite algum número. por favor'))

//const sucessor = num++

// alert('O sucessor de ' + num + ' é ' + sucessor)

console.log(num++) // 5 // operador de pós-incremento
console.log(num) // 6
console.log(++num) // 7 // operador de pré-incremento

// operadores de decremento
console.log(num--) // 7 operador de pós-decremento
console.log(num) // 6
console.log(--num) // 5 operador de pré-decremento
