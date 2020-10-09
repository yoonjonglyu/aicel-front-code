import React, { useState } from 'react';
import { connect } from 'react-redux';

import AsyncModel from '../models/asyncModel'; 

import AsyncView from '../view/async';

const Async = () => {

    return (
        <AsyncView />
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

export default connect(mapStateToProps, mapDispatchToProps)(Async);