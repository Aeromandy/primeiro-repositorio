/* 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;
*/

const alturas = []

for (let a = 1; a <= 5; a++) {
    const altura = parseFloat(prompt(`Qual é a ${a}ª altura`))
    alturas.push(altura)
}

let altmin = 0
let altmax = 1000

for (let altura of alturas) {
    if (altura > alturas) {
        altmax = altura
    } 
    if (altura < alturas) {
        altmin = altura
    }
}

alert(`A pessoa mais alta tem ${altmax} de altura e a pessoa mais baixa tem ${altmin}`)