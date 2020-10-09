import React from 'react';

import Layout from '../components/layout';

const Modals = () => {
    return (
        <Layout>
            <div className="modals-contents">
                <h2>Modals</h2>
                <button>Show Modal</button>
                <div className="modal-box">
                    <section className="modal">
                        <div className="modal-wrapper">
                            <div className="modal-container">
                                <h3>Modal Header</h3>
                                <p>Modal Body</p>
                                <button>OK</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
};

export default Modals;