import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import CounterModel from '../models/CounterModel'; 

import CounterView from '../view/counter';

const Counter = (props) => {
    const {
        count,
        increment,
        decrement
    } = props;

    const handleIncrement = () => {
        increment();
    }
    const handleDecrement = () => {
        decrement();
    }

    return (
        <CounterView 
        count = {count}
        handleIncrement = {handleIncrement}
        handleDecrement = {handleDecrement}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        count : state.counter.counter
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => {dispatch(actions.INCREMENT())},
        decrement : () => {dispatch(actions.DECREMENT())}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);