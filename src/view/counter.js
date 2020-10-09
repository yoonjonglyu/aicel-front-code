import React from 'react';

import Layout from '../components/layout';

const Counter = (props) => {
    const {
        count,
        title,
        handleIncrement,
        handleDecrement
    } = props;
    
    let addBtn, subtrBtn;
    if(count < 9){
        addBtn = (<button onClick={handleIncrement} >+</button>);
    } else {
        addBtn = (<button onClick={handleIncrement} disabled>+</button>);
    }
    if(count > 0){
        subtrBtn = (<button onClick={handleDecrement}>-</button>);
    } else {
        subtrBtn = (<button onClick={handleDecrement} disabled>-</button>);
    }

    return (
        <Layout>
            <div className="counter-contents">
                <h2>Counter</h2>
                <div className="counter-box">
                    {addBtn}
                    <strong>{count}</strong>
                    {subtrBtn}
                </div>
                <section className="title">
                    <p>
                        <span>Count title</span> :
                        <strong className="title-name">{title}</strong>
                    </p>
                </section>
            </div>
        </Layout>
    )
};

export default Counter;