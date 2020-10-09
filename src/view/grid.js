import React from 'react';

import Layout from '../components/layout';

const Grid = () => {
    return (
        <Layout>
            <div className="grid-contents">
                <h2>Grid</h2>
                <div className="search-box">
                    <input type="text" id="search" maxLength="10" placeholder="Please enter keywords" />
                </div>
                <div className="grid-box">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    name<span>-</span>
                                </th>
                                <th>
                                    age<span>-</span>
                                </th>
                                <th>
                                    weight<span>-</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    3
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
};

export default Grid;