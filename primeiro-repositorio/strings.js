// Delimitação de Strings

const aspasSimples = 'Olá, mundo'
const aspasDuplas = "Hello, world"

// Caracteres de escape

//const msg = "Olá eu sou o Javascript. \nEu sou melhor que Python."
//console.log(msg)

const textoComCrase = `Olá eu sou o Javascript.
//Eu sou melhor que Python.`
//console.log(textoComCrase)

// Métodos das strings

const texto = 'O Javascript foi criado depois do Python. Porém, Javascript é bem mais bacana'

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat('A linguagem C é a mãe de todas as linguagens'))
//console.log(texto[2], texto[17])
console.log(texto.substring(2, 12))
console.log(texto.replace('Javascript', 'Rust')) // replace substitui apenas a prmeira ocorrência
console.log(texto.replaceAll('Javascript', 'Kotlin'))
console.log(texto.replace(/Javascript/g, 'PHP'))
console.log(texto.replace(/Javascript/gi, 'PHP'))  // i ignora se a letra inicia com maiuscula ou minuscula

const html ='<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.endsWith('</body>'))

const mensagem = '                                      Olá, mundo                                         '
console.log(mensagem.trim())  // retira os espaços

let senha = 'sonic'

console.log(senha.length)
console.log(senha.length >= 8)