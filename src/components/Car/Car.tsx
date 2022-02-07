import React, {FC, MouseEventHandler} from "react";

import {ICar} from "../../interfaces";
import './CarStyle.css';
import {useAppDispatch} from "../../hooks";
import {deleteCarApp} from "../../store";


const Car:FC<{car: ICar}> = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useAppDispatch();

    return (
        <div className={'car'}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div className={'buttons'}>
                <button>Delete</button>
                <button>Update</button>
            </div>
        </div>
    );
};

export {Car};