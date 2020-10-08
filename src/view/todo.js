import React from 'react';

import Layout from '../components/layout';

const Todo = (props) => {
    const { todoList } = props;
    const todoItem = todoList.map((obj, index) => {
        return (<li data-id={obj.idx} key={index}>{obj.todo}</li>)
    });

    return (
        <Layout>
            <div className="todo-contents">
                <h2>Todo</h2>
                <div className="todo-box">
                    <ul className="todolist">
                        {todoItem}
                    </ul>
                </div>
                <form className="todo-from">
                    <input type="text" />
                    <button>+</button>
                </form>
            </div>
        </Layout>
    )
};

export default Todo;