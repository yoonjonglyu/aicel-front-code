import React from 'react';

import Layout from '../components/layout';

const async = () => {
    return (
        <Layout>
            <div className="async-contents">
                <h2>Async Actions</h2>
                <div className="options-box">
                    <button>Seoul</button>
                    <button>Tokyo</button>
                    <button>Beijing</button>
                    <button>Toronto</button>
                </div>
                <div className="result-box">
                    <section className="loading">
                        Loading...
                    </section>
                    <ul className="info">
                        <li>City : <span>Seoul</span></li>
                        <li>Weather : <span>Clear</span></li>
                        <li>Date : <time dateTime="YYYY-MM-DD">2020-10-08</time></li>
                    </ul>
                    <img src="" alt="weather image" />
                </div>
            </div>
        </Layout>
    )
};

export default async;