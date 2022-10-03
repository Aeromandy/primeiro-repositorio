/**
 * Métodos de recuperação de elementos HTML
 */
// recupera elementos HTML a partir do nome da tag
// const todoForm = document.getElementsByTagName('form')[0]
const todoForm = document.getElementById('todo-form')
const todos = []

/**
 * addEventListener serve para ouvir eventos de elementos HTML sempre que forem emitidos
 */
todoForm.addEventListener('submit', function(event) {
    event.preventDefault()
    // cancela o comportamento padrão de um formulário que seria o carregamento da página tentando fazer seu envio
    event.stopPropagation()
    // cancela a propagação do evento que foi emitido para os elementos pai, evitando que outros eventos sejam emitidos
    const todoInput = document.querySelector('#todo') 
    // querySelector recupera o primeiro elemento que atenda a um seletor css informado
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()
    // a propriedade vaue é uma propriedade que representa o atributo value dos elementos de formulário do HTML para acessar o valor que está dentro dele
})

function renderizarTodos() {
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''

    for (let tarefa of todos) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-trumcate') 
        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        // arrow functions SEMPRE são anônimas
        btnDelete.addEventListener('click', () => {
            // descobrir o índice do elemento dentro do array
            const index = todos.indexOf(tarefa)
            todos.splice(index, 1) // splice servepara excluir um determinado valor do array a partir do seu índice
            renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon)
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)

    }
}
    /** createElement é o método que gera novos elementos HTML dentro do JS a partir do nome das tags */
    /** innerText é a propriedade que informa qual o conteúdo de texto que está dentro de um elemento HTML */
    /** appendChild serve para colocar novos elementos HTML dentro de outros */
    /** indexOf informa em qual índice se encontra um determinado valor dentro do seu array, se ele não achar o valor dentro do array, ele retorna -1 */


