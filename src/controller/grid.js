import React, { useState } from 'react';
import { connect } from 'react-redux';

import GridModel from '../models/gridModel'; 

import GridView from '../view/grid';

const Grid = () => {
    const [dataList, setDataList] = useState(GridModel.getData());
    const [searchKeyword, setKeyword] = useState('');

    const handleKeyword = (e) =>{
        const keyword = e.target.value;
        setKeyword(keyword);

        const state = GridModel.searchData(GridModel.getData(), keyword);
        setDataList(state);
    }

    return (
        <GridView 
        dataTable = {dataList}
        keyword = {searchKeyword}
        handleKeyword = {handleKeyword}
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