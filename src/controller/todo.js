import React, { useState } from 'react';
import { connect } from 'react-redux';

import TodoModel from '../models/todoModel'; 

import TodoView from '../view/todo';

const Todo = () => {
    const [todoList, setList] = useState(TodoModel.getTodo);
    const [todo, setToDo] = useState('');

    const handleToDo = (e) => {
      setToDo(e.target.value);
    };
    const handleAdd = (e) => {
      e.preventDefault();

      if(todo.split(' ').join('').length > 0){
        const state = TodoModel.saveTodo(todoList, todo);

        setList(state);
        setToDo('');
      }
    };
    const handleReMove = (target) => {
      const state = TodoModel.removeTodo(todoList, target);
      
      setList(state);
    }

    return (
        <TodoView 
        todoList = {todoList}
        todoValue = {todo}
        handleToDo = {handleToDo}
        addToDo = {handleAdd}
        removeToDo = {handleReMove}
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