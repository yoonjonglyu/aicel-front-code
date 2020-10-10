import React from 'react';

import Layout from '../components/layout';
import '../assets/css/grid.css';

const Grid = (props) => {
    const {
        dataTable,
        keyword,
        handleKeyword,
        tableSort,
        handleSort
    } = props;

    const gridData = dataTable.map((obj, index) => {
    return (<tr key={index}>
        <td className={tableSort[0].isAvail}>
            {obj.name}
        </td>
        <td className={tableSort[1].isAvail}>
            {obj.age}
        </td>
        <td className={tableSort[2].isAvail}>
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
                                <th className={tableSort[0].isAvail}>
                                    name<span className={tableSort[0].sort} onClick={() => {handleSort(0)}}></span>
                                </th>
                                <th className={tableSort[1].isAvail}>
                                    age<span className={tableSort[1].sort} onClick={() => {handleSort(1)}}></span>
                                </th>
                                <th className={tableSort[2].isAvail}>
                                    weight<span className={tableSort[2].sort} onClick={() => {handleSort(2)}}></span>
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