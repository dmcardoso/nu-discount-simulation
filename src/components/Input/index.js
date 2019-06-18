import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Input = (props) => {

    const placeholder = props.placeholder || props.label;

    return (
        <div className="InputComponent flex column">
            <label htmlFor={props.id} className="fs-18">{props.label}</label>
            <input type="number" placeholder={placeholder} className="input fs-20 bold" {...props}/>
        </div>
    );
};


Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};


export default Input;
