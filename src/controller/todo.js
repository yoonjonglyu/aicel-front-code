import React, { useState } from 'react';
import { connect } from 'react-redux';
import todoModel from '../models/todoModel';

import TodoModel from '../models/todoModel'; 

import TodoView from '../view/todo';

const Todo = () => {
    const [todoList] = useState(TodoModel.getTodo);
    const [todo, setToDo] = useState('');

    const handleToDo = (e) => {
      setToDo(e.target.value);
    };
    const handleAdd = (e) => {
      e.preventDefault();
      const result = {
        "idx": todoList.length,
        "todo" : todo
      }

      if(todo.split(' ').join('').length > 0){
        todoList.push(result);
        todoModel.saveTodo(todoList);
        setToDo('');
      }
    };

    return (
        <TodoView 
        todoList = {todoList}
        todoValue = {todo}
        handleToDo = {handleToDo}
        addToDo = {handleAdd}
        />
    )
};

const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Todo);