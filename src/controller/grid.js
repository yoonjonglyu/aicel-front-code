import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import GridModel from '../models/gridModel'; 

import GridView from '../view/grid';

const Grid = () => {
    const [dataList, setDataList] = useState(GridModel.getData());

    return (
        <GridView 
        dataTable = {dataList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Grid);