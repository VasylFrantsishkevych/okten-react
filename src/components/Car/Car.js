import {useDispatch} from "react-redux";

import {deleteOneCar, updateToCar} from "../../store/carSlice/car.slice";
import './CarStyle.css';

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div className={'car'}>
            <div>
                <div>Id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            {/*передаємо id як обєкт в метод deleteCar*/}
            <div className={'button'}>
                <button onClick={() => dispatch(deleteOneCar({id}))}>Delete</button>
                <button onClick={() => dispatch(updateToCar({car}))}>Update</button>
            </div>
        </div>
    );
};

export {Car};