import React from 'react';

import './CarStyle.css'

const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div className={'car__card'}>
            <h4>id: {id}</h4>
            <h4>model: {model}</h4>
            <h4>price: {price}</h4>
            <h4>year: {year}</h4>
        </div>
    );
};

export default Car;