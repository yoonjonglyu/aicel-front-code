import React from 'react';
import { connect } from 'react-redux';

import TodoModel from '../models/todoModel'; 

import TodoView from '../view/todo';

const Todo = () => {
    const todoList = TodoModel();
    return (
        <TodoView todoList={todoList}/>
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