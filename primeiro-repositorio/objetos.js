/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 */

let nome = 'Paulo' /* chave que chamei de nome tem o valor Paulo */

let end = {
    rua: 'Rua Principal',
    numero: 123,
    cidade: 'Campinas',
    estado: 'SP',
    cep: '123000-000'
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf:'999.999.999-99',
    altura: 156,
    // destructuring
    endereco: { ...end },
    solteiro: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar() {
        /**
         * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, utiliza-se 'this'
         */
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}

/* console.log(end)
console.log(pessoa.habilidades[2])
pessoa.cumprimentar()
pessoa.nome = 'José Silva'
pessoa.cumprimentar()
pessoa.habilidades.push('Angular')
console.log(pessoa.habilidades)
console.log(pessoa['cpf']) */
console.log(end.rua)
console.log(pessoa.endereco.rua)
pessoa.endereco.rua = 'Rua 2'
console.log(pessoa.endereco.rua)
console.log(end.rua)
