import React, { useState } from 'react';
import { connect } from 'react-redux';

import CounterModel from '../models/CounterModel'; 

import CounterView from '../view/counter';

const Counter = () => {
    return (
        <CounterView />
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);