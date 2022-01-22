import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({trigger, setTrigger, setUpdateForCar}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(value => {
                setCars(value)
            })
    },[trigger]);


    
    return (
        <>
            {
                cars.map(value => <Car key={value.id} car={value} setTrigger={setTrigger} setUpdateForCar={setUpdateForCar}/>)
            }
        </>
    );
};

export default Cars;