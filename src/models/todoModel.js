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

const saveTodo = (list, todo) => {
    const state = Array.from(list);
    const result = {
        "idx": state.length > 0 ? state[state.length - 1].idx : 0,
        "todo" : todo
    };

    state.push(result);
    localStorage.setItem('ToDo', JSON.stringify(state));

    return state;
}

const removeTodo = (list, target) => {
    const state = Array.from(list);
    
    state.splice(target, 1);
    localStorage.setItem('ToDo', JSON.stringify(state));
    
    return state;
}

todoModel.getTodo = getTodo;
todoModel.saveTodo = saveTodo;
todoModel.removeTodo = removeTodo;

export default todoModel;