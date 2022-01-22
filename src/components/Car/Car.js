import React from 'react';

import './CarStyle.css'
import {carService} from "../../services/car.service";

const Car = ({car, setTrigger, setUpdateForCar}) => {
    const {id, model, price, year} = car;

    const deleteCar = (id) => {
        carService.deleteById(id).then(value => setTrigger({}))
    }

    return (
        <div className={'car__card'}>
            <h4>id: {id}</h4>
            <h4>model: {model}</h4>
            <h4>price: {price}</h4>
            <h4>year: {year}</h4>
            <div>
                <button onClick={() => deleteCar(id)}>Delete</button>
                <button onClick={() => setUpdateForCar(car)}>Update</button>
            </div>
        </div>
    );
};

export default Car;