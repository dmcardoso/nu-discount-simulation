import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

function Report({total_diff, value_after, value_before, total_after, total_before}) {
    return (
        <div className="ReportComponent">
            <div className="title fs-30 bold">Relatório</div>
            <div className="report flex column">
                <div className="item fs-20 flex bold">Valor total: {total_after}</div>
                <div className="item fs-20 flex bold">Novo valor total: {total_before}</div>
                <div className="item fs-20 flex bold">Valor anterior: {value_after}</div>
                <div className="item fs-20 flex bold">Valor com desconto: {value_before}</div>
                <div className="item fs-20 flex bold">Diferença total: {total_diff}</div>
            </div>
        </div>
    );
}

Report.propTypes = {
    total_diff: PropTypes.string.isRequired,
    value_after: PropTypes.string.isRequired,
    value_before: PropTypes.string.isRequired,
    total_after: PropTypes.string.isRequired,
    total_before: PropTypes.string.isRequired
};


export default Report;