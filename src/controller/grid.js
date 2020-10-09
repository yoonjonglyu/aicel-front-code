import React, { useState } from 'react';
import { connect } from 'react-redux';

import GridModel from '../models/gridModel'; 

import GridView from '../view/grid';

const Grid = () => {

    return (
        <GridView />
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

export default connect(mapStateToProps, mapDispatchToProps)(Grid);