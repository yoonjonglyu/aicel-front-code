import React from 'react';

import Layout from '../components/layout';
import '../assets/css/async.css';

const async = (props) => {
    const {
        isRes,
        asyncData,
        handleCity,
        checkCity
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
                    <button className={checkCity[0]} onClick={() => {handleCity(0)}}>Seoul</button>
                    <button className={checkCity[1]} onClick={() => {handleCity(1)}}>Tokyo</button>
                    <button className={checkCity[2]} onClick={() => {handleCity(2)}}>Beijing</button>
                    <button className={checkCity[3]} onClick={() => {handleCity(3)}}>Toronto</button>
                </div>
                {asyncResult}
            </div>
        </Layout>
    )
};

export default async;