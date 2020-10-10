import React from 'react';

import Layout from '../components/layout';
import '../assets/css/modals.css';

const Modals = (props) => {
    const {
        isAvail,
        headLine,
        contents,
        handleShow,
        handleHide
    } = props;
    
    const modal = isAvail ? (
        <section className="modal">
            <div className="modal-wrapper">
                <div className="modal-container">
                    <h3>{headLine}</h3>
                    <p>{contents}</p>
                    <button onClick={handleHide}>OK</button>
                </div>
            </div>
        </section>
    ) : '';

    return (
        <Layout>
            <div className="modals-contents">
                <h2>Modals</h2>
                <button onClick={handleShow}>Show Modal</button>
                <div className="modal-box">
                    {modal}
                </div>
            </div>
        </Layout>
    )
};

export default Modals;