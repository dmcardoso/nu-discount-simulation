import React from 'react';
import Input from '../Input';
import './index.scss';

function Index({handleInputChange}) {
    return (
        <div className="Form flex wrap space-between">
            <Input type="number" label="Valor total" id="total_value"
                   onChange={(e) => handleInputChange && handleInputChange(e)}/>
            <Input type="number" label="Total de parcelas" id="total_plots"
                   onChange={(e) => handleInputChange && handleInputChange(e)}/>
            <Input type="number" label="Desconto ao ano" id="discount_per_year"
                   onChange={(e) => handleInputChange && handleInputChange(e)}/>
            <Input type="number" label="Parcelas com desconto" id="plots_with_discount"
                   onChange={(e) => handleInputChange && handleInputChange(e)}/>
        </div>
    );
}

export default Index;