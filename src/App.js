import React, {useState, useEffect} from 'react';
import './App.scss';
import Form from './components/Form';
import Table from './components/Table';
import Report from './components/Report';
import {calculaDesconto, totalParcelaComDesconto} from './utils/discount';

const initialState = {
    total_value: 0,
    total_plots: 0,
    discount_per_year: 0,
    plots_with_discount: 0,
};

function App() {
    const [values, setValues] = useState(initialState);
    const [tableState, setTableState] = useState({visibility: false, data: []});
    const [reportState, setReportState] = useState({});

    function handleValueChange(action) {
        setValues({...values, [action.type]: action.value});
    }

    useEffect(() => {
        const fullValues = Object.keys(values).every((value, index) => Number(values[value]) > 0);

        if (fullValues) {
            const plot_value = totalParcelaComDesconto(values.total_value, values.total_plots, values.discount_per_year);

            const {parcelas, ...data_calculate} = calculaDesconto(values.total_value, values.total_plots, values.plots_with_discount, values.discount_per_year);

            const data = parcelas.map((value, index) => ({
                plot: index + 1,
                value: value.toFixed(2),
                diff: value - plot_value
            }));

            setReportState({
                total_diff: parseFloat(data_calculate.diferenca).toFixed(2),
                value_after: parseFloat(data_calculate.valor_anterior).toFixed(2),
                value_before: parseFloat(data_calculate.novo_valor).toFixed(2),
                total_after: parseFloat(values.total_value).toFixed(2),
                total_before: parseFloat(data_calculate.diferenca_do_total).toFixed(2),
            });

            setTableState({data, visibility: true});
        } else {
            setTableState({data: [], visibility: false});
        }
    }, [values]);

    const handleInputChange = (e) => handleValueChange({type: e.target.id, value: e.target.value});

    return (
        <div className="App">
            <h1 className="fs-24 title">Nu discount-simulation</h1>
            <Form handleInputChange={handleInputChange}/>
            {tableState.visibility &&
            <div className="flex results">
                <Table header={{plot: 'Parcela', value: 'Valor', diff: 'Diferença'}} data={tableState.data}/>
                <Report {...reportState}/>
            </div>
            }
        </div>
    );
}

export default App;
