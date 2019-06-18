import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Table(props) {
    return (
        <div className="TableComponent flex column">
            <div className="header fs-30 bold">Simulação</div>
            <div className="table flex">
                {Object.keys(props.header).map((value, index) => (
                    <div className="flex column table-column">
                        <div key={value} className="header-item fs-18 bold">{props.header[value]}</div>
                        {props.data.map((vv, ii) => (
                            <div className="body-item fs-16" key={value + vv + ii}>{vv[value]}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

Table.propTypes = {
    header: PropTypes.object.isRequired,
};

export default Table;