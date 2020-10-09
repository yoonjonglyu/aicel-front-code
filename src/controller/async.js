import React, { useState } from 'react';
import { connect } from 'react-redux';

import AsyncModel from '../models/asyncModel'; 

import AsyncView from '../view/async';

const Async = () => {
    const [res, setRes] = useState(false);
    const [city, setCity] = useState(AsyncModel.getCity());
    const [asyncData, setData] = useState('');

    const getAsync = async () => {
      const responseData = await AsyncModel.getData(city);
    
      setRes(true);
      setData(responseData);
    }
    const handleCity = (target) => {
      const state  = AsyncModel.getCity(target);

      setCity(state);
      setRes(false);
    }

    if(!res){
      getAsync();
    }

    return (
      <AsyncView 
      isRes = {res}
      asyncTarget = {city}
      asyncData = {asyncData}
      handleCity = {handleCity}
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