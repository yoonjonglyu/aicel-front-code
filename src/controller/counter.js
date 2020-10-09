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
    const [countDelay, setDelay] = useState(false);

    const handleIncrement = () => {
        if(countDelay === false && count < 9){
            increment();
            setTitle(CounterModel.getTitle('+'));
            setDelay(true);
            setTimeout(clearDelay, 1000)
        }
    }
    const handleDecrement = () => {
        if(countDelay === false && count > 0){
            decrement();
            setTitle(CounterModel.getTitle('-'));
            setDelay(true);
            setTimeout(clearDelay, 1000)
        }
    }
    const clearDelay = () => {
        setDelay(false);
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