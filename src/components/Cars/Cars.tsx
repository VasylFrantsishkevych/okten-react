import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "../Car/Car";
import {getAllCars} from "../../store";

import './CarsStyle.css';

const Cars: FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div className={'cars__wrap'}>
            <div className={'cars'}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        </div>
    );
};

export {Cars};