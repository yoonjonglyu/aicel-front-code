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
      const result = {
        "idx": todoList.length > 0 ? todoList[todoList.length - 1].idx : 0,
        "todo" : todo
      }

      if(todo.split(' ').join('').length > 0){
        const state = Array.from(todoList);
        state.push(result);
        TodoModel.saveTodo(state);
        setList(state);
        setToDo('');
      }
    };
    const handleReMove = (target) => {
      const state = Array.from(todoList);
      state.splice(target, 1);
      TodoModel.saveTodo(state);
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