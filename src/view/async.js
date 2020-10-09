import React from 'react';

import Layout from '../components/layout';

const async = (props) => {
    const {
        isRes,
        asyncTarget,
        asyncData,
        handleCity
    } = props;
    
    const asyncResult = isRes === true ? (
        <div className="result-box">
            <ul className="info">
                <li>City : <span>{asyncData.city}</span></li>
                <li>Weather : <span>{asyncData.weather}</span></li>
                <li>Date : <time dateTime={asyncData.dateTime}>{asyncData.date}</time></li>
            </ul>
            <img src={asyncData.img} alt="weather image" />
        </div>
    ) : (
        <div className="result-box">
            <section className="loading">
                Loading...
            </section>
        </div>
    );
        
    return (
        <Layout>
            <div className="async-contents">
                <h2>Async Actions</h2>
                <div className="options-box">
                    <button onClick={() => {handleCity(0)}}>Seoul</button>
                    <button onClick={() => {handleCity(1)}}>Tokyo</button>
                    <button onClick={() => {handleCity(2)}}>Beijing</button>
                    <button onClick={() => {handleCity(3)}}>Toronto</button>
                </div>
                {asyncResult}
            </div>
        </Layout>
    )
};

export default async;