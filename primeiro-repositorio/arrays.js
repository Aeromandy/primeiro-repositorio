/**
 * Arrays ou Vetores é um tipo especial que te permite armazenar diversos valores em apenas um local
 */

// criando um Array
/** let arr = new Array()
* let arr2 = new Array(5) 
* dentro de um array eu posso ter vários tipos de dados
*/

/* let arr = [10, 15, 9.8, 'Olá, eu sou um texto dentro de um array', 'Olá, mundo', true, false, false]
console.log(arr[6])
arr[6] = 'Outro texto'
console.log(arr[6])
arr[8] = 'Agora a posição 8 existe' */


const lista = ['João', 'Maria', 'Paulo', 'Pedro', 'Vitória', 'Augusto', 'Fábio', 'Larissa']
console.log(lista)
lista.push('Roberta') // adiciona no final do array
console.log(lista)
lista.unshift('Gustavo') // adiciona um valor no início do array
console.log(lista)
lista.pop() // remove o último valor do array
console.log(lista)
lista.shift() // remove o primeiro valor do array
console.log(lista)
console.log(lista.concat('Julio')) // cria um novo array adicionando o valor passado como parâmetro
console.log(lista)
console.log(lista.join('-> '))
