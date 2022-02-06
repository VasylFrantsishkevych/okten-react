import {FC} from "react";

import {ICar} from "../../interfaces";


const Car:FC<{car: ICar}> = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};