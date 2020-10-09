import React, { useState } from 'react';
import { connect } from 'react-redux';

import ModalsModel from '../models/ModalsModel'; 

import ModalsView from '../view/Modals';

const Modals = () => {
    const [avail, setAvail] = useState(false);
    const [modalHead, setHead] = useState('');
    const [modalBody, setBody] = useState('');
    
    const handleShow = () => {
        setHead(ModalsModel.getHead(''));
        setBody(ModalsModel.getBody(''));
        setAvail(true);
    }
    const handleHide = () => {
        setAvail(false);
    }

    return (
        <ModalsView 
        isAvail = {avail}
        headLine = {modalHead}
        contents = {modalBody}
        handleShow = {handleShow}
        handleHide = {handleHide}
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

export default connect(mapStateToProps, mapDispatchToProps)(Modals);