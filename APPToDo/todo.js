const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const todos = JSON.parse(localStorage.getItem("list_todos")) || []

function renderTodo() {
    listElement.innerHTML = ""

    for(todo of todos) {
        let linkElement = document.createElement('a')
        let linkText = document.createTextNode(" Excluir")

        linkElement.appendChild(linkText)
        linkElement.setAttribute('href', "#")

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')
        
        let todoElement = document.createElement("li")
        let todoText = document.createTextNode(todo)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}
renderTodo()

function addToDO(){
    let todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ""
    renderTodo()
    saveToStorage()
}

function deleteTodo(pos){
    todos.splice(pos, 1)

    renderTodo()
    saveToStorage()
}
buttonElement.onclick = addToDO

function saveToStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos))
}