import React, { useState } from 'react';
import { connect } from 'react-redux';

import AsyncModel from '../models/asyncModel'; 

import AsyncView from '../view/async';

const Async = () => {
    const [res, setRes] = useState(false);
    const [city, setCity] = useState(AsyncModel.getCity());
    const [asyncData, setData] = useState('');
    const [checkCity, setCheck] = useState(['active', '', '', '']);

    const getAsync = async () => {
      const responseData = await AsyncModel.getData(city);
    
      setRes(true);
      setData(responseData);
    }
    const handleCity = (target) => {
      const state  = AsyncModel.getCity(target);
      const check = checkCity.fill('');
      check[target] = 'active';

      setCity(state);
      setCheck(check);
      setRes(false);
    }

    if(!res){
      getAsync();
    }

    return (
      <AsyncView 
      isRes = {res}
      asyncData = {asyncData}
      handleCity = {handleCity}
      checkCity = {checkCity}
      />
    );
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