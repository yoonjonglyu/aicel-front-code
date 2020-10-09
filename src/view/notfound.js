import React from 'react';

import Layout from '../components/layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="notfound-contents">
                <h2>NotFound.</h2>
                <hr />
                <p>
                    해당 페이지가 없습니다.<br />
                </p>
            </div>
        </Layout>
    )
};

export default NotFound;