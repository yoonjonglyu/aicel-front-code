const todoModel = {};

const getTodo = () => {
    let todoList
    if(localStorage.getItem('ToDo') !== null){
        todoList = JSON.parse(localStorage.getItem('ToDo'));
    } else {
        todoList = [];
    }
    
    return todoList;
}

const saveTodo = (list) => {
    localStorage.setItem('ToDo', JSON.stringify(list));
}

todoModel.getTodo = getTodo;
todoModel.saveTodo = saveTodo;

export default todoModel;