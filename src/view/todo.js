import React from 'react';

import Layout from '../components/layout';

const Todo = (props) => {
    const {
        todoList,
        todoValue,
        handleToDo,
        addToDo,
        removeToDo
    } = props;
    let todoForm;

    const todoItem = todoList.map((obj, index) => {
        return (<li key={index}>{obj.todo} <button onClick={() => {removeToDo(index)}}>-</button></li>)
    });
    
    if(todoList.length > 4){
        todoForm = <p>The list is full.</p>
    } else {
        todoForm =  <form className="todo-from" onSubmit={addToDo}>
                        <input type="text" value={todoValue} onChange={handleToDo} />
                        <button>+</button>
                    </form>
    }

    return (
        <Layout>
            <div className="todo-contents">
                <h2>Todo</h2>
                <div className="todo-box">
                    <ul className="todolist">
                        {todoItem}
                    </ul>
                </div>
                    {todoForm}
            </div>
        </Layout>
    )
};

export default Todo;