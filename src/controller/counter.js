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
    const [countTitle, setTitle] = useState(CounterModel.getTitle());

    const handleIncrement = () => {
        increment();
        setTitle(CounterModel.getTitle('+'));
    }
    const handleDecrement = () => {
        decrement();
        setTitle(CounterModel.getTitle('-'));
    }

    return (
        <CounterView 
        count = {count}
        title = {countTitle}
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