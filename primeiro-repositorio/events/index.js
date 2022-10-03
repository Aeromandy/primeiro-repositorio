/**
 * Criar uma função responsável por mostrar o alerta na tela
 */
function mostrarAlerta() {
    /* o objeto document representa o HTML do seu site dentro do JS */
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.add('mostrar')
}
    /* A propriedade classList retorna um array com todas as classes CSS que um elemento possui 
    */
function fecharAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

/* Se eu precisar passar uma função como parâmetro para outra eu passo a referência dela */

btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)

