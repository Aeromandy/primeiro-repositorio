// criar um novo array
const nums = []

// criar um loop que execute
for (let i = 1; i <= 6; i++) {
    const n = parseInt(prompt(`Digite o ${i}ºnúmero`))
    nums.push(n)
}

// separar os pares dos ímpares
const pares = []
const impares = []

// percorrer p array com os números informados
// criar uma variável que guardará os valores de cada posição do array
// o array que iremos percorrer

for (let numero of nums) {
    /**
     * Separar os valores pares do ímpares
     * Colocando cada valor no seu respectivo array
     */
    if (numero % 2 == 0) {
        pares.push(numero)
    } else {
        impares.push(numero)
    }
} 

alert(`Nós temos ${pares.length} valores pares: ${pares.join(', ')}`)
alert(`Nós temos ${impares.length} valores pares: ${impares.join(', ')}`)