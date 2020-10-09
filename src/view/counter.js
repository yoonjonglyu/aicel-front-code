import React from 'react';

import Layout from '../components/layout';

const Counter = () => {
    return (
        <Layout>
            <div className="counter-contents">
                <h2>Counter</h2>
                <div className="counter-box">
                    <button>+</button>
                    <strong>0</strong>
                    <button>-</button>
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