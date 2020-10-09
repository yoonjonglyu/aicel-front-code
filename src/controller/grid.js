import React, { useState } from 'react';
import { connect } from 'react-redux';

import GridModel from '../models/gridModel'; 

import GridView from '../view/grid';

const Grid = () => {
    const [dataList, setDataList] = useState(GridModel.getData());
    const [searchKeyword, setKeyword] = useState('');
    const [dataSort, setDataSort] = useState(GridModel.getSort());

    const handleKeyword = (e) => {
        const keyword = e.target.value;
        setKeyword(keyword);

        const state = GridModel.searchData(GridModel.getData(), keyword);
        setDataList(state);
        if(state.length > 0){
            dataOrder(state);
        }
    }
    const handleSort = (target) => {
        const state = GridModel.getSort(dataSort);

        state[target].isAvail = "active";
        state[target].sort = GridModel.setOrder(state[target].sort);
        setDataSort(state);
        dataOrder(dataList);
    }
    const dataOrder = (data) => {
        const state = GridModel.dataSort(data, dataSort);

        setDataList(state);
    }

    return (
        <GridView 
        dataTable = {dataList}
        keyword = {searchKeyword}
        handleKeyword = {handleKeyword}
        tableSort = {dataSort}
        handleSort = {handleSort}
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