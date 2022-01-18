import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(value => setCars([...value]))
    },[]);
    return (
        <>
            {
                cars.map(value => <Car key={value.id} car={value}/>)
            }
        </>
    );
};

export default Cars;