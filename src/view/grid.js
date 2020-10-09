import React from 'react';

import Layout from '../components/layout';

const Grid = (props) => {
    const {
        dataTable,
        keyword,
        handleKeyword
    } = props;
    
    const gridData = dataTable.map((obj, index) => {
    return (<tr key={index}>
        <td>
            {obj.name}
        </td>
        <td>
            {obj.age}
        </td>
        <td>
            {obj.weight}
        </td>
    </tr>)
    });

    return (
        <Layout>
            <div className="grid-contents">
                <h2>Grid</h2>
                <div className="search-box">
                    <input type="text" id="search" maxLength="10" placeholder="Please enter keywords"  value={keyword} onChange={handleKeyword} />
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
                            {gridData}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
};

export default Grid;