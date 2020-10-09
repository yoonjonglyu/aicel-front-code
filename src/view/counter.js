import React from 'react';

import Layout from '../components/layout';

const Counter = (props) => {
    const {
        count,
        handleIncrement,
        handleDecrement
    } = props;

    return (
        <Layout>
            <div className="counter-contents">
                <h2>Counter</h2>
                <div className="counter-box">
                    <button onClick={handleIncrement}>+</button>
                    <strong>{count}</strong>
                    <button onClick={handleDecrement}>-</button>
                </div>
                <section className="title">
                    <p>
                        <span>Count title</span> :
                        <strong className="title-name">waiting...</strong>
                    </p>
                </section>
            </div>
        </Layout>
    )
};

export default Counter;