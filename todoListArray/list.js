
var todos = [];

var input = prompt("Choose a menu value to proceed");

// Loop until user inputs 'quit'
while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("Choose a menu value to proceed");
}

// Print list in console
function listTodos() {
    console.log("************");
    todos.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("************");
}

// Add todo to list todos
function addTodo() {
    var newTodo = prompt("Enter new todo to add");
    todos.push(newTodo);
}

// Delete todo at index specified by user
function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);   
}

console.log("Goodbye");

